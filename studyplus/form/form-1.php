<?php

$recepient = "oculusdaemon@gmail.com";
//$sitename = "Название сайта";

$phone = trim($_POST["phone"]);
$message = "Телефон: $phone";

$pagetitle = "Заявка на бесплатный замер";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");