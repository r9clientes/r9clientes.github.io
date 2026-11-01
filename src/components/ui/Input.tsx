import React from 'react'
import { cn } from '../../lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ className, label, error, id, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block font-mono text-xs font-medium uppercase tracking-widest text-smoke">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'block w-full rounded-md border-2 border-ink/20 bg-card px-3.5 py-2.5 text-ink placeholder:text-smoke/60 shadow-none transition-colors',
          'focus:border-ember focus:outline-none',
          'disabled:cursor-not-allowed disabled:bg-parchment disabled:text-smoke',
          error && 'border-brick focus:border-brick',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm font-medium text-brick">{error}</p>
      )}
    </div>
  )
}
