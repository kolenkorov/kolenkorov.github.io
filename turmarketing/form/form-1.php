<?php

$recepient = "timofeisayapin@mail.ru, timofey.sayapin@turmarketing.ru, it.business.systems@gmail.com";
$sitename = "TurMarketing";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nКомментарий: $comment";

$pagetitle = "Вопрос";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");