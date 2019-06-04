<?php

$recepient = "kondratyeff@gmail.com";
//$sitename = "Название сайта"; kondratyeff@gmail.com

$phone = trim($_POST["phone"]);
$message = "Телефон: $phone";

$pagetitle = "Заявка обратный звонок";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");