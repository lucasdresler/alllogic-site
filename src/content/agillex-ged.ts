// Conteúdo textual e dados da página /agillex-ged, isolados da camada de apresentação.
//
// Solução comercial: Agillex GED (Gerenciamento Eletrônico de Documentos com OCR e IA Integrada).
// Rota pública: /agillex-ged/
// Organização: AllLogic Online — Engenharia de Soluções Digitais

export interface GedCTA {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface GedHeroContent {
  badge: string;
  title: string;
  description: string;
  actions: {
    primary: GedCTA;
    secondary: GedCTA;
  };
  trust: string;
}

export interface GedAudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface GedAudienceContent {
  eyebrow: string;
  title: string;
  complement: string;
  description: string;
  items: GedAudienceItem[];
}

export interface GedFeatureItem {
  badge: string;
  title: string;
  description: string;
}

export interface GedFeaturesContent {
  eyebrow: string;
  title: string;
  description: string;
  items: GedFeatureItem[];
}

export interface GedPricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  capacity: string;
  storageLimit: string;
  priceMonthly: string;
  priceAnnualMonthly: string;
  annualTotal: string;
  period: string;
  cta: GedCTA;
}

export interface GedPricingContent {
  eyebrow: string;
  title: string;
  description: string;
  tiers: GedPricingTier[];
}

export interface GedFaqItem {
  question: string;
  answer: string;
}

export interface GedFaqContent {
  eyebrow: string;
  title: string;
  description: string;
  items: GedFaqItem[];
}

export interface GedTrialPoint {
  label: string;
  text: string;
}

export interface GedTrialContent {
  eyebrow: string;
  title: string;
  description: string;
  points: GedTrialPoint[];
  card: {
    highlight: string;
    title: string;
    description: string;
    action: GedCTA;
    note: string;
  };
}

export interface AgillexGedPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: GedHeroContent;
  audience: GedAudienceContent;
  features: GedFeaturesContent;
  pricing: GedPricingContent;
  faq: GedFaqContent;
  trial: GedTrialContent;
}

