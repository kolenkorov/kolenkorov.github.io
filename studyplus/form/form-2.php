<?php

$recepient = "oculusdaemon@gmail.com";
//$sitename = "Название сайта";

$email = trim($_POST["email"]);
$message = "E-mail: $email";

$pagetitle = "Заявка на доп. информацию";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");