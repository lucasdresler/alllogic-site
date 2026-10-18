// Conteúdo dos Termos de Uso e Contrato de Adesão do site institucional da AllLogic Online.
// Este conteúdo reflete as condições oficiais homologadas no SGA (SGA/06-Comercial/contratos/CONTRATO-PRESTACAO-SERVICOS.md).

export interface TermsSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export const termosContent = {
  eyebrow: "Termos e Condições",
  title: "Termos de Uso e Contrato de Prestação de Serviços",
  description:
    "Estes Termos de Uso e Contrato de Prestação de Serviços regem o acesso e a utilização dos serviços de tecnologia, engenharia digital e licenciamento das plataformas em nuvem da Família Agillex fornecidos pela AllLogic Online.",
  updatedAt: "18 de outubro de 2026",

  sections: [
    {
      title: "1. Identificação da Contratada",
      paragraphs: [
        "A AllLogic Online — Engenharia de Soluções Digitais é uma marca registrada utilizada por WELLINGTON LUCAS LIMA DRESLER - ME, pessoa jurídica de direito privado inscrita no CNPJ/MF sob o nº 08.784.339/0001-38, com sede cadastral em São Paulo/SP.",
        "Para comunicações formais, suporte técnico ou dúvidas contratuais, os canais oficiais de atendimento são o e-mail contato@alllogiconline.com.br e o WhatsApp oficial (11) 96638-1915.",
      ],
    },
    {
      title: "2. Objeto e Modalidades de Serviços",
      paragraphs: [
        "O presente instrumento regula a prestação de serviços de tecnologia da informação e soluções digitais, compreendendo uma ou mais das seguintes modalidades contratadas:",
      ],
      items: [
        "Software como Serviço (SaaS / Família Agillex): licenciamento de uso de plataformas em nuvem, incluindo Agillex Hub, Agillex Agenda, Agillex Atendimento e Agillex Pay;",
        "Engenharia e Desenvolvimento sob Medida: concepção, arquitetura, desenvolvimento e implantação de softwares, portais web, automações e integrações de APIs personalizadas;",
        "Hospedagem Gerenciada e Sustentação: infraestrutura em nuvem, monitoramento de disponibilidade, rotinas de backup e manutenção técnica contínua.",
      ],
    },
    {
      title: "3. Soluções da Família Agillex (SaaS)",
      paragraphs: [
        "Ao contratar soluções da Família Agillex, o cliente tem acesso a ferramentas de software em nuvem desenvolvidas para maximizar a produtividade e a conversão de serviços:",
      ],
      items: [
        "Agillex Hub: plataforma unificada de gestão operacional, centralizando atendimento com IA no WhatsApp, agendamento de horários, CRM em funil Kanban e checkout de cobrança;",
        "Agillex Agenda: sistema de agendamento online 24/7 com página pública exclusiva da empresa, sincronização em tempo real com Google Calendar e lembretes automáticos via WhatsApp;",
        "Agillex Atendimento: atendente virtual inteligente com IA humanizada no WhatsApp Oficial, suporte a áudio e texto, resposta contextual baseada em documentos homologados (arquitetura RAG — sem alucinações) e transbordo humano em 1 clique;",
        "Agillex Pay: módulo integrado de intermediação financeira via Asaas com Taxa Fixa de apenas R$ 1,99 por transação concluída no Pix ou Cartão de Crédito, sem cobrança de taxas percentuais sobre o faturamento do cliente.",
      ],
    },
    {
      title: "4. Nível de Serviço e Disponibilidade (SLA)",
      paragraphs: [
        "A AllLogic Online adota as melhores práticas de engenharia em nuvem e segurança cibernética, estabelecendo uma meta de disponibilidade mensal de 99,5% (noventa e nove vírgula cinco por cento) para suas plataformas em ambiente de produção.",
        "Não são computadas no cálculo de disponibilidade as janelas de manutenção técnica preventiva (previamente comunicadas com pelo menos 24 horas de antecedência) ou instabilidades generalizadas de infraestrutura de terceiros (como falhas globais da Meta/WhatsApp Cloud API, Cloudflare, Oracle Cloud ou do gateway bancário).",
      ],
    },
    {
      title: "5. Uso Adequado dos Canais de WhatsApp",
      paragraphs: [
        "Ao utilizar o Agillex Atendimento ou o Agillex Agenda com integração de WhatsApp, o cliente obriga-se a respeitar as Políticas Comerciais da Meta e a legislação vigente.",
        "É terminantemente proibido o uso da plataforma para envio de mensagens não solicitadas em massa (SPAM), práticas ilegais, difamatórias, fraudulentas ou que violem os direitos de privacidade de terceiros. A AllLogic Online não se responsabiliza por eventuais suspensões de números decorrentes de práticas abusivas conduzidas diretamente pelo contratante.",
      ],
    },
    {
      title: "6. Política de Cancelamento e Ausência de Fidelidade Compulsória",
      paragraphs: [
        "Em consonância com nossos princípios de honestidade técnica e transparência, não praticamos fidelidade forçada nos planos de assinatura SaaS. Acreditamos que o cliente permanece pela qualidade e utilidade das soluções entregues.",
        "O cliente pode solicitar o cancelamento da assinatura a qualquer momento, sem qualquer multa rescisória, mediante simples solicitação com antecedência mínima de 30 (trinta) dias em relação ao próximo ciclo de faturamento.",
      ],
    },
    {
      title: "7. Propriedade Intelectual e Propriedade Absoluta dos Dados",
      paragraphs: [
        "Propriedade da Plataforma: todos os softwares, códigos-fonte, algoritmos, designs, bibliotecas e marcas da Família Agillex são de propriedade intelectual exclusiva da AllLogic Online.",
        "Propriedade dos Dados do Cliente: todos os dados cadastrais, listas de clientes, agendamentos, conversas de atendimento, histórico de mensagens e informações financeiras pertencem integral e exclusivamente ao contratante.",
        "Garantia de Portabilidade: em caso de término contratual, a AllLogic Online assegura ao cliente o direito de exportar a integralidade de seus dados operacionais e de clientes em formatos abertos e estruturados (como CSV ou JSON), sem qualquer taxa de retenção.",
      ],
    },
    {
      title: "8. Proteção de Dados (LGPD) e Confidencialidade",
      paragraphs: [
        "O tratamento de dados pessoais é realizado em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).",
        "O contratante atua na qualidade de Controlador dos dados pessoais de seus clientes, e a AllLogic Online atua como Operadora técnica, implementando medidas rigorosas de segurança, criptografia em trânsito (TLS/HTTPS), isolamento multi-tenant de banco de dados e sigilo absoluto sobre todas as informações corporativas.",
      ],
    },
    {
      title: "9. Preços, Faturamento e Inadimplência",
      paragraphs: [
        "As assinaturas SaaS são cobradas de forma recorrente e pré-paga, com faturamento automático via Pix, Cartão de Crédito ou Boleto Bancário conforme o plano selecionado.",
        "Em caso de atraso no pagamento superior a 10 (dez) dias corridos, o acesso aos recursos da plataforma poderá ser temporariamente suspenso até a regularização financeira. Permanecendo a inadimplência por mais de 30 (trinta) dias, a conta poderá ser cancelada.",
      ],
    },
    {
      title: "10. Legislação Aplicável e Foro de Eleição",
      paragraphs: [
        "O presente instrumento é regido pelas leis da República Federativa do Brasil.",
        "Para a resolução de quaisquer controvérsias decorrentes destes Termos que não possam ser dirimidas de forma amigável, fica eleito com exclusividade o Foro da Comarca da Capital do Estado de São Paulo, com renúncia a qualquer outro por mais privilegiado que seja.",
      ],
    },
  ],
};
