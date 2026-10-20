// Conteúdo textual e dados da página /agillex-hub, isolados da camada de apresentação.
//
// Solução comercial: Agillex Hub (Plataforma Integrada de Atendimento IA, Agenda, CRM e Pagamentos).
// Rota pública: /agillex-hub/
// Organização: AllLogic Online — Engenharia de Soluções Digitais

export interface HubCTA {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface HubHeroContent {
  badge: string;
  title: string;
  description: string;
  actions: {
    primary: HubCTA;
    secondary: HubCTA;
  };
  trust: string;
}

export interface HubAudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface HubAudienceContent {
  eyebrow: string;
  title: string;
  complement: string;
  description: string;
  items: HubAudienceItem[];
}

export interface HubPillarItem {
  badge: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface HubPillarsContent {
  eyebrow: string;
  title: string;
  description: string;
  items: HubPillarItem[];
}

export interface HubPricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  priceMonthly: string;
  priceMonthlyVal: number;
  priceYearlyMonthly: string;
  priceYearlyMonthlyVal: number;
  periodMonthly: string;
  periodYearly: string;
  yearlyDiscount: string;
  description: string;
  features: string[];
  cta: HubCTA;
}

export interface HubPricingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  tiers: HubPricingTier[];
  guarantee: {
    title: string;
    description: string;
  };
}

export interface HubFaqItem {
  question: string;
  answer: string;
}

export interface HubFaqContent {
  eyebrow: string;
  title: string;
  description: string;
  items: HubFaqItem[];
  support: {
    text: string;
    cta: HubCTA;
  };
}

export interface HubTrialPoint {
  label: string;
  text: string;
}

export interface HubTrialCard {
  highlight: string;
  title: string;
  description: string;
  action: HubCTA;
  note?: string;
}

export interface HubTrialContent {
  eyebrow: string;
  title: string;
  description: string;
  points: HubTrialPoint[];
  card: HubTrialCard;
}

export interface AgillexHubContent {
  meta: {
    title: string;
    description: string;
  };
  hero: HubHeroContent;
  audience: HubAudienceContent;
  pillars: HubPillarsContent;
  pricing: HubPricingContent;
  faq: HubFaqContent;
  trial: HubTrialContent;
}

