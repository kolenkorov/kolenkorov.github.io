<?php

$recepient = "kondratyeff@gmail.com";
$sitename = "Yarus2";

$type = trim($_POST["type"]);
$stairs = trim($_POST["stairs"]);
$fencing = trim($_POST["fencing"]);
$area = trim($_POST["area"]);
$painting = trim($_POST["painting"]);
$height = trim($_POST["height"]);
$phone = trim($_POST["phone"]);
$message = "Тип конструкции: $type \nЛестница: $stairs \nОграждение: $fencing  \nПлощадь конструкции: $area \nПокраска: $painting \nВысота конструкции: $height \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");