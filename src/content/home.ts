// Conteúdo textual da Home, isolado da camada de apresentação.
// Todos os valores são placeholders — nenhum conteúdo institucional definitivo.
// Campos que representam informação institucional compartilhada reutilizam
// siteContent em vez de duplicar placeholders (ver src/content/site.ts).

import { siteContent } from "./site";

export interface HomeContent {
  hero: {
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  problems: {
    title: string;
    description: string;
  };
  method: {
    title: string;
    description: string;
  };
  diagnosis: {
    title: string;
    description: string;
    primaryCTA: string;
  };
  solutions: {
    title: string;
    description: string;
  };
  portfolio: {
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
    primaryCTA: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    // Título do Hero reutiliza a tagline institucional compartilhada, em vez de duplicar um placeholder próprio.
    title: siteContent.branding.tagline,
    description: "Texto provisório",
    primaryCTA: "CTA provisório",
    secondaryCTA: "CTA provisório",
  },
  problems: {
    title: "Título provisório",
    description: "Texto provisório",
  },
  method: {
    title: "Título provisório",
    description: "Texto provisório",
  },
  diagnosis: {
    title: "Título provisório",
    description: "Texto provisório",
    primaryCTA: "CTA provisório",
  },
  solutions: {
    title: "Título provisório",
    description: "Texto provisório",
  },
  portfolio: {
    title: "Título provisório",
    description: "Texto provisório",
  },
  cta: {
    title: "Título provisório",
    description: "Texto provisório",
    primaryCTA: "CTA provisório",
  },
};
