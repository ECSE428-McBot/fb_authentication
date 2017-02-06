<?php

$challenge = $_REQUEST['hub_challenge'];
$verify_token = $_REQUEST['hub_verify_token'];

if ($verify_token === 'EAAFJaTQTZCAgBABia8f4DSvVlbXRHPcZCBqp18OZCwPTsss6iQ88QIQsDTq1137AlkQ7hT023Bta8DPtiV3MA9aadKpfMjf6qzlEAKzP5XWZCOTlLFbLthxWp8JznToiLT5GqsGWYmN5Sub52mByZC7WZCeYFX4apNwbopyDS6YwZDZD') {
echo $challenge;
}