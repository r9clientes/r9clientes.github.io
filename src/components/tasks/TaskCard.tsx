import { Task } from '../../lib/api'
import { formatDate } from '../../lib/utils'
import { CalendarDays, Check, Pencil, Trash2 } from 'lucide-react'

interface TaskCardProps {
  task: Task
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
  onStatusChange: (id: string, status: Task['status']) => void
}

const priorityConfig = {
  low: { label: 'Baixa', styles: 'bg-parchment text-smoke' },
  medium: { label: 'Média', styles: 'bg-gold/15 text-gold' },
  high: { label: 'Alta', styles: 'bg-ember/10 text-emberdeep' },
} as const

const statusLabel = {
  pending: 'Pendente',
  in_progress: 'Em progresso',
  completed: 'Concluída',
} as const

export function TaskCard({ task, onEdit, onDelete, onStatusChange }: TaskCardProps) {
  const completed = task.status === 'completed'
  const priority = priorityConfig[task.priority]

  const toggleStatus = () => {
    if (task.status === 'pending') onStatusChange(task.id, 'in_progress')
    else if (task.status === 'in_progress') onStatusChange(task.id, 'completed')
    else onStatusChange(task.id, 'pending')
  }

  return (
    <article className="group flex flex-col rounded-xl border-2 border-ink bg-card p-5 shadow-hard-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hard">
      <div className="flex items-start gap-3">
        <button
          onClick={toggleStatus}
          title={completed ? 'Reabrir tarefa' : task.status === 'pending' ? 'Iniciar tarefa' : 'Concluir tarefa'}
          aria-label={completed ? `Reabrir ${task.title}` : `Avançar ${task.title}`}
          aria-pressed={completed}
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
            completed ? 'border-ink bg-moss text-white' : 'border-ink/30 hover:border-ink'
          }`}
        >
          {completed && <Check className="h-4 w-4" strokeWidth={3.5} />}
        </button>

        <div className="min-w-0 flex-1">
          <h3 className={`font-display text-lg font-semibold leading-snug tracking-tight ${completed ? 'text-smoke line-through' : ''}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="line-clamp-3 mt-1.5 text-sm leading-relaxed text-smoke">{task.description}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-paper">
          {statusLabel[task.status]}
        </span>
        <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest ${priority.styles}`}>
          {priority.label}
        </span>
        {task.due_date && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-smoke">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(task.due_date)}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3">
        <button
          onClick={toggleStatus}
          className="font-mono text-[11px] font-semibold uppercase tracking-widest text-ember underline-offset-4 hover:underline"
        >
          {task.status === 'pending' ? 'Iniciar →' : task.status === 'in_progress' ? 'Concluir →' : '← Reabrir'}
        </button>
        <div className="flex gap-1">
          <button
            onClick={() => onEdit(task)}
            title={`Editar ${task.title}`}
            aria-label={`Editar ${task.title}`}
            className="flex h-8 w-8 items-center justify-center rounded-md text-smoke transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            title={`Excluir ${task.title}`}
            aria-label={`Excluir ${task.title}`}
            className="flex h-8 w-8 items-center justify-center rounded-md text-smoke transition-colors hover:bg-brick/10 hover:text-brick"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}
