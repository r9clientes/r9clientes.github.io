import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, RegisterFormData } from '../../lib/validations'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

interface RegisterFormProps {
  onToggleMode: () => void
}

export function RegisterForm({ onToggleMode }: RegisterFormProps) {
  const { signUp, loading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await signUp(data.email, data.password, data.fullName)
    } catch (error) {
      // Error is handled in the hook
    }
  }

  return (
    <div className="w-full">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Crie sua conta</h2>
      <p className="mt-1.5 text-smoke">Grátis para começar. Sem cartão, sem fidelidade.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-5">
        <Input
          label="Nome completo"
          {...register('fullName')}
          error={errors.fullName?.message}
          autoComplete="name"
          placeholder="Como podemos te chamar?"
        />

        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          autoComplete="email"
          placeholder="voce@empresa.com"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Senha"
            type="password"
            {...register('password')}
            error={errors.password?.message}
            autoComplete="new-password"
            placeholder="••••••••"
          />

          <Input
            label="Confirmar senha"
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
            autoComplete="new-password"
            placeholder="••••••••"
          />
        </div>

        <Button type="submit" variant="accent" className="w-full" loading={loading}>
          Criar conta grátis
        </Button>

        <p className="text-center text-sm text-smoke">
          Já tem uma conta?{' '}
          <button
            type="button"
            onClick={onToggleMode}
            className="font-semibold text-ember underline-offset-4 hover:underline"
          >
            Entre
          </button>
        </p>
      </form>
    </div>
  )
}
