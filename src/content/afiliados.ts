// Fonte de dados do Programa de Parceiros & Afiliados da AllLogic Online (AllLogic Partners)
// Baseado oficialmente em SGA/06-Comercial/parcerias/PROGRAMA-DE-PARCEIROS-E-AFILIADOS.md

export interface CommissionItem {
  name: string;
  type: string;
  commission: string;
  example: string;
  highlight?: boolean;
}

export interface SimulationTier {
  clients: number;
  monthlyRevenue: string;
  description: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface TargetAudienceItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AffiliatesRegisterContent {
  badge: string;
  title: string;
  subtitle: string;
  fields: {
    name: { label: string; placeholder: string; requiredMessage: string };
    email: { label: string; placeholder: string; requiredMessage: string };
    phone: { label: string; placeholder: string; requiredMessage: string };
    personType: { label: string; options: { pf: string; pj: string } };
    pixType: {
      label: string;
      options: {
        cpf: string;
        cnpj: string;
        phone: string;
        email: string;
        random: string;
      };
    };
    pixKey: { label: string; placeholder: string; requiredMessage: string };
    termsNote: string;
  };
  submitLabel: string;
  submittingLabel: string;
  success: {
    badge: string;
    title: string;
    subtitle: string;
    codeLabel: string;
    linkLabel: string;
    copyLabel: string;
    copiedLabel: string;
    commissionHighlight: string;
    trackingHighlight: string;
    pixConfirmation: string;
  };
}

export interface AffiliatesContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
    trustPoints: string[];
  };
  commissions: {
    badge: string;
    title: string;
    description: string;
    categoryA: {
      title: string;
      subtitle: string;
      rate: string;
      items: CommissionItem[];
    };
    categoryB: {
      title: string;
      subtitle: string;
      items: CommissionItem[];
    };
    simulation: {
      title: string;
      subtitle: string;
      tiers: SimulationTier[];
    };
  };
  benefits: {
    badge: string;
    title: string;
    items: BenefitItem[];
  };
  audiences: {
    badge: string;
    title: string;
    description: string;
    items: TargetAudienceItem[];
  };
  register: AffiliatesRegisterContent;
  faq: {
    badge: string;
    title: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
    note: string;
  };
}

