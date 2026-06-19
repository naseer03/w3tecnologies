<?php 
// include "db-config.php";
// $name = $_POST['intern-name'];
// $email =$_POST['intern-email'];
// $contact_no = $_POST['intern-contact-no'];
// $whatsapp_no = $_POST['intern-whatsapp-no'];
// $college = $_POST['intern-college'];
// $time = $_POST['intern-pref-time'];
// $message = $_POST['intern-message'];
// $file_name = $_POST['file'];
// $query =  "INSERT INTO internship_form (intern_name,intern_email,intern_contact_no,intern_whatsapp_no,college_name,pref_time,message_note) 
// VALUES('$name','$email','$contact_no','$whatsapp_no','$college','$time','$message')";
// $result = $conn->query($query);
// if($result){
//     $executed =true;
// }
// else{
//     $executed = false;
// }
// $conn->close();
// if($executed){

//         // header("Location:../services/$file_name.php?submitted=success");
//         $to = $email;
//         $subject = "W3 Technologies: Your Message Has Been Received!";
//         $body = "
//         <html>
//         <head>
//         <title>We've received your message - W3 Technologies</title>
//         </head>
//         <body>
//         <p>Hi ". htmlspecialchars($name) . ",</p>

//         <p>Thank you for reaching out to W3 Technologies! We appreciate your interest in our Internship Program and we're here to assist you.</p>

//         <p>We will review your message and get back to you shortly. If you have any immediate questions, please feel free to contact us at <a href=\"mailto:info@w3tec.com\">info@w3tec.com</a> or call us at <a href=\"tel:+917416939333\">+91 74169 39333</a>.</p>
    
//         <p>Best regards,<br>
//         W3 Technologies </p>
//         </body>
//         </html>
//     ";
//     $from = "info@w3tec.com";
//     $subject2 = "New Internship Inquiry Received";
//     $message2 = "$name has contacted us for Internship from $college";
    
//     $headers = "From: $from\r\n";
//     $headers .= "MIME-Version: 1.0\r\n";
//     $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

//     $headers2 = "From: $from\r\n";

//     if (mail($to, $subject, $body, $headers)) {

//         mail($from, $subject2, $message2, $headers2);
//         // echo " email sent successfully.";
//         header("Location:../services/$file_name.php?submitted=success");
//     } else {
//         header("Location:../services/$file_name.php?submitted=failed");
//     }
// }
// else{
//     header("Location:../services/$file_name.php?submitted=failed");
// } 


include "db-config.php";

// Collect the form data
$name = $_POST['intern-name'];
$email = $_POST['intern-email'];
$contact_no = $_POST['intern-contact-no'];
$whatsapp_no = $_POST['intern-whatsapp-no'];
$college = $_POST['intern-college'];
$time = $_POST['intern-pref-time'];
$message = $_POST['intern-message'];

// SQL query to insert data
$query = "INSERT INTO internship_form (intern_name, intern_email, intern_contact_no, intern_whatsapp_no, college_name, pref_time, message_note)
          VALUES ('$name', '$email', '$contact_no', '$whatsapp_no', '$college', '$time', '$message')";

$result = $conn->query($query);
$conn->close();
if ($result) {
    // Prepare the email data
    // echo json_encode(["status" => "success", "message" => "Your response has been recorded"]);
    $to = $email;
    $subject = "W3 Technologies: Your Message Has Been Received!";
    $body = "
        <html>
        <head><title>We've received your message - W3 Technologies</title></head>
        <body>
        <p>Hi " . htmlspecialchars($name) . ",</p>
        <p>Thank you for reaching out to W3 Technologies!</p>
        <p>We will review your message and get back to you shortly.</p>
        <p>Best regards,<br>W3 Technologies</p>
        </body>
        </html>";
    $from = "info@w3tec.com";
    $subject2 = "New Internship Inquiry Received";
    $message2 = "$name has contacted us for Internship from $college";

    // Headers for email
    $headers = "From: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Send email to the user and company
    if (mail($to, $subject, $body, $headers)) {
        mail($from, $subject2, $message2, $headers);

        // Return a JSON response indicating success
        echo json_encode(["status" => "success", "message" => "Your response has been recorded"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email. Please try again later."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Failed to submit the form. Please try again."]);
}





?> 