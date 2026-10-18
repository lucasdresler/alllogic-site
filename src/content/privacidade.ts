// Conteúdo da Política de Privacidade do site institucional da AllLogic Online.
// Este conteúdo deve refletir apenas os tratamentos efetivamente realizados
// pelo site e ser atualizado sempre que esses tratamentos forem alterados.

export interface PrivacySection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export const privacidadeContent = {
  eyebrow: "Privacidade e Proteção de Dados",
  title: "Política de Privacidade",
  description:
    "Esta Política de Privacidade descreve de forma transparente como a AllLogic Online trata dados pessoais em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD), abrangendo este portal institucional, o formulário de contato, comunicações e as plataformas em nuvem da Família Agillex.",
  updatedAt: "18 de outubro de 2026",

  sections: [
    {
      title: "1. Quem somos e Canais Oficiais",
      paragraphs: [
        "A AllLogic Online — Engenharia de Soluções Digitais é uma marca comercial utilizada por WELLINGTON LUCAS LIMA DRESLER - ME, pessoa jurídica de direito privado inscrita no CNPJ/MF sob o nº 08.784.339/0001-38, com sede cadastral em São Paulo/SP.",
        "Para assuntos relacionados à privacidade, proteção de dados pessoais ou para exercer qualquer um dos seus direitos como titular previstos na Lei nº 13.709/2018 (LGPD), você pode entrar em contato diretamente com o nosso Encarregado pelo Tratamento de Dados Pessoais (DPO) através dos nossos canais oficiais:",
      ],
      items: [
        "E-mail institucional: contato@alllogiconline.com.br",
        "WhatsApp oficial de atendimento: (11) 96638-1915",
        "Portal oficial: https://alllogiconline.com.br",
      ],
    },
    {
      title: "2. Papéis na LGPD (Controladora e Operadora)",
      paragraphs: [
        "Para assegurar total transparência e clareza jurídica, informamos a distinção entre os papéis desempenhados pela AllLogic Online na dinâmica de tratamento de dados:",
        "Como Controladora: A AllLogic Online atua como Controladora de dados em relação às informações coletadas diretamente por meio deste portal institucional, de formulários de diagnóstico, contatos no WhatsApp oficial da empresa, cadastros de clientes contratantes diretos e métricas estatísticas de navegação.",
        "Como Operadora: No âmbito do licenciamento das soluções de software em nuvem (SaaS) da Família Agillex (como Agillex Hub, Agillex Agenda e Agillex Atendimento), os dados de clientes finais inseridos pelas empresas contratantes (consumidores de barbearias, salões, clínicas, consultórios, etc.) pertencem exclusivamente à empresa contratante (Controladora). A AllLogic Online atua unicamente como Operadora técnica, processando tais dados com isolamento lógico absoluto (arquitetura multi-tenant) e estritamente sob as instruções da contratante, jamais comercializando ou repassando dados a terceiros.",
      ],
    },
    {
      title: "3. Quais dados pessoais coletamos",
      paragraphs: [
        "A coleta de dados pela AllLogic Online é pautada pelo princípio da necessidade e minimização de dados, limitando-se ao estritamente indispensável para cada operação:",
      ],
      items: [
        "Formulário de Contato e Diagnóstico: nome da empresa, nome do responsável pelo contato, telefone ou WhatsApp e mensagem/descrição da necessidade comercial ou técnica;",
        "Atendimento via WhatsApp Oficial: nome, número de telefone e histórico das mensagens em texto e áudios voluntariamente enviados para suporte ou esclarecimento de dúvidas;",
        "Contratação de Soluções e Faturamento: razão social ou nome completo, CNPJ ou CPF, endereço, e-mail de faturamento e dados de contato para emissão de nota fiscal e formalização de contrato;",
        "Navegação e Desempenho (Google Analytics 4): endereço IP anonimizado, tipo de navegador, sistema operacional, páginas acessadas e tempo de permanência — coletados exclusivamente após o consentimento explícito do visitante.",
      ],
    },
    {
      title: "4. Finalidades e Bases Legais do Tratamento",
      paragraphs: [
        "Todo e qualquer tratamento de dados pessoais realizado pela AllLogic Online possui fundamento nas hipóteses legais estabelecidas pelo Artigo 7º da LGPD:",
      ],
      items: [
        "Procedimentos preliminares e execução de contrato (Art. 7º, V): para receber diagnósticos, elaborar propostas técnicas, formalizar contratos de prestação de serviços e licenciar soluções da Família Agillex;",
        "Cumprimento de obrigação legal ou regulatória (Art. 7º, II): guarda de registros de conexão conforme exigido pelo Artigo 15 do Marco Civil da Internet (Lei nº 12.965/2014) e emissão de notas fiscais perante órgãos tributários;",
        "Legítimo interesse (Art. 7º, IX): para garantir a segurança cibernética do portal, prevenir fraudes, mitigar ataques de bots e aprimorar a estabilidade de nossos sistemas;",
        "Consentimento do titular (Art. 7º, I): para a ativação de cookies opcionais de análise e estatística via Google Analytics.",
      ],
    },
    {
      title: "5. Formulário de Contato e Comunicações Seguras",
      paragraphs: [
        "Quando o visitante envia o formulário de diagnóstico ou contato, os dados são transmitidos com criptografia de ponta a ponta (HTTPS/TLS) diretamente aos servidores e sistemas de suporte da AllLogic Online.",
        "O formulário não armazena dados confidenciais no cache local do navegador do visitante e não é utilizado para cadastro automático em listas públicas de envio de mensagens em massa (spam).",
      ],
    },
    {
      title: "6. Atendimento via WhatsApp e Inteligência Artificial",
      paragraphs: [
        "A AllLogic Online disponibiliza canal oficial de atendimento via WhatsApp através da infraestrutura homologada da Meta Platforms (WhatsApp Cloud API Oficial).",
        "Ao interagir com nosso atendimento inteligente, as informações e mensagens de áudio ou texto enviadas são processadas para responder contextualmente às suas solicitações. O sistema opera com base de conhecimento fechada (arquitetura RAG) e não utiliza suas informações pessoais para treinamento de modelos públicos de inteligência artificial de terceiros.",
      ],
    },
    {
      title: "7. Pagamentos e Segurança Financeira (Agillex Pay)",
      paragraphs: [
        "As cobranças de assinaturas e transações financeiras realizadas através do Agillex Pay e dos portais de checkout são processadas pelo gateway bancário homologado Asaas Gestão Financeira Instituição de Pagamento S.A. e pelo arranjo de pagamentos Pix do Banco Central do Brasil.",
        "A AllLogic Online NÃO armazena, não processa e não tem acesso a números de cartão de crédito ou códigos de segurança (CVV). Todo o processamento financeiro é realizado diretamente nos servidores seguros do gateway, em total conformidade com os padrões internacionais de segurança PCI-DSS.",
      ],
    },
    {
      title: "8. Cookies e Tecnologias de Análise",
      paragraphs: [
        "O site utiliza uma política rigorosa de consentimento prévio para cookies de análise de navegação:",
        "Cookies Estritamente Necessários: essenciais para o funcionamento básico do site, distribuição de tráfego seguro via Cloudflare e registro da sua escolha de privacidade no armazenamento local do navegador (localStorage).",
        "Cookies de Análise (Google Analytics 4): ferramentas estatísticas que nos ajudam a entender como o público navega pelo site e quais páginas são mais úteis. Estes cookies vêm bloqueados por padrão e só são disparados se você clicar em 'Aceitar' no banner de privacidade. Você pode alterar sua decisão ou recusá-los a qualquer momento utilizando o botão 'Preferências de privacidade' no canto inferior da página.",
      ],
    },
    {
      title: "9. Compartilhamento de Dados com Parceiros de Infraestrutura",
      paragraphs: [
        "A AllLogic Online não comercializa, não aluga e não compartilha dados pessoais com corretores de dados, parceiros comerciais ou empresas de publicidade.",
        "O compartilhamento de dados ocorre exclusivamente com provedores de infraestrutura técnica essencial para viabilizar as operações digitais, todos vinculados a cláusulas rigorosas de confidencialidade e segurança da informação:",
      ],
      items: [
        "Cloudflare Inc.: rede de borda (CDN), certificados de segurança SSL/TLS, mitigação de ataques DDoS e firewall de aplicação web (WAF);",
        "Meta Platforms, Inc.: provedor de conectividade para a API Oficial do WhatsApp;",
        "Asaas Gestão Financeira S.A.: instituição de pagamento autorizada pelo Banco Central para liquidação de Pix e cobranças bancárias;",
        "Google LLC: provedor do serviço Google Analytics 4 (estritamente condicionado ao seu consentimento prévio);",
        "Ambientes de Nuvem e Hospedagem Dedicada: servidores seguros com firewall e bancos de dados isolados para sustentação das aplicações.",
      ],
    },
    {
      title: "10. Armazenamento, Segurança e Retenção",
      paragraphs: [
        "Adotamos medidas técnicas, administrativas e organizacionais para proteger os dados pessoais contra acessos não autorizados, incidentes de segurança, destruição, perda ou alteração ilícita.",
        "O tráfego entre seu dispositivo e nossos servidores é protegido por criptografia moderna TLS/HTTPS. Nossos ambientes em nuvem utilizam controle rígido de privilégios de acesso e rotinas automatizadas de backup seguro.",
        "Os dados são conservados pelo período estritamente necessário para cumprir as finalidades do atendimento ou pelos prazos determinados pela legislação (como a guarda obrigatória de registros de conexão por 6 meses pelo Marco Civil da Internet ou prazos prescricionais legais).",
      ],
    },
    {
      title: "11. Seus Direitos como Titular de Dados (Art. 18 da LGPD)",
      paragraphs: [
        "Em conformidade com o Artigo 18 da Lei Geral de Proteção de Dados Pessoais (LGPD), você pode exercer a qualquer momento os direitos listados abaixo, mediante requisição enviada ao e-mail contato@alllogiconline.com.br (com prazo legal de resposta de até 15 dias):",
      ],
      items: [
        "Confirmação e Acesso: confirmar a existência de tratamento de seus dados e solicitar cópia legível dos mesmos;",
        "Correção: solicitar a atualização, retificação ou correção de dados incompletos, inexatos ou desatualizados;",
        "Anonimização, Bloqueio ou Eliminação: requerer a limitação de tratamento de dados considerados desnecessários ou excessivos;",
        "Portabilidade: solicitar a transferência de seus dados a outro fornecedor de serviços ou produtos, mediante requisição expressa;",
        "Eliminação: exigir a exclusão definitiva dos dados pessoais tratados com base exclusiva no seu consentimento, ressalvadas as hipóteses de guarda obrigatória por lei;",
        "Informação sobre Compartilhamento: obter esclarecimentos detalhados sobre as entidades públicas e privadas com as quais compartilhamos dados;",
        "Revogação do Consentimento: revogar de forma simples e gratuita o consentimento anteriormente fornecido para cookies de análise.",
      ],
    },
    {
      title: "12. Disposições Finais e Atualizações",
      paragraphs: [
        "Esta Política de Privacidade é regida e interpretada de acordo com as leis da República Federativa do Brasil, em especial a Lei nº 13.709/2018 (LGPD) e a Lei nº 12.965/2014 (Marco Civil da Internet), elegendo-se o Foro da Comarca da Capital do Estado de São Paulo para dirimir quaisquer controvérsias.",
        "Esta Política é complementar e deve ser lida conjuntamente com os nossos Termos de Uso e Contrato de Prestação de Serviços (disponíveis em alllogiconline.com.br/termos-de-uso).",
        "Poderemos revisar este documento periodicamente para refletir evoluções regulatórias ou lançamentos de novas funcionalidades em nossas soluções. A versão vigente será sempre a publicada nesta página.",
      ],
    },
  ] satisfies PrivacySection[],
};
