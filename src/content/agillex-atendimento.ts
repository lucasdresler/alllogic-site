// Conteúdo textual e dados da página /agillex-atendimento, isolados da apresentação.
//
// Solução comercial: Agillex Atendimento (Atendimento Inteligente no WhatsApp com IA).
// Rota pública: /agillex-atendimento/
//
// Família: Agillex
// Organização: AllLogic Online — Engenharia de Soluções Digitais
// Canal oficial de contato: WhatsApp (11) 96638-1915

export interface AtendimentoCTA {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface AtendimentoHeroContent {
  badge: string;
  title: string;
  description: string;
  actions: {
    primary: AtendimentoCTA;
    secondary: AtendimentoCTA;
  };
  trust: string;
}

export interface AtendimentoAudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface AtendimentoAudienceContent {
  eyebrow: string;
  title: string;
  complement: string;
  description: string;
  items: AtendimentoAudienceItem[];
}

export interface AtendimentoFeatureItem {
  badge: string;
  title: string;
  description: string;
}

export interface AtendimentoFeaturesContent {
  eyebrow: string;
  title: string;
  description: string;
  items: AtendimentoFeatureItem[];
}

export interface AtendimentoPricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  capacity: string;
  monthlyConversationsLimit: number;
  priceMonthly: string;
  priceAnnualMonthly: string;
  annualTotal: string;
  period: string;
  cta: AtendimentoCTA;
}

export interface AtendimentoPricingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  universalNote: string;
  features: string[];
  tiers: AtendimentoPricingTier[];
}

export interface AtendimentoFaqItem {
  question: string;
  answer: string;
}

export interface AtendimentoFaqContent {
  eyebrow: string;
  title: string;
  description: string;
  items: AtendimentoFaqItem[];
}

