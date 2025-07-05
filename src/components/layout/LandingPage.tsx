import React from 'react'
import { Button } from '../ui/Button'

interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-5 h-5 bg-blue-500/10 rounded-lg animate-float-1" style={{ left: '10%', top: '20%' }}></div>
        <div className="absolute w-4 h-4 bg-purple-500/10 rounded-lg animate-float-2" style={{ left: '30%', top: '50%' }}></div>
        <div className="absolute w-6 h-6 bg-cyan-500/10 rounded-lg animate-float-3" style={{ left: '70%', top: '30%' }}></div>
        <div className="absolute w-5 h-5 bg-blue-500/10 rounded-lg animate-float-4" style={{ left: '85%', top: '60%' }}></div>
        <div className="absolute w-5 h-5 bg-purple-500/10 rounded-lg animate-float-5" style={{ left: '50%', top: '80%' }}></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-transparent top-0 right-0 transform translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/10 to-transparent bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 animate-pulse-slow-reverse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                R9 Clientes
              </h1>
              <div className="w-2 h-2 bg-cyan-400 rounded-full ml-2"></div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-white transition-colors relative group">
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#planos" className="text-gray-300 hover:text-white transition-colors relative group">
                Planos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#sobre" className="text-gray-300 hover:text-white transition-colors relative group">
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            </div>

            <Button 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Começar Agora
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20" id="inicio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme seu negócio com{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                marketing digital
              </span>{' '}
              do futuro
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Estratégias inovadoras e tecnologia de ponta para impulsionar sua 
              presença online e multiplicar seus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Começar Gratuitamente
              </Button>
              <Button 
                variant="ghost"
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="relative z-10 py-20" id="planos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Nossos <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Planos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plano Basic */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/70 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-400">R$ 199</span>
                  <p className="text-gray-400 mt-2">Duração: 15 dias</p>
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Análise de perfil e concorrência
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Estratégia personalizada
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Otimização de presença online
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Suporte por e-mail
                  </li>
                </ul>
                <Button 
                  onClick={onGetStarted}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Escolher Plano
                </Button>
              </div>
            </div>

            {/* Plano Pro */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/70 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-400">R$ 299</span>
                  <p className="text-gray-400 mt-2">Duração: 30 dias</p>
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Todos os recursos do Basic
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Análise de mercado avançada
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Estratégia de conteúdo
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Otimização de SEO
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Suporte prioritário
                  </li>
                </ul>
                <Button 
                  onClick={onGetStarted}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Escolher Plano
                </Button>
              </div>
            </div>

            {/* Plano Master */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/70 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Master</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">R$ 667</span>
                  <p className="text-gray-400 mt-2">Duração: Bimestral</p>
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Todos os recursos do Pro
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Estratégia completa omnichannel
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Automação de marketing
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Relatórios detalhados
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Consultoria exclusiva
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Suporte 24/7
                  </li>
                </ul>
                <Button 
                  onClick={onGetStarted}
                  className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Escolher Plano
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20" id="recursos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Recursos <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Avançados</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/70">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Gestão Inteligente</h3>
              <p className="text-gray-400 leading-relaxed">
                Organize suas tarefas com sistema de prioridades, status avançados e filtros inteligentes.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/70">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Segurança Máxima</h3>
              <p className="text-gray-400 leading-relaxed">
                Autenticação segura, criptografia de dados e proteção total da sua privacidade.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-800/70">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <p className="text-gray-400 leading-relaxed">
                Interface ultra-rápida, sincronização em tempo real e experiência fluida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  R9 Clientes
                </h3>
                <div className="w-2 h-2 bg-cyan-400 rounded-full ml-2"></div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transformando a gestão de tarefas com tecnologia de ponta e design futurista.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <a href="#inicio" className="block text-gray-400 hover:text-white transition-colors">Início</a>
                <a href="#planos" className="block text-gray-400 hover:text-white transition-colors">Planos</a>
                <a href="#sobre" className="block text-gray-400 hover:text-white transition-colors">Sobre</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Gestão de Tarefas</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Relatórios</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Segurança</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <a href="mailto:contato@r9clientes.com" className="block text-gray-400 hover:text-white transition-colors">
                  contato@r9clientes.com
                </a>
                <a href="tel:+551199999999" className="block text-gray-400 hover:text-white transition-colors">
                  +55 (11) 9999-9999
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © 2025 R9 Clientes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}