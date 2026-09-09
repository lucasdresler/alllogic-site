// Conteúdo da Política de Privacidade do site institucional da AllLogic.
// Este conteúdo deve refletir apenas os tratamentos efetivamente realizados
// pelo site e ser atualizado sempre que esses tratamentos forem alterados.

export interface PrivacySection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export const privacidadeContent = {
  eyebrow: "Privacidade",
  title: "Política de Privacidade",
  description:
    "Esta Política de Privacidade explica como a AllLogic trata dados pessoais relacionados ao uso deste site, ao formulário de contato e aos recursos de análise de navegação.",
  updatedAt: "08 de setembro de 2026",

  sections: [
    {
      title: "1. Quem somos",
      paragraphs: [
        "A AllLogic é uma marca utilizada por WELLINGTON LUCAS LIMA DRESLER, inscrito no CNPJ sob o nº 08.784.339/0001-38.",
        "Endereço cadastral: Rua Feitiço da Vila, 425 — São Paulo/SP — CEP 05879-000.",
        "Para assuntos relacionados a privacidade e proteção de dados, o contato pode ser realizado pelo e-mail contato@alllogiconline.com.br.",
      ],
    },
    {
      title: "2. Quais dados pessoais coletamos",
      paragraphs: [
        "No formulário de contato do site, podemos coletar os dados fornecidos diretamente pelo visitante:",
      ],
      items: [
        "nome da empresa;",
        "nome da pessoa responsável pelo contato;",
        "telefone ou WhatsApp;",
        "mensagem enviada pelo visitante.",
      ],
    },
    {
      title: "3. Para que utilizamos esses dados",
      paragraphs: [
        "Os dados enviados pelo formulário são utilizados para compreender o cenário apresentado, responder ao contato e, quando pertinente, avaliar possibilidades de atendimento ou solução para a empresa interessada.",
        "Não utilizamos os dados enviados pelo formulário para finalidades incompatíveis com aquelas informadas nesta Política.",
      ],
    },
    {
      title: "4. Base legal",
      paragraphs: [
        "O tratamento dos dados enviados voluntariamente pelo formulário é realizado conforme a hipótese legal aplicável à finalidade da interação, especialmente para atendimento de solicitações, contato relacionado a serviços e eventual adoção de medidas preliminares a uma relação comercial.",
        "O uso de cookies e tecnologias de análise descrito nesta Política depende do consentimento do visitante, obtido por meio do aviso de cookies apresentado no site.",
      ],
    },
    {
      title: "5. Formulário de contato",
      paragraphs: [
        "Quando o visitante envia o formulário, os dados são transmitidos pelo site ao sistema responsável pelo recebimento da solicitação. O endereço institucional contato@alllogiconline.com.br é utilizado para receber essas mensagens.",
        "O formulário não possui cadastro de conta de usuário e não mantém uma cópia dos dados enviados no armazenamento local do navegador.",
      ],
    },
    {
      title: "6. Cookies e Google Analytics",
      paragraphs: [
        "O site utiliza um mecanismo de consentimento para cookies de análise. O Google Analytics 4 somente é carregado depois que o visitante aceita o uso desses recursos.",
        "O site utiliza o Google Analytics para compreender como o site é utilizado e obter informações estatísticas sobre navegação e desempenho. A ferramenta é fornecida pelo Google.",
        "A preferência do visitante quanto aos cookies de análise é registrada no armazenamento local do navegador para que a escolha seja respeitada em acessos posteriores.",
        "O visitante pode recusar os cookies de análise. Nesse caso, o Google Analytics não é carregado pelo site.",
      ],
    },
    {
      title: "7. Compartilhamento de dados",
      paragraphs: [
        "Os dados enviados pelo formulário são encaminhados ao endereço institucional utilizado pela AllLogic para atendimento das solicitações.",
        "Quando o visitante consente com os cookies de análise, informações de navegação podem ser processadas pelo Google Analytics, conforme as condições e políticas aplicáveis ao serviço do Google.",
        "Não vendemos dados pessoais.",
      ],
    },
    {
      title: "8. Armazenamento e conservação",
      paragraphs: [
        "Os dados são mantidos pelo período necessário para atender às finalidades para as quais foram coletados e para o cumprimento de obrigações legais, regulatórias ou para o exercício regular de direitos, quando aplicável.",
        "Não estabelecemos nesta Política um prazo único de retenção para todas as situações, pois o período necessário pode variar conforme a natureza da interação e das obrigações relacionadas.",
      ],
    },
    {
      title: "9. Segurança",
      paragraphs: [
        "A AllLogic adota medidas técnicas e organizacionais compatíveis com a natureza dos dados e das operações realizadas pelo site para reduzir riscos de acesso não autorizado, perda, alteração ou divulgação indevida.",
        "Nenhum sistema conectado à internet pode garantir segurança absoluta. Por isso, medidas de segurança são continuamente avaliadas conforme a evolução da infraestrutura e dos serviços utilizados.",
      ],
    },
    {
      title: "10. Direitos do titular",
      paragraphs: [
        "Nos termos da legislação aplicável, o titular de dados pessoais possui direitos relacionados ao tratamento de seus dados, incluindo aqueles previstos na Lei Geral de Proteção de Dados Pessoais (LGPD).",
        "Solicitações relacionadas aos dados pessoais tratados pela AllLogic podem ser encaminhadas para contato@alllogiconline.com.br.",
      ],
    },
    {
      title: "11. Alterações desta Política",
      paragraphs: [
        "Esta Política de Privacidade poderá ser atualizada quando houver alteração nos tratamentos realizados pelo site, nos serviços utilizados ou nas obrigações aplicáveis.",
        "A versão publicada nesta página será sempre a referência vigente para o site.",
      ],
    },
    {
      title: "12. Contato",
      paragraphs: [
        "Para dúvidas, solicitações ou questões relacionadas ao tratamento de dados pessoais, entre em contato pelo e-mail contato@alllogiconline.com.br.",
      ],
    },
  ] satisfies PrivacySection[],
};
