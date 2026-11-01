import { Toaster } from 'sonner'
import { AuthProvider, useAuth } from './hooks/useAuth'
import { AuthLayout } from './components/layout/AuthLayout'
import { Dashboard } from './components/layout/Dashboard'

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink font-display text-sm font-bold text-paper animate-pulse">
            R9
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-smoke">Abrindo o painel…</span>
        </div>
      </div>
    )
  }

  return user ? <Dashboard /> : <AuthLayout />
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
      <Toaster position="top-right" />
    </AuthProvider>
  )
}

export default App