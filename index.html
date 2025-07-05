import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Users, CheckCircle, Loader, LayoutDashboard, Palette, Megaphone, TrendingUp, UserPlus, UserCheck, UserCog, LogIn, Settings, AlertTriangle, RefreshCw, FilePlus, ChevronDown, Send, Ban, Copy, X, Phone, Hash, MapPin, Sparkles, Target, DollarSign, MousePointerClick, TrendingDown, History, ShieldCheck, User, PlusCircle, BookOpen, Bot, FileText, Briefcase, GripVertical, UploadCloud, Paperclip, Bell, Building, ShoppingCart, Eye, Link, Power, PowerOff } from 'lucide-react';

// --- Theme & Constants ---
const THEME = {
    background: 'bg-[#111111]',
    surface: 'bg-[#1A1A1A]',
    primary: 'text-[#9EF04E]',
    primary_hover: 'hover:text-[#BBF771]',
    button_primary: 'bg-[#9EF04E] text-black',
    button_primary_hover: 'hover:bg-[#BBF771]',
    text_light: 'text-[#F5F5F5]',
    text_dark: 'text-black',
    text_muted: 'text-[#A3A3A3]',
    border: 'border-[#333333]',
};

const API_KEY = 'SUA_API_KEY_AQUI'; 
const CLIENT_ID = 'SEU_CLIENT_ID_OAUTH_AQUI.apps.googleusercontent.com';
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

const ADMIN_CODE = '0420';
const OPERATOR_CODE = '1234';

const STATUS_ARTES = 'Criação das Artes';
const STATUS_ANUNCIOS = 'Criação dos Anúncios';
const STATUS_APRENDIZADO = 'Fase de Aprendizado';
const STATUS_OTIMIZACAO = 'Otimização de Campanha';
const STATUS_AUTOMACAO = 'Automações Disponíveis';
const STATUS_PAGAMENTO_REPROVADO = 'Pagamento Reprovado';

const CLIENT_STATUS_NOVO = 'Novo';
const CLIENT_STATUS_ANTIGO = 'Antigo';
const CLIENT_STATUS_RENOVOU = 'Renovou';

const TASK_STATUS_TODO = 'A Fazer';
const TASK_STATUS_INPROGRESS = 'Em Andamento';
const TASK_STATUS_DONE = 'Concluído';

const TASK_TYPES = { LANDING_PAGE: { label: 'Landing Page', icon: LayoutDashboard }, AUTOMATION: { label: 'Automação', icon: Bot }, READING: { label: 'Leitura', icon: BookOpen }, MEMO: { label: 'Recado', icon: FileText }, ADMIN: { label: 'Administrativo', icon: Briefcase } };

const LOGO_URL = 'https://i.ibb.co/zTwJ9hxx/R9.png';

// --- Mock Data ---
const MOCK_TEAM = [ { id: 'member_1', name: 'Ana Clara', role: 'Designer' }, { id: 'member_2', name: 'Bruno Gomes', role: 'Gestor de Tráfego' }, { id: 'member_3', name: 'Carlos Dias', role: 'Otimização' }, ];
const MOCK_PROJECTS = [ { userId: 'cliente_alpha_789', clientStatus: CLIENT_STATUS_ANTIGO, attendantNumber: '48999887766', status: STATUS_OTIMIZACAO, niches: ['Restaurante Japonês', 'Delivery'], facebookAdAccountId: '987654321098765', cep: '88015-420', metrics: { cpc: '0.75', ctr: '2.5', roas: '4.2' }, history: [ { status: STATUS_ARTES, user: 'admin', timestamp: '2025-06-18T10:05:12Z'}, { status: STATUS_ANUNCIOS, user: 'operator', timestamp: '2025-06-19T11:20:01Z'}, { status: STATUS_APRENDIZADO, user: 'operator', timestamp: '2025-06-20T09:00:30Z'}, { status: STATUS_OTIMIZACAO, user: 'operator', timestamp: '2025-06-20T14:02:00Z'}], assignedTo: 'member_3', files: [{name: 'arte_sushi_feed.jpg', url: '#', type: 'image/jpeg'}, {name: 'video_sushi_reels.mp4', url: '#', type: 'video/mp4'}] }, { userId: 'cliente_beta_456', clientStatus: CLIENT_STATUS_RENOVOU, attendantNumber: '48988776655', status: STATUS_APRENDIZADO, niches: ['Clínica de Estética'], facebookAdAccountId: '112233445566778', cep: '88035-001', metrics: { cpc: '1.20', ctr: '1.1', roas: '2.5' }, history: [ { status: STATUS_ARTES, user: 'admin', timestamp: '2025-06-19T15:00:00Z'}, { status: STATUS_APRENDIZADO, user: 'operator', timestamp: '2025-06-20T13:15:00Z'}], assignedTo: 'member_2', files: [{name: 'estetica_rejuvenescimento.png', url: '#', type: 'image/png'}] }, { userId: 'cliente_gamma_123', clientStatus: CLIENT_STATUS_NOVO, attendantNumber: '21977665544', status: STATUS_ANUNCIOS, niches: ['E-commerce de Roupas'], facebookAdAccountId: '555444333222111', cep: '22071-001', metrics: null, history: [{ status: STATUS_ARTES, user: 'operator', timestamp: '2025-06-20T10:30:00Z'}, { status: STATUS_ANUNCIOS, user: 'operator', timestamp: '2025-06-20T12:00:00Z'}], assignedTo: 'member_2', files: [{name: 'colecao_inverno_2025.pdf', url: '#', type: 'application/pdf'}] }, { userId: 'cliente_delta_012', clientStatus: CLIENT_STATUS_NOVO, attendantNumber: '11966554433', status: STATUS_ARTES, niches: ['Advocacia'], facebookAdAccountId: 'Pendente', cep: '01311-000', metrics: null, history: [{ status: STATUS_ARTES, user: 'admin', timestamp: '2025-06-20T11:00:00Z'}], assignedTo: 'member_1', files: [] }, { userId: 'cliente_omega_999', clientStatus: CLIENT_STATUS_ANTIGO, attendantNumber: '11922334455', status: STATUS_OTIMIZACAO, niches: ['Academia', 'Fitness'], facebookAdAccountId: '102030405060', cep: '01414-000', metrics: { cpc: '2.15', ctr: '0.8', roas: '1.5' }, history: [{ status: STATUS_OTIMIZACAO, user: 'admin', timestamp: '2025-06-17T09:30:00Z'}], assignedTo: 'member_3', files: [] }, { userId: 'cliente_zeta_666', clientStatus: CLIENT_STATUS_ANTIGO, attendantNumber: '11944332211', status: STATUS_PAGAMENTO_REPROVADO, niches: ['Pet Shop'], facebookAdAccountId: '666777888999', cep: '04543-011', metrics: null, history: [{ status: STATUS_OTIMIZACAO, user: 'admin', timestamp: '2025-06-19T18:00:00Z'}, { status: STATUS_PAGAMENTO_REPROVADO, user: 'admin', timestamp: '2025-06-20T13:45:00Z'}], files: []}, ];
const MOCK_TASKS = [ { id: 'task_1', title: 'Criar LP para campanha de Dia das Mães', type: 'LANDING_PAGE', assigneeId: 'member_1', status: TASK_STATUS_INPROGRESS }, { id: 'task_2', title: 'Configurar fluxo de nutrição para leads de estética', type: 'AUTOMATION', assigneeId: 'member_2', status: TASK_STATUS_TODO }, { id: 'task_3', title: 'Ler artigo sobre novas políticas de anúncios do Meta', type: 'READING', assigneeId: 'member_2', status: TASK_STATUS_TODO }, { id: 'task_4', title: 'Finalizar relatório mensal do cliente_alpha_789', type: 'ADMIN', assigneeId: 'member_3', status: TASK_STATUS_DONE }, { id: 'task_5', title: 'Lembrete: Agendar reunião de alinhamento semanal', type: 'MEMO', assigneeId: 'member_1', status: TASK_STATUS_TODO }, ];

