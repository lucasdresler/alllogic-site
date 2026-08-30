// Funções puras de validação, reutilizáveis por qualquer camada do projeto.
// Nenhuma dependência de apresentação, conteúdo ou contexto de execução.

/** Verifica se um valor de texto foi preenchido (ignorando espaços nas bordas). */
export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

/** Verifica se um valor de texto atinge um comprimento mínimo (ignorando espaços nas bordas). */
export function hasMinLength(value: string, min: number): boolean {
  return value.trim().length >= min;
}

/** Verifica se um valor de texto não ultrapassa um comprimento máximo. */
export function hasMaxLength(value: string, max: number): boolean {
  return value.trim().length <= max;
}

/**
 * Verifica se um valor corresponde a um telefone brasileiro plausível
 * (com ou sem DDI +55, com DDD, com 8 ou 9 dígitos, aceitando espaços,
 * parênteses e hífens como separadores). Não verifica se o número existe
 * de fato — apenas o formato.
 */
export function isValidBrazilianPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  // DDD (2) + número (8 ou 9 dígitos) = 10 ou 11 dígitos.
  // Com DDI 55 na frente = 12 ou 13 dígitos.
  const withoutCountryCode = digits.startsWith("55") && digits.length > 11 ? digits.slice(2) : digits;
  return withoutCountryCode.length === 10 || withoutCountryCode.length === 11;
}
