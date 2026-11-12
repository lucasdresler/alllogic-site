// Conteúdo textual e dados da página /agillex-cobranca, isolados da camada de apresentação.
//
// Solução comercial: Agillex Cobrança (Régua Ativa no WhatsApp com Pix Integrado via Asaas).
// Rota pública: /agillex-cobranca/
// Organização: AllLogic Online — Engenharia de Soluções Digitais

export interface CobrancaCTA {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface CobrancaHeroContent {
  badge: string;
  title: string;
  description: string;
  actions: {
    primary: CobrancaCTA;
    secondary: CobrancaCTA;
  };
  trust: string;
}

export interface CobrancaAudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface CobrancaAudienceContent {
  eyebrow: string;
  title: string;
  complement: string;
  description: string;
  items: CobrancaAudienceItem[];
}

export interface CobrancaFeatureItem {
  badge: string;
  title: string;
  description: string;
}

export interface CobrancaFeaturesContent {
  eyebrow: string;
  title: string;
  description: string;
  items: CobrancaFeatureItem[];
}

export interface CobrancaPricingTier {
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
  cta: CobrancaCTA;
}

export interface CobrancaPricingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  universalNote: string;
  features: string[];
  tiers: CobrancaPricingTier[];
}

export interface CobrancaFaqItem {
  question: string;
  answer: string;
}

export interface CobrancaFaqContent {
  eyebrow: string;
  title: string;
  description: string;
  items: CobrancaFaqItem[];
}

export interface CobrancaTrialPoint {
  label: string;
  text: string;
}

export interface CobrancaTrialContent {
  eyebrow: string;
  title: string;
  description: string;
  points: CobrancaTrialPoint[];
  card: {
    highlight: string;
    title: string;
    description: string;
    action: CobrancaCTA;
    note: string;
  };
}

export interface CobrancaMetaContent {
  title: string;
  description: string;
}

export interface CobrancaContent {
  meta: CobrancaMetaContent;
  hero: CobrancaHeroContent;
  audience: CobrancaAudienceContent;
  features: CobrancaFeaturesContent;
  pricing: CobrancaPricingContent;
  faq: CobrancaFaqContent;
  trial: CobrancaTrialContent;
}