const R9_PLANS = [
    {
        planName: 'BÁSICO',
        price: 199,
        originalPrice: 299,
        features: [
            '1 Campanha',
            '3 Dias de teste',
            '12 Dias de Otimizações',
            'Suporte com Horário Marcado'
        ],
        notes: '*Serviços Adicionais (Logos, Banners, Posts, etc) com até 10% de Desconto.',
        highlight: false,
        checkoutUrl: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808484a4b4570184a5f230930129'
    },
    {
        planName: 'PRO',
        price: 399,
        originalPrice: 499,
        features: [
            '3 Campanhas',
            '5 Dias de teste',
            '26 Dias de Otimizações',
            'Suporte em Horário Comercial'
        ],
        notes: '*Serviços Adicionais (Logos, Banners, Posts, etc) com até 25% de Desconto.',
        highlight: true,
        checkoutUrl: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808484a681b90184aadea13f02d3'
    },
    {
        planName: 'MASTER',
        price: 667,
        originalPrice: 867,
        features: [
            '5 Campanhas',
            '7 Dias de teste',
            '54 Dias de Otimizações',
            'Suporte por WhatsApp 24H'
        ],
        notes: '*Serviços Adicionais (Logos, Banners, Posts, etc) com até 40% de Desconto.',
        highlight: false,
        checkoutUrl: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808484a6818e0184aadf839802f9'
    }
];

// --- Main Application Component ---
export default function App() {
    const [view, setView] = useState('client'); // 'client' or 'admin'

    return (
        <div className={`${THEME.background} min-h-screen`}>
            <AppSwitcher currentView={view} setView={setView} />
            {view === 'client' ? <R9PlansApp /> : <AdminPanelEntry />}
        </div>
    );
}

const AppSwitcher = ({ currentView, setView }) => (
    <div className={`sticky top-0 z-50 flex justify-center p-2 bg-[#0a0a0a]`}>
        <div className="flex p-1 space-x-1 bg-black/30 rounded-full border border-slate-700">
            <button onClick={() => setView('client')} className={`px-4 py-2 text-sm font-semibold rounded-full flex items-center gap-2 transition ${currentView === 'client' ? 'bg-[#9EF04E] text-black' : 'text-white'}`}>
                <Eye size={16}/> Visão do Cliente
            </button>
            <button onClick={() => setView('admin')} className={`px-4 py-2 text-sm font-semibold rounded-full flex items-center gap-2 transition ${currentView === 'admin' ? 'bg-[#9EF04E] text-black' : 'text-white'}`}>
                <LayoutDashboard size={16} /> Painel Administrativo
            </button>
        </div>
    </div>
);


