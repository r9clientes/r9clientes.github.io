import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Button } from '../ui/Button'

interface LandingPageProps {
  onGetStarted: () => void
}

const tickerItems = [
  'SEO técnico',
  'Conteúdo semanal',
  'Tráfego pago',
  'Social media',
  'Automação',
  'Relatório mensal',
  'Identidade visual',
  'Landing pages',
]

const boardTasks = [
  { label: 'Calendário de conteúdo — semana 32', tag: 'CONTEÚDO', done: true },
  { label: 'Revisar campanha de busca', tag: 'TRÁFEGO', done: true },
  { label: 'Publicar cases do trimestre', tag: 'SOCIAL', done: false },
  { label: 'Auditoria de SEO do site', tag: 'SEO', done: false },
]

const plans = [
  {
    name: 'Essencial',
    price: 'R$ 197',
    period: '/mês',
    desc: 'Para quem está arrumando a casa: presença ajustada e rotina mínima de conteúdo.',
    features: ['Auditoria de presença digital', 'Calendário mensal de conteúdo', 'Relatório simples de resultados', 'Suporte por e-mail'],
    featured: false,
  },
  {
    name: 'Operação',
    price: 'R$ 389',
    period: '/mês',
    desc: 'A rotina completa: conteúdo, tráfego e social rodando toda semana.',
    features: ['Tudo do Essencial', 'Gestão de tráfego pago', 'Social media semanal', 'Reunião mensal de ajuste', 'Suporte prioritário'],
    featured: true,
  },
  {
    name: 'Escala',
    price: 'R$ 742',
    period: '/mês',
    desc: 'Para operar em vários canais com automação e leitura fina dos números.',
    features: ['Tudo da Operação', 'Automação de marketing', 'Testes A/B contínuos', 'Painel de resultados dedicado'],
    featured: false,
  },
]

