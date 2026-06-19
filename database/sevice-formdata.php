<?php 
include "db-config.php";
$name = $_POST['ser-name'];
$email =$_POST['ser-email'];
$contact_no = $_POST['ser-contact-no'];
$whatsapp_no = $_POST['ser-whatsapp-no'];
$company = $_POST['ser-company'];
$time = $_POST['ser-pref-time'];
$message = $_POST['ser-message'];
$file_name = $_POST['ser-service-file'];
$query =  "INSERT INTO service_form (ser_name,ser_email,ser_contact_no,ser_whatsapp_no,company_name,pref_time,message_note) 
VALUES('$name','$email','$contact_no','$whatsapp_no','$company','$time','$message')";
$result = $conn->query($query);
if($result){
    $executed =true;
}
else{
    $executed = false;
}
$conn->close();
if($executed){
        header("Location:../services/$file_name.php?submitted=success");
        $to = $email;
        $subject = "W3 Technologies: Your Message Has Been Received!";
        $body = "
        <html>
        <head>
        <title>We've received your message - W3 Technologies</title>
        </head>
        <body>
        <p>Hi" . htmlspecialchars($name) . ",</p>

        <p>Thank you for reaching out to W3 Technologies! We appreciate your interest and we're here to assist you.</p>

        <p>We will review your message and get back to you shortly. If you have any immediate questions, please feel free to contact us at <a href=\"mailto:info@w3tec.com\">info@w3tec.com</a> or call us at <a href=\"tel:+917416939333\">+91 74169 39333</a>.</p>
    
        <p>Best regards,<br>
        W3 Technologies </p>
        </body>
        </html>
    ";
    $from = "info@w3tec.com";
    $subject2 = "New Service Inquiry Received";
    $message2 = "$name has contacted us for service from $company";
    
    $headers = "From: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $headers2 = "From: $from\r\n";

  if (mail($to, $subject, $body, $headers)) {
    mail($from, $subject2, $message2, $headers);


    echo json_encode(["status" => "success", "message" => "Your response has been recorded"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send email. Please try again later."]);
}
} else {
echo json_encode(["status" => "error", "message" => "Failed to submit the form. Please try again."]);
}
?> 
