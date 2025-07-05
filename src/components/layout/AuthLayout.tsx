import React, { useState } from 'react'
import { LoginForm } from '../auth/LoginForm'
import { RegisterForm } from '../auth/RegisterForm'
import { LandingPage } from './LandingPage'

export function AuthLayout() {
  const [mode, setMode] = useState<'landing' | 'login' | 'register'>('landing')

  if (mode === 'landing') {
    return <LandingPage onGetStarted={() => setMode('login')} />
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-transparent top-0 right-0 transform translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/10 to-transparent bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 animate-pulse-slow-reverse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-4 h-4 bg-blue-500/20 rounded-lg animate-float-1" style={{ left: '10%', top: '20%' }}></div>
        <div className="absolute w-3 h-3 bg-purple-500/20 rounded-lg animate-float-2" style={{ left: '30%', top: '50%' }}></div>
        <div className="absolute w-5 h-5 bg-cyan-500/20 rounded-lg animate-float-3" style={{ left: '70%', top: '30%' }}></div>
        <div className="absolute w-4 h-4 bg-blue-500/20 rounded-lg animate-float-4" style={{ left: '85%', top: '60%' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back to Landing Button */}
        <div className="mb-6">
          <button
            onClick={() => setMode('landing')}
            className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Voltar</span>
          </button>
        </div>

        {mode === 'login' ? (
          <LoginForm onToggleMode={() => setMode('register')} />
        ) : (
          <RegisterForm onToggleMode={() => setMode('login')} />
        )}
      </div>
    </div>
  )
}