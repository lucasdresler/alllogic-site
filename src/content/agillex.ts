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
  priceMonthly: string;
  priceAnnualMonthly: string;
  annualTotal: string;
  period: string;
  features: string[];
  cta: AgillexCTA;
}

export interface AgillexPricingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  universalNote: string;
  tiers: AgillexPricingTier[];
}

export interface AgillexContent {
  meta: {
    title: string;
    description: string;
  };
  hero: AgillexHeroContent;
  audience: AgillexAudienceContent;
  features: AgillexFeaturesContent;
  pricing: AgillexPricingContent;
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
        label: "Fale com nossa equipe",
        href: "https://wa.me/5511966381915",
        target: "_blank",
        rel: "noopener noreferrer",
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
  pricing: {
    eyebrow: "PLANOS E PREÇOS",
    title: "Plataforma completa em todos os planos",
    subtitle:
      "Todos os planos contam com 100% dos recursos liberados, clientes e agendamentos ilimitados. Escolha apenas a capacidade ideal para o tamanho da sua equipe.",
    universalNote: "Todos os planos incluem 14 dias de teste grátis sem cartão de crédito e sem fidelidade.",
    tiers: [
      {
        id: "inicial",
        name: "Inicial",
        tagline: "Para profissionais autônomos e estúdios individuais com foco em simplicidade.",
        capacity: "1 Profissional",
        priceMonthly: "49,90",
        priceAnnualMonthly: "39,90",
        annualTotal: "R$ 478,80 ao ano (20% de economia)",
        period: "/mês",
        features: [
          "1 profissional com escalas e horários próprios",
          "Plataforma completa com 100% dos recursos",
          "Clientes, serviços e agendamentos ilimitados",
          "Página pública exclusiva de agendamento online 24/7",
          "Painel administrativo com visão diária, semanal e mensal",
          "Totalmente responsivo para celular, tablet e computador",
          "14 dias de teste grátis sem cartão de crédito",
        ],
        cta: {
          label: "Começar 14 dias grátis",
          href: "https://agenda.alllogiconline.com.br/agillex?plano=inicial",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "intermediario",
        name: "Intermediário",
        badge: "Mais Escolhido",
        popular: true,
        tagline: "Para barbearias, clínicas e salões com equipe em crescimento.",
        capacity: "Até 5 Profissionais",
        priceMonthly: "99,90",
        priceAnnualMonthly: "79,90",
        annualTotal: "R$ 958,80 ao ano (20% de economia)",
        period: "/mês",
        features: [
          "Até 5 profissionais com jornadas e intervalos próprios",
          "Plataforma completa com 100% dos recursos",
          "Clientes, serviços e agendamentos ilimitados",
          "Gestão centralizada de atendimentos da equipe",
          "Página pública exclusiva de agendamento online 24/7",
          "Painel administrativo com visão diária, semanal e mensal",
          "Totalmente responsivo para celular, tablet e computador",
          "14 dias de teste grátis sem cartão de crédito",
        ],
        cta: {
          label: "Começar 14 dias grátis",
          href: "https://agenda.alllogiconline.com.br/agillex?plano=intermediario",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "avancado",
        name: "Avançado",
        tagline: "Para estabelecimentos com grande fluxo e múltiplos profissionais.",
        capacity: "Até 10 Profissionais",
        priceMonthly: "169,90",
        priceAnnualMonthly: "139,90",
        annualTotal: "R$ 1.678,80 ao ano (economia de ~18%)",
        period: "/mês",
        features: [
          "Até 10 profissionais na mesma conta",
          "Plataforma completa com 100% dos recursos",
          "Clientes, serviços e agendamentos ilimitados",
          "Gestão ampla de múltiplos atendimentos simultâneos",
          "Página pública exclusiva de agendamento online 24/7",
          "Atendimento e suporte comercial prioritário",
          "Totalmente responsivo para celular, tablet e computador",
          "14 dias de teste grátis sem cartão de crédito",
        ],
        cta: {
          label: "Começar 14 dias grátis",
          href: "https://agenda.alllogiconline.com.br/agillex?plano=avancado",
          target: "_blank",
          rel: "noopener noreferrer",
        },
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
      description:
        "Acesse o sistema para conhecer a interface ou converse com nossa equipe para detalhes de implantação.",
      action: {
        label: "Acessar o Agillex Agenda",
        href: "https://agenda.alllogiconline.com.br/agillex",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      note: "Consulte nossa equipe para condições comerciais e planos disponíveis",
    },
  },
};
