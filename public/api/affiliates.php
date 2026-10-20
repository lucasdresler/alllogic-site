<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method Not Allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name = trim((string) ($input['name'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$phone = trim((string) ($input['phone'] ?? ''));
$personType = trim((string) ($input['personType'] ?? 'pf'));
$pixType = trim((string) ($input['pixType'] ?? 'cpf'));
$pixKey = trim((string) ($input['pixKey'] ?? ''));

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $phone === '' || $pixKey === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}

// Gera código único no formato AL-XXXXX
$randomNum = mt_rand(10000, 99999);
$affiliateCode = 'AL-' . $randomNum;
$referralLink = 'https://alllogiconline.com.br/?ref=' . $affiliateCode;
$now = date('Y-m-d H:i:s');

// Persistência local estruturada
$dataDir = __DIR__ . '/data';
$dataFile = $dataDir . '/affiliates.json';

if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

// Proteger diretório de dados via htaccess se não existir
$htaccessFile = $dataDir . '/.htaccess';
if (!file_exists($htaccessFile)) {
    @file_put_contents($htaccessFile, "Require all denied\nDeny from all\n");
}

$record = [
    'code' => $affiliateCode,
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'personType' => $personType,
    'pixType' => $pixType,
    'pixKey' => $pixKey,
    'referralLink' => $referralLink,
    'registeredAt' => $now,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
];

$existing = [];
if (file_exists($dataFile)) {
    $content = file_get_contents($dataFile);
    if ($content !== false) {
        $existing = json_decode($content, true) ?: [];
    }
}
$existing[] = $record;
@file_put_contents($dataFile, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);

// Notificação por e-mail para a diretoria AllLogic Online
$to = 'contato@alllogiconline.com.br';
$subject = 'Novo Parceiro Afiliado Cadastrado: ' . $name . ' (' . $affiliateCode . ')';
$body = implode("\n", [
    'Novo credenciamento de afiliado realizado pelo site AllLogic Online.',
    '==================================================================',
    '',
    'Código de Afiliado: ' . $affiliateCode,
    'Link de Indicação: ' . $referralLink,
    'Comissão: Comissão recorrente enquanto o cliente permanecer ativo',
    '',
    'Nome / Razão Social: ' . $name,
    'E-mail: ' . $email,
    'WhatsApp / Telefone: ' . $phone,
    'Tipo de Pessoa: ' . strtoupper($personType),
    'Tipo de Chave Pix: ' . strtoupper($pixType),
    'Chave Pix: ' . $pixKey,
    'Data/Hora do Cadastro: ' . $now,
    '',
    '==================================================================',
    'Registro salvo com sucesso no banco de dados AllLogic Partners.'
]);

$headers = implode("\r\n", [
    'From: contato@alllogiconline.com.br',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
]);

@mail($to, $subject, $body, $headers);

echo json_encode([
    'ok' => true,
    'code' => $affiliateCode,
    'referralLink' => $referralLink,
    'name' => $name,
    'pixKey' => $pixKey,
]);
