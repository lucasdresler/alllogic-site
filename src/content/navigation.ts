// Fonte de dados da navegação institucional do site.
// Nenhum item foi definido ainda — os arrays permanecem vazios até que a
// arquitetura de navegação do site seja homologada.

import type { NavigationItem } from "../types/navigation";

export interface NavigationContent {
  /** TODO: itens do menu principal, a definir após homologação da arquitetura de navegação. */
  main: NavigationItem[];
  /** TODO: itens do menu do rodapé, a definir após homologação da arquitetura de navegação. */
  footer: NavigationItem[];
}

export const navigationContent: NavigationContent = {
  main: [],
  footer: [],
};
