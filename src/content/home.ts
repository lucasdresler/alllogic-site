// Conteúdo textual da Home, isolado da camada de apresentação.
// Todos os valores são placeholders — nenhum conteúdo institucional definitivo.
// Campos que representam informação institucional compartilhada reutilizam
// siteContent em vez de duplicar placeholders (ver src/content/site.ts).

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
  description: string;
}

export interface HomeContent {
  hero: {
    title: string;
    description: string;
    actions: HomeCTA[];
  };
  problems: {
    title: string;
    description: string;
    items: HomeProblem[];
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
  };
  cta: {
    title: string;
    description: string;
    actions: HomeCTA[];
  };
}

export const homeContent: HomeContent = {
  hero: {
    // Título do Hero reutiliza a tagline institucional compartilhada, em vez de duplicar um placeholder próprio.
    title: siteContent.branding.tagline,
    description: "Texto provisório",
    actions: [
      { label: "CTA provisório", href: "#" },
      { label: "CTA provisório", href: "#" },
    ],
  },
  problems: {
    title: "Título provisório",
    description: "Texto provisório",
    items: [
      { title: "Título provisório", description: "Descrição provisória." },
      { title: "Título provisório", description: "Descrição provisória." },
      { title: "Título provisório", description: "Descrição provisória." },
    ],
  },
  method: {
    title: "Título provisório",
    description: "Texto provisório",
    steps: [
      { order: 1, title: "Título provisório", description: "Descrição provisória." },
      { order: 2, title: "Título provisório", description: "Descrição provisória." },
      { order: 3, title: "Título provisório", description: "Descrição provisória." },
      { order: 4, title: "Título provisório", description: "Descrição provisória." },
      { order: 5, title: "Título provisório", description: "Descrição provisória." },
    ],
  },
  diagnosis: {
    title: "Título provisório",
    description: "Texto provisório",
    actions: [{ label: "CTA provisório", href: "#" }],
  },
  solutions: {
    title: "Título provisório",
    description: "Texto provisório",
    items: [
      { title: "Título provisório", description: "Descrição provisória." },
      { title: "Título provisório", description: "Descrição provisória." },
      { title: "Título provisório", description: "Descrição provisória." },
      { title: "Título provisório", description: "Descrição provisória." },
      { title: "Título provisório", description: "Descrição provisória." },
      { title: "Título provisório", description: "Descrição provisória." },
    ],
  },
  portfolio: {
    title: "Título provisório",
    description: "Texto provisório",
    projects: [
      { title: "Título provisório", description: "Descrição provisória." },
      { title: "Título provisório", description: "Descrição provisória." },
      { title: "Título provisório", description: "Descrição provisória." },
    ],
  },
  cta: {
    title: "Título provisório",
    description: "Texto provisório",
    actions: [{ label: "CTA provisório", href: "#" }],
  },
};
