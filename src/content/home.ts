// Conteúdo textual da Home, isolado da camada de apresentação.
// Conteúdo institucional definitivo da narrativa da Home (Sprint de conteúdo real),
// alinhado ao posicionamento homologado da AllLogic.
// Campos que representam informação institucional compartilhada reutilizam
// siteContent em vez de duplicar valores (ver src/content/site.ts).
//
// Pendências conhecidas (ver docs/content-architecture.md):
// - portfolio.projects: descrições mantidas neutras e genéricas porque o conteúdo
//   detalhado de cada projeto próprio (Escola Sabatina Online, Cupido Adventista,
//   Lojinha do Lucas) ainda não foi verificado nos respectivos repositórios/contexto.
//   Nenhum resultado, métrica ou descrição funcional foi inventado.
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
}

export interface HomePortfolioProject {
  title: string;
  /** Identifica a natureza real do projeto (ex.: "Projeto próprio"), nunca "cliente". */
  type: string;
  description: string;
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
      "A AllLogic transforma necessidades reais de empresas em soluções digitais — com engenharia, clareza e utilidade em cada decisão técnica.",
    actions: [
      { label: "Conheça nossas soluções", href: "#solucoes" },
      { label: "Vamos conversar", href: "#diagnostico" },
    ],
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
      "Nem todo problema precisa de mais uma ferramenta. Às vezes, precisa de uma solução melhor pensada.",
  },
  method: {
    title: "Tecnologia começa com entendimento.",
    description:
      "A AllLogic não começa pela ferramenta. A abordagem parte do problema, do contexto e da necessidade real de cada empresa.",
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
    actions: [{ label: "Vamos conversar", href: "/contato" }],
  },
  solutions: {
    title: "Soluções digitais para o que realmente importa.",
    description:
      "Da presença digital à automação de processos, desenvolvemos soluções pensadas para a realidade de cada empresa.",
    items: [
      {
        title: "Presença Digital",
        description: "Sites, páginas e soluções para fortalecer a presença da empresa na internet.",
      },
      {
        title: "Automação",
        description: "Soluções para reduzir tarefas repetitivas e tornar processos mais eficientes.",
      },
      {
        title: "Sistemas e Aplicações",
        description: "Aplicações digitais desenvolvidas para necessidades específicas da empresa.",
      },
      {
        title: "Integrações",
        description: "Conexão entre ferramentas e sistemas para simplificar fluxos de trabalho.",
      },
      {
        title: "Inteligência Artificial",
        description: "Aplicações de IA para apoiar atendimento, processos e tomada de decisão.",
      },
      {
        title: "Infraestrutura Digital",
        description: "Ambientes, segurança e tecnologia necessários para manter as soluções funcionando.",
      },
    ],
  },
  portfolio: {
    title: "Soluções que saem do papel.",
    description:
      "Cada projeto nasce de uma necessidade específica. Conheça algumas das soluções que desenvolvemos e estamos evoluindo para transformar desafios em experiências digitais funcionais.",
    projects: [
      {
        title: "Escola Sabatina Online",
        type: "Projeto próprio",
        description:
          "Projeto próprio da AllLogic, em desenvolvimento. Descrição detalhada a confirmar com o conteúdo real do projeto.",
      },
      {
        title: "Cupido Adventista",
        type: "Projeto próprio",
        description:
          "Projeto próprio da AllLogic, em desenvolvimento. Descrição detalhada a confirmar com o conteúdo real do projeto.",
      },
      {
        title: "Lojinha do Lucas",
        type: "Projeto próprio",
        description:
          "Projeto próprio da AllLogic, em desenvolvimento. Descrição detalhada a confirmar com o conteúdo real do projeto.",
      },
    ],
    closing: "Cada empresa tem seus próprios desafios e também suas soluções.",
  },
  cta: {
    title: "Sua empresa está pronta para o próximo passo?",
    description:
      "Tecnologia pode fazer mais quando é pensada a partir das necessidades reais da sua empresa.",
    actions: [{ label: "Conheça a AllLogic", href: "/sobre" }],
  },
};
