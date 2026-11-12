// Conteúdo textual e dados da página /agillex-reputacao, isolados da camada de apresentação.
//
// Solução comercial: Agillex Reputação (Acelerador de Avaliações 5 Estrelas no Google com IA).
// Rota pública: /agillex-reputacao/
// Organização: AllLogic Online — Engenharia de Soluções Digitais

export interface ReputacaoCTA {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface ReputacaoHeroContent {
  badge: string;
  title: string;
  description: string;
  actions: {
    primary: ReputacaoCTA;
    secondary: ReputacaoCTA;
  };
  trust: string;
}

export interface ReputacaoAudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ReputacaoAudienceContent {
  eyebrow: string;
  title: string;
  complement: string;
  description: string;
  items: ReputacaoAudienceItem[];
}

export interface ReputacaoFeatureItem {
  badge: string;
  title: string;
  description: string;
}

export interface ReputacaoFeaturesContent {
  eyebrow: string;
  title: string;
  description: string;
  items: ReputacaoFeatureItem[];
}

export interface ReputacaoPricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  capacity: string;
  monthlyLimit: number;
  priceMonthly: string;
  priceAnnualMonthly: string;
  annualTotal: string;
  period: string;
  cta: ReputacaoCTA;
}

export interface ReputacaoPricingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  universalNote: string;
  features: string[];
  tiers: ReputacaoPricingTier[];
}

export interface ReputacaoFaqItem {
  question: string;
  answer: string;
}

export interface ReputacaoFaqContent {
  eyebrow: string;
  title: string;
  description: string;
  items: ReputacaoFaqItem[];
}

export interface ReputacaoTrialPoint {
  label: string;
  text: string;
}

export interface ReputacaoTrialContent {
  eyebrow: string;
  title: string;
  description: string;
  points: ReputacaoTrialPoint[];
  card: {
    highlight: string;
    title: string;
    description: string;
    action: ReputacaoCTA;
    note: string;
  };
}

export interface ReputacaoMetaContent {
  title: string;
  description: string;
}

export interface ReputacaoContent {
  meta: ReputacaoMetaContent;
  hero: ReputacaoHeroContent;
  audience: ReputacaoAudienceContent;
  features: ReputacaoFeaturesContent;
  pricing: ReputacaoPricingContent;
  faq: ReputacaoFaqContent;
  trial: ReputacaoTrialContent;
}

