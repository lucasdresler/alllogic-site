export interface DiagnosisRequestPayload {
  company: string;
  contactName: string;
  phone: string;
  message: string;
}

export type DiagnosisSubmissionResult =
  | { ok: true }
  | { ok: false; reason: "request-failed" };

export async function submitDiagnosisRequest(
  payload: DiagnosisRequestPayload,
): Promise<DiagnosisSubmissionResult> {
  try {
    const response = await fetch("/api/diagnosis.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as { ok?: boolean };

    if (!response.ok || result.ok !== true) {
      return { ok: false, reason: "request-failed" };
    }

    return { ok: true };
  } catch {
    return { ok: false, reason: "request-failed" };
  }
}