// --- Client-Facing Plans App ---
const R9PlansApp = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [lastSubmittedPlan, setLastSubmittedPlan] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    // Script para efeito de iluminação do card
    useEffect(() => {
        const handleMouseMove = (e) => {
          for (const card of document.querySelectorAll(".card-container")) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    const handleFormSubmit = (formData) => {
        const existingRequests = JSON.parse(localStorage.getItem('r9_plan_requests') || '[]');
        const newRequest = {
            id: `req_${Date.now()}`,
            companyName: formData.companyName,
            contactName: formData.contactName,
            phone: formData.phone,
            chosenPlan: selectedPlan,
            timestamp: new Date().toISOString(),
            read: false
        };
        localStorage.setItem('r9_plan_requests', JSON.stringify([...existingRequests, newRequest]));
        
        const planToSubmit = { ...selectedPlan };
        setSelectedPlan(null); // Close modal
        
        if (planToSubmit.checkoutUrl) {
            window.location.href = planToSubmit.checkoutUrl;
        } else {
            setLastSubmittedPlan(planToSubmit);
            setShowSuccess(true);
        }
    };

    if(showSuccess) {
        return (
             <div className="flex flex-col items-center justify-center min-h-[90vh] text-center p-4">
                <CheckCircle className="w-24 h-24 text-green-400 mb-6 animate-fade-in" />
                <h1 className={`text-4xl font-bold ${THEME.text_light} mb-2 animate-fade-in-down`} style={{animationDelay: '100ms'}}>Solicitação Enviada!</h1>
                <p className={`${THEME.text_muted} max-w-md mb-8 animate-fade-in-down`} style={{animationDelay: '200ms'}}>Sua solicitação para o plano <span className="text-[#9EF04E] font-bold">{lastSubmittedPlan?.planName}</span> foi recebida. Nossa equipe entrará em contato em breve.</p>
                <button onClick={() => setShowSuccess(false)} className={`font-bold py-3 px-6 rounded-lg ${THEME.button_primary} ${THEME.button_primary_hover} animate-fade-in-up`} style={{animationDelay: '300ms'}}>
                    Ver Planos
                </button>
            </div>
        )
    }

    return (
        <div className={`p-8 md:p-16 ${THEME.text_light} animated-background overflow-hidden`}>
            <header className="text-center mb-16">
                 <img src={LOGO_URL} alt="Logo R9" className="h-20 mx-auto mb-4 animate-fade-in-down"/>
                <h1 className="text-5xl font-black tracking-tight mb-2 animate-fade-in-down" style={{animationDelay: '150ms'}}>Encontre seu Plano Perfeito</h1>
                <p className={`text-xl ${THEME.text_muted} max-w-2xl mx-auto animate-fade-in-down`} style={{animationDelay: '300ms'}}>Escolha o plano ideal para sua empresa e vamos decolar juntos no mundo digital.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
                {R9_PLANS.map((plan, index) => (
                    <PlanCard key={plan.planName} plan={plan} onSelect={handleSelectPlan} animationDelay={`${400 + index * 150}ms`} />
                ))}
            </div>
            {selectedPlan && <RequestFormModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} onSubmit={handleFormSubmit} />}
        </div>
    );
};

const PlanCard = ({ plan, onSelect, animationDelay }) => (
    <div 
        className={`card-container animate-fade-in-up ${THEME.surface} rounded-2xl p-8 flex flex-col relative overflow-hidden border ${plan.highlight ? 'border-[#9EF04E]' : THEME.border} transition-all duration-300`}
        style={{animationDelay}}
    >
       {plan.highlight && <div className="card-glow" />}
       {plan.highlight && <div className="text-center mb-4"><span className="bg-[#9EF04E] text-black font-bold text-xs py-1 px-3 rounded-full uppercase">Mais Popular</span></div>}
        <h3 className="text-2xl font-bold text-center mb-2">{plan.planName}</h3>
        <div className="text-center mb-6">
            {plan.originalPrice && (
                <span className={`text-xl ${THEME.text_muted} line-through mr-2`}>R${plan.originalPrice}</span>
            )}
            {typeof plan.price === 'number' ? 
                <><span className="text-4xl font-black text-[#9EF04E]">R${plan.price}</span></> :
                <span className="text-3xl font-bold text-[#9EF04E]">{plan.price}</span>
            }
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
            {plan.features.map((feature, index) => (
                 <li key={index} className="flex items-start gap-3">
                    <CheckCircle className={`h-5 w-5 ${THEME.primary} mt-0.5 flex-shrink-0`} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
         <p className={`text-xs ${THEME.text_muted} mb-6`}>
            {plan.notes}
        </p>
        <button onClick={() => onSelect(plan)} className={`w-full mt-auto font-bold py-3 px-4 rounded-lg relative overflow-hidden transition-all duration-300 ${plan.highlight ? THEME.button_primary + ' ' + THEME.button_primary_hover : 'bg-slate-700 hover:bg-slate-600'} button-shine`}>
            {plan.checkoutUrl ? 'Obter' : 'Consultar'}
        </button>
    </div>
);

const RequestFormModal = ({ plan, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({ companyName: '', contactName: '', phone: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className={`${THEME.surface} rounded-2xl w-full max-w-md animate-fade-in border ${THEME.border}`} onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 border-b border-slate-700">
                        <h2 className="text-xl font-bold">Solicitar Plano: <span className={THEME.primary}>{plan.planName}</span></h2>
                        <p className={THEME.text_muted}>Preencha seus dados para continuar.</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <input name="companyName" onChange={handleChange} required placeholder="Nome da Empresa" className={`w-full bg-black/20 border ${THEME.border} p-3 rounded-lg`} />
                        <input name="contactName" onChange={handleChange} required placeholder="Seu Nome" className={`w-full bg-black/20 border ${THEME.border} p-3 rounded-lg`} />
                        <input name="phone" onChange={handleChange} required placeholder="Telefone / WhatsApp" type="tel" className={`w-full bg-black/20 border ${THEME.border} p-3 rounded-lg`} />
                    </div>
                    <div className="p-6 border-t border-slate-700 flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="py-2 px-4 rounded-lg text-sm font-semibold hover:bg-white/10">Cancelar</button>
                        <button type="submit" className={`py-2 px-6 rounded-lg text-sm font-bold ${THEME.button_primary} ${THEME.button_primary_hover}`}>
                           {plan.checkoutUrl ? 'Ir para Pagamento' : 'Enviar Solicitação'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


// --- Admin Panel Application ---
const AdminPanelEntry = () => {
    const isTestMode = API_KEY.startsWith('SUA') || CLIENT_ID.startsWith('SEU');
    if (isTestMode) return <TestModeApp />;
    return <ProductionApp apiKey={API_KEY} clientId={CLIENT_ID} />;
}

const TestModeApp = () => {
    const [userRole, setUserRole] = useState(null);
    const [projects, setProjects] = useState(MOCK_PROJECTS);
    const [team, setTeam] = useState(MOCK_TEAM);
    const [tasks, setTasks] = useState(MOCK_TASKS);

    const addProject = (newProjectData) => {
        const newProject = {
            ...newProjectData,
            clientStatus: CLIENT_STATUS_NOVO,
            status: STATUS_ARTES,
            history: [{ status: STATUS_ARTES, user: 'admin', timestamp: new Date().toISOString() }],
            files: [],
            metrics: null,
            assignedTo: ''
        };
        setProjects(prev => [newProject, ...prev]);
    };


    if (!userRole) return <CodeLoginScreen onLogin={setUserRole} isTestMode={true} />;
    return <Dashboard 
        projects={projects} 
        setProjects={setProjects}
        team={team} 
        setTeam={setTeam} 
        tasks={tasks} 
        setTasks={setTasks} 
        userRole={userRole} 
        isTestMode={true} 
        onLogout={() => setUserRole(null)}
        onAddProject={addProject}
    />;
};

const ProductionApp = () => { return <div>Modo de Produção (requer configuração de chaves)</div>; };

// --- Screens & Components (Admin) ---

const CodeLoginScreen = ({ onLogin, isTestMode }) => { const [code, setCode] = useState(''); const [error, setError] = useState(''); const handleSubmit = (e) => { e.preventDefault(); if (code === ADMIN_CODE) onLogin('admin'); else if (code === OPERATOR_CODE) onLogin('operator'); else { setError('Código inválido.'); setCode(''); } }; return (<div className={`${THEME.background} min-h-screen flex flex-col items-center justify-center p-4 ${THEME.text_light}`}><div className="w-full max-w-sm text-center"><div className="mb-8"><img src={LOGO_URL} alt="Logo R9" className="h-20 mx-auto"/></div>{isTestMode && <div className="bg-yellow-900/50 border border-yellow-700 text-yellow-300 p-3 rounded-lg mb-4 text-sm">MODO DE TESTE ATIVADO</div>}<form onSubmit={handleSubmit} className={`${THEME.surface} p-8 rounded-2xl shadow-2xl`}><h2 className="text-2xl font-bold mb-6">Acessar Painel</h2><input type="password" value={code} onChange={(e) => { setCode(e.target.value); setError(''); }} placeholder="Digite o código de acesso" className={`w-full bg-black/20 border ${THEME.border} rounded-lg p-3 text-center focus:ring-2 focus:ring-[#9EF04E]`}/><button type="submit" className={`w-full ${THEME.button_primary} ${THEME.button_primary_hover} font-bold py-3 px-4 rounded-lg mt-6 flex items-center justify-center space-x-2`}><LogIn className="h-5 w-5" /><span>Entrar</span></button>{error && <p className="text-red-400 mt-4 text-sm">{error}</p>}</form></div></div>); };

const Dashboard = ({ projects: initialProjects, setProjects: setTestProjects, team, setTeam, tasks, setTasks, userRole, isTestMode, onLogout, onAddProject }) => {
    const [view, setView] = useState(userRole === 'admin' ? 'geral' : 'artes');
    const [selectedProject, setSelectedProject] = useState(null);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const checkNotifications = () => {
            const requests = JSON.parse(localStorage.getItem('r9_plan_requests') || '[]');
            setNotifications(requests);
        };

        checkNotifications();
        const interval = setInterval(checkNotifications, 3000); 
        return () => clearInterval(interval);
    }, []);
    
    const handleApproveClient = (clientRequest) => {
        onAddProject({
            userId: clientRequest.companyName,
            attendantNumber: clientRequest.phone,
            niches: [clientRequest.chosenPlan.planName] // Exemplo
        });

        const updatedNotifications = notifications.filter(n => n.id !== clientRequest.id);
        setNotifications(updatedNotifications);
        localStorage.setItem('r9_plan_requests', JSON.stringify(updatedNotifications));
        
        setView('geral');
    };


    const handleProjectUpdate = (updatedProject) => { 
        const originalProject = initialProjects.find(p => p.userId === updatedProject.userId);
        if (!originalProject) return;

        const hasStatusChanged = originalProject.status !== updatedProject.status;
        let newHistory = updatedProject.history || [];

        if (hasStatusChanged) {
             newHistory = [...newHistory, { status: updatedProject.status, user: userRole, timestamp: new Date().toISOString() }];
        }
        
        const projectWithNewHistory = { ...updatedProject, history: newHistory }; 
        setTestProjects(currentProjects => currentProjects.map(p => p.userId === projectWithNewHistory.userId ? projectWithNewHistory : p)); 
        if(selectedProject && selectedProject.userId === projectWithNewHistory.userId) {
            setSelectedProject(projectWithNewHistory);
        }
    };
    
    const filteredProjects = useMemo(() => { const source = isTestMode ? initialProjects : []; const operational = source.filter(p => p.status !== STATUS_PAGAMENTO_REPROVADO); switch (view) { case 'artes': return operational.filter(p => p.status === STATUS_ARTES); case 'anuncios': return operational.filter(p => p.status === STATUS_ANUNCIOS); case 'otimizacao': return operational.filter(p => [STATUS_APRENDIZADO, STATUS_OTIMIZACAO].includes(p.status)); default: return userRole === 'admin' ? source : []; } }, [view, initialProjects, userRole, isTestMode]);

    const renderContent = () => {
        if (view === 'equipe') return <TeamDashboard team={team} tasks={tasks} setTasks={setTasks} userRole={userRole} />; 
        if (view === 'novos-clientes') return <NewClientsDashboard clients={notifications} onApproveClient={handleApproveClient}/>;
        if (view === 'configuracoes') return <SettingsDashboard />;

        const titles = { geral: "Visão Geral", artes: "Setor de Artes", anuncios: "Setor de Anúncios", otimizacao: "Otimização" }; 
        return <ProjectDashboard projects={filteredProjects} title={titles[view]} userRole={userRole} isTestMode={isTestMode} onProjectUpdate={handleProjectUpdate} onRowClick={setSelectedProject} currentView={view} team={team} />; 
    };

    return (<div className={`${THEME.background} min-h-screen ${THEME.text_light} font-sans`}>
        <Header onLogout={onLogout} isTestMode={isTestMode} userRole={userRole} notifications={notifications} setNotifications={setNotifications} />
        <div className="flex"> <Sidebar view={view} setView={setView} userRole={userRole} /> <main className="flex-1 p-4 md:p-8">{renderContent()}</main> </div>
        {selectedProject && userRole === 'admin' && <AdminProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} team={team} onProjectUpdate={handleProjectUpdate} />}
        {selectedProject && userRole === 'operator' && view === 'otimizacao' && <OptimizationDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        {selectedProject && userRole === 'operator' && (view === 'artes' || view === 'anuncios') && <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} onProjectUpdate={handleProjectUpdate} />}
    </div>);
};

const Header = ({ onLogout, isTestMode, userRole, notifications, setNotifications }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsRead = (id) => {
        const updated = notifications.map(n => n.id === id ? {...n, read: true} : n);
        setNotifications(updated);
        localStorage.setItem('r9_plan_requests', JSON.stringify(updated));
    }
    return (
    <header className={`${THEME.surface} bg-opacity-80 backdrop-blur-sm border-b ${THEME.border} p-4 flex justify-between items-center sticky top-[49px] z-20`}>
        <div><img src={LOGO_URL} alt="Logo R9" className="h-12"/></div>
        <div className="flex items-center space-x-4">
            {isTestMode && <span className="text-sm font-bold py-1 px-3 rounded-full bg-yellow-900/50 text-yellow-300">MODO DE TESTE</span>}
            <div className="relative">
                <button onClick={() => setShowNotifications(!showNotifications)} title="Notificações" className={`text-slate-400 ${THEME.primary_hover} transition`}>
                    <Bell className="h-6 w-6" />
                    {unreadCount > 0 && <span className="absolute -top-1 -right-1 flex h-4 w-4"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9EF04E] opacity-75"></span><span className="relative inline-flex rounded-full h-4 w-4 bg-[#9EF04E] text-black text-xs items-center justify-center">{unreadCount}</span></span>}
                </button>
                {showNotifications && <NotificationPanel notifications={notifications} markAsRead={markAsRead} />}
            </div>
            <span className={`text-sm font-medium py-1 px-3 rounded-full bg-[#9EF04E]/10 ${THEME.primary} capitalize`}>{userRole}</span>
            <button onClick={onLogout} title="Sair" className={`text-slate-400 ${THEME.primary_hover} transition`}><LogIn className="h-6 w-6 rotate-180" /></button>
        </div>
    </header>
)};

const NotificationPanel = ({notifications, markAsRead}) => (
    <div className={`absolute top-12 right-0 w-80 ${THEME.surface} border ${THEME.border} rounded-lg shadow-lg z-30`}>
        <div className="p-3 font-bold border-b border-slate-700">Notificações</div>
        <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 && <p className={`p-4 text-sm ${THEME.text_muted}`}>Nenhuma notificação.</p>}
            {notifications.slice().reverse().map(n => (
                <div key={n.id} className={`p-3 border-b ${THEME.border} ${!n.read ? 'bg-black/20' : ''}`}>
                    <p className="font-semibold text-sm">Novo Pedido de Plano</p>
                    <p className="text-sm">Cliente: <span className="font-bold">{n.companyName}</span></p>
                    <p className="text-sm">Plano Escolhido: <span className="font-bold text-[#9EF04E]">{n.chosenPlan.planName}</span></p>
                    <p className="text-xs mt-1 text-slate-500">{new Date(n.timestamp).toLocaleString('pt-BR')}</p>
                    {!n.read && <button onClick={() => markAsRead(n.id)} className="text-xs text-cyan-400 hover:underline mt-1">Marcar como lida</button>}
                </div>
            ))}
        </div>
    </div>
);

const Sidebar = ({ view, setView, userRole }) => { const navItems = useMemo(() => [
    { id: 'geral', icon: LayoutDashboard, label: 'Visão Geral', adminOnly: true }, 
    { id: 'novos-clientes', icon: UserPlus, label: 'Novos Clientes', adminOnly: true },
    { id: 'artes', icon: Palette, label: 'Setor de Artes', adminOnly: false }, 
    { id: 'anuncios', icon: Megaphone, label: 'Setor de Anúncios', adminOnly: false }, 
    { id: 'otimizacao', icon: TrendingUp, label: 'Otimização', adminOnly: false }, 
    { id: 'equipe', icon: Users, label: 'Equipe', adminOnly: true }, 
    { id: 'configuracoes', icon: Settings, label: 'Configurações', adminOnly: true }, 
].filter(item => userRole === 'admin' || !item.adminOnly), [userRole]); return (<nav className={`${THEME.surface} w-16 md:w-64 p-2 md:p-4 border-r ${THEME.border} h-screen sticky top-[105px]`}><ul>{navItems.map(item => (<li key={item.id}><button onClick={() => setView(item.id)} className={`w-full flex items-center justify-center md:justify-start space-x-0 md:space-x-3 p-3 rounded-lg text-left transition mb-2 ${view === item.id ? `bg-[#9EF04E]/10 ${THEME.primary}` : `hover:bg-white/5 ${THEME.text_muted}`}`}><item.icon className="h-5 w-5 flex-shrink-0" /><span className="hidden md:inline">{item.label}</span></button></li>))}</ul></nav>); };

// --- New Admin Sections ---

const NewClientsDashboard = ({ clients, onApproveClient }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Novos Clientes</h2>
            {clients.length > 0 ? (
                <div className={`${THEME.surface} rounded-2xl shadow-lg`}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className={`text-xs ${THEME.text_muted} uppercase bg-black/20`}>
                                <tr className={`border-b ${THEME.border}`}>
                                    <th className="px-6 py-3">Empresa</th>
                                    <th className="px-6 py-3">Contato</th>
                                    <th className="px-6 py-3">Telefone</th>
                                    <th className="px-6 py-3">Plano Desejado</th>
                                    <th className="px-6 py-3 text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map((client) => (
                                    <tr key={client.id} className={`border-b ${THEME.border} hover:bg-white/5`}>
                                        <td className="px-6 py-4 font-semibold">{client.companyName}</td>
                                        <td className="px-6 py-4">{client.contactName}</td>
                                        <td className="px-6 py-4">{client.phone}</td>
                                        <td className="px-6 py-4"><span className={`font-semibold ${THEME.primary}`}>{client.chosenPlan.planName}</span></td>
                                        <td className="px-6 py-4 text-center">
                                            <button onClick={() => onApproveClient(client)} className={`inline-flex items-center justify-center space-x-2 rounded-md px-4 py-2 ${THEME.button_primary} text-sm font-bold ${THEME.button_primary_hover}`}>
                                                <PlusCircle className="h-4 w-4"/>
                                                <span>Criar Projeto</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className={`text-center ${THEME.text_muted} mt-16 p-8 ${THEME.surface} rounded-2xl`}>
                    <Users className="h-12 w-12 mx-auto text-slate-500 mb-4" />
                    <h3 className="text-xl font-bold text-white">Nenhum novo cliente</h3>
                    <p>As solicitações de novos clientes aparecerão aqui.</p>
                </div>
            )}
        </div>
    );
};

const SettingsDashboard = () => {
    const [gapi, setGapi] = useState(null);
    const [tokenClient, setTokenClient] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [sheetUrl, setSheetUrl] = useState('');
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });


    const handleAuthClick = () => {
        if (tokenClient) {
            tokenClient.requestAccessToken({ prompt: 'consent' });
        }
    };
    
    const handleSignoutClick = () => {
        if (gapi) {
            const token = gapi.client.getToken();
            if (token) {
                gapi.accounts.oauth2.revoke(token.access_token, () => {
                    gapi.client.setToken('');
                    setIsAuthorized(false);
                    setStatusMessage({ type: 'info', text: 'Conta Google desconectada.' });
                });
            }
        }
    };

    const gapiLoaded = () => {
        window.gapi.load('client', async () => {
            await window.gapi.client.init({
                apiKey: API_KEY,
                discoveryDocs: DISCOVERY_DOCS,
            });
            setGapi(window.gapi);
        });
    };

    const gisLoaded = () => {
        const client = window.google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            callback: (tokenResponse) => {
                if (tokenResponse && tokenResponse.access_token) {
                    setIsAuthorized(true);
                     setStatusMessage({ type: 'success', text: 'Conta Google autorizada com sucesso.' });
                } else {
                     setStatusMessage({ type: 'error', text: 'Falha na autorização do Google.' });
                }
            },
        });
        setTokenClient(client);
    };

    useEffect(() => {
        const scriptGapi = document.createElement("script");
        scriptGapi.src = "https://apis.google.com/js/api.js";
        scriptGapi.async = true;
        scriptGapi.defer = true;
        scriptGapi.onload = gapiLoaded;
        document.body.appendChild(scriptGapi);

        const scriptGis = document.createElement("script");
        scriptGis.src = "https://accounts.google.com/gsi/client";
        scriptGis.async = true;
        scriptGis.defer = true;
        scriptGis.onload = gisLoaded;
        document.body.appendChild(scriptGis);

        return () => {
            document.body.removeChild(scriptGapi);
            document.body.removeChild(scriptGis);
        }
    }, []);

    const extractSheetId = (url) => {
        const match = /spreadsheets\/d\/([a-zA-Z0-9-_]+)/.exec(url);
        return match ? match[1] : null;
    };
    
    const testRead = async () => {
        const spreadsheetId = extractSheetId(sheetUrl);
        if(!spreadsheetId) { 
            setStatusMessage({type: 'error', text: 'URL da planilha inválida ou mal formatada.'});
            return;
        }
        
        try {
            const response = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: spreadsheetId,
                range: 'A1:B2', // Example range
            });
            const range = response.result;
            if (range.values && range.values.length > 0) {
                 setStatusMessage({type: 'success', text: 'Leitura bem-sucedida! Dados encontrados: ' + JSON.stringify(range.values)});
            } else {
                 setStatusMessage({type: 'info', text: 'Leitura bem-sucedida, mas nenhum dado encontrado no range A1:B2.'});
            }
        } catch (err) {
            setStatusMessage({type: 'error', text: 'Erro ao ler a planilha. Verifique a URL e as permissões. Detalhes: ' + err.result.error.message});
        }
    };


    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Configurações</h2>
            <div className={`p-6 md:p-8 ${THEME.surface} rounded-2xl shadow-lg space-y-6`}>
                <div>
                    <h3 className={`text-xl font-bold mb-4 ${THEME.primary}`}>Integração com Google Sheets</h3>
                    <div className="bg-yellow-900/40 border border-yellow-700 p-4 rounded-lg text-yellow-300 text-sm mb-4">
                        <strong>Atenção:</strong> Para a integração funcionar, é necessário substituir as chaves <code>SUA_API_KEY_AQUI</code> e <code>SEU_CLIENT_ID_OAUTH_AQUI</code> no código-fonte pelas suas credenciais do Google Cloud.
                    </div>
                    
                    {!isAuthorized ? (
                        <button onClick={handleAuthClick} disabled={!gapi || !tokenClient} className={`${THEME.button_primary} ${THEME.button_primary_hover} font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50`}>
                            <Power className="h-5 w-5" />
                            <span>Conectar Conta Google</span>
                        </button>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-green-900/40 p-3 rounded-lg border border-green-700">
                                <CheckCircle className="h-6 w-6 text-green-400" />
                                <p className="text-green-300 font-semibold">Conta Google conectada.</p>
                                 <button onClick={handleSignoutClick} title="Desconectar" className={`ml-auto text-slate-400 hover:text-white`}>
                                    <PowerOff className="h-5 w-5"/>
                                </button>
                            </div>
                           
                            <div>
                                <label htmlFor="sheetUrl" className="block text-sm font-medium mb-2">URL da Planilha</label>
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="url" 
                                        id="sheetUrl" 
                                        value={sheetUrl}
                                        onChange={(e) => setSheetUrl(e.target.value)}
                                        placeholder="https://docs.google.com/spreadsheets/d/..." 
                                        className={`flex-grow bg-black/20 border ${THEME.border} p-3 rounded-lg`} 
                                    />
                                    <button onClick={testRead} className="bg-sky-600 hover:bg-sky-500 font-bold py-3 px-4 rounded-lg">Testar Leitura</button>
                                </div>
                            </div>

                        </div>
                    )}
                     {statusMessage.text && (
                        <div className={`p-3 mt-4 rounded-lg text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-900/40 text-green-300' : statusMessage.type === 'error' ? 'bg-red-900/40 text-red-300' : 'bg-sky-900/40 text-sky-300'}`}>
                           {statusMessage.text}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


const ProjectDashboard = ({ projects, title, team, onRowClick, ...props }) => (<div><h2 className="text-3xl font-bold mb-6">{title}</h2>{projects.length>0?(<div className={`${THEME.surface} rounded-2xl shadow-lg`}><div className="overflow-x-auto"><ProjectTable projects={projects} onRowClick={onRowClick} team={team} {...props} /></div></div>):(<div className={`text-center ${THEME.text_muted} mt-16 p-8 ${THEME.surface} rounded-2xl`}><CheckCircle className="h-12 w-12 mx-auto text-green-500 mb-4" /><h3 className="text-xl font-bold text-white">Tudo em ordem!</h3><p>Nenhum projeto pendente neste setor.</p></div>)}</div>);
const ProjectTable = ({ projects, currentView, team, ...props }) => { const isOptimizationView = currentView === 'otimizacao'; return (<table className="w-full text-sm text-left"><thead className={`text-xs ${THEME.text_muted} uppercase bg-black/20`}><tr className={`border-b ${THEME.border}`}><th className="px-6 py-3">Cliente</th><th className="px-6 py-3">Responsável</th><th className="px-6 py-3">Status</th>{isOptimizationView && <><th className="px-6 py-3">CPC</th><th className="px-6 py-3">CTR (%)</th><th className="px-6 py-3">ROAS</th></>} <th className="px-6 py-3 text-center">Ações</th></tr></thead><tbody>{projects.map((p, i) => <ProjectRow key={p.userId || i} project={p} isOptimizationView={isOptimizationView} team={team} {...props} />)}</tbody></table>); };
const ProjectRow = ({ project, userRole, isTestMode, onProjectUpdate, onRowClick, isOptimizationView, team }) => { const isPaymentFailed = project.status === STATUS_PAGAMENTO_REPROVADO; const handleStatusChange = (newStatus) => onProjectUpdate({ ...project, status: newStatus }); const assignedMember = team.find(m => m.id === project.assignedTo); return (<tr className={`border-b ${THEME.border} transition-colors ${isPaymentFailed ? 'bg-red-900/40' : 'hover:bg-white/5 cursor-pointer'}`} onClick={() => !isPaymentFailed && onRowClick(project)}><td className="px-6 py-4">{project.userId || 'N/A'}</td><td className="px-6 py-4">{assignedMember ? assignedMember.name : <span className={THEME.text_muted}>N/A</span>}</td><td className="px-6 py-4">{project.status || 'N/A'}</td>{isOptimizationView && <><td className="px-6 py-4 font-mono">R$ {project.metrics?.cpc || '-'}</td><td className="px-6 py-4 font-mono">{project.metrics?.ctr || '-'}%</td><td className="px-6 py-4 font-mono">{project.metrics?.roas || '-'}</td></>}<td className="px-6 py-4 text-center" onClick={e => e.stopPropagation()}>{isTestMode ? <ActionCell userRole={userRole} currentStatus={project.status} onStatusChange={handleStatusChange} /> : <DisabledAction />}</td></tr>); };

// --- Modals (Admin) --- 
const AdminProjectDetailModal = ({ project, onClose, team, onProjectUpdate }) => { if (!project) return null; const formatTimestamp = (isoString) => new Date(isoString).toLocaleString('pt-BR'); const handleAssignmentChange = (e) => onProjectUpdate({ ...project, assignedTo: e.target.value }); return (<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}><div className={`${THEME.surface} rounded-2xl w-full max-w-4xl animate-fade-in border ${THEME.border}`} onClick={e => e.stopPropagation()}><div className={`p-6 border-b ${THEME.border} flex justify-between items-center`}><h2 className="text-2xl font-bold">Visão Detalhada (Admin)</h2><button onClick={onClose} className={THEME.text_muted}><X/></button></div><div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><InfoCard icon={UserCog} title="Cliente" value={project.userId} /><InfoCard icon={CheckCircle} title="Status do Cliente" value={project.clientStatus} /><InfoCard icon={Megaphone} title="Status da Campanha" value={project.status} /><InfoCard icon={Phone} title="Contato Atendente" value={project.attendantNumber} /><InfoCard icon={Hash} title="ID Conta de Anúncios (FB)" value={project.facebookAdAccountId} isMono /><InfoCard icon={MapPin} title="CEP" value={project.cep} isMono/></div><div><h4 className={`font-semibold ${THEME.text_muted} mb-2`}>Nichos</h4><div className="flex flex-wrap gap-2">{project.niches.map(niche => <span key={niche} className={`bg-black/20 text-slate-200 py-1 px-3 rounded-full text-sm`}>{niche}</span>)}</div></div><div className={`border-t ${THEME.border} pt-6`}><h3 className={`text-xl font-bold mb-4 ${THEME.primary}`}>Atribuição</h3><select value={project.assignedTo||''} onChange={handleAssignmentChange} className={`w-full bg-black/20 p-2.5 rounded-lg border ${THEME.border}`}><option value="">Não atribuído</option>{team.map(m=><option key={m.id} value={m.id}>{m.name}</option>)}</select></div><div className={`border-t ${THEME.border} pt-6`}><h3 className={`text-xl font-bold mb-4 ${THEME.primary}`}>Histórico</h3><ul className="space-y-4">{project.history?.sort((a,b)=>new Date(b.timestamp)-new Date(a.timestamp)).map((entry,idx)=>(<li key={idx} className="flex items-start space-x-4"><div className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center ${entry.user==='admin'?'bg-amber-500/20':'bg-sky-500/20'}`}>{entry.user==='admin'?<ShieldCheck className="h-5 w-5 text-amber-400"/>:<User className="h-5 w-5 text-sky-400"/>}</div><div><p>Status para <span className={THEME.primary}>{entry.status}</span></p><p className={`text-sm ${THEME.text_muted}`}>Por {entry.user} em {formatTimestamp(entry.timestamp)}</p></div></li>))}</ul></div></div></div></div>); };
const ProjectDetailModal = ({ project, onClose, onProjectUpdate }) => { const [aiIdeas, setAiIdeas] = useState(''); const [isGenerating, setIsGenerating] = useState(false); if (!project) return null; const showAIAssistant = [STATUS_ARTES, STATUS_ANUNCIOS].includes(project.status); const handleFileUpload = (e) => { const file = e.target.files[0]; if (!file) return; const newFile = { name: file.name, url: URL.createObjectURL(file), type: file.type }; const updatedFiles = [...(project.files || []), newFile]; onProjectUpdate({ ...project, files: updatedFiles }); }; const generateIdeas = async () => { setIsGenerating(true); setAiIdeas(''); const prompt = `Aja como um especialista em marketing digital para a agência R9. Crie 3 sugestões de anúncios para um cliente com os seguintes detalhes:\n\n- Nichos de Mercado: ${project.niches.join(', ')}\n\nPara cada sugestão, forneça:\n1.  **Conceito Criativo:**\n2.  **Copy (Texto):**\n3.  **Visual:**\n\nFormate a resposta de forma clara.`; try { let chatHistory = [{ role: "user", parts: [{ text: prompt }] }]; const payload = { contents: chatHistory }; const apiKey = ""; const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`; const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); const result = await response.json(); if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) { const text = result.candidates[0].content.parts[0].text; setAiIdeas(text.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')); } else { throw new Error("Resposta da IA inválida."); } } catch (error) { setAiIdeas('<p class="text-red-400">Ocorreu um erro.</p>'); } finally { setIsGenerating(false); } }; return (<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}><div className={`${THEME.surface} rounded-2xl w-full max-w-3xl animate-fade-in border ${THEME.border}`} onClick={e => e.stopPropagation()}><div className={`p-6 border-b ${THEME.border} flex justify-between items-center`}><h2 className="text-2xl font-bold">Detalhes do Projeto</h2><button onClick={onClose} className={THEME.text_muted}><X/></button></div><div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto"><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InfoCard icon={UserCog} title="Cliente" value={project.userId} /><InfoCard icon={Megaphone} title="Status da Campanha" value={project.status} /><InfoCard icon={Phone} title="Contato Atendente" value={project.attendantNumber} /><InfoCard icon={Hash} title="ID Conta de Anúncios (FB)" value={project.facebookAdAccountId} isMono /></div><div><h4 className={`font-semibold ${THEME.text_muted} mb-2`}>Nichos</h4><div className="flex flex-wrap gap-2">{project.niches.map(niche => <span key={niche} className={`bg-black/20 text-slate-200 py-1 px-3 rounded-full text-sm`}>{niche}</span>)}</div></div><div className={`border-t ${THEME.border} pt-6`}><h3 className={`text-xl font-bold mb-4 ${THEME.primary}`}>Arquivos do Projeto</h3><ul className="space-y-2 mb-4">{project.files?.map((file, index) => <li key={index} className={`flex items-center justify-between bg-black/20 p-2 rounded-md`}><span className="flex items-center gap-2"><Paperclip size={16}/>{file.name}</span><a href={file.url} target="_blank" rel="noopener noreferrer" className={`${THEME.primary} text-sm hover:underline`}>Ver</a></li>)}{(!project.files || project.files.length === 0) && <p className={`text-sm ${THEME.text_muted}`}>Nenhum arquivo enviado.</p>}</ul>{project.status === STATUS_ARTES && <label className={`w-full cursor-pointer bg-slate-600 hover:bg-slate-500 ${THEME.text_light} font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2`}><UploadCloud className="h-5 w-5" /><span>Enviar Arquivo</span><input type="file" className="hidden" onChange={handleFileUpload}/></label>}</div>{showAIAssistant && (<div className={`border-t ${THEME.border} pt-6`}><h3 className={`text-xl font-bold mb-4 ${THEME.primary}`}>✨ Assistente de Criação IA</h3>{!aiIdeas && !isGenerating && (<button onClick={generateIdeas} className={`w-full ${THEME.button_primary} ${THEME.button_primary_hover} font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2`}><Sparkles className="h-5 w-5" /><span>Gerar Ideias</span></button>)}{isGenerating && <div className="flex justify-center items-center p-8"><Loader className="animate-spin h-8 w-8" /></div>}{aiIdeas && <div className="prose prose-invert bg-black/20 p-4 rounded-lg" dangerouslySetInnerHTML={{ __html: aiIdeas }}></div>}</div>)}</div></div></div>); };
const OptimizationDetailModal = ({ project, onClose }) => { const [analysis, setAnalysis] = useState(''); const [isAnalyzing, setIsAnalyzing] = useState(false); if (!project) return null; const generateAnalysis = async () => { setIsAnalyzing(true); setAnalysis(''); const prompt = `Aja como um analista de mídia sênior na agência R9. Analise as seguintes métricas de uma campanha no Facebook Ads para um cliente do nicho "${project.niches.join(', ')}":\n\n- **CPC:** R$ ${project.metrics.cpc}\n- **CTR:** ${project.metrics.ctr}%\n- **ROAS:** ${project.metrics.roas}\n\nForneça:\n1.  **Diagnóstico Rápido:**\n2.  **Pontos Fortes:**\n3.  **Pontos de Melhoria:**\n4.  **Plano de Ação:** 3 a 4 sugestões práticas.`; try { let chatHistory = [{ role: "user", parts: [{ text: prompt }] }]; const payload = { contents: chatHistory }; const apiKey = ""; const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`; const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); const result = await response.json(); if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) { const text = result.candidates[0].content.parts[0].text; setAnalysis(text.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')); } else { throw new Error("Resposta da IA inválida."); } } catch (error) { setAnalysis('<p class="text-red-400">Ocorreu um erro.</p>'); } finally { setIsAnalyzing(false); } }; return (<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}><div className={`${THEME.surface} rounded-2xl w-full max-w-3xl animate-fade-in border ${THEME.border}`} onClick={e => e.stopPropagation()}><div className={`p-6 border-b ${THEME.border} flex justify-between items-center`}><h2 className="text-2xl font-bold">Análise de Otimização</h2><button onClick={onClose} className={THEME.text_muted}><X/></button></div><div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto"><div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"><InfoCard icon={MousePointerClick} title="CPC" value={`R$ ${project.metrics.cpc}`} isMono /><InfoCard icon={Target} title="CTR" value={`${project.metrics.ctr}%`} isMono /><InfoCard icon={DollarSign} title="ROAS" value={project.metrics.roas} isMono /></div><div className={`border-t ${THEME.border} pt-6`}><h3 className={`text-xl font-bold mb-4 ${THEME.primary}`}>✨ Análise de Performance IA</h3>{!analysis && !isAnalyzing && (<button onClick={generateAnalysis} className={`w-full ${THEME.button_primary} ${THEME.button_primary_hover} font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2`}><Sparkles className="h-5 w-5" /><span>Analisar Métricas</span></button>)}{isAnalyzing && <div className="flex justify-center items-center p-8"><Loader className="animate-spin h-8 w-8" /></div>}{analysis && <div className="prose prose-invert bg-black/20 p-4 rounded-lg" dangerouslySetInnerHTML={{ __html: analysis }}></div>}</div></div></div></div>); };

const TeamDashboard = ({ team, tasks, setTasks, userRole }) => {
    const [draggedTask, setDraggedTask] = useState(null);
    const handleAddTask = (task) => {
        setTasks(currentTasks => [...currentTasks, task]);
    };
    const handleUpdateTaskStatus = (taskId, newStatus) => {
        setTasks(currentTasks => currentTasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
        ));
    };
    const handleDragStart = (e, task) => {
        setDraggedTask(task);
        e.dataTransfer.effectAllowed = 'move';
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDrop = (e, status) => {
        e.preventDefault();
        if (draggedTask) {
            handleUpdateTaskStatus(draggedTask.id, status);
            setDraggedTask(null);
        }
    };
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold">Gerenciamento da Equipe e Tarefas</h2>
            {userRole === 'admin' && <TaskCreator team={team} onAddTask={handleAddTask} />}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[TASK_STATUS_TODO, TASK_STATUS_INPROGRESS, TASK_STATUS_DONE].map(status => (
                    <TaskColumn
                        key={status}
                        status={status}
                        tasks={tasks.filter(t => t.status === status)}
                        team={team}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragStart={handleDragStart}
                    />
                ))}
            </div>
        </div>
    );
};

const TaskCreator = ({ team, onAddTask }) => { 
    const [title, setTitle] = useState(''); 
    const [type, setType] = useState(Object.keys(TASK_TYPES)[0]); 
    const [assigneeId, setAssigneeId] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if (!title.trim() || !assigneeId) { 
            setError('Preencha o título e atribua a tarefa a um responsável.'); 
            return; 
        } 
        const newTask = { id: `task_${Date.now()}`, title: title.trim(), type, assigneeId, status: TASK_STATUS_TODO }; 
        onAddTask(newTask); 
        setTitle(''); 
        setAssigneeId(''); 
        setError('');
    }; 
    
    return (
    <form onSubmit={handleSubmit} className={`${THEME.surface} p-4 rounded-2xl space-y-4`}>
        <h3 className="text-xl font-semibold">Criar Nova Tarefa</h3>
        <input type="text" value={title} onChange={e => {setTitle(e.target.value); setError('');}} placeholder="O que precisa ser feito?" className={`w-full bg-black/20 border ${THEME.border} p-3 rounded-lg`} />
        <div className="flex gap-4">
            <select value={type} onChange={e => {setType(e.target.value); setError('');}} className={`w-full bg-black/20 border ${THEME.border} p-3 rounded-lg`}>
                <option value="" disabled>Tipo de Tarefa</option>
                {Object.entries(TASK_TYPES).map(([key, {label}]) => <option key={key} value={key}>{label}</option>)}
            </select>
            <select value={assigneeId} onChange={e => {setAssigneeId(e.target.value); setError('');}} className={`w-full bg-black/20 border ${THEME.border} p-3 rounded-lg`}>
                <option value="">Atribuir a...</option>
                {team.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
            </select>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button type="submit" className={`w-full ${THEME.button_primary} ${THEME.button_primary_hover} font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2`}><PlusCircle size={20}/><span>Adicionar Tarefa</span></button>
    </form>
    ); 
};

const TaskColumn = ({ status, tasks, team, onDrop, onDragOver, onDragStart }) => (<div className="bg-black/20 rounded-2xl p-4" onDragOver={onDragOver} onDrop={(e) => onDrop(e, status)}><h3 className="font-bold text-lg mb-4 text-center">{status} ({tasks.length})</h3><div className="space-y-4 min-h-[200px]">{tasks.map(task => <TaskCard key={task.id} task={task} team={team} onDragStart={onDragStart} />)}</div></div>);
const TaskCard = ({ task, team, onDragStart }) => { const assignee = team.find(m => m.id === task.assigneeId); const TaskIcon = TASK_TYPES[task.type]?.icon || Briefcase; return (<div draggable onDragStart={(e) => onDragStart(e, task)} className={`${THEME.surface} p-4 rounded-lg cursor-grab active:cursor-grabbing`}><p className="font-semibold mb-2">{task.title}</p><div className="flex justify-between items-center text-sm text-slate-400"><span className="flex items-center gap-2 bg-black/20 py-1 px-2 rounded-md"><TaskIcon size={14}/>{TASK_TYPES[task.type]?.label}</span>{assignee && <span className="font-semibold text-white">{assignee.name}</span>}</div></div>); };

// --- Other components (Admin) ---
const InfoCard = ({ icon: Icon, title, value, isMono = false }) => (<div className={`${THEME.surface} bg-opacity-50 p-4 rounded-lg`}><div className="flex items-center space-x-3 mb-1"><Icon className={`h-5 w-5 ${THEME.primary}`} /><h3 className={`text-sm font-semibold ${THEME.text_muted}`}>{title}</h3></div><p className={`text-lg text-white ${isMono ? 'font-mono' : 'font-semibold'}`}>{value}</p></div>);
const ClientStatusBadge=({status})=>{const s={ [CLIENT_STATUS_NOVO]:{i:UserPlus,t:'Novo'},[CLIENT_STATUS_ANTIGO]:{i:UserCog,t:'Antigo'},[CLIENT_STATUS_RENOVOU]:{i:UserCheck,t:'Renovou'}};const c=s[status]||{i:UserCog,t:'N/A'};const I=c.i;return <span className='inline-flex items-center gap-x-1.5'><I className="h-4 w-4"/>{c.t}</span>};
const ActionCell = ({ userRole, currentStatus, onStatusChange }) => { if (userRole === 'admin') { return <AdminStatusChanger currentStatus={currentStatus} onStatusChange={onStatusChange} />; } return <OperatorAction currentStatus={currentStatus} onStatusChange={onStatusChange} />; };
const DisabledAction = () => <button disabled className="w-full rounded-md px-4 py-2 bg-slate-700 text-sm text-slate-500 cursor-not-allowed">Ver na Planilha</button>;
const OperatorAction = ({ currentStatus, onStatusChange }) => { const pipeline=[STATUS_ARTES,STATUS_ANUNCIOS,STATUS_APRENDIZADO,STATUS_OTIMIZACAO,STATUS_AUTOMACAO]; const idx=pipeline.indexOf(currentStatus); const canAdvance=idx!==-1&&idx<pipeline.length-1; const next=canAdvance?pipeline[idx+1]:null; const handle=()=>{if(next){onStatusChange(next)}}; return (<button onClick={handle} disabled={!canAdvance} className={`inline-flex items-center justify-center space-x-2 w-full rounded-md px-4 py-2 ${THEME.button_primary} text-sm font-bold ${THEME.button_primary_hover} disabled:bg-slate-500 disabled:cursor-not-allowed`}><Send className="h-4 w-4"/><span>Avançar</span></button>); };
const AdminStatusChanger = ({ currentStatus, onStatusChange }) => { const [isOpen, setIsOpen]=useState(false); const steps=[{n:STATUS_ARTES,i:Palette},{n:STATUS_ANUNCIOS,i:Megaphone},{n:STATUS_APRENDIZADO,i:Loader},{n:STATUS_OTIMIZACAO,i:TrendingUp},{n:STATUS_AUTOMACAO,i:CheckCircle},{n:STATUS_PAGAMENTO_REPROVADO,i:Ban}]; return(<div className="relative"><button onClick={()=>setIsOpen(!isOpen)} className={`inline-flex justify-center w-full rounded-md border ${THEME.border} px-4 py-2 bg-slate-700 text-sm font-medium`}>Mudar Status<ChevronDown className="-mr-1 ml-2 h-5 w-5"/></button>{isOpen&&<div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${THEME.surface} z-20`}><div className="py-1">{steps.map(s=>(<button key={s.n} onClick={()=>{onStatusChange(s.n);setIsOpen(false);}} className={`w-full text-left flex items-center space-x-3 px-4 py-2 text-sm disabled:opacity-50 ${s.n===STATUS_PAGAMENTO_REPROVADO?'text-red-300':'text-slate-200'}`} disabled={s.n===currentStatus}><s.i className={`h-4 w-4 ${s.n===STATUS_PAGAMENTO_REPROVADO?'text-red-300':''}`}/><span>{s.n}</span></button>))}</div></div>}</div>); };

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
    body { font-family: 'Inter', sans-serif; }
    
    @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
    .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }

    @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-down { animation: fadeInDown 0.6s ease-out forwards; opacity: 0; }

    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }

    @keyframes background-pan {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animated-background {
      background: linear-gradient(90deg, #111111, #1a1a1a, #111111);
      background-size: 200% 200%;
      animation: background-pan 15s ease-in-out infinite;
    }
    
    @keyframes card-glow {
      0%, 100% { box-shadow: 0 0 15px -5px rgba(158, 240, 78, 0.4), 0 0 30px -10px rgba(158, 240, 78, 0.3); }
      50% { box-shadow: 0 0 25px -5px rgba(158, 240, 78, 0.6), 0 0 40px -10px rgba(158, 240, 78, 0.5); }
    }
    .card-glow {
      position: absolute;
      inset: 0;
      border-radius: 1rem;
      animation: card-glow 4s ease-in-out infinite;
      z-index: -1;
    }

    .card-container { transform: scale(1); }
    .card-container:hover { transform: translateY(-5px); border-color: #555 !important; }
    .card-container:hover:before {
      opacity: 1;
    }
    .card-container:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%);
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.5s;
    }
    
    @keyframes shine-effect {
      0% { transform: translateX(-100%) skewX(-25deg); }
      100% { transform: translateX(100%) skewX(-25deg); }
    }
    .button-shine::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
      transform: translateX(-150%) skewX(-25deg);
      transition: transform 0.8s ease;
    }
    .button-shine:hover::after {
      transform: translateX(250%) skewX(-25deg);
    }

    .prose { color: #d1d5db; } .prose strong { color: #e5e7eb; } .prose ul { list-style-type: disc; padding-left: 1.5rem; } .prose li { margin-top: 0.5rem; margin-bottom: 0.5rem; }
`;
document.head.appendChild(styleSheet);