export const agillexReputacaoContent: ReputacaoContent = {
  meta: {
    title: "Agillex Reputação — Acelerador de Avaliações no Google com IA | AllLogic",
    description:
      "Acelere a conquista de avaliações 5 estrelas no Google Meu Negócio pós-atendimento. Filtro inteligente protetor de satisfação e respostas humanizadas com Inteligência Artificial para SEO local.",
  },
  hero: {
    badge: "Acelerador de Avaliações no Google com IA",
    title: "Conquiste avaliações 5 estrelas no Google Maps e proteja a reputação da sua marca.",
    description:
      "O Agillex Reputação dispara convites inteligentes pós-atendimento no WhatsApp com filtro protetor de satisfação: clientes encantados (notas 4 e 5) avaliam direto no Google Maps; críticas internas (notas 1 a 3) são tratadas em sigilo antes de irem a público. E com IA para responder todas as avaliações no Google e elevar seu SEO local.",
    actions: {
      primary: {
        label: "Testar por 14 dias grátis",
        href: "https://hub.agillex.com.br/checkout?modulo=reputacao&plano=reputacao-pro&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      secondary: {
        label: "Ver demonstração no WhatsApp",
        href: "https://wa.me/5511966381915?text=Ol%C3%A1!%20Gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20Agillex%20Reputa%C3%A7%C3%A3o.",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    trust: "Filtro Protetor de Marca · IA para SEO no Google Maps · Aumento comprovado de autoridade local",
  },
  audience: {
    eyebrow: "Público-Alvo",
    title: "Desenvolvido para empresas que dependem de autoridade e confiança local",
    complement: "Mais clientes escolhendo o seu negócio pelo topo do Google Maps.",
    description:
      "Quando alguém pesquisa um serviço na sua cidade pelo celular, as empresas com mais avaliações 5 estrelas no Google recebem mais de 80% dos contatos e cliques.",
    items: [
      {
        icon: "🩺",
        title: "Clínicas & Consultórios",
        description:
          "Construa a credibilidade necessária para que novos pacientes particulares escolham sua clínica com segurança.",
      },
      {
        icon: "✂️",
        title: "Salões, Barbearias & Estética",
        description:
          "Transforme o encantamento de cada procedimento finalizado em dezenas de avaliações com nota máxima no Google.",
      },
      {
        icon: "🍽️",
        title: "Restaurantes, Bares & Cafés",
        description:
          "Multiplique os depoimentos positivos de clientes sem depender da iniciativa espontânea dos clientes.",
      },
      {
        icon: "🚗",
        title: "Oficinas, Auto Centers & Estética",
        description:
          "Filtro protetor que assegura que qualquer ruído operacional seja resolvido internamente, blindando seu perfil público.",
      },
      {
        icon: "⚖️",
        title: "Escritórios & Serviços B2B",
        description:
          "Posicionamento institucional de prestígio no Google, transmitindo solidez e maturidade para novos clientes.",
      },
      {
        icon: "🛍️",
        title: "Lojas & Negócios Locais",
        description:
          "Suba no ranking do Google Maps (Local Pack) e seja a primeira opção que aparece para quem pesquisa na sua região.",
      },
    ],
  },
  features: {
    eyebrow: "Recursos Inteligentes",
    title: "O ciclo completo de proteção de marca e crescimento no Google",
    description:
      "Uma estratégia automatizada que une pesquisa de satisfação NPS, proteção de imagem e inteligência artificial aplicada ao SEO local.",
    items: [
      {
        badge: "Disparo no WhatsApp",
        title: "Convite Automático Pós-Atendimento",
        description:
          "Mensagem amigável no WhatsApp enviada logo após a conclusão do serviço ou agendamento (integrado ao Agillex Agenda ou Agillex Hub).",
      },
      {
        badge: "Escudo de Marca",
        title: "Filtro Protetor de Satisfação (NPS)",
        description:
          "Clientes com notas 4 e 5 são direcionados em 1 clique para o Google Maps. Clientes com notas de 1 a 3 são convidados a enviar feedback confidencial direto para a gerência.",
      },
      {
        badge: "SEO com IA",
        title: "Respostas Humanizadas com IA no Google",
        description:
          "A IA redige respostas personalizadas e elegantes para cada avaliação recebida no Google, incorporando palavras-chave que potencializam seu ranqueamento local.",
      },
      {
        badge: "Google Local Pack",
        title: "Aceleração no Ranking do Google Maps",
        description:
          "O algoritmo do Google prioriza empresas com fluxo contínuo de avaliações 5 estrelas recentes e ativamente respondidas pela administração.",
      },
      {
        badge: "Painel em Tempo Real",
        title: "Dashboard de Reputação e Alertas",
        description:
          "Monitore sua nota média, histórico de feedbacks, taxa de conversão para o Google e receba alertas imediatos caso ocorra uma insatisfação interna.",
      },
      {
        badge: "Meta Cloud API Oficial",
        title: "Envio Confiável e 100% Homologado",
        description:
          "Disparos via WhatsApp oficial com mensagens transacionais de alta entrega, respeitando todas as políticas da Meta e a privacidade do cliente.",
      },
    ],
  },
  pricing: {
    eyebrow: "Planos e Preços",
    title: "Planos acessíveis para transformar sua autoridade digital local",
    subtitle:
      "Sem taxa de adesão, sem fidelidade contratual e com 14 dias de teste gratuito.",
    universalNote:
      "Todos os planos incluem integração oficial com o Google Business Profile, filtro protetor de marca e suporte AllLogic.",
    features: [
      "Filtro inteligente protetor de satisfação (NPS 1-5 estrelas)",
      "Redirecionamento automático com 1 clique para o Google Maps",
      "Canal sigiloso de tratamento interno para notas de 1 a 3 estrelas",
      "Geração de respostas inteligentes com IA para o Google",
      "Disparo no WhatsApp pós-atendimento (integrado ou manual)",
      "Relatório de feedbacks e acompanhamento de reputação",
      "Conexão certificada com a Meta Cloud API Oficial",
    ],
    tiers: [
      {
        id: "start",
        name: "Reputação Start",
        tagline: "Ideal para pequenos comércios e profissionais individuais.",
        capacity: "Até 60 solicitações de avaliação/mês",
        monthlyLimit: 60,
        priceMonthly: "R$ 49,00",
        priceAnnualMonthly: "R$ 39,00",
        annualTotal: "R$ 468,00 / ano (economia de R$ 120)",
        period: "/mês",
        cta: {
          label: "Começar teste grátis",
          href: "https://hub.agillex.com.br/checkout?modulo=reputacao&plano=reputacao-start&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "pro",
        name: "Reputação Pro",
        badge: "Mais Escolhido",
        popular: true,
        tagline: "Perfeito para clínicas, salões e negócios com fluxo ativo diário.",
        capacity: "Até 250 solicitações/mês + Respostas com IA",
        monthlyLimit: 250,
        priceMonthly: "R$ 79,00",
        priceAnnualMonthly: "R$ 59,00",
        annualTotal: "R$ 708,00 / ano (economia de R$ 240)",
        period: "/mês",
        cta: {
          label: "Começar teste grátis",
          href: "https://hub.agillex.com.br/checkout?modulo=reputacao&plano=reputacao-pro&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "escala",
        name: "Reputação Escala",
        tagline: "Para redes, franquias ou empresas de alto volume de atendimentos.",
        capacity: "Até 800 solicitações/mês + Múltiplas Unidades",
        monthlyLimit: 800,
        priceMonthly: "R$ 129,00",
        priceAnnualMonthly: "R$ 99,00",
        annualTotal: "R$ 1.188,00 / ano (economia de R$ 360)",
        period: "/mês",
        cta: {
          label: "Começar teste grátis",
          href: "https://hub.agillex.com.br/checkout?modulo=reputacao&plano=reputacao-escala&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas Frequentes",
    title: "Tudo o que você precisa saber sobre o Agillex Reputação",
    description: "Perguntas comuns sobre funcionamento, filtro protetor e Google Maps.",
    items: [
      {
        question: "Como funciona o filtro protetor de satisfação na prática?",
        answer:
          "Ao receber a mensagem no WhatsApp pós-atendimento, o cliente escolhe de 1 a 5 estrelas. Se ele clicar em 4 ou 5 estrelas (avaliação positiva), o sistema abre imediatamente a tela de avaliação do seu perfil no Google Maps para ele confirmar o depoimento. Se ele clicar em 1, 2 ou 3 estrelas (insatisfação), o sistema NÃO abre o Google Maps: ele abre um canal reservado onde o cliente digita o motivo do descontentamento, notificando você em sigilo para resolver o problema internamente.",
      },
      {
        question: "Isso viola alguma política do Google?",
        answer:
          "Não. O cliente sempre mantém a liberdade de avaliar qualquer local no Google. O sistema apenas organiza a pesquisa interna de satisfação da sua empresa (pesquisa NPS de qualidade), incentivando ativamente que clientes satisfeitos compartilhem sua boa experiência publicamente no Google Maps.",
      },
      {
        question: "Como a Inteligência Artificial responde as avaliações no Google?",
        answer:
          "A IA analisa o comentário deixado pelo cliente, identifica o tom (positivo, neutro ou elogio a profissional específico) e gera uma resposta educada, calorosa e estratégica. As respostas incluem naturalmente o nome da sua empresa, cidade e o serviço prestado, fatores que o algoritmo do Google valoriza fortemente para posicionar sua empresa nas buscas locais.",
      },
      {
        question: "Preciso ter uma conta no Google Meu Negócio?",
        answer:
          "Sim. Você precisa ter o perfil da sua empresa cadastrado no Google Meu Negócio (Perfil da Empresa no Google / Google Maps). Caso ainda não tenha ou seu perfil precise de otimização, nossa equipe auxilia você no processo de configuração.",
      },
      {
        question: "Funciona integrado ao Agillex Agenda ou Agillex Hub?",
        answer:
          "Sim! Quando o profissional conclui o atendimento no Agillex Agenda ou no Agillex Hub, o disparo de pesquisa de satisfação no WhatsApp pode ser acionado automaticamente, sem que sua equipe precise se preocupar em lembrar de pedir avaliação.",
      },
      {
        question: "Como funciona o teste gratuito de 14 dias?",
        answer:
          "Você pode testar todos os recursos por 14 dias sem pagar nada e sem necessidade de cadastrar cartão de crédito. É tempo suficiente para ver as primeiras avaliações 5 estrelas chegarem no seu Google Maps.",
      },
    ],
  },
  trial: {
    eyebrow: "Comece Agora",
    title: "Coloque sua empresa no topo das buscas locais do Google",
    description:
      "Acelere suas avaliações 5 estrelas, proteja sua imagem pública e transforme pesquisas na sua região em novos clientes todos os dias.",
    points: [
      {
        label: "Ativação Simples",
        text: "Conexão rápida com seu Google Meu Negócio em poucos minutos.",
      },
      {
        label: "14 Dias Grátis",
        text: "Teste completo com disparo de pesquisas sem cartão de crédito.",
      },
      {
        label: "Sem Fidelidade",
        text: "Cancele a qualquer momento com total transparência e autonomia.",
      },
    ],
    card: {
      highlight: "Autoridade Local",
      title: "Pronto para ser a empresa mais bem avaliada da sua região?",
      description:
        "Crie sua conta no Agillex Hub agora e comece a acelerar sua reputação 5 estrelas no WhatsApp e no Google Maps.",
      action: {
        label: "Iniciar Teste de 14 Dias",
        href: "https://hub.agillex.com.br/checkout?modulo=reputacao&plano=reputacao-pro&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      note: "Ativação imediata · Sem cartão de crédito · Suporte humano AllLogic",
    },
  },
};
