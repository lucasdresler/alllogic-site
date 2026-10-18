# Páginas do Site

## Objetivo

Registrar a estrutura atual de páginas do site institucional da AllLogic Online, suas rotas e responsabilidades principais.

Este documento descreve a implementação vigente e não substitui as decisões arquiteturais registradas em `docs/decisions/`.

---

## Páginas atuais

### Página inicial

**Arquivo:** `src/pages/index.astro`
**Rota:** `/`

Responsabilidade:

- apresentar a AllLogic Online;
- comunicar o posicionamento institucional e a mentalidade de engenharia anti-hype;
- apresentar as principais soluções da Família Agillex e sob medida;
- apresentar o ecossistema tecnológico e parceiros homologados;
- apresentar o portfólio de projetos reais;
- esclarecer dúvidas frequentes com FAQ indexável (Schema.org FAQPage);
- conduzir o visitante ao diagnóstico ou agendamento direto online;
- apresentar o fluxo conceitual da AllLogic Online;
- direcionar para as demais áreas institucionais.

É a principal porta de entrada do site.

---

### Sobre

**Arquivo:** `src/pages/sobre.astro`
**Rota:** `/sobre/`

Responsabilidade:

- apresentar institucionalmente a AllLogic Online;
- comunicar sua proposta e posicionamento;
- apresentar informações institucionais efetivamente homologadas.

O conteúdo deve permanecer estritamente baseado nas informações institucionais aprovadas.

---

### Contato

**Arquivo:** `src/pages/contato.astro`
**Rota:** `/contato/`

Responsabilidade:

- permitir o contato com a AllLogic Online;
- apresentar o formulário de diagnóstico;
- coletar as informações necessárias para uma primeira compreensão da necessidade do visitante;
- encaminhar a solicitação por meio da integração definida em `ADR-0003`.

O formulário utiliza `src/services/diagnosisSubmission.ts` e o endpoint `public/api/diagnosis.php`.

---

### Domínios e Hospedagem

**Arquivo:** `src/pages/dominios-e-hospedagem.astro`
**Rota:** `/dominios-e-hospedagem/`

Responsabilidade:

- apresentar a solução relacionada a domínios e hospedagem;
- comunicar a proposta da solução sem inferir preços, condições comerciais, recursos ou garantias não homologados.

---

### Agillex Hub

**Arquivo:** `src/pages/agillex-hub.astro`  
**Rota:** `/agillex-hub/`

Responsabilidade:

- apresentar a plataforma central e unificada de operações da Família Agillex;
- detalhar os quatro pilares integrados: WhatsApp Oficial com IA, Sistema de Agendamento Online, CRM & Pipeline Kanban e Agillex Pay (split e taxa fixa de R$ 1,99 por PIX/cartão sem percentual);
- demonstrar a arquitetura multi-tenant (gestão de múltiplos estabelecimentos em um único painel), controle de permissões por perfil e relatórios preditivos;
- apresentar a vitrine interativa com Sticky Scroll Showcase e guias visuais interativas;
- disponibilizar tabela comparativa de planos (Autônomo, Negócio e Escala) com botão direto de contratação (`/checkout`);
- compor componentes modulares em `src/components/agillex-hub/`, consumindo o conteúdo isolado em `src/content/agillex-hub.ts`.

---

### Agillex Agenda

**Arquivo:** `src/pages/agillex-agenda.astro`  
**Rota:** `/agillex-agenda/`

Responsabilidade:

- apresentar a solução comercial Agillex Agenda (Sistema de Agendamento Online);
- comunicar sua proposta de valor e público-alvo (negócios com atendimento por hora marcada);
- apresentar os recursos práticos e funcionalidades da ferramenta com redação conservadora e sem promessas não homologadas;
- apresentar tabela de planos com navegação suave para contratação;
- disponibilizar a chamada para experimentação da plataforma (`https://agenda.alllogiconline.com.br/agillex`) e canal de contato institucional;
- compor as quatro seções modulares (`AgillexHeroSection`, `AgillexAudienceSection`, `AgillexFeaturesSection`, `AgillexTrialSection`), consumindo o conteúdo isolado em `src/content/agillex.ts`.

