// Configuração técnica do site da AllLogic.
// Responsabilidade restrita a parâmetros técnicos de infraestrutura/SEO —
// conteúdo institucional (marca, contato, redes sociais, CTAs, navegação)
// pertence exclusivamente a src/content/. Nenhum valor real foi definido —
// todos os campos são placeholders marcados com "TODO".

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
    url: "TODO: definir site.url",
  },
  seo: {
    titleTemplate: "TODO: definir seo.titleTemplate",
    defaultTitle: "TODO: definir seo.defaultTitle",
    defaultDescription: "TODO: definir seo.defaultDescription",
  },
};
