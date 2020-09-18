<?php

$message = wordwrap($_POST['Message'], 70, "\r\n");

$message = "Name: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\nMessage" . $message;

mail('Your email', 'Heading message', $message);

echo 'Your message has been sent ';