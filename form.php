<?php

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/PHPMailer.php';
  require 'phpmailer/Exception.php';

  $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
  $e = $_POST['email'];
  $m = $_POST['message'];
  $p = $_POST['phone'];

if (!$_POST) echo 'No direct script access allowed';

if ($email == true && !empty($_POST['phone'])) {

  $mail = new PHPMailer(true);
  try {

    // $mail->CharSet = 'Utf-8';
    $mail->isHTML(true);  
    $mail->setFrom('from@example.com', 'Ex');
    $mail->addAddress('dmtryi17@yandex.by');
    // $mail->isSendmail();
    $mail->Subject = 'Theme';
    $mail->Body  = 'Номер: '.$p.'<br/>Почта: '.$e.'<br/>Сообщение: '.$m;
    $mail->send();
    echo 5;
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
 
}

else if (trim(empty($_POST['phone'])) && trim(empty($_POST['email']))) {
  // Empty fields
  echo 0;
}
else if ($email == true && empty($_POST['phone'])) {
  echo 1;
}

else if ($email == false ) {
  echo 2;
}
else if ($email == true ) {
  echo 3;
}


?>

