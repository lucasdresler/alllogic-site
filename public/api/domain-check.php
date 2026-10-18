<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Obter parâmetro do domínio
$rawDomain = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (is_array($input) && isset($input['domain'])) {
        $rawDomain = (string) $input['domain'];
    } elseif (isset($_POST['domain'])) {
        $rawDomain = (string) $_POST['domain'];
    }
} else {
    $rawDomain = (string) ($_GET['domain'] ?? '');
}

$rawDomain = trim(strtolower($rawDomain));

// Normalização básica: remove http, https, www e barras
$normalized = preg_replace('#^https?://#i', '', $rawDomain);
$normalized = preg_replace('#^www\.#i', '', $normalized);
$normalized = trim($normalized, " /\t\n\r\0\x0B");

if ($normalized === '') {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => 'Por favor, informe o nome do domínio que deseja pesquisar.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Separar rótulo (slug) e extensão (TLD) se houver
$parsedSlug = '';
$parsedTld = '';

if (strpos($normalized, '.') !== false) {
    $parts = explode('.', $normalized, 2);
    $parsedSlug = $parts[0];
    $parsedTld = '.' . $parts[1];
} else {
    $parsedSlug = $normalized;
    $parsedTld = '';
}

// Validação sintática do rótulo (regras Registro.br / RFC: 2 a 26 caracteres alfanuméricos e hífen)
if (!preg_match('/^[a-z0-9]([a-z0-9-]{0,24}[a-z0-9])?$/', $parsedSlug)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'error' => 'Nome de domínio inválido. Use apenas letras, números e hífens (entre 2 e 26 caracteres, sem iniciar ou terminar com hífen).',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Definir lista de extensões a verificar
$checks = [];
if ($parsedTld === '.com.br' || $parsedTld === '.com' || $parsedTld === '.net.br') {
    $checks[] = $parsedSlug . $parsedTld;
    if ($parsedTld === '.com.br') {
        $checks[] = $parsedSlug . '.com';
        $checks[] = $parsedSlug . '.net.br';
    } else {
        $checks[] = $parsedSlug . '.com.br';
    }
} else {
    // Busca padrão quando usuário digita apenas o nome
    $checks = [
        $parsedSlug . '.com.br',
        $parsedSlug . '.com',
        $parsedSlug . '.net.br',
    ];
}

// Preços de referência para Registro e Gestão Técnica AllLogic
$pricingReference = [
    '.com.br' => 'R$ 59,90',
    '.com' => 'R$ 89,90',
    '.net.br' => 'R$ 59,90',
];

/**
 * Consulta RDAP oficial
 */
function checkRdap(string $domain): array {
    $isBr = (substr($domain, -3) === '.br');
    $url = $isBr
        ? 'https://rdap.registro.br/domain/' . rawurlencode($domain)
        : 'https://rdap.verisign.com/com/v1/domain/' . rawurlencode($domain);

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_NOBODY => true,
        CURLOPT_TIMEOUT => 4,
        CURLOPT_CONNECTTIMEOUT => 3,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_USERAGENT => 'AllLogic-DomainChecker/1.0 (https://alllogiconline.com.br)',
        CURLOPT_SSL_VERIFYPEER => true,
    ]);

    curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 404) {
        return ['available' => true, 'status' => 'available'];
    } elseif ($httpCode === 200) {
        return ['available' => false, 'status' => 'registered'];
    }

    return ['available' => false, 'status' => 'unknown'];
}

$results = [];
foreach ($checks as $domainToCheck) {
    $ext = '';
    if (substr($domainToCheck, -7) === '.com.br') {
        $ext = '.com.br';
    } elseif (substr($domainToCheck, -7) === '.net.br') {
        $ext = '.net.br';
    } elseif (substr($domainToCheck, -4) === '.com') {
        $ext = '.com';
    } else {
        $ext = '.' . pathinfo($domainToCheck, PATHINFO_EXTENSION);
    }

    $rdapResult = checkRdap($domainToCheck);

    $results[] = [
        'domain' => $domainToCheck,
        'extension' => $ext,
        'available' => $rdapResult['available'],
        'status' => $rdapResult['status'],
        'price' => $pricingReference[$ext] ?? 'R$ 40,00',
        'period' => 'ano',
    ];
}

echo json_encode([
    'ok' => true,
    'slug' => $parsedSlug,
    'query' => $normalized,
    'results' => $results,
], JSON_UNESCAPED_UNICODE);
