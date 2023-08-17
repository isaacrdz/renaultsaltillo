<?php
require '../coors.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);

try {
  $name=$_POST['name'];
  $phone=$_POST['phone'];
  $email=$_POST['email'];
  $vehicle=$_POST['vehicle'];
  $reason=$_POST['reason'];
  $cpc=$_POST['cpc'];
  $comments=$_POST['comments'];

  $mail->setFrom($email, $name);
  $mail->addAddress('maryjose.monsivais@surman.com');
  $mail->addAddress('alejandra.martinezm@surman.com');
  // $mail->addCC('surman-renault-lindavista-adwords@leads.getsirena.com');
  // $mail->addBCC('trodriguez@yeloubox.com', 'Yeloubox');
  $mail->isHTML(true);
  $mail->CharSet = 'UTF-8';                       
  $mail->Subject = $reason." - Nuevo registro Renault Saltillo";
  $mail->Body = '<b>Nombre:</b> '.$name.' <br>
  <b>Correo:</b>: '.$email.' <br>
  <b>Teléfono:</b>: '.$phone.' <br>
  <b>Vehículo:</b>: '.$vehicle.'<br>
  <b>Motivo:</b> '.$reason.'<br>
  <b>Código Promocional:</b> '.$cpc.'<br>
  <b>Comentario:</b> '.preg_replace("/([\r\n]+)|(\\n)|(\\\\n)|(\\\\r)|(\\r)|(\r+)|(\n+)|(\v+)/im","<br>",$comments);

  if($mail->send()){
      echo json_encode(["sent"=>true]);
  }else{
      echo json_encode(["error"=>ERROR]);
  }
} catch (Exception $e) {
  echo json_encode(["error"=>$mail->ErrorInfo]);
}
?>