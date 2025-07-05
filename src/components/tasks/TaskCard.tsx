import React from 'react'
import { Task } from '../../lib/supabase'
import { formatDate } from '../../lib/utils'
import { Button } from '../ui/Button'
import { CheckCircle, Clock, AlertCircle, Trash2, Edit, Calendar } from 'lucide-react'

interface TaskCardProps {
  task: Task
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
  onStatusChange: (id: string, status: Task['status']) => void
}

export function TaskCard({ task, onEdit, onDelete, onStatusChange }: TaskCardProps) {
  const priorityConfig = {
    low: { 
      color: 'from-green-500/20 to-emerald-500/20', 
      border: 'border-green-500/30',
      text: 'text-green-400',
      label: 'Baixa'
    },
    medium: { 
      color: 'from-yellow-500/20 to-orange-500/20', 
      border: 'border-yellow-500/30',
      text: 'text-yellow-400',
      label: 'Média'
    },
    high: { 
      color: 'from-red-500/20 to-pink-500/20', 
      border: 'border-red-500/30',
      text: 'text-red-400',
      label: 'Alta'
    },
  }

  const statusConfig = {
    pending: { 
      icon: <Clock className="h-4 w-4" />, 
      color: 'text-gray-400',
      bgColor: 'bg-gray-700/50'
    },
    in_progress: { 
      icon: <AlertCircle className="h-4 w-4" />, 
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    completed: { 
      icon: <CheckCircle className="h-4 w-4" />, 
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
  }

  const priority = priorityConfig[task.priority]
  const status = statusConfig[task.status]

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/70 hover:border-gray-600 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-white text-lg leading-tight flex-1 pr-3">
          {task.title}
        </h3>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-lg ${status.bgColor}`}>
            <span className={status.color}>{status.icon}</span>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${priority.color} ${priority.border} border ${priority.text}`}>
            {priority.label}
          </div>
        </div>
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
          {task.description}
        </p>
      )}

      {/* Due Date */}
      {task.due_date && (
        <div className="flex items-center space-x-2 mb-4 text-gray-500 text-sm">
          <Calendar className="h-4 w-4" />
          <span>Vencimento: {formatDate(task.due_date)}</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <div className="flex space-x-2">
          {task.status !== 'completed' && (
            <Button
              size="sm"
              onClick={() => onStatusChange(task.id, task.status === 'pending' ? 'in_progress' : 'completed')}
              className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-600 hover:to-purple-600 text-white px-3 py-1 text-xs rounded-lg transition-all duration-300"
            >
              {task.status === 'pending' ? 'Iniciar' : 'Concluir'}
            </Button>
          )}
          {task.status === 'completed' && (
            <Button
              size="sm"
              onClick={() => onStatusChange(task.id, 'pending')}
              className="bg-gradient-to-r from-gray-600/80 to-gray-700/80 hover:from-gray-600 hover:to-gray-700 text-white px-3 py-1 text-xs rounded-lg transition-all duration-300"
            >
              Reabrir
            </Button>
          )}
        </div>

        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onEdit(task)}
            className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-300"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onDelete(task.id)}
            className="text-gray-400 hover:text-red-400 hover:bg-red-900/20 p-2 rounded-lg transition-all duration-300"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}