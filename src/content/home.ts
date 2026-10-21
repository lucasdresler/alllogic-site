// Conteúdo textual da Home, isolado da camada de apresentação.
// Conteúdo institucional definitivo da narrativa da Home (Sprint de conteúdo real),
// alinhado ao posicionamento homologado da AllLogic Online.
// Campos que representam informação institucional compartilhada reutilizam
// siteContent em vez de duplicar valores (ver src/content/site.ts).
//
// Pendências conhecidas (ver docs/content-architecture.md):
// - portfolio.projects: trabalhos realizados para clientes, com situação e descrição
//   definidas a partir da análise dos projetos. Nenhum resultado ou métrica foi inventado.
// - diagnosis.actions aponta para "/contato", implementada (ver
//   src/pages/contato.astro). cta.actions aponta para "/sobre", também
//   implementada (ver src/pages/sobre.astro).

import { siteContent } from "./site";

export interface HomeCTA {
  label: string;
  href: string;
}

export interface HomeProblem {
  title: string;
  description: string;
}

export interface HomeMethodStep {
  order: number;
  title: string;
  description: string;
}

export interface HomeSolution {
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export interface HomePortfolioProject {
  title: string;
  /** Indica a situação atual do trabalho apresentado no portfólio. */
  type: string;
  description: string;
  url: string;
  image?: string;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    actions: HomeCTA[];
  };
  problems: {
    title: string;
    description: string;
    items: HomeProblem[];
    closing: string;
  };
  method: {
    title: string;
    description: string;
    steps: HomeMethodStep[];
  };
  diagnosis: {
    title: string;
    description: string;
    actions: HomeCTA[];
  };
  solutions: {
    title: string;
    description: string;
    items: HomeSolution[];
  };
  portfolio: {
    title: string;
    description: string;
    projects: HomePortfolioProject[];
    closing: string;
  };
  cta: {
    title: string;
    description: string;
    actions: HomeCTA[];
  };
}

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "Engenharia de Soluções Digitais",
    // Título do Hero reutiliza a tagline institucional compartilhada, em vez de duplicar o valor.
    title: siteContent.branding.tagline,
    description:
      "A AllLogic Online transforma necessidades reais de empresas em soluções digitais — com engenharia, clareza e utilidade em cada decisão técnica.",
    actions: [{ label: "Conheça nossas soluções", href: "#solucoes" }],
  },
  problems: {
    title: "Sua empresa poderia funcionar melhor.",
    description:
      "Processos manuais, ferramentas desconectadas, presença digital limitada e tarefas que consomem mais tempo do que deveriam podem dificultar a rotina e limitar o crescimento de uma empresa.",
    items: [
      {
        title: "Tempo perdido",
        description: "Tarefas repetitivas que poderiam ser simplificadas.",
      },
      {
        title: "Processos desconectados",
        description: "Informações e ferramentas que não conversam entre si.",
      },
      {
        title: "Presença digital",
        description: "Uma presença online que não acompanha a realidade da empresa.",
      },
      {
        title: "Oportunidades desperdiçadas",
        description: "Falta de estrutura para transformar oportunidades em resultados.",
      },
    ],
    closing:
      "Nem todo problema precisa de mais uma ferramenta ou de promessas mágicas de IA. Precisa de engenharia séria, processos claros e soluções que funcionam na prática.",
  },
  method: {
    title: "Tecnologia começa com entendimento.",
    description:
      "A AllLogic Online não vende tecnologia por modismo ou hype. A abordagem parte do problema real de negócio, da análise honesta de viabilidade e da entrega de soluções sustentáveis.",
    steps: [
      {
        order: 1,
        title: "Entender",
        description: "Compreender a empresa, seus processos e seus desafios.",
      },
      {
        order: 2,
        title: "Planejar",
        description: "Definir prioridades, arquitetura e o caminho mais adequado.",
      },
      {
        order: 3,
        title: "Construir",
        description: "Transformar a estratégia em uma solução funcional.",
      },
      {
        order: 4,
        title: "Evoluir",
        description: "Acompanhar, aprimorar e adaptar a solução conforme a empresa evolui.",
      },
    ],
  },
  diagnosis: {
    title: "Tem um desafio na sua empresa? Vamos entender juntos.",
    description:
      "Conte-nos sobre sua empresa, o desafio que está enfrentando ou o que gostaria de melhorar. A partir disso, podemos entender o cenário e identificar caminhos possíveis.",
    actions: [
      { label: "Enviar Informações", href: "/contato" },
    ],
  },
  solutions: {
    title: "Soluções digitais para o que realmente importa.",
    description:
      "Da presença digital à automação de processos, desenvolvemos soluções pensadas para a realidade de cada empresa.",
    items: [
      {
        title: "Presença Digital",
        description: "Registro de Domínios, Desenvolvimento, Hospedagem e Manutenção de Sites e Lojas Online, e soluções para fortalecer a presença da empresa na internet.",
        href: "/dominios-e-hospedagem",
        linkText: "Ver domínios e hospedagem",
      },
      {
        title: "Atendimento com IA",
        description: "Soluções inteligentes como o Agillex Atendimento para atendimento humanizado no WhatsApp 24/7 e redução de tarefas repetitivas.",
        href: "/agillex-atendimento",
        linkText: "Conhecer Agillex Atendimento",
      },
      {
        title: "Sistemas de Agendamento Online",
        description: "Plataformas como o Agillex Agenda para centralizar atendimentos, sincronizar calendários e facilitar o agendamento de clientes.",
        href: "/agillex-agenda",
        linkText: "Conhecer Agillex Agenda",
      },
      {
        title: "Plataforma SaaS Integrada",
        description: "O Agillex Hub reúne atendimento com IA, funil CRM Kanban, agendamento sincronizado e pagamentos em uma operação única.",
        href: "/agillex-hub",
        linkText: "Conhecer Agillex Hub",
      },
      {
        title: "Inteligência Artificial & Automações",
        description: "Aplicações práticas de IA para apoiar atendimento, otimizar fluxos de trabalho e simplificar rotinas empresariais.",
        href: "/contato",
        linkText: "Solicitar diagnóstico",
      },
      {
        title: "Infraestrutura Digital de Alta Disponibilidade",
        description: "Ambientes isolados em nuvem, cPanel com CloudLinux, segurança e tecnologia de ponta para sustentar suas soluções.",
        href: "/sobre",
        linkText: "Conhecer nossa engenharia",
      },
    ],
  },
  portfolio: {
    title: "Projetos que saem do papel.",
    description:
      "Cada projeto nasce de uma necessidade específica. Conheça algumas das soluções que desenvolvemos e estamos evoluindo para transformar desafios em experiências digitais funcionais.",
    projects: [
      {
        title: "Escola Sabatina Online",
        type: "Projeto concluído",
        description:
          "Otimização de SEO, organização de conteúdo e melhorias técnicas para fortalecer a presença orgânica do projeto.",
        url: "https://escolasabatinaonline.com.br/site/",
        image: "/images/portfolio/escola-sabatina-online.png",
      },
      {
        title: "Cupido Adventista",
        type: "Em andamento",
        description:
          "Otimização de SEO das áreas públicas, melhorias técnicas e ajustes de estrutura e conteúdo.",
        url: "https://cupidoadventista.com.br/",
        image: "/images/portfolio/cupido-adventista.png",
      },
      {
        title: "Lojinha do Lucas",
        type: "Projeto concluído",
        description:
          "Otimização de SEO para produtos e categorias, ajustes de conteúdo e melhorias na estrutura da loja.",
        url: "https://lojinhadolucas.com.br/",
        image: "/images/portfolio/lojinha-do-lucas.png",
      },
    ],
    closing: "Cada empresa tem seus próprios desafios e também suas soluções.",
  },
  cta: {
    title: "Sua empresa está pronta para o próximo passo?",
    description:
      "Tecnologia pode fazer mais quando é pensada a partir das necessidades reais da sua empresa.",
    actions: [
      { label: "Vamos conversar?", href: "https://wa.me/5511966381915" },
    ],
  },
};
