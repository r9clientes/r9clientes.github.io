import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { taskSchema, TaskFormData } from '../../lib/validations'
import { Task } from '../../lib/supabase'
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
    <div className="bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 w-full max-w-md mx-auto shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {task ? 'Editar Tarefa' : 'Nova Tarefa'}
        </h2>
        <Button
          variant="ghost"
          onClick={onCancel}
          className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-300"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Título"
          {...register('title')}
          error={errors.title?.message}
          className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Descrição
          </label>
          <textarea
            {...register('description')}
            className="block w-full rounded-lg border border-gray-600 bg-gray-700/50 px-3 py-3 text-white placeholder-gray-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 resize-none"
            rows={3}
            placeholder="Descreva sua tarefa..."
          />
          {errors.description && (
            <p className="text-sm text-red-400">{errors.description.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Status
            </label>
            <select
              {...register('status')}
              className="block w-full rounded-lg border border-gray-600 bg-gray-700/50 px-3 py-3 text-white shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
            >
              <option value="pending">Pendente</option>
              <option value="in_progress">Em Progresso</option>
              <option value="completed">Concluída</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Prioridade
            </label>
            <select
              {...register('priority')}
              className="block w-full rounded-lg border border-gray-600 bg-gray-700/50 px-3 py-3 text-white shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
            >
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
            </select>
          </div>
        </div>

        <Input
          label="Data de Vencimento"
          type="date"
          {...register('due_date')}
          error={errors.due_date?.message}
          className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/20"
        />

        <div className="flex space-x-3 pt-4">
          <Button 
            type="submit" 
            loading={loading} 
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {task ? 'Atualizar' : 'Criar'}
          </Button>
          <Button 
            type="button" 
            variant="ghost" 
            onClick={onCancel}
            className="px-6 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  )
}