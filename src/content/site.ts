// Conteúdo institucional compartilhado do site, isolado da camada de apresentação.
// Propósito, missão e visão derivam de foundation.ts, que traduz o FOUNDATION.md.
// company.name, company.description e branding.tagline já refletem o
// posicionamento homologado da AllLogic.
// contact.email e contact.phone contêm os dados oficiais de contato da AllLogic.
// social.* permanece como placeholder até a definição dos perfis oficiais.

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
    whatsapp: string;
  };
  social: {
    linkedin: string;
    github: string;
  };
}

export const siteContent: SiteContent = {
  company: {
    name: "AllLogic",
    purpose: foundationContent.identity.purpose,
    mission: foundationContent.identity.mission,
    vision: foundationContent.identity.vision,
    // Diretriz de posicionamento homologada: "Empresa jovem. Mentalidade de
    // engenharia. Experiência prática."
    description:
      "Empresa jovem de engenharia de soluções digitais, com mentalidade e experiência prática na transformação de necessidades reais em tecnologia funcional.",
  },
  branding: {
    tagline: "Tecnologia que trabalha para as pessoas.",
  },
  contact: {
    email: "contato@alllogiconline.com.br",
    phone: "(11)96638-1915",
    whatsapp: "(11)96638-1915",
  },
  social: {
    linkedin: "Texto provisório",
    github: "Texto provisório",
  },
};
