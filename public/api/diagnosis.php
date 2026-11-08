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

// Persistência segura em arquivo estruturado protegido
$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}
$htaccessFile = $dataDir . '/.htaccess';
if (!file_exists($htaccessFile)) {
    @file_put_contents($htaccessFile, "Require all denied\nDeny from all\n");
}
$leadRecord = [
    'timestamp' => date('c'),
    'company' => $company,
    'contactName' => $contactName,
    'phone' => $phone,
    'message' => $message,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
];
@file_put_contents($dataDir . '/leads.json', json_encode($leadRecord, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);

// Disparo de notificação via WhatsApp (Evolution API / Agillex)
$waAdminPhone = '5511966381915';
$waText = "🚀 *NOVO LEAD DE DIAGNÓSTICO PELO SITE ALOGIC* 🚀\n\n"
    . "🏢 *Empresa:* " . $company . "\n"
    . "👤 *Contato:* " . $contactName . "\n"
    . "📱 *WhatsApp:* " . $phone . "\n"
    . "💬 *Mensagem:* " . $message . "\n\n"
    . "⏰ *Data:* " . date('d/m/Y H:i:s');

$evolutionUrl = 'https://wa.alllogiconline.com.br';
$evolutionKey = 'MatrizSuperSecretApiKey2026';

try {
    $ch = curl_init($evolutionUrl . '/instance/fetchInstances');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['apikey: ' . $evolutionKey]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 3);
    $instJson = curl_exec($ch);
    curl_close($ch);

    if ($instJson) {
        $instances = json_decode($instJson, true);
        if (is_array($instances) && !empty($instances)) {
            $instName = $instances[0]['name'] ?? ($instances[0]['instanceName'] ?? '');
            if ($instName) {
                $chSend = curl_init($evolutionUrl . '/message/sendText/' . $instName);
                curl_setopt($chSend, CURLOPT_POST, true);
                curl_setopt($chSend, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($chSend, CURLOPT_HTTPHEADER, [
                    'Content-Type: application/json',
                    'apikey: ' . $evolutionKey,
                ]);
                curl_setopt($chSend, CURLOPT_POSTFIELDS, json_encode([
                    'number' => $waAdminPhone,
                    'text' => $waText,
                ]));
                curl_setopt($chSend, CURLOPT_TIMEOUT, 3);
                curl_exec($chSend);
                curl_close($chSend);
            }
        }
    }
} catch (\Throwable $e) {
    error_log('WhatsApp notification error: ' . $e->getMessage());
}

$to = 'contato@alllogiconline.com.br';
$subject = 'Novo contato pelo site AllLogic Online';

$body = implode("\n", [
    'Novo contato recebido pelo site AllLogic Online.',
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
    error_log('Falha no envio do formulário AllLogic Online com mail().');
    http_response_code(500);
    echo json_encode(['ok' => false]);
    exit;
}

echo json_encode(['ok' => true]);
