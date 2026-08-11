// Estrutura preparatória para futura integração com o FOUNDATION.md homologado
// do repositório alllogic-sga. Nenhum conteúdo institucional definitivo foi
// copiado nesta tarefa — apenas placeholders e comentários TODO indicando a
// origem que preencherá cada campo quando essa integração for implementada.

export interface FoundationContent {
  identity: {
    /** TODO: preencher a partir da seção "Propósito da AllLogic" do FOUNDATION.md homologado (alllogic-sga). */
    purpose: string;
    /** TODO: preencher a partir da seção "Missão" do FOUNDATION.md homologado (alllogic-sga). */
    mission: string;
    /** TODO: preencher a partir da seção "Visão" do FOUNDATION.md homologado (alllogic-sga). */
    vision: string;
    /** TODO: preencher a partir da seção "Valores" do FOUNDATION.md homologado (alllogic-sga). */
    values: string[];
  };
  company: {
    /** TODO: preencher a partir do manifesto institucional homologado (01-Fundacao/manifesto.md, alllogic-sga). */
    manifesto: string;
  };
}

export const foundationContent: FoundationContent = {
  identity: {
    purpose: "TODO: conteúdo a integrar do FOUNDATION.md",
    mission: "TODO: conteúdo a integrar do FOUNDATION.md",
    vision: "TODO: conteúdo a integrar do FOUNDATION.md",
    values: ["TODO: conteúdo a integrar do FOUNDATION.md"],
  },
  company: {
    manifesto: "TODO: conteúdo a integrar do FOUNDATION.md",
  },
};
