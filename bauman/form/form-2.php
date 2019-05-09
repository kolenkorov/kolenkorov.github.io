<?php

$recepient = "zakaz.bauman@ya.ru";
$sitename = "Bauman";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nКомментарий: $comment";

$pagetitle = "Письмо директору";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");