export interface AtendimentoDemoTab {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface AtendimentoDemoContent {
  eyebrow: string;
  title: string;
  description: string;
  tabs: AtendimentoDemoTab[];
}

export interface AtendimentoTrialPoint {
  label: string;
  text: string;
}

export interface AtendimentoTrialContent {
  eyebrow: string;
  title: string;
  description: string;
  points: AtendimentoTrialPoint[];
  card: {
    highlight: string;
    title: string;
    description: string;
    action: AtendimentoCTA;
    note: string;
  };
}

export interface AgillexAtendimentoContent {
  meta: {
    title: string;
    description: string;
  };
  hero: AtendimentoHeroContent;
  audience: AtendimentoAudienceContent;
  features: AtendimentoFeaturesContent;
  demo: AtendimentoDemoContent;
  pricing: AtendimentoPricingContent;
  faq: AtendimentoFaqContent;
  trial: AtendimentoTrialContent;
}

export const agillexAtendimentoContent: AgillexAtendimentoContent = {
  meta: {
    title: "Agillex Atendimento — Atendente com IA no WhatsApp 24/7 | AllLogic Online",
    description:
      "Atenda seus clientes no WhatsApp com Inteligência Artificial humanizada. Respostas imediatas a dúvidas, compreensão de áudio e texto, transbordo para atendentes e integração com agendamentos.",
  },
  hero: {
    badge: "Atendimento Inteligente no WhatsApp",
    title: "Agillex Atendimento: Inteligência Artificial que atende seus clientes no WhatsApp 24/7",
    description:
      "Esqueça robôs engessados e cardápios de 'digite 1'. O Agillex Atendimento conversa com seus clientes de forma natural, entende mensagens de texto e áudio por voz, tira dúvidas sobre serviços e encaminha para atendentes humanos sempre que necessário.",
    actions: {
      primary: {
        label: "Começar 14 dias grátis",
        href: "https://hub.alllogiconline.com.br/checkout?modulo=atendimento&plano=pro&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      secondary: {
        label: "Ver planos e preços",
        href: "#precos",
        target: "_self",
        rel: "",
      },
    },
    trust: "Sem taxa de setup · Compreensão de áudios · Transbordo humano integrado",
  },
  audience: {
    eyebrow: "Para quem é",
    title: "Ideal para empresas que perdem vendas e clientes por demora no WhatsApp",
    complement:
      "Desenvolvido para negócios que recebem dezenas de mensagens diárias com dúvidas repetitivas, agendamentos e pedidos de orçamento.",
    description:
      "Sua empresa nunca mais deixa um cliente esperando à noite, nos fins de semana ou durante os horários de pico.",
    items: [
      {
        icon: "⚕",
        title: "Clínicas e Consultórios",
        description:
          "Tire dúvidas sobre convênios, preparo para exames, horários e valores sem sobrecarregar a recepção.",
      },
      {
        icon: "⚖",
        title: "Advocacia e Contabilidade",
        description:
          "Faça a triagem inicial do cliente, colete dados da demanda e encaminhe apenas os casos qualificados para o profissional.",
      },
      {
        icon: "✂",
        title: "Barbearias, Salões e Estética",
        description:
          "Informe catálogo de serviços, preços, pacotes e feche agendamentos automaticamente dia e noite.",
      },
      {
        icon: "🏠",
        title: "Imobiliárias e Locações",
        description:
          "Atenda interessados em imóveis 24/7, colete perfis de busca e agende visitas diretamente na agenda dos corretores.",
      },
      {
        icon: "🔧",
        title: "Prestadores e Serviços Locais",
        description:
          "Responda orçamentos rápidos, áreas de cobertura e disponibilidade sem interromper o trabalho de campo.",
      },
    ],
  },
  features: {
    eyebrow: "Recursos Efetivos",
    title: "Inteligência Artificial que trabalha de verdade pelo seu negócio",
    description:
      "Engenharia conversacional desenvolvida pela AllLogic Online: rápida, segura, sem jargões e com foco na experiência do seu cliente.",
    items: [
      {
        badge: "01",
        title: "Conversas Naturais 24 Horas",
        description:
          "A IA responde como um atendente educado e prestativo, explicando sobre seus produtos, horários de atendimento, endereço e diferenciais.",
      },
      {
        badge: "02",
        title: "Compreensão de Mensagens de Áudio",
        description:
          "Seus clientes não precisam digitar. Eles podem enviar áudios por voz no WhatsApp e a IA transcreve, interpreta e responde perfeitamente.",
      },
      {
        badge: "03",
        title: "Memória Contextual da Conversa",
        description:
          "A IA não repete perguntas e mantém a linha de raciocínio durante todo o diálogo, garantindo um atendimento fluido e sem atritos.",
      },
      {
        badge: "04",
        title: "Transbordo Inteligente para Humano",
        description:
          "Se o cliente solicitar falar com um atendente ou se a dúvida exigir decisão humana, a IA pausa o robô e direciona o contato para a sua equipe.",
      },
      {
        badge: "05",
        title: "Integração com Agillex Agenda",
        description:
          "A IA pode consultar os horários vagos dos seus profissionais e fechar agendamentos na hora, sincronizando diretamente com a agenda.",
      },
      {
        badge: "06",
        title: "Base de Conhecimento Segura",
        description:
          "Alimente a IA com a tabela de preços, catálogos em PDF e políticas da sua empresa para garantir respostas precisas e confiáveis.",
      },
    ],
  },
  demo: {
    eyebrow: "EXPERIÊNCIA NA PRÁTICA",
    title: "Veja o Agillex Atendimento em ação no WhatsApp",
    description:
      "Atendimento humanizado que entende áudio, responde dúvidas, qualifica o cliente e passa o bastão para sua equipe na hora certa.",
    tabs: [
      {
        id: "duvidas",
        label: "Dúvidas e Horários",
        icon: "💬",
        title: "Respostas imediatas e sem cardápios de 'digite 1'",
        description:
          "O cliente pergunta como falaria com uma pessoa e a IA responde com cordialidade, tirando dúvidas sobre serviços, prazos e localização.",
        badge: "Resposta em 3 segundos",
      },
      {
        id: "audio",
        label: "Entendimento de Áudio",
        icon: "🎙",
        title: "Compreensão nativa de mensagens de voz",
        description:
          "O cliente grava um áudio de WhatsApp explicando o que precisa. A inteligência artificial transcreve a mensagem e responde na hora.",
        badge: "Transcrição Automática",
      },
      {
        id: "transbordo",
        label: "Transbordo Humano",
        icon: "👤",
        title: "Passagem de bastão segura para sua equipe",
        description:
          "Quando o cliente pede para falar com uma pessoa ou o caso exige análise humana, a IA avisa o setor responsável e pausa o atendimento automático.",
        badge: "Zero Risco Operacional",
      },
      {
        id: "agenda",
        label: "Fechamento de Agendamento",
        icon: "📅",
        title: "Integração direta com o Agillex Agenda",
        description:
          "O cliente escolhe o serviço e o horário pelo WhatsApp e a confirmação é registrada diretamente na agenda e no Google Calendar.",
        badge: "Automação Completa",
      },
    ],
  },
  pricing: {
    eyebrow: "PLANOS E MENSALIDADES",
    title: "Previsibilidade total sem surpresas na fatura",
    subtitle:
      "Franquias generosas de atendimento por mês, sem fidelidade, sem cobrança oculta de tokens e sem taxas de setup.",
    universalNote:
      "Todos os planos contam com IA generativa inclusa, suporte técnico em português e 14 dias de teste grátis sem cartão de crédito.",
    features: [
      "Inteligência Artificial generativa inclusa em todos os planos (sem cobrança extra de tokens)",
      "Compreensão de mensagens de texto e áudio de voz no WhatsApp",
      "Memória contextual e personalização do tom de voz da sua empresa",
      "Transbordo inteligente para atendente humano quando solicitado",
      "Integração direta com o Agillex Agenda",
      "Sem taxa de setup ou custos de implantação",
      "14 dias de teste grátis — sem cartão de crédito e sem fidelidade",
    ],
    tiers: [
      {
        id: "starter",
        name: "Starter (Até 500 conversas)",
        badge: "Autônomos e Pequenos Negócios",
        tagline: "Ideal para profissionais autônomos, estúdios e consultórios com fluxo diário moderado.",
        capacity: "Até 500 atendimentos/mês",
        monthlyConversationsLimit: 500,
        priceMonthly: "99,90",
        priceAnnualMonthly: "79,90",
        annualTotal: "Cobrado anualmente: R$ 958,80 ao ano (20% de economia)",
        period: "/mês",
        cta: {
          label: "Assinar Starter Online",
          href: "https://hub.alllogiconline.com.br/checkout?modulo=atendimento&plano=starter",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "pro",
        name: "Pro (Até 2.000 conversas)",
        badge: "Mais Escolhido",
        popular: true,
        tagline: "Para clínicas, escritórios e empresas com equipe e maior fluxo diário de clientes no WhatsApp.",
        capacity: "Até 2.000 atendimentos/mês",
        monthlyConversationsLimit: 2000,
        priceMonthly: "179,90",
        priceAnnualMonthly: "149,90",
        annualTotal: "Cobrado anualmente: R$ 1.798,80 ao ano (~17% de economia)",
        period: "/mês",
        cta: {
          label: "Assinar Pro Online",
          href: "https://hub.alllogiconline.com.br/checkout?modulo=atendimento&plano=pro",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "combo",
        name: "Combo (Atendimento IA + Agenda)",
        badge: "Solução Completa",
        tagline: "Atendimento inteligente 24/7 + Agillex Agenda Pro para equipe de até 5 profissionais.",
        capacity: "Atendimento IA (2.000 conversas) + Agillex Agenda",
        monthlyConversationsLimit: 2000,
        priceMonthly: "249,90",
        priceAnnualMonthly: "199,90",
        annualTotal: "Cobrado anualmente: R$ 2.398,80 ao ano (20% de economia)",
        period: "/mês",
        cta: {
          label: "Assinar Combo Online",
          href: "https://hub.alllogiconline.com.br/checkout?modulo=combo&plano=combo",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
    ],
  },
  faq: {
    eyebrow: "DÚVIDAS FREQUENTES",
    title: "Perguntas comuns sobre o Agillex Atendimento",
    description:
      "Tudo o que você precisa saber sobre o atendimento com Inteligência Artificial no WhatsApp.",
    items: [
      {
        question: "Como funciona a franquia de conversas por mês?",
        answer:
          "Uma conversa é contabilizada quando um cliente entra em contato com o seu número de WhatsApp dentro de uma janela de 24 horas. Durante esse período, o cliente pode trocar quantas mensagens forem necessárias para tirar dúvidas e ser atendido, contando apenas como 1 conversa na sua franquia.",
      },
      {
        question: "O que acontece se a minha empresa ultrapassar a franquia do mês?",
        answer:
          "O seu atendimento nunca para abruptamente. O sistema emite alertas preventivos quando sua empresa atinge 80% e 100% da franquia. Caso atinja o limite, você pode fazer upgrade de plano, adicionar um pacote extra de conversas (R$ 29,90 por +500 atendimentos) ou permitir que novas mensagens sejam assumidas diretamente pela sua equipe humana.",
      },
      {
        question: "A IA realmente entende mensagens de áudio gravadas pelos clientes?",
        answer:
          "Sim! O Agillex Atendimento possui processador nativo de voz que transcreve e interpreta com alta precisão mensagens de áudio gravadas pelos clientes no WhatsApp, respondendo com clareza em texto de forma imediata.",
      },
      {
        question: "Como funciona o transbordo para um atendente humano?",
        answer:
          "Se o cliente solicitar falar com uma pessoa ('quero falar com atendente', 'chame alguém') ou se a dúvida for complexa e fora das instruções da sua empresa, a IA pausa automaticamente o robô para aquela conversa e notifica o setor responsável para assumir.",
      },
      {
        question: "Preciso pagar taxa de implantação (setup) ou comprar tokens da OpenAI à parte?",
        answer:
          "Não. Diferente de outras plataformas do mercado que cobram de R$ 500 a R$ 2.000 de taxa de implantação ou exigem que você crie contas em dólar em provedores de IA, no Agillex Atendimento o consumo da Inteligência Artificial já está 100% incluso na mensalidade, sem custos surpresa.",
      },
      {
        question: "Como funciona o teste gratuito de 14 dias?",
        answer:
          "Você cria sua conta online em menos de 2 minutos e valida na prática durante 14 dias. Não solicitamos cartão de crédito para iniciar o teste e não há nenhuma fidelidade contratual.",
      },
    ],
  },
  trial: {
    eyebrow: "TESTE SEM COMPROMISSO",
    title: "Pronto para atender seus clientes com agilidade e inteligência?",
    description:
      "Comece hoje mesmo com 14 dias de teste grátis. Ativação online simplificada para você validar os resultados no seu WhatsApp imediatamente.",
    points: [
      {
        label: "Sem cartão de crédito",
        text: "Teste real e completo sem surpresas na fatura.",
      },
      {
        label: "Suporte dedicado",
        text: "Ajudamos você a personalizar as instruções e tom de voz do seu negócio.",
      },
      {
        label: "Sem fidelidade",
        text: "Cancele a qualquer momento se a solução não fizer sentido para a sua rotina.",
      },
    ],
    card: {
      highlight: "14 DIAS GRÁTIS",
      title: "Comece seu teste agora mesmo",
      description:
        "Crie sua conta online em minutos e conecte seu WhatsApp para começar a atender seus clientes com inteligência artificial agora mesmo.",
      action: {
        label: "Iniciar teste gratuito de 14 dias",
        href: "https://hub.alllogiconline.com.br/checkout?modulo=atendimento&plano=pro&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      note: "Ativação 100% online sem necessidade de cartão de crédito.",
    },
  },
};
