// Conteúdo textual e dados da página /agillex-agenda, isolados da apresentação.
//
// Solução comercial: Agillex Agenda (Sistema de Agendamento Online).
// Rota pública: /agillex-agenda/
//
// Diretriz de redação comercial:
// Condições específicas como prazos de teste gratuito, dispensa de cartão de crédito,
// políticas de retenção de dados e limites de customização visual dependem
// de homologação formal do produto e da área comercial. A redação abaixo adota postura
// institucional conservadora, sem prometer garantias não comprovadas, preservando a
// finalidade da página e os destinos funcionais dos links.
//
// Observação de destinos:
// - O destino "https://agenda.alllogiconline.com.br/agillex" permanece provisório,
//   aguardando aprovação explícita do responsável.
// - O contato de atendimento utiliza o canal oficial de WhatsApp (11) 96638-1915.

export interface AgillexCTA {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface AgillexHeroContent {
  badge: string;
  title: string;
  description: string;
  actions: {
    primary: AgillexCTA;
    secondary: AgillexCTA;
  };
  trust: string;
}

export interface AgillexAudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface AgillexAudienceContent {
  eyebrow: string;
  title: string;
  complement: string;
  description: string;
  items: AgillexAudienceItem[];
}

export interface AgillexFeatureItem {
  badge: string;
  title: string;
  description: string;
}

export interface AgillexFeaturesContent {
  eyebrow: string;
  title: string;
  description: string;
  items: AgillexFeatureItem[];
}

export interface AgillexTrialPoint {
  label: string;
  text: string;
}

export interface AgillexTrialContent {
  eyebrow: string;
  title: string;
  description: string;
  points: AgillexTrialPoint[];
  card: {
    highlight: string;
    title: string;
    description: string;
    action: AgillexCTA;
    note: string;
  };
}

export interface AgillexPricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  capacity: string;
  professionalsCount: number;
  priceMonthly: string;
  priceAnnualMonthly: string;
  annualTotal: string;
  period: string;
  cta: AgillexCTA;
}

export interface AgillexPricingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  universalNote: string;
  features: string[];
  tiers: AgillexPricingTier[];
}

export interface AgillexFaqItem {
  question: string;
  answer: string;
}

export interface AgillexFaqContent {
  eyebrow: string;
  title: string;
  description: string;
  items: AgillexFaqItem[];
}

