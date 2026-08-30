// Camada de integração externa (ver src/services/README.md).
//
// PENDÊNCIA REAL: nenhum backend, e-mail, webhook, CRM ou serviço externo está
// configurado neste projeto. Esta função é o único ponto de integração para o
// formulário de diagnóstico — quando uma integração real for definida
// (endpoint, e-mail, webhook, etc.), a implementação abaixo deve ser
// substituída para de fato transportar os dados. Até lá, ela NUNCA deve
// simular sucesso: sempre retorna um resultado indicando que o envio não pôde
// ser concluído, o que é a verdade sobre o estado atual do projeto.

export interface DiagnosisRequestPayload {
  company: string;
  contactName: string;
  phone: string;
  message: string;
}

export type DiagnosisSubmissionResult =
  | { ok: true }
  | { ok: false; reason: "integration-not-configured" };

export async function submitDiagnosisRequest(
  _payload: DiagnosisRequestPayload,
): Promise<DiagnosisSubmissionResult> {
  // Nenhuma chamada de rede é feita aqui de propósito: não existe endpoint,
  // e-mail ou serviço real para onde enviar os dados ainda.
  return { ok: false, reason: "integration-not-configured" };
}
