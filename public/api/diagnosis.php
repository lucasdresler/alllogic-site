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

$email = implode("\r\n", [
    'From: contato@alllogiconline.com.br',
    'Reply-To: contato@alllogiconline.com.br',
    'To: ' . $to,
    'Subject: ' . $subject,
    'Content-Type: text/plain; charset=UTF-8',
    '',
    $body,
]);

$process = proc_open(
    '/usr/sbin/sendmail -t -i',
    [
        0 => ['pipe', 'w'],
        1 => ['pipe', 'w'],
        2 => ['pipe', 'w'],
    ],
    $pipes,
);

if (!is_resource($process)) {
    http_response_code(500);
    echo json_encode(['ok' => false]);
    exit;
}

fwrite($pipes[0], $email);
fclose($pipes[0]);

$stdout = stream_get_contents($pipes[1]);
fclose($pipes[1]);

$stderr = stream_get_contents($pipes[2]);
fclose($pipes[2]);

$exitCode = proc_close($process);

if ($exitCode !== 0) {
    error_log('Falha no envio do formulário AllLogic: ' . trim($stderr));
    http_response_code(500);
    echo json_encode(['ok' => false]);
    exit;
}

echo json_encode(['ok' => true]);
