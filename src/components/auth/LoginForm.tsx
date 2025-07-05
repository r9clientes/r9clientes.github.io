import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginFormData } from '../../lib/validations'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

interface LoginFormProps {
  onToggleMode: () => void
}

export function LoginForm({ onToggleMode }: LoginFormProps) {
  const { signIn, loading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      await signIn(data.email, data.password)
    } catch (error) {
      // Error is handled in the hook
    }
  }

  return (
    <div className="bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            R9 Agency
          </h1>
          <div className="w-2 h-2 bg-cyan-400 rounded-full ml-2"></div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Bem-vindo de volta</h2>
        <p className="text-gray-400">Entre na sua conta para continuar</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          autoComplete="email"
          className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
          placeholder="seu@email.com"
        />
        
        <Input
          label="Senha"
          type="password"
          {...register('password')}
          error={errors.password?.message}
          autoComplete="current-password"
          className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
          placeholder="••••••••"
        />

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          loading={loading}
        >
          Entrar
        </Button>

        <div className="text-center">
          <button
            type="button"
            onClick={onToggleMode}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Não tem uma conta? <span className="font-semibold">Cadastre-se</span>
          </button>
        </div>
      </form>
    </div>
  )
}