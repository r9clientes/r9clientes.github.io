import React from 'react'
import { Task } from '../../lib/supabase'
import { formatDate } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Card, CardContent } from '../ui/Card'
import { CheckCircle, Clock, AlertCircle, Trash2, Edit } from 'lucide-react'

interface TaskCardProps {
  task: Task
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
  onStatusChange: (id: string, status: Task['status']) => void
}

export function TaskCard({ task, onEdit, onDelete, onStatusChange }: TaskCardProps) {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  }

  const statusIcons = {
    pending: <Clock className="h-4 w-4" />,
    in_progress: <AlertCircle className="h-4 w-4" />,
    completed: <CheckCircle className="h-4 w-4" />,
  }

  const statusColors = {
    pending: 'text-gray-500',
    in_progress: 'text-blue-500',
    completed: 'text-green-500',
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-gray-900 flex-1">{task.title}</h3>
          <div className="flex items-center space-x-2 ml-2">
            <span className={`inline-flex items-center ${statusColors[task.status]}`}>
              {statusIcons[task.status]}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
              {task.priority === 'low' ? 'Baixa' : task.priority === 'medium' ? 'Média' : 'Alta'}
            </span>
          </div>
        </div>

        {task.description && (
          <p className="text-gray-600 text-sm mb-3">{task.description}</p>
        )}

        {task.due_date && (
          <p className="text-gray-500 text-xs mb-3">
            Vencimento: {formatDate(task.due_date)}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {task.status !== 'completed' && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onStatusChange(task.id, task.status === 'pending' ? 'in_progress' : 'completed')}
              >
                {task.status === 'pending' ? 'Iniciar' : 'Concluir'}
              </Button>
            )}
            {task.status === 'completed' && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onStatusChange(task.id, 'pending')}
              >
                Reabrir
              </Button>
            )}
          </div>

          <div className="flex space-x-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onEdit(task)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onDelete(task.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}