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
    <div className="w-full">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Bem-vindo de volta</h2>
      <p className="mt-1.5 text-smoke">Entre para ver o quadro da sua operação.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-5">
        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          autoComplete="email"
          placeholder="voce@empresa.com"
        />

        <Input
          label="Senha"
          type="password"
          {...register('password')}
          error={errors.password?.message}
          autoComplete="current-password"
          placeholder="••••••••"
        />

        <Button type="submit" className="w-full" loading={loading}>
          Entrar no painel
        </Button>

        <p className="text-center text-sm text-smoke">
          Ainda não tem conta?{' '}
          <button
            type="button"
            onClick={onToggleMode}
            className="font-semibold text-ember underline-offset-4 hover:underline"
          >
            Cadastre-se
          </button>
        </p>
      </form>
    </div>
  )
}