---

### Agillex Atendimento

**Arquivo:** `src/pages/agillex-atendimento.astro`  
**Rota:** `/agillex-atendimento/`

Responsabilidade:

- apresentar o Agente de IA Oficial para WhatsApp 24/7 com inteligência de ponta a ponta;
- comunicar os pilares de atendimento humanizado com IA treinada na base de conhecimento da empresa, sem alucinações e com transição transparente para atendente humano quando necessário;
- detalhar recursos: triagem inteligente, agendamento automatizado integrado, histórico de conversas e métricas de satisfação;
- apresentar tabela comparativa de planos com botão direto para contratação;
- compor componentes em `src/components/agillex-atendimento/`, consumindo o conteúdo isolado em `src/content/agillex-atendimento.ts`.

---

### Política de Privacidade

**Arquivo:** `src/pages/politica-de-privacidade.astro`  
**Rota:** `/politica-de-privacidade/`

Responsabilidade:

- apresentar a Política de Privacidade vigente do site;
- documentar o tratamento relacionado ao uso do site, formulário de contato e recursos de análise de navegação;
- manter coerência com os mecanismos de consentimento e coleta efetivamente implementados.

---

### Termos de Uso e Prestação de Serviços

**Arquivo:** `src/pages/termos-de-uso.astro`  
**Rota:** `/termos-de-uso/`

Responsabilidade:

- apresentar publicamente os Termos de Uso e Contrato de Prestação de Serviços da AllLogic Online;
- regular o licenciamento e uso das plataformas em nuvem da Família Agillex (Hub, Agenda, Atendimento e Agillex Pay);
- documentar o SLA (99,5%), a ausência de fidelidade compulsória nos planos SaaS, as taxas fixas do Agillex Pay (R$ 1,99) e a propriedade integral dos dados pelo cliente em conformidade com a LGPD;
- servir de referência contratual e jurídica homologada no SGA.

---

## Navegação

A navegação principal atualmente contempla:

- **Início** → `/`
- **Soluções** → `/#solucoes`
- **Família Agillex (Dropdown)**:
  - **Agillex Hub** → `/agillex-hub/`
  - **Agillex Agenda** → `/agillex-agenda/`
  - **Agillex Atendimento** → `/agillex-atendimento/`
- **Portfólio** → `/#portfolio`
- **Diagnóstico** → `/#diagnostico`
- **Sobre** → `/sobre/`
- **Contato** → `/contato/`

O rodapé contempla:

- **Família Agillex**:
  - **Agillex Hub** → `/agillex-hub/`
  - **Agillex Agenda** → `/agillex-agenda/`
  - **Agillex Atendimento** → `/agillex-atendimento/`
- **Legal**:
  - **Política de Privacidade** → `/politica-de-privacidade/`
  - **Termos de Uso** → `/termos-de-uso/`

As seções de Soluções, Portfólio e Diagnóstico permanecem integradas à página inicial, por meio de âncoras.

---

## Princípios

- Cada rota deve possuir uma responsabilidade clara.
- Conteúdo institucional deve utilizar somente informações homologadas.
- Páginas devem permanecer simples e coerentes com a arquitetura estática-first.
- Não criar páginas independentes apenas para fragmentar conteúdo que funciona adequadamente como seção da página inicial.
- Novas páginas ou alterações relevantes de arquitetura devem ser precedidas pela definição correspondente e, quando necessário, por uma decisão arquitetural formal.

---

## Referências

- `AGENTS.md`
- `README.md`
- `docs/architecture.md`
- `docs/content-architecture.md`
- `docs/design-system.md`
- `docs/decisions/`
