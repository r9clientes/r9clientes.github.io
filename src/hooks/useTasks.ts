import { useState, useEffect } from 'react'
import { supabase, Task } from '../lib/supabase'
import { useAuth } from './useAuth'
import { toast } from 'sonner'

export function useTasks() {
  const { user } = useAuth()
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchTasks()
    }
  }, [user])

  const fetchTasks = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setTasks(data || [])
    } catch (error: any) {
      toast.error('Erro ao carregar tarefas')
      console.error('Error fetching tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const createTask = async (taskData: Omit<Task, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .insert([
          {
            ...taskData,
            user_id: user?.id,
          },
        ])
        .select()
        .single()

      if (error) throw error
      setTasks(prev => [data, ...prev])
      toast.success('Tarefa criada com sucesso!')
      return data
    } catch (error: any) {
      toast.error('Erro ao criar tarefa')
      throw error
    }
  }

  const updateTask = async (id: string, updates: Partial<Task>) => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .eq('user_id', user?.id)
        .select()
        .single()

      if (error) throw error
      setTasks(prev => prev.map(task => task.id === id ? data : task))
      toast.success('Tarefa atualizada com sucesso!')
      return data
    } catch (error: any) {
      toast.error('Erro ao atualizar tarefa')
      throw error
    }
  }

  const deleteTask = async (id: string) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id)
        .eq('user_id', user?.id)

      if (error) throw error
      setTasks(prev => prev.filter(task => task.id !== id))
      toast.success('Tarefa excluída com sucesso!')
    } catch (error: any) {
      toast.error('Erro ao excluir tarefa')
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