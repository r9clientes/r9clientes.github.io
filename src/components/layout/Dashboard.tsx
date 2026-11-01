import { useState } from 'react'
import { ClipboardList, Plus } from 'lucide-react'
import { useTasks } from '../../hooks/useTasks'
import { Task } from '../../lib/api'
import { TaskFormData } from '../../lib/validations'
import { useAuth } from '../../hooks/useAuth'
import { Header } from './Header'
import { TaskCard } from '../tasks/TaskCard'
import { TaskForm } from '../tasks/TaskForm'
import { Button } from '../ui/Button'

type Filter = 'all' | 'pending' | 'in_progress' | 'completed'

const filterLabels: Record<Filter, string> = {
  all: 'Todas',
  pending: 'Pendentes',
  in_progress: 'Em progresso',
  completed: 'Concluídas',
}

function SkeletonGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="Carregando tarefas">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="animate-pulse rounded-xl border-2 border-ink/10 bg-card p-5">
          <div className="flex gap-3">
            <div className="h-6 w-6 rounded-md bg-parchment" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-3/4 rounded bg-parchment" />
              <div className="h-4 w-full rounded bg-parchment" />
              <div className="h-4 w-2/3 rounded bg-parchment" />
            </div>
          </div>
          <div className="mt-4 flex gap-2 border-t border-ink/10 pt-3">
            <div className="h-6 w-20 rounded-full bg-parchment" />
            <div className="h-6 w-16 rounded-full bg-parchment" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function Dashboard() {
  const { user } = useAuth()
  const { tasks, loading, createTask, updateTask, deleteTask } = useTasks()
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [filter, setFilter] = useState<Filter>('all')

  const counts: Record<Filter, number> = {
    all: tasks.length,
    pending: tasks.filter((t) => t.status === 'pending').length,
    in_progress: tasks.filter((t) => t.status === 'in_progress').length,
    completed: tasks.filter((t) => t.status === 'completed').length,
  }

  const filteredTasks = filter === 'all' ? tasks : tasks.filter((t) => t.status === filter)
  const firstName = (user?.fullName || user?.email || '').split(' ')[0]
  const donePct = tasks.length === 0 ? 0 : Math.round((counts.completed / tasks.length) * 100)

  const handleSubmit = async (data: TaskFormData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, data)
      } else {
        await createTask(data)
      }
      setShowForm(false)
      setEditingTask(null)
    } catch (error) {
      // Error is handled in the hook
    }
  }

  const handleEdit = (task: Task) => {
    setEditingTask(task)
    setShowForm(true)
  }

  const handleStatusChange = async (id: string, status: Task['status']) => {
    await updateTask(id, { status })
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingTask(null)
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header onCreateTask={() => setShowForm(true)} />

      <main className="mx-auto max-w-6xl px-5 py-10">
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
            <div className="w-full max-w-lg">
              <TaskForm
                task={editingTask || undefined}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            </div>
          </div>
        )}

        {/* Greeting + progress */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
              {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Bom trabalho, {firstName}.
            </h1>
            <p className="mt-2 text-smoke">
              {counts.pending === 0 && counts.in_progress === 0
                ? 'Quadro limpo. Aproveite para planejar a próxima semana.'
                : `${counts.pending + counts.in_progress} na mesa · ${counts.completed} concluída${counts.completed === 1 ? '' : 's'}`}
            </p>
          </div>
          {tasks.length > 0 && (
            <div className="w-56">
              <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-widest text-smoke">
                <span>Andamento</span>
                <span className="font-semibold text-ink">{donePct}%</span>
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full border border-ink/20 bg-card">
                <div className="h-full rounded-full bg-moss transition-all duration-500" style={{ width: `${donePct}%` }} />
              </div>
            </div>
          )}
        </div>

        {/* Ledger stats */}
        <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl border-2 border-ink bg-card shadow-hard-sm md:grid-cols-4">
          {(Object.keys(filterLabels) as Filter[]).map((key, i) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={`px-5 py-4 text-left transition-colors hover:bg-parchment/60 ${
                i > 0 ? 'border-l-2 border-ink/10' : ''
              } ${i >= 2 ? 'max-md:border-t-2 max-md:border-ink/10' : ''} ${
                i === 2 ? 'max-md:border-l-0' : ''
              } ${filter === key ? 'bg-parchment' : ''}`}
            >
              <dt className="font-mono text-[11px] uppercase tracking-widest text-smoke">{filterLabels[key]}</dt>
              <dd className="mt-1 font-display text-3xl font-semibold">
                {counts[key]}
                {filter === key && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-ember align-middle" />}
              </dd>
            </button>
          ))}
        </dl>

        {/* Tasks */}
        <div className="mt-8">
          {loading ? (
            <SkeletonGrid />
          ) : filteredTasks.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-ink/25 bg-card/60 px-6 py-16 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border-2 border-ink bg-parchment">
                <ClipboardList className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                {filter === 'all' ? 'Quadro vazio, página em branco' : `Nada aqui em “${filterLabels[filter]}”`}
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-smoke">
                {filter === 'all'
                  ? 'Anote a primeira tarefa da operação — leva dez segundos.'
                  : 'Ajuste o filtro acima ou crie uma tarefa nova para esta coluna.'}
              </p>
              <Button onClick={() => setShowForm(true)} variant="accent" className="mt-6">
                <Plus className="mr-1.5 h-4 w-4" strokeWidth={2.5} />
                Criar tarefa
              </Button>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={handleEdit}
                  onDelete={deleteTask}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
