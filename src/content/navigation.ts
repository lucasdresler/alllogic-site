// Fonte de dados da navegação institucional do site.
// Os itens representam rotas reais e âncoras da versão atualmente publicada.
//
// "Início" aponta para a Home.
// "Soluções", "Portfólio" e "Diagnóstico" apontam para seções da Home.
// "Agillex Agenda" aponta para a página comercial da solução de agendamento online.
// "Sobre" e "Contato" apontam para páginas institucionais próprias.
// A navegação do rodapé contém atualmente o Agillex Agenda e a Política de Privacidade.

import type { NavigationItem } from "../types/navigation";

export interface NavigationContent {
  main: NavigationItem[];
  footer: NavigationItem[];
}

export const navigationContent: NavigationContent = {
  main: [
    { label: "Início", href: "/" },
    { label: "Soluções", href: "/#solucoes" },
    {
      label: "Família Agillex",
      children: [
        { label: "Agillex Hub", href: "/agillex-hub" },
        { label: "Agillex Agenda", href: "/agillex-agenda" },
        { label: "Agillex Atendimento", href: "/agillex-atendimento" },
      ],
    },
    { label: "Portfólio", href: "/#portfolio" },
    { label: "Diagnóstico", href: "/#diagnostico" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
  footer: [
    { label: "Agillex Hub", href: "/agillex-hub" },
    { label: "Agillex Agenda", href: "/agillex-agenda" },
    { label: "Agillex Atendimento", href: "/agillex-atendimento" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Termos de Uso", href: "/termos-de-uso" },
  ],
};
