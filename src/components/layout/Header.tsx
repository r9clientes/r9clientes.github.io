import { useAuth } from '../../hooks/useAuth'
import { Button } from '../ui/Button'
import { LogOut, Plus } from 'lucide-react'

interface HeaderProps {
  onCreateTask: () => void
}

export function Header({ onCreateTask }: HeaderProps) {
  const { user, signOut } = useAuth()
  const initial = (user?.fullName || user?.email || '?').trim().charAt(0).toUpperCase()

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink font-display text-xs font-bold text-paper">
            R9
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">R9 Clientes</span>
          <span className="hidden rounded-full border border-ink/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-smoke sm:block">
            Painel de tarefas
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <Button onClick={onCreateTask} size="sm">
            <Plus className="mr-1.5 h-4 w-4" strokeWidth={2.5} />
            Nova tarefa
          </Button>

          <div
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-parchment font-display text-sm font-semibold"
            title={user?.email ?? ''}
          >
            {initial}
          </div>

          <button
            onClick={signOut}
            title="Sair"
            aria-label="Sair da conta"
            className="flex h-9 w-9 items-center justify-center rounded-full text-smoke transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
