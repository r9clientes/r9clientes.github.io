import React from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-px'

  const variants = {
    primary: 'bg-ink text-paper shadow-hard-sm hover:-translate-y-0.5 hover:shadow-hard',
    accent: 'bg-ember text-white shadow-hard-sm hover:-translate-y-0.5 hover:shadow-hard hover:bg-emberdeep',
    outline: 'border-2 border-ink/80 text-ink hover:bg-ink hover:text-paper',
    ghost: 'text-smoke hover:text-ink hover:bg-ink/5',
    danger: 'bg-transparent text-brick border border-brick/40 hover:bg-brick hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  )
}
