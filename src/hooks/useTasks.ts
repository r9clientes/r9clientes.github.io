import { useState, useEffect, useCallback } from 'react'
import { api, Task } from '../lib/api'
import { useAuth } from './useAuth'
import { toast } from 'sonner'

export function useTasks() {
  const { user } = useAuth()
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true)
      const data = await api.listTasks()
      setTasks(data)
    } catch (error: any) {
      toast.error('Erro ao carregar tarefas')
      console.error('Error fetching tasks:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (user) {
      fetchTasks()
    } else {
      setTasks([])
      setLoading(false)
    }
  }, [user, fetchTasks])

  const createTask = async (taskData: { title: string; description?: string; status: Task['status']; priority: Task['priority']; due_date?: string }) => {
    try {
      const data = await api.createTask(taskData)
      setTasks(prev => [data, ...prev])
      toast.success('Tarefa criada com sucesso!')
      return data
    } catch (error: any) {
      toast.error(error.message || 'Erro ao criar tarefa')
      throw error
    }
  }

  const updateTask = async (id: string, updates: Partial<{ title: string; description: string; status: Task['status']; priority: Task['priority']; due_date: string }>) => {
    try {
      const data = await api.updateTask(id, updates)
      setTasks(prev => prev.map(task => task.id === id ? data : task))
      toast.success('Tarefa atualizada com sucesso!')
      return data
    } catch (error: any) {
      toast.error(error.message || 'Erro ao atualizar tarefa')
      throw error
    }
  }

  const deleteTask = async (id: string) => {
    try {
      await api.deleteTask(id)
      setTasks(prev => prev.filter(task => task.id !== id))
      toast.success('Tarefa excluída com sucesso!')
    } catch (error: any) {
      toast.error(error.message || 'Erro ao excluir tarefa')
      throw error
    }
  }

  return {
    tasks,
    loading,
    createTask,
    updateTask,
    deleteTask,
    refetch: fetchTasks,
  }
}