export const agillexCobrancaContent: CobrancaContent = {
  meta: {
    title: "Agillex Cobrança — Régua Ativa no WhatsApp com Pix Integrado | AllLogic",
    description:
      "Automatize suas cobranças no WhatsApp com lembretes preventivos, aviso no vencimento e recuperação amigável. Pix Copia e Cola integrado ao Asaas com taxa fixa de R$ 1,99.",
  },
  hero: {
    badge: "Régua Ativa no WhatsApp com Pix Integrado (Asaas)",
    title: "Acabe com a inadimplência e receba via Pix no piloto automático.",
    description:
      "O Agillex Cobrança dispara notificações inteligentes antes, no dia e após o vencimento diretamente no WhatsApp do seu cliente. Pagamento instantâneo via Pix Copia e Cola e taxa fixa imbatível de apenas R$ 1,99 por transação concluída.",
    actions: {
      primary: {
        label: "Testar por 14 dias grátis",
        href: "https://hub.agillex.com.br/checkout?modulo=cobranca&plano=cobranca-pro&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      secondary: {
        label: "Ver demonstração no WhatsApp",
        href: "https://wa.me/5511966381915?text=Ol%C3%A1!%20Gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20Agillex%20Cobran%C3%A7a.",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    trust: "Taxa fixa de R$ 1,99 por Pix recebido · Sem porcentagem sobre o faturamento · Regulado pelo Banco Central",
  },
  audience: {
    eyebrow: "Público-Alvo",
    title: "Desenvolvido para empresas que cobram serviços, mensalidades ou sinais",
    complement: "Sem constrangimento de cobrança manual e sem perda de tempo.",
    description:
      "Elimine a rotina desconfortável de cobrar clientes manualmente. A régua automatizada cuida de todo o acompanhamento com tom cortês e profissional.",
    items: [
      {
        icon: "🩺",
        title: "Clínicas & Consultórios",
        description:
          "Cobrança de consultas particulares, exames e procedimentos com confirmação de pagamento automática antes do atendimento.",
      },
      {
        icon: "✂️",
        title: "Barbearias, Salões & Estética",
        description:
          "Cobrança antecipada de taxas de sinal para reservas de horários e gestão de pacotes mensais de serviços.",
      },
      {
        icon: "📊",
        title: "Escritórios & Contabilidades",
        description:
          "Lembretes pontuais de honorários mensais com Pix pronto para pagamento em 1 clique, reduzindo atrasos em até 78%.",
      },
      {
        icon: "🏋️",
        title: "Academias, Studios & Pilates",
        description:
          "Notificação preventiva de mensalidades no início do mês, evitando bloqueios de catraca e atritos com alunos.",
      },
      {
        icon: "🎓",
        title: "Escolas, Cursos & Instrutores",
        description:
          "Régua amigável de mensalidades escolares e cursos livres, preservando a boa relação com alunos e responsáveis.",
      },
      {
        icon: "💼",
        title: "Prestadores de Serviços & B2B",
        description:
          "Cobrança estruturada de contratos recorrentes e ordens de serviço com baixa automática e conciliação instantânea.",
      },
    ],
  },
  features: {
    eyebrow: "Recursos Inteligentes",
    title: "A engrenagem completa para acelerar seu fluxo de caixa",
    description:
      "Uma solução robusta que conecta a agilidade do WhatsApp à segurança de uma instituição de pagamento regulada pelo BACEN.",
    items: [
      {
        badge: "D-2 Preventivo",
        title: "Aviso Preventivo de Vencimento",
        description:
          "Lembrete cortês disparado 2 dias antes do vencimento com a chave Pix Copia e Cola, permitindo que clientes organizados paguem com antecedência.",
      },
      {
        badge: "D0 Vencimento",
        title: "Alerta no Dia do Vencimento",
        description:
          "Mensagem pontual na manhã do vencimento com código Pix para pagamento imediato sem multas ou juros, direto pelo app do banco.",
      },
      {
        badge: "D+2 Recuperação",
        title: "Recuperação Amigável de Atrasos",
        description:
          "Abordagem empática para casos de esquecimento, oferecendo caminho rápido para regularização sem nenhum constrangimento interpessoal.",
      },
      {
        badge: "Liquidação Instantânea",
        title: "Confirmação Automática de Pagamento",
        description:
          "Assim que o cliente paga o Pix, o sistema detecta a liquidação via webhook em segundos e envia o comprovante de quitação no WhatsApp.",
      },
      {
        badge: "Taxa Fixa R$ 1,99",
        title: "Economia Real com Agillex Pay",
        description:
          "Esqueça taxas abusivas de 3% a 5% sobre seu faturamento. No Agillex Cobrança integrado ao Asaas, você paga apenas R$ 1,99 fixo por Pix concluído.",
      },
      {
        badge: "Meta Cloud API Oficial",
        title: "Segurança e Proteção Anti-Ban",
        description:
          "Disparos realizados por meio da API Oficial do WhatsApp (Meta Cloud API), garantindo máxima taxa de entrega e zero risco de perda do número.",
      },
    ],
  },
  pricing: {
    eyebrow: "Planos e Preços",
    title: "Planos acessíveis que se pagam na primeira fatura recuperada",
    subtitle:
      "Sem taxa de adesão, sem fidelidade contratual e com 14 dias de teste gratuito.",
    universalNote:
      "Todos os planos contam com integração oficial Asaas, taxa fixa de R$ 1,99 por Pix recebido e suporte técnico.",
    features: [
      "Régua de 4 etapas (D-2, D0, D+2 e Confirmação pós-pago)",
      "Chave Pix Copia e Cola gerada dinamicamente",
      "Confirmação instantânea de pagamento via webhook",
      "Mensagens personalizadas com o nome do cliente e dados da fatura",
      "Taxa fixa reduzida de R$ 1,99 por Pix recebido (sem percentuais)",
      "Conexão certificada com a API Oficial do WhatsApp",
      "Painel de métricas e histórico de liquidações em tempo real",
    ],
    tiers: [
      {
        id: "start",
        name: "Cobrança Start",
        tagline: "Ideal para autônomos e pequenos negócios em início de automação.",
        capacity: "Até 50 cobranças ativas/mês",
        monthlyLimit: 50,
        priceMonthly: "R$ 49,00",
        priceAnnualMonthly: "R$ 39,00",
        annualTotal: "R$ 468,00 / ano (economia de R$ 120)",
        period: "/mês",
        cta: {
          label: "Começar teste grátis",
          href: "https://hub.agillex.com.br/checkout?modulo=cobranca&plano=cobranca-start&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "pro",
        name: "Cobrança Pro",
        badge: "Mais Escolhido",
        popular: true,
        tagline: "Perfeito para empresas com volume consistente de recebimentos recorrentes.",
        capacity: "Até 200 cobranças ativas/mês",
        monthlyLimit: 200,
        priceMonthly: "R$ 89,00",
        priceAnnualMonthly: "R$ 69,00",
        annualTotal: "R$ 828,00 / ano (economia de R$ 240)",
        period: "/mês",
        cta: {
          label: "Começar teste grátis",
          href: "https://hub.agillex.com.br/checkout?modulo=cobranca&plano=cobranca-pro&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      {
        id: "escala",
        name: "Cobrança Escala",
        tagline: "Para empresas de alto fluxo que necessitam de capacidade expandida.",
        capacity: "Até 600 cobranças ativas/mês",
        monthlyLimit: 600,
        priceMonthly: "R$ 149,00",
        priceAnnualMonthly: "R$ 119,00",
        annualTotal: "R$ 1.428,00 / ano (economia de R$ 360)",
        period: "/mês",
        cta: {
          label: "Começar teste grátis",
          href: "https://hub.agillex.com.br/checkout?modulo=cobranca&plano=cobranca-escala&trial=true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas Frequentes",
    title: "Tudo o que você precisa saber sobre o Agillex Cobrança",
    description: "Perguntas comuns sobre funcionamento, integração bancária e segurança.",
    items: [
      {
        question: "Preciso trocar de conta bancária para usar o Agillex Cobrança?",
        answer:
          "Não. O Agillex Cobrança utiliza a infraestrutura do gateway Asaas (instituição regulada pelo Banco Central). Os valores recebidos via Pix caem diretamente na sua conta Asaas e você pode transferi-los automaticamente para a sua conta em qualquer banco (Itaú, Bradesco, Santander, Nubank, Inter, etc.) via TED ou Pix gratuito.",
      },
      {
        question: "Como funciona a taxa fixa de R$ 1,99?",
        answer:
          "Diferente de maquininhas ou outros gateways que cobram percentuais como 2,5% ou 3,99% sobre o valor da sua venda, no Agillex Pay você paga uma taxa fixa de apenas R$ 1,99 por Pix efetivamente liquidado, independentemente do valor da cobrança (seja uma fatura de R$ 50 ou de R$ 1.000). Se a cobrança não for paga, você não paga nada.",
      },
      {
        question: "Existe risco de meu número de WhatsApp ser banido?",
        answer:
          "Não. Trabalhamos exclusivamente integrados à Meta Cloud API Oficial do WhatsApp, respeitando os padrões de entrega, limites e consentimento de mensagens ativas estabelecidos pela Meta. Isso garante segurança jurídica e técnica total para o seu número comercial.",
      },
      {
        question: "Como o sistema sabe quando o cliente realizou o pagamento?",
        answer:
          "A integração com o gateway bancário funciona por webhooks instantâneos. No exato segundo em que o cliente conclui o Pix em seu banco, o sistema recebe a confirmação bancária, atualiza o status para liquidado e dispara automaticamente a mensagem de confirmação e agradecimento no WhatsApp.",
      },
      {
        question: "Posso personalizar os textos das mensagens da régua?",
        answer:
          "Sim! Os textos da régua (aviso preventivo, vencimento e recuperação) podem ser customizados para utilizar o tom de voz da sua marca, mantendo a inclusão dinâmica do nome do cliente, descrição do serviço e chave Pix Copia e Cola.",
      },
      {
        question: "Como funciona o teste gratuito de 14 dias?",
        answer:
          "Você pode criar sua conta e experimentar todos os recursos do Agillex Cobrança por 14 dias sem compromisso. Não é necessário cartão de crédito para iniciar o teste. Se gostar e desejar continuar, basta escolher o plano ideal para seu volume.",
      },
    ],
  },
  trial: {
    eyebrow: "Comece Agora",
    title: "Transforme a gestão de cobranças da sua empresa hoje mesmo",
    description:
      "Reduza atrasos, automatize notificações e ofereça uma experiência de pagamento simples e rápida para seus clientes no WhatsApp.",
    points: [
      {
        label: "Ativação Rápida",
        text: "Configuração simples em poucos minutos com suporte da nossa engenharia.",
      },
      {
        label: "14 Dias Grátis",
        text: "Teste completo sem necessidade de cadastrar cartão de crédito.",
      },
      {
        label: "Sem Fidelidade",
        text: "Cancele a qualquer momento sem taxas rescisórias ou multas contratuais.",
      },
    ],
    card: {
      highlight: "Piloto Automático",
      title: "Pronto para recuperar faturas sem dor de cabeça?",
      description:
        "Crie sua conta no Agillex Hub agora e comece a disparar cobranças inteligentes no WhatsApp em minutos.",
      action: {
        label: "Iniciar Teste de 14 Dias",
        href: "https://hub.agillex.com.br/checkout?modulo=cobranca&plano=cobranca-pro&trial=true",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      note: "Ativação imediata · Sem cartão de crédito · Suporte humano AllLogic",
    },
  },
};
