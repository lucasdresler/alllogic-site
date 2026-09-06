// Configuração técnica do site da AllLogic.
// Responsabilidade restrita a parâmetros técnicos de infraestrutura/SEO —
// conteúdo institucional (marca, contato, redes sociais, CTAs, navegação)
// pertence exclusivamente a src/content/.

// Identidade técnica do site.
export interface SiteGroup {
  /** URL canônica do site. */
  url: string;
}

// Metadados técnicos de SEO.
export interface SeoGroup {
  /** Template de título aplicado às páginas (ex.: "%s | Nome do Site"). */
  titleTemplate: string;
  /** Título padrão usado quando a página não define um título próprio. */
  defaultTitle: string;
  /** Descrição padrão usada quando a página não define uma descrição própria. */
  defaultDescription: string;
}

export interface SiteConfig {
  site: SiteGroup;
  seo: SeoGroup;
}

export const siteConfig: SiteConfig = {
  site: {
    url: "https://alllogiconline.com.br",
  },
  seo: {
    titleTemplate: "%s | AllLogic",
    defaultTitle: "AllLogic — Engenharia de Soluções Digitais",
    defaultDescription: "A AllLogic transforma necessidades reais em soluções digitais funcionais, combinando tecnologia, estratégia e atenção aos detalhes.",
  },
};
