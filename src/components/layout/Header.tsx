import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../ui/Button'
import { LogOut, User, Plus } from 'lucide-react'

interface HeaderProps {
  onCreateTask: () => void
}

export function Header({ onCreateTask }: HeaderProps) {
  const { user, signOut } = useAuth()

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              R9 Agency Dashboard
            </h1>
            <div className="w-2 h-2 bg-cyan-400 rounded-full ml-2"></div>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={onCreateTask} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nova Tarefa
            </Button>

            <div className="flex items-center space-x-3 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm text-gray-300 max-w-32 truncate">{user?.email}</span>
            </div>

            <Button 
              variant="ghost" 
              onClick={signOut}
              className="text-gray-400 hover:text-white hover:bg-gray-800 p-2 rounded-lg transition-all duration-300"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}