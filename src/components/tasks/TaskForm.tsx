import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { taskSchema, TaskFormData } from '../../lib/validations'
import { Task } from '../../lib/api'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { X } from 'lucide-react'

interface TaskFormProps {
  task?: Task
  onSubmit: (data: TaskFormData) => Promise<void>
  onCancel: () => void
  loading?: boolean
}

export function TaskForm({ task, onSubmit, onCancel, loading }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: task ? {
      title: task.title,
      description: task.description || '',
      status: task.status,
      priority: task.priority,
      due_date: task.due_date || '',
    } : {
      status: 'pending',
      priority: 'medium',
    },
  })

  return (
    <div className="w-full rounded-xl border-2 border-ink bg-card p-7 shadow-hard">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-ember">
            {task ? 'Editando tarefa' : 'Nova tarefa'}
          </p>
          <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight">
            {task ? 'Ajustar tarefa' : 'O que precisa sair do papel?'}
          </h2>
        </div>
        <button
          onClick={onCancel}
          aria-label="Fechar formulário"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-smoke transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Título"
          {...register('title')}
          error={errors.title?.message}
          placeholder="Ex.: Publicar o case do trimestre"
        />

        <div className="space-y-1.5">
          <label className="block font-mono text-xs font-medium uppercase tracking-widest text-smoke">
            Descrição
          </label>
          <textarea
            {...register('description')}
            className="block w-full resize-none rounded-md border-2 border-ink/20 bg-card px-3.5 py-2.5 text-ink placeholder:text-smoke/60 transition-colors focus:border-ember focus:outline-none"
            rows={3}
            placeholder="Contexto, links e critérios de pronto..."
          />
          {errors.description && (
            <p className="text-sm font-medium text-brick">{errors.description.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block font-mono text-xs font-medium uppercase tracking-widest text-smoke">
              Status
            </label>
            <select
              {...register('status')}
              className="block w-full rounded-md border-2 border-ink/20 bg-card px-3.5 py-2.5 text-ink transition-colors focus:border-ember focus:outline-none"
            >
              <option value="pending">Pendente</option>
              <option value="in_progress">Em progresso</option>
              <option value="completed">Concluída</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block font-mono text-xs font-medium uppercase tracking-widest text-smoke">
              Prioridade
            </label>
            <select
              {...register('priority')}
              className="block w-full rounded-md border-2 border-ink/20 bg-card px-3.5 py-2.5 text-ink transition-colors focus:border-ember focus:outline-none"
            >
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
            </select>
          </div>
        </div>

        <Input
          label="Data de vencimento"
          type="date"
          {...register('due_date')}
          error={errors.due_date?.message}
        />

        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={loading} variant="accent" className="flex-1">
            {task ? 'Salvar ajustes' : 'Criar tarefa'}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  )
}
