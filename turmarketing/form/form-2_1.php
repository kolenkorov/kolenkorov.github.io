<?php

$recepient = "timofeisayapin@mail.ru, timofey.sayapin@turmarketing.ru, it.business.systems@gmail.com";
$sitename = "TurMarketing";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Запись - (Один модуль (на выбор))";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");