export const agillexHubContent: AgillexHubContent = {
  meta: {
    title: "Agillex Hub — Plataforma Integrada de Gestão, Atendimento IA e Agenda | AllLogic Online",
    description:
      "Centralize sua operação comercial em uma única plataforma: atendimento inteligente no WhatsApp 24/7 com IA humanizada, agendamento online automático sincronizado, funil de vendas CRM e pagamentos integrados com taxa fixa.",
  },
  hero: {
    badge: "Plataforma Operacional Unificada",
    title: "Agillex Hub: O ecossistema completo para atender, agendar e vender no piloto automático",
    description:
      "Chega de trabalhar com ferramentas desconectadas e perder clientes por lentidão no WhatsApp. O Agillex Hub integra Atendimento com Inteligência Artificial humanizada, Agendamento Online Sincronizado, Pipeline CRM Kanban e Cobrança via Pix e Cartão em uma interface multi-empresa intuitiva e de alta performance.",
    actions: {
      primary: {
        label: "Começar 14 dias grátis",
        href: "https://hub.alllogiconline.com.br/checkout?modulo=combo&plano=combo&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      secondary: {
        label: "Conhecer os pilares",
        href: "#modulos",
        target: "_self",
        rel: "",
      },
    },
    trust: "Atendimento IA 24/7 · Agillex Agenda · Funil CRM · Agillex Pay com taxa fixa · Sem taxa de setup",
  },
  audience: {
    eyebrow: "Para quem é o Agillex Hub",
    title: "Ideal para empresas que precisam de organização total e velocidade de resposta",
    complement:
      "Desenvolvido pela AllLogic Online para negócios orientados a serviços que atendem dezenas de contatos todos os dias no WhatsApp e não podem desperdiçar tempo nem oportunidades.",
    description:
      "Sua equipe ganha tempo e previsibilidade enquanto a tecnologia cuida da triagem, do esclarecimento de dúvidas, da marcação de horários na agenda e do acompanhamento de oportunidades.",
    items: [
      {
        icon: "⚕",
        title: "Clínicas & Consultórios",
        description:
          "Esclarecimento instantâneo de dúvidas sobre especialidades, exames e convênios, com agendamento direto de consultas sem sobrecarregar a recepção.",
      },
      {
        icon: "⚖",
        title: "Escritórios & Consultorias",
        description:
          "Advocacia, contabilidade e consultoria: triagem de novos clientes, qualificação de demandas e agendamento de reuniões estratégicas com lembretes automáticos.",
      },
      {
        icon: "✂",
        title: "Estúdios & Clínicas de Estética",
        description:
          "Barbearias, salões e centros de estética: controle de múltiplos profissionais, serviços com durações independentes e zero choques de horário na agenda.",
      },
      {
        icon: "🏢",
        title: "Empresas com Múltiplas Unidades",
        description:
          "Gerencie matriz e filiais em um único painel multi-tenant com segurança, visualizando leads, agendamentos e faturamento de forma centralizada.",
      },
      {
        icon: "💼",
        title: "Profissionais Especialistas",
        description:
          "Psicólogos, nutricionistas, corretores e consultores: atendimento profissional 24 horas e recebimento adiantado via Pix ou Cartão para garantir o compromisso.",
      },
    ],
  },
  pillars: {
    eyebrow: "Ecossistema Completo",
    title: "5 pilares integrados trabalhando juntos pelo seu crescimento",
    description:
      "Cada módulo foi desenhado com rigor de engenharia pela AllLogic Online para eliminar retrabalho e criar uma experiência fluida para você e para o seu cliente.",
    items: [
      {
        badge: "01 · Atendimento Inteligente",
        title: "Agillex Atendimento (IA no WhatsApp 24/7)",
        tagline: "Inteligência artificial humanizada treinada na realidade da sua empresa.",
        description:
          "Responde em segundos qualquer dúvida sobre produtos, serviços, valores e horários. Ouve áudios de voz, interpreta contexto de mensagens de texto e realiza transbordo automático para um atendente humano com histórico preservado quando necessário.",
        highlights: [
          "Disponibilidade ininterrupta 24 horas por dia, 7 dias por semana",
          "Compreensão de áudios de voz e mensagens de texto naturais",
          "Pausa e retoma IA com 1 clique para intervenção humana",
          "Conexão segura via WhatsApp Oficial",
        ],
      },
      {
        badge: "02 · Gestão de Horários",
        title: "Agillex Agenda (Sincronizada & Sem Conflitos)",
        tagline: "Página pública exclusiva aberta 24 horas para seus clientes agendarem sozinhos.",
        description:
          "Evita choques de horário e esquecimentos. Permite múltiplos profissionais com escalas individuais, bloqueios de intervalos e sincronização bidirecional em tempo real com o Google Calendar.",
        highlights: [
          "Página pública exclusiva e responsiva (agenda.alllogiconline.com.br/sua-empresa)",
          "Lembretes e confirmações automáticas disparadas no WhatsApp",
          "Sincronização instantânea com Google Calendar",
          "Redução comprovada de até 85% nas faltas de clientes (no-shows)",
        ],
      },
      {
        badge: "03 · Pipeline de Vendas",
        title: "Agillex CRM (Funil Kanban de Oportunidades)",
        tagline: "Acompanhe visualmente a evolução de cada lead desde o primeiro contato.",
        description:
          "Quadro Kanban com estágios personalizáveis (Novo Lead, Em Atendimento, Follow-up, Agendado, Concluído). Mude estágios, adicione tags, registre notas e visualize o valor estimado de oportunidades em tempo real.",
        highlights: [
          "Quadro visual de oportunidades em tempo real",
          "Classificação automática de contatos recebidos pelo WhatsApp",
          "Histórico completo de interações e valores estimados",
          "Filtros por estágio, responsável e data de contato",
        ],
      },
      {
        badge: "04 · Cobrança Transparente",
        title: "Agillex Pay (Cobrança Pix & Cartão via Asaas)",
        tagline: "Receba pagamentos com taxa fixa de apenas R$ 1,99 por transação concluída.",
        description:
          "Integração oficial de pagamento que permite cobrar adiantamentos ou o valor total do serviço diretamente pelo WhatsApp ou na confirmação do agendamento. Sem cobrança de porcentagens sobre o seu faturamento.",
        highlights: [
          "Taxa fixa imbatível de apenas R$ 1,99 por pagamento confirmado",
          "Geração instantânea de Pix Copia e Cola e QR Code dinâmico",
          "Pagamento seguro via Cartão de Crédito e Boleto",
          "Liquidação direta na sua conta bancária sem intermediários",
        ],
      },
      {
        badge: "05 · Gestão Centralizada",
        title: "Painel Unificado & Arquitetura Multi-Tenant",
        tagline: "Uma única tela para monitorar toda a operação da sua empresa.",
        description:
          "Troque de unidade com 1 clique, visualize métricas consolidadas de conversão, volume de conversas, faturamento acumulado e gerencie sua base de conhecimento com documentação RAG proprietária.",
        highlights: [
          "Dashboard executivo em tempo real com métricas claras",
          "Estrutura multi-tenant pronta para franquias e filiais",
          "Base de conhecimento RAG atualizável para treino da IA",
          "Segurança, criptografia e isolamento rigoroso de dados",
        ],
      },
    ],
  },
  pricing: {
    eyebrow: "Investimento Claro e Transparente",
    title: "O ecossistema completo por um valor acessível",
    subtitle:
      "Sem custos ocultos, sem fidelidade forçada e sem taxas percentuais sobre seus agendamentos.",
    tiers: [
      {
        id: "combo-pro",
        name: "Combo Agillex Hub Pro",
        badge: "Solução Completa",
        popular: true,
        tagline: "Tudo o que sua empresa precisa para atender com IA, agendar horários e gerenciar vendas.",
        priceMonthly: "R$ 249,90",
        priceMonthlyVal: 249.9,
        priceYearlyMonthly: "R$ 199,90",
        priceYearlyMonthlyVal: 199.9,
        periodMonthly: "/mês no plano mensal",
        periodYearly: "/mês no plano anual (R$ 2.398,80/ano)",
        yearlyDiscount: "Economize R$ 600 no plano anual",
        description:
          "Ecossistema completo reunindo Atendimento com IA no WhatsApp, Agillex Agenda para equipe, CRM Kanban e Agillex Pay integrado.",
        features: [
          "Atendimento Inteligente com IA no WhatsApp (até 2.000 conversas/mês)",
          "Agillex Agenda Pro para equipe de até 5 profissionais",
          "Página pública exclusiva aberta 24/7 com link personalizado",
          "Sincronização bidirecional em tempo real com Google Calendar",
          "Confirmações e lembretes automáticos no WhatsApp",
          "Agillex CRM Kanban com leads e estágios ilimitados",
          "Agillex Pay integrado com taxa fixa de apenas R$ 1,99 por transação",
          "Transbordo humano em 1 clique com histórico preservado",
          "Base de conhecimento personalizada para o seu negócio",
          "Suporte prioritário e onboarding guiado pela AllLogic Online",
        ],
        cta: {
          label: "Começar 14 dias grátis",
          href: "https://hub.alllogiconline.com.br/checkout?modulo=combo&plano=combo&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "hub-enterprise",
        name: "Agillex Hub Corporativo / Franquias",
        badge: "Grandes Operações & Redes",
        popular: false,
        tagline: "Para empresas com mais de 10 profissionais, múltiplas filiais ou alto volume de conversas.",
        priceMonthly: "Sob Consulta",
        priceMonthlyVal: 0,
        priceYearlyMonthly: "Sob Consulta",
        priceYearlyMonthlyVal: 0,
        periodMonthly: "projeto personalizado",
        periodYearly: "projeto personalizado",
        yearlyDiscount: "Condições especiais sob medida",
        description:
          "Solução sob medida para redes de clínicas, franquias e empresas que demandam múltiplos números de WhatsApp e integrações dedicadas.",
        features: [
          "Múltiplas instâncias de WhatsApp com números independentes",
          "Equipes com mais de 10 profissionais com agendas exclusivas",
          "Franquias e unidades operacionais gerenciadas em painel único",
          "Integrações dedicadas com ERPs e bancos de dados corporativos",
          "Treinamento de equipe e onboarding presencial ou online",
          "Gerente de conta exclusivo e SLA de atendimento prioritário",
          "Personalização visual e domínio exclusivo",
        ],
        cta: {
          label: "Falar com especialista",
          href: "https://wa.me/5511966381915?text=Ol%C3%A1%2C%20gostaria%20de%20um%20plano%20Enterprise%20do%20Agillex%20Hub%20da%20AllLogic%20Online",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
    ],
    guarantee: {
      title: "14 dias de teste com risco zero",
      description:
        "Experimente o Agillex Hub na rotina da sua empresa, ganhe tempo e organização no atendimento e agendamento dos seus clientes, cancele a qualquer momento sem custos adicionais.",
    },
  },
  faq: {
    eyebrow: "Dúvidas Frequentes",
    title: "Tudo o que você precisa saber sobre o Agillex Hub",
    description:
      "Perguntas comuns sobre implantação, funcionamento dos módulos e suporte técnico.",
    items: [
      {
        question: "Como o Agillex Hub conecta o atendimento da IA com a agenda?",
        answer:
          "A IA compreende a solicitação do cliente no WhatsApp, consulta a disponibilidade de horários dos profissionais em tempo real e pode direcionar o cliente com um link exclusivo e seguro para confirmação ou concluir o agendamento automaticamente, enviando lembretes prévios.",
      },
      {
        question: "Preciso ter conhecimento técnico para usar o sistema?",
        answer:
          "Não. O painel foi concebido pela AllLogic Online com foco na simplicidade e usabilidade diária. Toda a interface é em português, intuitiva e conta com acompanhamento e suporte da nossa equipe.",
      },
      {
        question: "Como funciona a taxa fixa do Agillex Pay?",
        answer:
          "Diferente de gateways de pagamento que cobram 3% a 6% de tudo o que sua empresa fatura, o Agillex Pay possui uma taxa fixa de apenas R$ 1,99 por cobrança concluída (via Asaas). O restante do valor vai integralmente para a conta bancária da sua empresa.",
      },
      {
        question: "O robô da IA substitui completamente meus atendentes humanos?",
        answer:
          "A IA atua como uma triagem qualificada de primeiro nível: responde a mais de 80% das dúvidas repetitivas sobre horários, serviços e valores. Caso o cliente solicite um atendente humano ou haja uma situação específica, a IA pausa o atendimento e notifica sua equipe.",
      },
      {
        question: "Consigo sincronizar os agendamentos com meu Google Calendar?",
        answer:
          "Sim. O Agillex Agenda possui sincronização bidirecional com o Google Calendar. Quando um horário é marcado ou bloqueado na sua agenda pessoal, o sistema bloqueia automaticamente a disponibilidade no site.",
      },
      {
        question: "Existe período de fidelidade ou multa rescisória?",
        answer:
          "Não. No plano mensal você pode cancelar a qualquer momento sem taxas ou multas de rescisão. A AllLogic Online preza pela transparência e honestidade em todos os seus contratos.",
      },
    ],
    support: {
      text: "Ainda tem alguma dúvida sobre a implantação na sua empresa?",
      cta: {
        label: "Falar com nossa equipe no WhatsApp",
        href: "https://wa.me/5511966381915?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20o%20Agillex%20Hub%20da%20AllLogic%20Online",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  },
  trial: {
    eyebrow: "Transformação Operacional",
    title: "Pronto para modernizar o atendimento e os agendamentos da sua empresa?",
    description:
      "Junte-se às empresas que já utilizam a engenharia de soluções da AllLogic Online para automatizar rotinas, encantar clientes e faturar mais com menos esforço.",
    points: [
      {
        label: "Ativação imediata e sem atrito",
        text: "Inicie seus 14 dias de teste em poucos minutos com suporte da equipe da AllLogic Online.",
      },
      {
        label: "Ecossistema 100% integrado",
        text: "Atendimento IA no WhatsApp, Agenda sincronizada, CRM Kanban e Cobrança via Pix em um único painel.",
      },
      {
        label: "Risco zero comprovado",
        text: "Sem fidelidade, sem taxa de setup e cancelamento a qualquer momento sem custos adicionais.",
      },
    ],
    card: {
      highlight: "14 DIAS SEM RISCO",
      title: "Comece seu teste gratuito",
      description:
        "Experimente o Agillex Hub na rotina da sua empresa e ganhe tempo e organização.",
      action: {
        label: "Iniciar teste gratuito de 14 dias",
        href: "https://hub.alllogiconline.com.br/checkout?modulo=combo&plano=combo&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      note: "Sem taxa de adesão · Ativação imediata · Suporte especializado",
    },
  },
};
