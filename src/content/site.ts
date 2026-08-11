// Conteúdo institucional compartilhado do site, isolado da camada de apresentação.
// Todos os valores são placeholders — nenhum conteúdo institucional definitivo.
// Não copia texto do FOUNDATION.md; apenas prepara a estrutura onde essa
// tradução institucional será registrada futuramente.

export interface SiteContent {
  company: {
    name: string;
    purpose: string;
    mission: string;
    vision: string;
    description: string;
  };
  branding: {
    tagline: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  social: {
    linkedin: string;
    github: string;
  };
}

export const siteContent: SiteContent = {
  company: {
    name: "Nome provisório",
    purpose: "Texto provisório",
    mission: "Texto provisório",
    vision: "Texto provisório",
    description: "Texto provisório",
  },
  branding: {
    tagline: "Texto provisório",
  },
  contact: {
    email: "Texto provisório",
    phone: "Texto provisório",
  },
  social: {
    linkedin: "Texto provisório",
    github: "Texto provisório",
  },
};
