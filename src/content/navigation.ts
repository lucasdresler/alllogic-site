// Fonte de dados da navegação institucional do site.
// Os itens representam rotas reais e âncoras da versão atualmente publicada.
//
// "Início" aponta para a Home.
// "Soluções", "Portfólio" e "Diagnóstico" apontam para seções da Home.
// "Sobre" e "Contato" apontam para páginas institucionais próprias.
// A navegação do rodapé contém atualmente a Política de Privacidade.
//
// As rotas e âncoras devem permanecer alinhadas às páginas e seções
// efetivamente existentes no Projeto Atlas.

import type { NavigationItem } from "../types/navigation";

export interface NavigationContent {
  main: NavigationItem[];
  footer: NavigationItem[];
}

export const navigationContent: NavigationContent = {
  main: [
    { label: "Início", href: "/" },
    { label: "Soluções", href: "/#solucoes" },
    { label: "Portfólio", href: "/#portfolio" },
    { label: "Diagnóstico", href: "/#diagnostico" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
  footer: [
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  ],
};
