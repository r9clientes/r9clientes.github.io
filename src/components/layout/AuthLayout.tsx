import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { LoginForm } from '../auth/LoginForm'
import { RegisterForm } from '../auth/RegisterForm'
import { LandingPage } from './LandingPage'

export function AuthLayout() {
  const [mode, setMode] = useState<'landing' | 'login' | 'register'>('landing')

  if (mode === 'landing') {
    return <LandingPage onGetStarted={() => setMode('login')} />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12 text-ink sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <button
          onClick={() => setMode('landing')}
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-smoke transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar ao site</span>
        </button>

        <div className="rounded-xl border-2 border-ink bg-card p-8 shadow-hard">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink font-display text-base font-bold text-paper">
              R9
            </span>
            <div>
              <p className="font-display text-lg font-semibold leading-tight">R9 Clientes</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-smoke">
                {mode === 'login' ? 'Acesso ao painel' : 'Nova conta'}
              </p>
            </div>
          </div>

          {mode === 'login' ? (
            <LoginForm onToggleMode={() => setMode('register')} />
          ) : (
            <RegisterForm onToggleMode={() => setMode('login')} />
          )}
        </div>

        <p className="mt-6 text-center font-mono text-xs text-smoke">
          Ambiente protegido — seus dados ficam na sua conta.
        </p>
      </div>
    </div>
  )
}
