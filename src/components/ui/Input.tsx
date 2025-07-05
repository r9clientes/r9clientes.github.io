import React from 'react'
import { cn } from '../../lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ className, label, error, id, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'block w-full rounded-lg border border-gray-600 bg-gray-700/50 px-3 py-3 text-white placeholder-gray-400 shadow-sm transition-colors',
          'focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20',
          'disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-500',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  )
}