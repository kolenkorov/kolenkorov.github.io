<?php

$recepient = "valencia.agensy@yandex.ru";
$sitename = "МегаДор";

$phone = trim($_POST["phone"]);
$message = "Телефон: $phone";

$pagetitle = "Консультация";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");