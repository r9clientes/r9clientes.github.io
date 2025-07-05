import React, { useState } from 'react'
import { useTasks } from '../../hooks/useTasks'
import { Task } from '../../lib/supabase'
import { TaskFormData } from '../../lib/validations'
import { Header } from './Header'
import { TaskCard } from '../tasks/TaskCard'
import { TaskForm } from '../tasks/TaskForm'

export function Dashboard() {
  const { tasks, loading, createTask, updateTask, deleteTask } = useTasks()
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [filter, setFilter] = useState<'all' | 'pending' | 'in_progress' | 'completed'>('all')

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    return task.status === filter
  })

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/5 to-transparent top-0 right-0 transform translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/5 to-transparent bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 animate-pulse-slow-reverse"></div>
      </div>

      <Header onCreateTask={() => setShowForm(true)} />

      <main className="relative z-10 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <TaskForm
              task={editingTask || undefined}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        )}

        {/* Filter Buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {(['all', 'pending', 'in_progress', 'completed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === status
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
                }`}
              >
                {status === 'all' ? 'Todas' : 
                 status === 'pending' ? 'Pendentes' :
                 status === 'in_progress' ? 'Em Progresso' : 'Concluídas'}
              </button>
            ))}
          </div>
        </div>

        {/* Tasks Grid */}
        {filteredTasks.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              {filter === 'all' ? 'Nenhuma tarefa encontrada' : `Nenhuma tarefa ${
                filter === 'pending' ? 'pendente' :
                filter === 'in_progress' ? 'em progresso' : 'concluída'
              }`}
            </h3>
            <p className="text-gray-500">
              {filter === 'all' ? 'Comece criando sua primeira tarefa!' : 'Tente outro filtro ou crie uma nova tarefa.'}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </main>
    </div>
  )
}