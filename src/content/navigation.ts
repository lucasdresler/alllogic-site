// Fonte de dados da navegação institucional do site.
// Itens limitados às rotas e seções que existem de fato hoje: a Home, suas
// âncoras internas, e as páginas /sobre e /contato. Itens adicionais
// (Soluções, Projetos, Conhecimento como páginas próprias) serão adicionados
// quando essas páginas forem implementadas.
//
// Nota: "Soluções", "Portfólio" e "Diagnóstico" apontam para âncoras da Home
// (#solucoes, #portfolio, #diagnostico) e por isso só navegam corretamente
// quando acessados a partir da própria Home; em /sobre e /contato eles não
// têm efeito visível, pois não existe elemento com esse id nessas páginas.
// Isso é uma limitação preexistente da navegação baseada em âncora, fora do
// escopo das tarefas que implementaram /contato e /sobre.

import type { NavigationItem } from "../types/navigation";

export interface NavigationContent {
  main: NavigationItem[];
  footer: NavigationItem[];
}

export const navigationContent: NavigationContent = {
  main: [
    { label: "Início", href: "/" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Diagnóstico", href: "#diagnostico" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
  footer: [
    { label: "Início", href: "/" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
};