export const afiliadosContent: AffiliatesContent = {
  meta: {
    title: "Programa de Afiliados e Parceiros | AllLogic Partners — Comissões Recorrentes",
    description:
      "Seja um parceiro oficial da AllLogic Online. Ganhe comissão recorrente enquanto o cliente permanecer ativo indicando as soluções da Família Agillex e até 20% em projetos. Pagamento via Pix todo dia 10.",
  },
  hero: {
    badge: "AllLogic Partners",
    title: "Construa uma renda recorrente sólida com a tecnologia da",
    highlight: "AllLogic Online.",
    description:
      "Indique soluções digitais comprovadas de atendimento inteligente no WhatsApp, agendamento online e infraestrutura web para empresas e receba comissão todo mês, enquanto o cliente permanecer ativo.",
    ctaPrimary: {
      label: "Quero meu Link de Parceiro",
      href: "#cadastro",
    },
    ctaSecondary: {
      label: "Conhecer as Comissões",
      href: "#comissoes",
    },
    trustPoints: [
      "Comissão recorrente enquanto o cliente permanecer ativo",
      "Pagamentos via Pix todo dia 10",
      "Cookie de 60 dias com atribuição garantida",
      "Adesão 100% gratuita sem taxas de entrada",
    ],
  },
  commissions: {
    badge: "Remuneração Transparente",
    title: "Comissões pensadas para o seu crescimento contínuo",
    description:
      "Ao contrário de programas tradicionais que pagam apenas uma vez, a AllLogic Online compartilha a receita das assinaturas com você mensalmente (MRR Sharing).",
    categoryA: {
      title: "Categoria A: Soluções SaaS Recorrentes (Família Agillex)",
      subtitle: "20% de comissão recorrente todos os meses durante toda a vigência da assinatura do cliente.",
      rate: "20% Recorrente Mensal",
      items: [
        {
          name: "Agillex Agenda Starter",
          type: "Agendamento Online (1 profissional)",
          commission: "20% recorrente",
          example: "R$ 9,98 / mês por cliente",
        },
        {
          name: "Agillex Agenda Pro",
          type: "Agendamento Online (Até 5 profissionais)",
          commission: "20% recorrente",
          example: "R$ 19,98 / mês por cliente",
        },
        {
          name: "Agillex Agenda Enterprise",
          type: "Agendamento Online (Até 10 profissionais)",
          commission: "20% recorrente",
          example: "R$ 33,98 / mês por cliente",
        },
        {
          name: "Agillex Atendimento Starter",
          type: "IA no WhatsApp (até 500 conversas)",
          commission: "20% recorrente",
          example: "R$ 19,98 / mês por cliente",
        },
        {
          name: "Agillex Atendimento Pro",
          type: "IA no WhatsApp (até 2.000 conversas)",
          commission: "20% recorrente",
          example: "R$ 35,98 / mês por cliente",
        },
        {
          name: "Agillex Hub Pro",
          type: "Plataforma Completa Unificada",
          commission: "20% recorrente",
          example: "R$ 49,98 / mês por cliente",
          highlight: true,
        },
        {
          name: "Agillex Hub Anual",
          type: "Plano Anual com Desconto",
          commission: "20% do plano anual",
          example: "R$ 479,76 / ano (equivale a R$ 39,98/mês)",
          highlight: true,
        },
      ],
    },
    categoryB: {
      title: "Categoria B: Serviços de Engenharia sob Medida e Hospedagem",
      subtitle: "Comissões pontuais e contínuas sobre contratos de infraestrutura e projetos digitais.",
      items: [
        {
          name: "Criação de Sites e Landing Pages",
          type: "Desenvolvimento web de alta conversão",
          commission: "20% pontual",
          example: "Contrato de R$ 2.500 ➔ R$ 500 de comissão",
        },
        {
          name: "Hospedagem Gerenciada cPanel",
          type: "Servidores CloudLinux com SSL grátis",
          commission: "20% recorrente mensal",
          example: "Plano R$ 99,90/mês ➔ R$ 19,98 / mês recorrente",
        },
        {
          name: "Sistemas sob Medida e Automação",
          type: "Aplicações e integrações empresariais",
          commission: "10% pontual",
          example: "Projeto de R$ 10.000 ➔ R$ 1.000 de comissão",
        },
      ],
    },
    simulation: {
      title: "Simulação de Renda Recorrente do Parceiro",
      subtitle: "Veja o poder dos ganhos acumulados indicando a plataforma Agillex Hub Pro:",
      tiers: [
        {
          clients: 5,
          monthlyRevenue: "R$ 249,90 / mês",
          description: "Renda passiva mensal gerada com apenas 5 empresas ativas na sua carteira.",
        },
        {
          clients: 15,
          monthlyRevenue: "R$ 749,70 / mês",
          description: "Uma renda mensal previsível recebida pontualmente todo dia 10 via Pix.",
        },
        {
          clients: 30,
          monthlyRevenue: "R$ 1.499,40 / mês",
          description: "Mais de R$ 17.900 ao ano em comissões sem custos operacionais ou suporte técnico por sua conta.",
        },
      ],
    },
  },
  benefits: {
    badge: "Diferenciais",
    title: "Por que se tornar um Parceiro da<br class=\"hide-on-mobile\" /> AllLogic Online?",
    items: [
      {
        icon: "repeat",
        title: "Renda Recorrente Real",
        description:
          "Você não recebe apenas na adesão: enquanto o cliente mantiver a assinatura ativa, a comissão continua caindo todo mês na sua conta.",
      },
      {
        icon: "clock",
        title: "Janela de Atribuição de 60 Dias",
        description:
          "Seu link grava um cookie seguro por 60 dias. Se o cliente conhecer hoje e assinar semanas depois, a venda continua sendo creditada a você.",
      },
      {
        icon: "shield-check",
        title: "Suporte e Infraestrutura por Nossa Conta",
        description:
          "Você cuida apenas da indicação. Toda a hospedagem, manutenção técnica, atualizações de IA e suporte ao cliente final ficam a cargo da equipe da AllLogic Online.",
      },
      {
        icon: "zap",
        title: "Compatível com o Teste Grátis de 14 Dias",
        description:
          "Seu indicado pode testar qualquer solução da Família Agillex gratuitamente por 14 dias sem cartão de crédito. Ao efetuar a primeira mensalidade, sua comissão entra em vigor.",
      },
      {
        icon: "credit-card",
        title: "Repasses Automáticos via Pix",
        description:
          "Fechamento no último dia do mês e repasse garantido todo dia 10 direto na sua chave Pix cadastrada.",
      },
      {
        icon: "award",
        title: "Soluções de Altíssima Retenção",
        description:
          "Ferramentas essenciais para o dia a dia das empresas têm baixíssimo cancelamento (churn), garantindo a longevidade dos seus ganhos.",
      },
    ],
  },
  audiences: {
    badge: "Para Quem é",
    title: "O programa perfeito para quem conecta empresas à tecnologia",
    description:
      "Seja você um profissional autônomo, agência ou consultor, a AllLogic Online oferece as soluções que seus clientes já procuram.",
    items: [
      {
        icon: "layout",
        title: "Agências Digitais & Gestores de Tráfego",
        subtitle: "Aumente a retenção e o ROI das suas campanhas",
        description:
          "Garanta que os leads gerados nos anúncios dos seus clientes recebam resposta humanizada em 5 segundos no WhatsApp via Agillex Atendimento, eliminando o gargalo de atendimento.",
      },
      {
        icon: "code",
        title: "Desenvolvedores & Designers Web",
        subtitle: "Entregue projetos completos com infraestrutura pronta",
        description:
          "Agregue hospedagem cPanel com isolamento CloudLinux e agendamento online pronto aos sites que você cria para seus clientes, gerando renda recorrente sem trabalho adicional.",
      },
      {
        icon: "briefcase",
        title: "Contadores & Consultores Empresariais",
        subtitle: "Reduza custos operacionais de seus clientes",
        description:
          "Apresente automação de atendimento e agendamento para empresas que sofrem com falta de secretárias ou desorganização de horários, agregando valor consultivo.",
      },
      {
        icon: "users",
        title: "Clientes & Empreendedores (Indique e Ganhe)",
        subtitle: "Monetize sua rede de contatos empresariais",
        description:
          "Indique as ferramentas que você mesmo utiliza no dia a dia para colegas de profissão e amigos empresários e receba uma fatia de cada assinatura.",
      },
    ],
  },
  register: {
    badge: "Credenciamento Oficial",
    title: "Cadastre-se e receba seu Link Exclusivo de Parceiro",
    subtitle:
      "Preencha seus dados para gerar seu código único de afiliado e sua chave de repasses Pix.",
    fields: {
      name: {
        label: "Nome Completo ou Razão Social",
        placeholder: "Seu nome ou nome da sua empresa",
        requiredMessage: "Informe seu nome completo ou razão social.",
      },
      email: {
        label: "E-mail Profissional",
        placeholder: "seuemail@exemplo.com.br",
        requiredMessage: "Informe um e-mail válido para comunicações do programa.",
      },
      phone: {
        label: "WhatsApp de Contato",
        placeholder: "(11) 99999-9999",
        requiredMessage: "Informe seu WhatsApp com DDD.",
      },
      personType: {
        label: "Tipo de Pessoa",
        options: {
          pf: "Pessoa Física (CPF)",
          pj: "Pessoa Jurídica (CNPJ)",
        },
      },
      pixType: {
        label: "Tipo de Chave Pix",
        options: {
          cpf: "CPF",
          cnpj: "CNPJ",
          phone: "Celular / WhatsApp",
          email: "E-mail",
          random: "Chave Aleatória (EVP)",
        },
      },
      pixKey: {
        label: "Chave Pix para Repasses",
        placeholder: "Digite sua chave Pix cadastrada",
        requiredMessage: "Informe sua chave Pix para repasses todo dia 10.",
      },
      termsNote:
        "Ao se cadastrar, você concorda com os termos e regras operacionais do Programa de Parceiros AllLogic Online.",
    },
    submitLabel: "Gerar meu Link de Afiliado",
    submittingLabel: "Gerando seu Credenciamento...",
    success: {
      badge: "Credenciamento Ativo",
      title: "Parabéns! Seu Código de Parceiro foi Gerado",
      subtitle:
        "Compartilhe seu link exclusivo abaixo. Qualquer contratação iniciada por ele será automaticamente atribuída a você.",
      codeLabel: "Seu Código Exclusivo de Afiliado",
      linkLabel: "Seu Link Oficial de Indicação",
      copyLabel: "Copiar Link",
      copiedLabel: "Link Copiado!",
      commissionHighlight: "Comissão recorrente enquanto o cliente permanecer ativo",
      trackingHighlight: "Janela de rastreamento com cookie de 60 dias",
      pixConfirmation: "Repasses automáticos todo dia 10 na chave Pix cadastrada",
    },
  },
  faq: {
    badge: "Tire suas Dúvidas",
    title: "Perguntas frequentes sobre o programa",
    items: [
      {
        question: "Quanto custa para me tornar um afiliado ou parceiro?",
        answer:
          "A adesão é 100% gratuita. Você não paga nenhuma taxa de inscrição, mensalidade ou manutenção para participar do programa AllLogic Partners.",
      },
      {
        question: "Como e quando recebo as minhas comissões?",
        answer:
          "O fechamento das comissões ocorre no último dia útil de cada mês. O pagamento é realizado pontualmente todo dia 10 (ou primeiro dia útil subsequente) via transferência instantânea Pix diretamente na chave cadastrada no seu perfil.",
      },
      {
        question: "Preciso ter empresa aberta (CNPJ) para receber?",
        answer:
          "Aceitamos tanto pessoas físicas quanto pessoas jurídicas. Basta cadastrar sua chave Pix.",
      },
      {
        question: "Como funciona a janela do cookie de 60 dias?",
        answer:
          "Quando alguém clica no seu link de parceiro, o navegador armazena um cookie seguro por 60 dias. Se o contato navegar pelo site hoje e decidir contratar a solução dias ou semanas depois, a venda será automaticamente atribuída a você.",
      },
      {
        question: "E se o cliente começar pelo teste gratuito de 14 dias?",
        answer:
          "O vínculo de afiliação permanece perfeitamente ativo durante todo o período de degustação. Assim que o cliente concluir os 14 dias e pagar a primeira mensalidade para continuar utilizando, sua comissão é validada e computada no ciclo vigente.",
      },
      {
        question: "Existe valor mínimo para saque?",
        answer:
          "O valor mínimo acumulado para repasse é de R$ 100,00. Caso o valor do mês seja inferior, ele acumula automaticamente para o mês seguinte sem qualquer desconto ou data de expiração.",
      },
      {
        question: "Eu preciso prestar suporte técnico ao cliente que indicar?",
        answer:
          "Não. Todo o atendimento de suporte, manutenção de servidores, evolução técnica da IA e treinamento operacional são realizados integralmente pela equipe técnica especializada da AllLogic Online.",
      },
    ],
  },
  cta: {
    title: "Comece a lucrar com o ecossistema da AllLogic Online hoje mesmo.",
    description:
      "Cadastre-se gratuitamente, receba seus links de parceiro e comece a construir sua carteira de comissões recorrentes.",
    buttonLabel: "Cadastrar Gratuitamente",
    buttonHref: "#cadastro",
    note: "Adesão 100% gratuita com geração imediata do seu código e link exclusivo.",
  },
};
