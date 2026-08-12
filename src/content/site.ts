// Conteúdo institucional compartilhado do site, isolado da camada de apresentação.
// Propósito, missão e visão derivam de foundation.ts, que traduz o FOUNDATION.md.
// Os demais campos permanecem placeholders até que suas fontes sejam homologadas.

import { foundationContent } from "./foundation";

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
    purpose: foundationContent.identity.purpose,
    mission: foundationContent.identity.mission,
    vision: foundationContent.identity.vision,
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
