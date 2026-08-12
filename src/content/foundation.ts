// Conteúdo institucional migrado literalmente do FOUNDATION.md homologado
// do repositório allogic-sga. O manifesto permanece como placeholder porque
// sua fonte oficial ainda não possui conteúdo.

export interface FoundationContent {
  identity: {
    /** Fonte: seção "Propósito da AllLogic" do FOUNDATION.md (alllogic-sga). */
    purpose: string;
    /** Fonte: seção "Missão" do FOUNDATION.md (alllogic-sga). */
    mission: string;
    /** Fonte: seção "Visão" do FOUNDATION.md (alllogic-sga). */
    vision: string;
    /** Fonte: seção "Valores" do FOUNDATION.md (alllogic-sga). */
    values: string[];
  };
  company: {
    /** TODO: preencher a partir do manifesto institucional homologado (01-Fundacao/manifesto.md, alllogic-sga). */
    manifesto: string;
  };
}

export const foundationContent: FoundationContent = {
  identity: {
    purpose:
      "A AllLogic existe para ajudar pessoas a solucionarem problemas de forma eficiente, funcional, competente e satisfatória, utilizando métodos bem definidos, atuando sempre com transparência e honestidade.",
    mission:
      "A missão da AllLogic é ajudar pessoas e organizações a solucionar problemas por meio da tecnologia, desenvolvendo soluções eficientes, funcionais e confiáveis, com métodos bem definidos, transparência, honestidade e compromisso com a excelência.",
    vision:
      "Ser reconhecida como uma empresa confiável, que honra seus compromissos, supera as expectativas de clientes, fornecedores e colaboradores, construindo relações duradouras por meio da excelência, da transparência e da honestidade.",
    values: [
      "Honestidade",
      "Transparência",
      "Qualidade",
      "Compromisso com as Pessoas",
      "Conhecimento Compartilhado",
      "Aprendizado Contínuo",
    ],
  },
  company: {
    manifesto: "TODO: conteúdo a integrar do FOUNDATION.md",
  },
};