export const agillexGedContent: AgillexGedPageContent = {
  meta: {
    title: "Agillex GED — Gestão Eletrônica de Documentos com OCR e IA | AllLogic Online",
    description:
      "Elimine papéis, localize contratos em segundos e nunca mais perca prazos de certidões ou alvarás com o Agillex GED. Leitura com IA, alertas no WhatsApp e assinatura digital.",
  },
  hero: {
    badge: "GED Inteligente com IA & WhatsApp",
    title: "Gestão Eletrônica de Documentos com OCR e Inteligência Artificial.",
    description:
      "Centralize contratos, certidões, notas e laudos em um cofre digital seguro. A IA lê e extrai dados automaticamente de qualquer PDF ou foto, alerta vencimentos no WhatsApp e permite envio e assinatura em 1 clique.",
    actions: {
      primary: {
        label: "Testar por 14 dias grátis",
        href: "https://hub.agillex.com.br/checkout?modulo=ged&plano=ged-pro&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      secondary: {
        label: "Ver planos e recursos",
        href: "#planos",
        target: "_self",
      },
    },
    trust: "Ativação imediata · 14 dias de teste grátis · Sem cartão de crédito · Armazenamento em nuvem isolada",
  },
  audience: {
    eyebrow: "Para Quem Foi Criado",
    title: "Ideal para empresas que lidam com documentos",
    complement: "e não podem perder prazos",
    description:
      "Desenvolvido sob medida para operações que exigem segurança documental, rapidez de consulta e conformidade jurídica.",
    items: [
      {
        icon: "building",
        title: "Contabilidades e Escritórios Fiscais",
        description:
          "Organize guias, contratos sociais, certidões CNDs e balancetes por cliente, com alertas automáticos de prazos de vencimento.",
      },
      {
        icon: "stethoscope",
        title: "Clínicas, Consultórios e Saúde",
        description:
          "Armazenamento sigiloso de prontuários, termos de consentimento e exames laboratoriais com total segurança e conformidade com a LGPD.",
      },
      {
        icon: "scale",
        title: "Advocacia e Departamentos Jurídicos",
        description:
          "Pesquisa semântica em petições, procurações e contratos, localizando cláusulas e datas de vigência instantaneamente por IA.",
      },
      {
        icon: "home",
        title: "Imobiliárias e Corretoras",
        description:
          "Gestão de contratos de locação, vistorias fotográficas e escrituras com coleta de assinaturas eletrônicas diretamente pelo WhatsApp.",
      },
      {
        icon: "briefcase",
        title: "Empresas Prestadoras de Serviços",
        description:
          "Guarda de alvarás de funcionamento, ordens de serviço e laudos técnicos com histórico permanente de atendimento aos clientes.",
      },
      {
        icon: "shield-check",
        title: "RH e Gestão de Pessoas",
        description:
          "Controle de folhas de ponto, atestados médicos, exames admissionais/demissionais (ASO) e contratos de trabalho em pastas seguras.",
      },
    ],
  },
  features: {
    eyebrow: "Recursos Inteligentes",
    title: "Muito mais que um arquivo de pastas: um assistente documental ativo",
    description:
      "Esqueça pastas perdidas no Google Drive ou anexos no WhatsApp. O Agillex GED organiza, lê e avisa você quando agir.",
    items: [
      {
        badge: "OCR & Visão Computacional",
        title: "Leitura e Extração Automática com IA",
        description:
          "Faça upload de fotos ou PDFs escaneados e deixe a Inteligência Artificial extrair nomes, CNPJ/CPF, valores, prazos de validade e cláusulas automaticamente.",
      },
      {
        badge: "Integração WhatsApp",
        title: "Recebimento e Coleta Direto no WhatsApp",
        description:
          "Seus clientes podem enviar fotos de comprovantes e documentos direto no WhatsApp da sua empresa, e o sistema cataloga tudo na pasta correta sem esforço manual.",
      },
      {
        badge: "Régua Ativa de Prazos",
        title: "Alertas Automáticos de Vencimento",
        description:
          "Receba notificações preventivas no WhatsApp 30, 15 e 5 dias antes de certidões negativas, alvarás ou contratos perderem a validade.",
      },
      {
        badge: "Validade Jurídica",
        title: "Assinatura Eletrônica em 1 Clique",
        description:
          "Gere links de assinatura digital com registro de IP, data e integridade criptográfica, enviando diretamente para o celular do cliente pelo WhatsApp.",
      },
      {
        badge: "Área do Cliente",
        title: "Portal Documental com a Sua Marca",
        description:
          "Ofereça aos seus clientes uma área segura para consultar e baixar documentos a qualquer hora do dia, reduzindo pedidos repetitivos no atendimento.",
      },
      {
        badge: "Segurança & LGPD",
        title: "Criptografia e Isolamento em Nuvem",
        description:
          "Armazenamento em Data Center de alta segurança com criptografia de ponta a ponta, backups automáticos diários e controle rigoroso de permissões.",
      },
    ],
  },
  pricing: {
    eyebrow: "Planos Transparentes",
    title: "Escolha a capacidade ideal para o volume de documentos da sua empresa",
    description:
      "Comece com 14 dias gratuitos sem cartão de crédito. Seus dados e arquivos permanecem 100% seguros.",
    tiers: [
      {
        id: "start",
        name: "GED Start",
        badge: "Autônomos e Pequenos Escritórios",
        tagline: "Ideal para pequenas empresas que desejam eliminar papéis e controlar prazos.",
        capacity: "Até 20 GB de Armazenamento Seguro",
        storageLimit: "20 GB",
        priceMonthly: "R$ 49,00",
        priceAnnualMonthly: "R$ 39,00",
        annualTotal: "R$ 468,00 / ano (economia de R$ 120)",
        period: "/mês",
        cta: {
          label: "Começar teste grátis",
          href: "https://hub.agillex.com.br/checkout?modulo=ged&plano=ged-start&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "pro",
        name: "GED Pro",
        badge: "Mais Escolhido",
        popular: true,
        tagline: "Para escritórios e clínicas com fluxo diário de documentos e contratos.",
        capacity: "Até 100 GB + OCR com IA + WhatsApp",
        storageLimit: "100 GB",
        priceMonthly: "R$ 89,00",
        priceAnnualMonthly: "R$ 69,00",
        annualTotal: "R$ 828,00 / ano (economia de R$ 240)",
        period: "/mês",
        cta: {
          label: "Começar teste grátis",
          href: "https://hub.agillex.com.br/checkout?modulo=ged&plano=ged-pro&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "escala",
        name: "GED Escala",
        tagline: "Para empresas de alto volume, contabilidades e redes que exigem máxima capacidade.",
        capacity: "Até 500 GB + Múltiplos Setores + Assinatura Digital",
        storageLimit: "500 GB",
        priceMonthly: "R$ 149,00",
        priceAnnualMonthly: "R$ 119,00",
        annualTotal: "R$ 1.428,00 / ano (economia de R$ 360)",
        period: "/mês",
        cta: {
          label: "Começar teste grátis",
          href: "https://hub.agillex.com.br/checkout?modulo=ged&plano=ged-escala&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas Frequentes",
    title: "Tudo o que você precisa saber sobre o Agillex GED",
    description: "Perguntas comuns sobre funcionamento, leitura por IA e segurança jurídica.",
    items: [
      {
        question: "Como funciona a leitura de documentos com Inteligência Artificial (OCR)?",
        answer:
          "Ao subir uma foto ou PDF (mesmo de documento escaneado ou ligeiramente amassado), nossos algoritmos de visão e IA leem o texto completo, identificam automaticamente o tipo de arquivo (se é um contrato, nota fiscal, certidão ou CND), preenchem os dados cadastrais e deixam todo o conteúdo pesquisável por palavras-chave.",
      },
      {
        question: "Como meus clientes podem me enviar documentos pelo WhatsApp?",
        answer:
          "Integrado ao motor do Agilex Atende, quando seu cliente envia uma foto de comprovante ou documento em PDF na conversa do WhatsApp, a IA identifica o remetente, extrai o anexo e arquiva automaticamente na pasta correspondente no GED.",
      },
      {
        question: "Como funcionam os alertas de vencimento no WhatsApp?",
        answer:
          "Você cadastra a data de validade de um documento (ou a IA detecta no momento do upload). O sistema programa lembretes automáticos para notificar você ou o próprio cliente no WhatsApp antes do vencimento, permitindo a renovação ou reemissão sem atrasos.",
      },
      {
        question: "A assinatura eletrônica tem validade jurídica no Brasil?",
        answer:
          "Sim. O sistema utiliza os critérios da Medida Provisória nº 2.200-2/2001 e da Lei nº 14.063/2020 para assinaturas eletrônicas avançadas, registrando hash SHA-256 do arquivo, carimbo de tempo, endereço IP, e-mail e geolocalização dos signatários.",
      },
      {
        question: "Os dados e documentos dos meus clientes estão protegidos pela LGPD?",
        answer:
          "Sim. Toda a infraestrutura opera com criptografia em repouso e em trânsito (SSL/TLS), backups automatizados redundantes e isolamento rígido entre clientes (arquitetura multi-tenant com segurança de nível bancário).",
      },
      {
        question: "Como funciona o teste gratuito de 14 dias?",
        answer:
          "Você cria sua conta gratuitamente e pode usar todos os recursos da plataforma durante 14 dias. Não solicitamos cartão de crédito no início do teste e todos os seus arquivos permanecem seguros caso deseje continuar.",
      },
    ],
  },
  trial: {
    eyebrow: "Comece Agora",
    title: "Organize todos os documentos da sua empresa hoje mesmo",
    description:
      "Elimine o caos de arquivos espalhados, automatize notificações de vencimentos e ofereça uma experiência moderna para seus clientes.",
    points: [
      {
        label: "Ativação Rápida",
        text: "Crie suas primeiras pastas e comece a enviar arquivos em menos de 2 minutos.",
      },
      {
        label: "14 Dias Grátis",
        text: "Acesso completo aos recursos de OCR e IA sem necessidade de cartão de crédito.",
      },
      {
        label: "Sem Fidelidade",
        text: "Cancele a qualquer momento com total autonomia e exportação completa dos seus arquivos.",
      },
    ],
    card: {
      highlight: "Arquivo Seguro",
      title: "Pronto para ter controle total sobre seus documentos?",
      description:
        "Crie sua conta no Agillex Hub agora e comece a experimentar o GED com Inteligência Artificial e WhatsApp integrado.",
      action: {
        label: "Iniciar Teste de 14 Dias",
        href: "https://hub.agillex.com.br/checkout?modulo=ged&plano=ged-pro&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      note: "Ativação imediata · Sem cartão de crédito · Suporte humano AllLogic",
    },
  },
};
