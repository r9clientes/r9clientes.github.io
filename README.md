# Sistema de Gerenciamento de Tarefas

Um sistema robusto e seguro para gerenciamento de tarefas pessoais, construído com React, TypeScript, Supabase e Tailwind CSS.

## 🚀 Funcionalidades

### Autenticação e Segurança
- ✅ Sistema de autenticação completo (login/registro)
- ✅ Validação robusta de formulários com Zod
- ✅ Senhas seguras com requisitos de complexidade
- ✅ Row Level Security (RLS) no banco de dados
- ✅ Sanitização de inputs
- ✅ Proteção contra XSS e SQL Injection

### Gerenciamento de Tarefas
- ✅ Criar, editar e excluir tarefas
- ✅ Sistema de status (Pendente, Em Progresso, Concluída)
- ✅ Níveis de prioridade (Baixa, Média, Alta)
- ✅ Datas de vencimento
- ✅ Filtros por status
- ✅ Interface responsiva e intuitiva

### Experiência do Usuário
- ✅ Design moderno e responsivo
- ✅ Feedback visual com toasts
- ✅ Estados de loading
- ✅ Validação em tempo real
- ✅ Micro-interações e animações

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, RLS)
- **Validação**: Zod + React Hook Form
- **UI Components**: Radix UI, Lucide React
- **Notificações**: Sonner

## 🔧 Configuração do Projeto

### Pré-requisitos
- Node.js 18+
- Conta no Supabase

### Instalação

1. **Configure o Supabase**:
   - Clique no botão "Connect to Supabase" no canto superior direito
   - Crie um novo projeto ou conecte um existente
   - As variáveis de ambiente serão configuradas automaticamente

2. **Execute as migrações**:
   - As migrações do banco de dados serão aplicadas automaticamente
   - Isso criará as tabelas necessárias e configurará a segurança

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

## 🗄️ Estrutura do Banco de Dados

### Tabelas Principais

#### `user_profiles`
- Perfis estendidos dos usuários
- Informações como nome completo, bio, avatar

#### `tasks`
- Tarefas dos usuários
- Status, prioridade, datas, descrições

### Segurança Implementada

- **Row Level Security (RLS)**: Usuários só acessam seus próprios dados
- **Políticas de Segurança**: Controle granular de acesso
- **Validação de Dados**: Constraints no banco e validação no frontend
- **Sanitização**: Limpeza de inputs maliciosos

## 🔐 Recursos de Segurança

### Autenticação
- Senhas com requisitos de complexidade
- Validação de email
- Proteção contra ataques de força bruta

### Banco de Dados
- Row Level Security habilitado
- Políticas restritivas por usuário
- Constraints de validação
- Índices otimizados

### Frontend
- Validação robusta com Zod
- Sanitização de inputs
- Proteção contra XSS
- Headers de segurança

## 📱 Funcionalidades da Interface

### Dashboard
- Visão geral das tarefas
- Filtros por status
- Criação rápida de tarefas
- Interface responsiva

### Gerenciamento de Tarefas
- Formulários validados
- Estados visuais claros
- Ações contextuais
- Feedback imediato

### Autenticação
- Formulários de login/registro
- Validação em tempo real
- Mensagens de erro claras
- Recuperação de senha

## 🚀 Deploy

O projeto está configurado para deploy automático no Netlify:

```bash
npm run build
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.