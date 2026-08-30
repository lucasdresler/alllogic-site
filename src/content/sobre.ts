// Conteúdo textual da página /sobre, isolado da apresentação.
// Reaproveita fontes já homologadas em vez de duplicar valores:
// - experience.projects vem de homeContent.portfolio.projects (mesmos três
//   projetos próprios, mesma descrição neutra — sem duplicar a lista).
// - philosophy.principle vem de homeContent.portfolio.closing (mesma frase
//   já homologada "Cada empresa tem seus próprios desafios e também suas
//   soluções.").
// - peopleForTech.title reutiliza siteContent.branding.tagline (o slogan
//   oficial), em vez de reescrevê-lo.
//
// Pendências conhecidas:
// - experience.projects herda a mesma pendência de home.ts: descrições
//   neutras até que o conteúdo real de cada projeto seja verificado.
// - closing.actions aponta para "/contato", já implementada.

import { siteContent } from "./site";
import { homeContent } from "./home";

export interface SobreApproachStep {
  order: number;
  title: string;
  description: string;
}

export interface SobreCTA {
  label: string;
  href: string;
}

export interface SobreContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  whoWeAre: {
    title: string;
    description: string;
  };
  philosophy: {
    title: string;
    description: string;
    principle: string;
  };
  engineeringMindset: {
    title: string;
    description: string;
    steps: string[];
  };
  peopleForTech: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    description: string;
    projects: typeof homeContent.portfolio.projects;
  };
  approach: {
    title: string;
    description: string;
    steps: SobreApproachStep[];
  };
  closing: {
    description: string;
    actions: SobreCTA[];
  };
}

export const sobreContent: SobreContent = {
  hero: {
    eyebrow: "Sobre a AllLogic",
    title: "Tecnologia com propósito. Engenharia para resolver problemas.",
    description:
      "A AllLogic nasceu com a proposta de aproximar tecnologia dos problemas reais das empresas, usando uma mentalidade de engenharia para compreender o cenário antes de propor qualquer solução.",
  },
  whoWeAre: {
    title: "Quem somos",
    description:
      "A AllLogic é uma empresa jovem de soluções digitais. Nossa proposta é entender o problema antes de escolher a tecnologia — e trabalhar para transformar necessidades reais em soluções mais simples, organizadas, eficientes e adequadas ao contexto de cada empresa.",
  },
  philosophy: {
    title: "Nossa forma de pensar",
    description:
      "Não existe uma única solução tecnológica que sirva igualmente para todas as empresas. Antes de escolher uma ferramenta, um framework, uma automação ou um sistema, é preciso compreender o problema, o processo, as pessoas envolvidas, as limitações, os objetivos e o contexto.",
    principle: homeContent.portfolio.closing,
  },
  engineeringMindset: {
    title: "Mentalidade de engenharia",
    description:
      "Engenharia de Soluções Digitais não é um termo de marketing. É uma forma de trabalhar em que a tecnologia está a serviço do problema, nunca o contrário.",
    steps: ["Compreender", "Analisar", "Planejar", "Construir", "Testar", "Melhorar"],
  },
  peopleForTech: {
    title: siteContent.branding.tagline,
    description:
      "Uma solução tecnológica só faz sentido quando melhora alguma coisa na prática: simplifica tarefas, reduz trabalho repetitivo, organiza informações, melhora processos e proporciona uma experiência melhor para quem usa.",
  },
  experience: {
    title: "Experiência prática",
    description:
      "A AllLogic ainda não possui clientes. A experiência prática vem do que já desenvolvemos: projetos próprios, tratados como o que realmente são.",
    projects: homeContent.portfolio.projects,
  },
  approach: {
    title: "Como trabalhamos",
    description:
      "A pergunta que guia cada projeto não é \"qual tecnologia podemos usar?\", mas \"qual problema precisamos resolver?\".",
    steps: [
      { order: 1, title: "Entender", description: "Compreender o cenário e o problema." },
      { order: 2, title: "Analisar", description: "Identificar causas, necessidades e oportunidades." },
      { order: 3, title: "Projetar", description: "Definir uma solução adequada ao contexto." },
      { order: 4, title: "Construir", description: "Implementar a solução de forma organizada." },
      { order: 5, title: "Validar", description: "Testar e verificar se a solução realmente atende ao objetivo." },
      { order: 6, title: "Evoluir", description: "Melhorar a solução conforme novas necessidades aparecem." },
    ],
  },
  closing: {
    description:
      "Não é necessário chegar com uma solução pronta. Basta compartilhar o cenário da sua empresa e o desafio que está enfrentando.",
    actions: [{ label: "Vamos conversar", href: "/contato" }],
  },
};