export interface AgillexDemoTab {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface AgillexDemoContent {
  eyebrow: string;
  title: string;
  description: string;
  tabs: AgillexDemoTab[];
}

export interface AgillexContent {
  meta: {
    title: string;
    description: string;
  };
  hero: AgillexHeroContent;
  audience: AgillexAudienceContent;
  features: AgillexFeaturesContent;
  demo: AgillexDemoContent;
  pricing: AgillexPricingContent;
  faq: AgillexFaqContent;
  trial: AgillexTrialContent;
}

export const agillexContent: AgillexContent = {
  meta: {
    title: "Agillex Agenda — Sistema de Agendamento Online | AllLogic Online",
    description:
      "Conheça o Agillex Agenda: a solução da AllLogic Online para organizar atendimentos, centralizar serviços e simplificar o agendamento de clientes.",
  },
  hero: {
    badge: "Sistema de Agendamento Online",
    title: "Agillex Agenda: organização e simplicidade para o seu atendimento",
    description:
      "A solução de agendamento online que centraliza os agendamentos, clientes e serviços do seu negócio em um só lugar. Seus clientes agendam serviços com facilidade pelo celular, tablet ou computador.",
    actions: {
      primary: {
        label: "Experimentar o Agillex Agenda",
        href: "https://agenda.alllogiconline.com.br/agillex",
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
    trust: "Configuração simples · Você organiza seu negócio diretamente na plataforma",
  },
  audience: {
    eyebrow: "Para quem é",
    title: "Desenvolvido para negócios que atendem com hora marcada",
    complement:
      "Negócios que atendem com hora marcada e/ou que precisam organizar e ter fácil acesso à lista de clientes a serem atendidos.",
    description:
      "Perfeito para empresas e prestadores de serviços de todos os portes que buscam atender seus clientes de forma profissional, sem complicações operacionais.",
    items: [
      {
        icon: "✂",
        title: "Barbearias e Salões",
        description:
          "Organize múltiplos profissionais, durações específicas de cortes e serviços com visualização clara da jornada diária.",
      },
      {
        icon: "✨",
        title: "Estética e Beleza",
        description:
          "Permita que seus clientes escolham serviços combinados e horários disponíveis sem necessidade de trocas infinitas de mensagens.",
      },
      {
        icon: "⚕",
        title: "Clínicas e Consultórios",
        description:
          "Atendimento organizado com regras de antecedência mínima, intervalos de descanso e histórico de reagendamentos.",
      },
      {
        icon: "🐾",
        title: "Petshops e Personal Trainers",
        description:
          "Defina horários para sessões e atendimentos específicos, organize a lista de clientes e mantenha serviços e horários sob controle.",
      },
      {
        icon: "★",
        title: "Estúdios e Serviços",
        description:
          "Sua marca em destaque com página própria de agendamento online funcionando 24 horas por dia, 7 dias por semana.",
      },
    ],
  },
  features: {
    eyebrow: "Recursos Efetivos",
    title: "Tudo o que sua rotina precisa, sem excessos",
    description:
      "Recursos práticos e funcionais construídos com a metodologia de engenharia da AllLogic Online: preservando o que funciona e facilitando a gestão.",
    items: [
      {
        badge: "01",
        title: "Agendamento Online 24/7",
        description:
          "Seus clientes escolhem o serviço, o profissional de preferência, a data e o horário disponível com confirmação rápida e intuitiva.",
      },
      {
        badge: "02",
        title: "Equipe e Horários sob Controle",
        description:
          "Defina a disponibilidade individual de cada membro da equipe, jornadas de trabalho personalizadas e intervalos entre atendimentos.",
      },
      {
        badge: "03",
        title: "Painel Administrativo Completo",
        description:
          "Visualize os horários marcados do dia, da semana e do mês com filtros ágeis, reagendamento com histórico e cancelamento seguro.",
      },
      {
        badge: "04",
        title: "Página Pública de Agendamento",
        description:
          "Disponibilize uma página com os dados do seu negócio, catálogo de serviços e canais de contato para facilitar a escolha de horários.",
      },
      {
        badge: "05",
        title: "Pesquisa e Histórico",
        description:
          "Encontre rapidamente qualquer atendimento passado ou futuro pelo nome do cliente ou telefone, acompanhando o histórico do negócio.",
      },
      {
        badge: "06",
        title: "Mobilidade e Desempenho",
        description:
          "Interface 100% responsiva para celular, tablet e computador, tanto para os seus clientes quanto para a administração da agenda.",
      },
    ],
  },
  demo: {
    eyebrow: "EXPERIÊNCIA NA PRÁTICA",
    title: "Veja como funciona no dia a dia",
    description:
      "Uma jornada simples e sem atrito para o seu cliente, com controle total para a sua equipe e comunicação automatizada.",
    tabs: [
      {
        id: "cliente",
        label: "Agendamento do Cliente",
        icon: "📱",
        badge: "Passo a Passo Rápido",
        title: "Seu cliente agenda em menos de 1 minuto pelo celular",
        description:
          "Sem necessidade de baixar aplicativo ou criar cadastro demorado. O cliente acessa seu link exclusivo, escolhe o serviço desejado, seleciona o profissional e o melhor horário disponível.",
      },
      {
        id: "whatsapp",
        label: "Confirmação via WhatsApp",
        icon: "💬",
        badge: "Automatização Integrada",
        title: "Confirmação imediata e lembretes para evitar faltas",
        description:
          "Assim que o horário é agendado, uma mensagem personalizada de confirmação é enviada automaticamente no WhatsApp do cliente com todos os dados do atendimento.",
      },
      {
        id: "painel",
        label: "Painel de Controle",
        icon: "📅",
        badge: "Gestão Centralizada",
        title: "Sua agenda organizada e atualizada em tempo real",
        description:
          "Tenha uma visão clara dos horários do dia, da semana e da disponibilidade de cada profissional. Reagende ou cancele atendimentos com apenas alguns cliques.",
      },
    ],
  },
  pricing: {
    eyebrow: "PLANOS E PREÇOS",
    title: "Plataforma completa em todos os planos",
    subtitle:
      "Todos os recursos liberados, clientes e agendamentos ilimitados. Escolha apenas a capacidade ideal para o tamanho da sua equipe.",
    universalNote: "Todos os planos incluem 14 dias de teste grátis sem cartão de crédito e sem fidelidade.",
    features: [
      "Acesso a 100% dos recursos da plataforma em todos os planos",
      "Clientes, serviços e agendamentos ilimitados",
      "Página pública exclusiva do seu negócio aberta 24/7",
      "Notificações e confirmações automáticas via WhatsApp",
      "Painel administrativo com visão diária, semanal e mensal",
      "Gestão de escalas, horários e intervalos de trabalho",
      "Totalmente adaptado para celular, tablet e computador",
      "14 dias de teste grátis — sem cartão de crédito e sem fidelidade",
    ],
    tiers: [
      {
        id: "inicial",
        name: "1 Profissional",
        badge: "Autônomos",
        tagline: "Ideal para profissionais autônomos e estúdios individuais com foco em simplicidade.",
        capacity: "1 Profissional",
        professionalsCount: 1,
        priceMonthly: "49,90",
        priceAnnualMonthly: "39,90",
        annualTotal: "Cobrado anualmente: R$ 478,80 ao ano (20% de economia)",
        period: "/mês",
        cta: {
          label: "Começar 14 dias grátis",
          href: "https://agenda.alllogiconline.com.br/agillex?plano=inicial",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "intermediario",
        name: "Até 5 Profissionais",
        badge: "Mais Escolhido",
        popular: true,
        tagline: "Para barbearias, clínicas, salões e estúdios com equipe em crescimento.",
        capacity: "Até 5 Profissionais",
        professionalsCount: 5,
        priceMonthly: "99,90",
        priceAnnualMonthly: "79,90",
        annualTotal: "Cobrado anualmente: R$ 958,80 ao ano (20% de economia)",
        period: "/mês",
        cta: {
          label: "Começar 14 dias grátis",
          href: "https://agenda.alllogiconline.com.br/agillex?plano=intermediario",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "avancado",
        name: "Até 10 Profissionais",
        badge: "Grandes Equipes",
        tagline: "Para clínicas e estabelecimentos com múltiplos atendimentos simultâneos.",
        capacity: "Até 10 Profissionais",
        professionalsCount: 10,
        priceMonthly: "169,90",
        priceAnnualMonthly: "139,90",
        annualTotal: "Cobrado anualmente: R$ 1.678,80 ao ano (~18% de economia)",
        period: "/mês",
        cta: {
          label: "Começar 14 dias grátis",
          href: "https://agenda.alllogiconline.com.br/agillex?plano=avancado",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
    ],
  },
  faq: {
    eyebrow: "DÚVIDAS FREQUENTES",
    title: "Perguntas comuns sobre o Agillex Agenda",
    description:
      "Tudo o que você precisa saber para começar a usar a plataforma hoje mesmo.",
    items: [
      {
        question: "Como funciona o teste gratuito de 14 dias?",
        answer:
          "Você cria sua conta e tem acesso ilimitado a todos os recursos da plataforma durante 14 dias. Não solicitamos dados de cartão de crédito e você só assina se o sistema fizer sentido para a rotina do seu negócio.",
      },
      {
        question: "Preciso instalar algum aplicativo no celular ou computador?",
        answer:
          "Não! O Agillex Agenda funciona 100% na nuvem pelo navegador. Você e seus clientes podem acessar pelo celular, tablet ou computador sem precisar instalar nada das lojas de aplicativos.",
      },
      {
        question: "Como funcionam as confirmações por WhatsApp?",
        answer:
          "Assim que o cliente conclui um agendamento na sua página pública, o sistema envia uma mensagem automática de confirmação no WhatsApp dele com a data, horário, serviço e profissional agendados.",
      },
      {
        question: "Posso mudar de plano se minha equipe aumentar?",
        answer:
          "Sim, a qualquer momento. Se você começar com o plano individual e sua equipe crescer, basta migrar para o plano de até 5 ou até 10 profissionais diretamente no sistema, preservando todo o histórico de agendamentos e clientes.",
      },
      {
        question: "Existe taxa de cancelamento ou contrato de fidelidade?",
        answer:
          "Não há taxa de cancelamento e nem fidelidade. No plano mensal você pode cancelar a qualquer momento sem qualquer multa.",
      },
      {
        question: "Como meus clientes acessam minha agenda?",
        answer:
          "Você recebe um link exclusivo do seu negócio (como agenda.alllogiconline.com.br/seunegocio) para colocar na bio do Instagram, no botão do WhatsApp ou enviar diretamente aos seus clientes.",
      },
    ],
  },
  trial: {
    eyebrow: "EXPERIMENTE NA PRÁTICA",
    title: "Conheça o Agillex Agenda na rotina do seu negócio",
    description:
      "A melhor forma de avaliar uma solução de agendamento é acompanhando seu funcionamento no dia a dia. Conheça a plataforma, explore os recursos de atendimento e veja como a tecnologia pode simplificar sua gestão.",
    points: [
      {
        label: "Configuração inicial direta",
        text: "Cadastre seus serviços, horários e equipe para iniciar a organização dos atendimentos.",
      },
      {
        label: "Recursos essenciais reunidos",
        text: "Centralize horários, clientes e serviços em uma interface clara e funcional.",
      },
      {
        label: "Suporte e acompanhamento",
        text: "A equipe da AllLogic Online está disponível para orientar e esclarecer qualquer dúvida.",
      },
    ],
    card: {
      highlight: "ACESSO À PLATAFORMA",
      title: "Comece agora mesmo",
      description: "Acesse o sistema para conhecer a interface.",
      action: {
        label: "Acessar o Agillex Agenda",
        href: "https://agenda.alllogiconline.com.br/agillex",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      note: "",
    },
  },
};
