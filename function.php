<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$user = json_decode(file_get_contents('php://input'), true);

$a = new \stdClass();
$a->usname = $user['username'];
$a->email = $user['username']."@gmail.com";

echo json_encode($a);

?>