const features = [
  {
    n: '01',
    title: 'Rotina, não campanha avulsa',
    desc: 'Conteúdo, tráfego e social funcionam em cadência semanal, com responsáveis e prazos visíveis no painel.',
  },
  {
    n: '02',
    title: 'Números que se lê em 2 minutos',
    desc: 'Alcance, cliques e pedidos de orçamento resumidos numa página só — sem planilha anexada no e-mail.',
  },
  {
    n: '03',
    title: 'Ajuste mensal com gente de verdade',
    desc: 'Todo mês uma conversa de 40 minutos para decidir o que mantém, o que pausa e o que testa.',
  },
]

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Top bar */}
      <header className="border-b-2 border-ink">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink font-display text-sm font-bold text-paper">
              R9
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">R9 Clientes</span>
          </div>
          <nav className="hidden items-center gap-7 font-mono text-xs uppercase tracking-widest text-smoke md:flex">
            <a href="#planos" className="transition-colors hover:text-ink">Planos</a>
            <a href="#metodo" className="transition-colors hover:text-ink">Método</a>
            <a href="#contato" className="transition-colors hover:text-ink">Contato</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={onGetStarted} className="hidden font-mono text-xs uppercase tracking-widest text-smoke transition-colors hover:text-ink sm:block">
              Entrar
            </button>
            <Button onClick={onGetStarted} size="sm">
              Começar <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero — split editorial */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 md:grid-cols-12 md:pt-20">
          <div className="md:col-span-7">
            <p className="rise rise-1 font-mono text-xs uppercase tracking-[0.2em] text-ember">
              Agência R9 — marketing digital
            </p>
            <h1 className="rise rise-2 mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Marketing que vira rotina de crescimento.
            </h1>
            <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-smoke">
              Cuidamos do conteúdo, do tráfego e das redes da sua empresa toda semana —
              e você acompanha cada tarefa num painel simples, sem relatório confuso.
            </p>
            <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-4">
              <Button onClick={onGetStarted} size="lg" variant="accent">
                Ver meu painel <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="#planos" className="group inline-flex items-center gap-1 font-semibold text-ink">
                Conhecer os planos
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <dl className="rise rise-5 mt-10 grid max-w-lg grid-cols-3 gap-6 border-t-2 border-ink/15 pt-6">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-smoke">Contas ativas</dt>
                <dd className="mt-1 font-display text-3xl font-semibold">128</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-smoke">CTR médio</dt>
                <dd className="mt-1 font-display text-3xl font-semibold">3,8%</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-smoke">Retenção / ano</dt>
                <dd className="mt-1 font-display text-3xl font-semibold">91%</dd>
              </div>
            </dl>
          </div>

          {/* Live board mock */}
          <div className="md:col-span-5">
            <div className="rise rise-3 rotate-1 rounded-xl border-2 border-ink bg-card p-5 shadow-hard transition-transform duration-300 hover:rotate-0">
              <div className="flex items-center justify-between border-b-2 border-ink/10 pb-3">
                <p className="font-mono text-xs uppercase tracking-widest text-smoke">Quadro da semana</p>
                <span className="rounded-full bg-moss/15 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-moss">
                  2 de 4 prontas
                </span>
              </div>
              <ul className="mt-2 divide-y divide-ink/10">
                {boardTasks.map((t) => (
                  <li key={t.label} className="flex items-center gap-3 py-3">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 ${
                        t.done ? 'border-ink bg-ink text-paper' : 'border-ink/30'
                      }`}
                    >
                      {t.done && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                    </span>
                    <span className={`flex-1 text-sm font-medium ${t.done ? 'text-smoke line-through' : ''}`}>
                      {t.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-smoke">{t.tag}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t-2 border-ink/10 pt-3">
                <div className="h-2 overflow-hidden rounded-full bg-parchment">
                  <div className="h-full w-1/2 rounded-full bg-ember" />
                </div>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-smoke">
                  Progresso da operação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-b-2 border-ink bg-ink py-3 text-paper" aria-hidden="true">
        <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em]">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              {item} <span className="text-ember">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* Plans — ledger rows */}
      <section id="planos" className="mx-auto max-w-6xl scroll-mt-10 px-5 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">Planos mensais</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Preço de cardápio, entrega de rotina.
          </h2>
          <p className="mt-4 text-lg text-smoke">
            Sem fidelidade escondida: você sabe o que entra em cada plano e acompanha tudo no painel.
          </p>
        </div>

        <div className="mt-12 border-t-2 border-ink">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`grid gap-6 border-b-2 border-ink/15 py-8 md:grid-cols-12 md:items-center ${
                plan.featured ? 'bg-ink text-paper' : ''
              } ${plan.featured ? '-mx-5 px-5' : ''}`}
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                  {plan.featured && (
                    <span className="rounded-full bg-ember px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white">
                      Mais contratado
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-sm leading-relaxed ${plan.featured ? 'text-paper/70' : 'text-smoke'}`}>
                  {plan.desc}
                </p>
              </div>
              <ul className="space-y-2 md:col-span-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-ember' : 'text-moss'}`} strokeWidth={3} />
                    <span className={plan.featured ? 'text-paper/85' : ''}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="md:col-span-3 md:text-right">
                <p className="font-display text-4xl font-semibold">
                  {plan.price}
                  <span className={`font-sans text-sm font-normal ${plan.featured ? 'text-paper/60' : 'text-smoke'}`}>
                    {plan.period}
                  </span>
                </p>
                <Button
                  onClick={onGetStarted}
                  variant={plan.featured ? 'accent' : 'outline'}
                  className={`mt-4 ${plan.featured ? '' : '!shadow-none'}`}
                >
                  Assinar {plan.name}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Method — numbered rows */}
      <section id="metodo" className="scroll-mt-10 border-y-2 border-ink bg-parchment/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">O método</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Três hábitos que sustentam o resultado.
            </h2>
          </div>
          <div className="mt-10">
            {features.map((f) => (
              <div
                key={f.n}
                className="group grid gap-2 border-t-2 border-ink/15 py-7 transition-colors last:border-b-2 md:grid-cols-12 md:gap-6"
              >
                <span className="font-mono text-sm font-semibold text-ember md:col-span-1">{f.n}</span>
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:col-span-4">
                  {f.title}
                </h3>
                <p className="leading-relaxed text-smoke md:col-span-7">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-8 rounded-xl border-2 border-ink bg-card p-8 shadow-hard md:grid-cols-12 md:p-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Pronto para tirar o marketing do modo improviso?
            </h2>
            <p className="mt-3 max-w-xl text-lg text-smoke">
              Crie sua conta e veja como fica o painel da sua operação — leva menos de um minuto.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button onClick={onGetStarted} size="lg" variant="accent">
              Criar conta grátis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="scroll-mt-10 bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-paper font-display text-sm font-bold text-ink">
                R9
              </span>
              <span className="font-display text-xl font-semibold">R9 Clientes</span>
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-paper/60">
              Agência de marketing digital em São Paulo. Rotina semanal, números claros, time de verdade.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper/50">Mapa</h4>
            <div className="mt-4 space-y-2.5">
              <a href="#planos" className="block text-paper/80 transition-colors hover:text-paper">Planos</a>
              <a href="#metodo" className="block text-paper/80 transition-colors hover:text-paper">Método</a>
              <button onClick={onGetStarted} className="block text-paper/80 transition-colors hover:text-paper">
                Entrar no painel
              </button>
            </div>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper/50">Contato</h4>
            <div className="mt-4 space-y-2.5">
              <a href="mailto:contato@r9clientes.com" className="block text-paper/80 transition-colors hover:text-paper">
                contato@r9clientes.com
              </a>
              <a href="tel:+551199999999" className="block text-paper/80 transition-colors hover:text-paper">
                +55 (11) 9999-9999
              </a>
              <span className="block text-paper/60">São Paulo, SP</span>
            </div>
          </div>
        </div>
        <div className="border-t border-paper/15">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-5 font-mono text-xs text-paper/40 sm:flex-row">
            <span>© 2026 R9 Clientes. Todos os direitos reservados.</span>
            <span>CNPJ 00.000.000/0001-00</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
