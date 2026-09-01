<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot: bots fill this hidden field, humans never see it.
$honeypot = trim($_POST['company'] ?? '');
if ($honeypot !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$stripHeaderInjection = function (string $value): string {
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
};

$name = $stripHeaderInjection(trim($_POST['name'] ?? ''));
$email = $stripHeaderInjection(trim($_POST['email'] ?? ''));
$businessName = trim($_POST['business'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$interest = trim($_POST['interest'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing or invalid required fields']);
    exit;
}

$to = 'bridgette@itsallaboutbookkeeping.com';
$subject = 'New consultation request from ' . $name;

$body = implode("\n", [
    "Name: $name",
    "Email: $email",
    'Business: ' . ($businessName !== '' ? $businessName : '—'),
    'Phone: ' . ($phone !== '' ? $phone : '—'),
    'Interested in: ' . ($interest !== '' ? $interest : '—'),
    '',
    'Message:',
    $message,
]);

$headers = "From: It's All About Bookkeeping Website <noreply@itsallaboutbookkeeping.com>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail failed to send']);
    exit;
}

echo json_encode(['ok' => true]);
