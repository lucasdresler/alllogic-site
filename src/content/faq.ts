// Conteúdo estruturado da seção de Perguntas Frequentes (FAQ),
// isolado da apresentação e preparado para injeção de Schema JSON-LD (FAQPage).

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  eyebrow: string;
  title: string;
  description: string;
  items: FAQItem[];
}

export const faqContent: FAQContent = {
  eyebrow: "Transparência Técnica",
  title: "Perguntas frequentes e respostas diretas.",
  description:
    "Acreditamos na honestidade técnica antes de qualquer contratação. Entenda como trabalhamos, como funcionam nossas soluções e qual é o nosso compromisso com a sua empresa.",
  items: [
    {
      question: "Qual é a diferença entre a Família Agillex e uma solução sob medida?",
      answer:
        "A Família Agillex (Hub, Agenda e Atendimento) é nosso ecossistema de software como serviço (SaaS) pronto para uso imediato, com ativação no mesmo dia, planos mensais transparentes e suporte contínuo. Já as soluções sob medida são projetos de engenharia desenhados para empresas que possuem processos complexos e precisam de sistemas, APIs ou automações construídos exclusivamente para sua realidade.",
    },
    {
      question: "Como funciona a Inteligência Artificial no WhatsApp? Ela pode inventar respostas ou 'alucinar'?",
      answer:
        "Não. O Agilex Atende opera com arquitetura RAG (Retrieval-Augmented Generation) sobre a base de conhecimento oficial da sua empresa. Ele responde estritamente com base nos dados, tabelas, serviços e regras homologados por você. Se um cliente fizer uma pergunta fora do escopo ou solicitar atendimento humano, a IA realiza o transbordo imediato para sua equipe em 1 clique, preservando todo o histórico da conversa.",
    },
    {
      question: "Como funciona a taxa fixa de R$ 1,99 no Agillex Pay?",
      answer:
        "Ao contrário dos gateways e intermediadores tradicionais que cobram percentuais predatórios (frequentemente de 3% a 5% sobre cada venda), o Agillex Pay opera com uma taxa fixa de apenas R$ 1,99 por transação concluída no Pix ou Cartão. Se você vender um serviço de R$ 50 ou de R$ 500, a taxa é sempre a mesma: R$ 1,99. Você não divide o seu faturamento com a plataforma.",
    },
    {
      question: "A quem pertencem os dados e as informações geradas?",
      answer:
        "Pertencem integralmente à sua empresa. A AllLogic Online opera com estrita conformidade com a LGPD e isolamento rigoroso de dados por estabelecimento (arquitetura multi-tenant). Seus dados de clientes, atendimentos, agendamentos e transações nunca são compartilhados ou utilizados para outros fins.",
    },
    {
      question: "A AllLogic Online recomenda Inteligência Artificial para qualquer empresa?",
      answer:
        "Não. Somos guiados pelo princípio de que a tecnologia deve trabalhar para as pessoas, e não ser vendida por modismo ou hype. Em muitos casos, o gargalo de uma empresa é resolvido com automação clássica, integração entre sistemas legados ou organização de processos — com custo menor e maior confiabilidade. Só recomendamos IA quando ela gera ganho comprovado de produtividade ou redução de custos.",
    },
    {
      question: "Com quem eu falo durante o atendimento ou projeto?",
      answer:
        "Você fala diretamente com engenheiros e especialistas técnicos que constroem e mantêm as plataformas. Sem intermediários comerciais, sem atendimentos robóticos genéricos e sem enrolação.",
    },
  ],
};
