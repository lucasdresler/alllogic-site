// Conteúdo textual da página de Contato/Diagnóstico, isolado da apresentação.
// Mantém exatamente a mesma proposta do bloco Diagnóstico da Home (ver
// src/content/home.ts), sem repetir seu texto ao pé da letra onde o Hero
// desta página tem uma redação própria mais adequada a uma página dedicada.
//
// Pendências conhecidas:
// - Nenhum dado de contato real (telefone, e-mail, endereço) está disponível;
//   nada foi inventado.
// - O envio do formulário depende de uma integração externa ainda não
//   definida (ver src/services/diagnosisSubmission.ts e
//   docs/decisions/ADR-0003-camada-de-servicos-e-formulario-de-diagnostico.md).
// - Vínculo com a Política de Privacidade: página ainda não existe no
//   projeto; o texto de consentimento abaixo é neutro e não referencia uma
//   política que ainda não foi criada.

export interface ContatoFormFieldContent {
  label: string;
  requiredMessage: string;
  formatMessage?: string;
  minLengthMessage?: string;
  hint?: string;
}

export interface ContatoContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  form: {
    fields: {
      company: ContatoFormFieldContent;
      contactName: ContatoFormFieldContent;
      phone: ContatoFormFieldContent;
      message: ContatoFormFieldContent;
    };
    consentNote: string;
    submitLabel: string;
    sendingLabel: string;
    successMessage: string;
    errorMessage: string;
  };
  closing: string;
}

export const contatoContent: ContatoContent = {
  hero: {
    eyebrow: "Vamos conversar",
    title: "Conte-nos sobre sua empresa.",
    description:
      "Conte-nos sobre sua empresa, o desafio que está enfrentando ou o que gostaria de melhorar. A partir disso, podemos entender o cenário e identificar caminhos possíveis.",
  },
  form: {
    fields: {
      company: {
        label: "Empresa",
        requiredMessage: "Conte o nome da sua empresa.",
      },
      contactName: {
        label: "Contato",
        requiredMessage: "Informe quem podemos procurar.",
        hint: "Nome da pessoa responsável pelo contato.",
      },
      phone: {
        label: "Tel/Whats",
        requiredMessage: "Informe um telefone ou WhatsApp para contato.",
        formatMessage: "Informe um telefone válido, com DDD (ex.: (11) 91234-5678).",
        hint: "Com DDD. Pode ser um número de WhatsApp.",
      },
      message: {
        label: "Mensagem",
        requiredMessage: "Conte um pouco sobre o desafio ou o que gostaria de melhorar.",
        minLengthMessage: "Conte um pouco mais — isso nos ajuda a entender melhor o cenário.",
        hint: "Descreva livremente: um problema, uma ideia, algo que gostaria de melhorar.",
      },
    },
    consentNote:
      "Os dados enviados neste formulário são usados apenas para entender o cenário da sua empresa e responder ao seu contato.",
    submitLabel: "Vamos conversar",
    sendingLabel: "Enviando…",
    successMessage:
      "Mensagem enviada. Obrigado por compartilhar o cenário da sua empresa. Em breve entraremos em contato pelos dados informados.",
    errorMessage: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
  },
  closing:
    "Não é necessário saber qual tecnologia utilizar. A ideia é simplesmente compartilhar o cenário da sua empresa — a partir daí, podemos ajudar a identificar os caminhos possíveis.",
};
