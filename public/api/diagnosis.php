<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['ok' => false]);
    exit;
}

$company = trim((string) ($input['company'] ?? ''));
$contactName = trim((string) ($input['contactName'] ?? ''));
$phone = trim((string) ($input['phone'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));

if (
    $company === '' ||
    $contactName === '' ||
    $phone === '' ||
    mb_strlen($message) < 20
) {
    http_response_code(422);
    echo json_encode(['ok' => false]);
    exit;
}

$to = 'contato@alllogiconline.com.br';
$subject = 'Novo contato pelo site AllLogic';

$body = implode("\n", [
    'Novo contato recebido pelo site AllLogic.',
    '',
    'Empresa: ' . $company,
    'Contato: ' . $contactName,
    'Telefone/WhatsApp: ' . $phone,
    '',
    'Mensagem:',
    $message,
]);

$headers = implode("\r\n", [
    'From: contato@alllogiconline.com.br',
    'Reply-To: contato@alllogiconline.com.br',
    'Content-Type: text/plain; charset=UTF-8',
]);

$sent = mail($to, $subject, $body, $headers);

if (!$sent) {
    error_log('Falha no envio do formulário AllLogic com mail().');
    http_response_code(500);
    echo json_encode(['ok' => false]);
    exit;
}

echo json_encode(['ok' => true]);
