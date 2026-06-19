<?php 
// include "db-config.php";
// // Retrieve form data
// $name = $_POST['enq-name'];
// $email = $_POST['enq-email'];
// $contact_no = $_POST['enq-contact-no'];
// $whatsapp_no = $_POST['enq-whatsapp-no'];
// $time = $_POST['enq-pref-time'];
// $message = $_POST['enq-message'];
// $file_name= $_POST['file-name'];
// // Prepare and execute the SQL query
// $query = "INSERT INTO enquiry_form (enq_name, enq_email, enq_contact_no, enq_whatsapp_no, pref_time, message_note) 
//           VALUES ('$name', '$email', '$contact_no', '$whatsapp_no', '$time', '$message')";
// $result = $conn->query($query);
// // Close the database connection
// $conn->close();

// if ($result) {
//     // header("Location:/w3tec.com?formsubmitted=success");

//     $to = $email;
//     $subject = "W3 Technologies: Your Message Has Been Received!";
//     $body = "
//         <html>
//         <head>
//         <title>We've received your message - W3 Technologies</title>
//         </head>
//         <body>
//         <p>Hi ". htmlspecialchars($name) . ",</p>

//         <p>Thank you for reaching out to W3 Technologies! We appreciate your interest and we're here to assist you.</p>

//         <p>We will review your message and get back to you shortly. If you have any immediate questions, please feel free to contact us at <a href=\"mailto:info@w3tec.com\">info@w3tec.com</a> or call us at <a href=\"tel:+917416939333\">+91 74169 39333</a>.</p>
    
//         <p>Best regards,<br>
//         W3 Technologies </p>
//         </body>
//         </html>
//     ";

//     $from = "info@w3tec.com";
//     $subject2 = "New Inquiry Received";
//     $message2 = "$name has contacted us.";
    
//     $headers = "From: $from\r\n";
//     $headers .= "MIME-Version: 1.0\r\n";
//     $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

//     $headers2 = "From: $from\r\n";

//     if (mail($to, $subject, $body, $headers)) {

//         mail($from, $subject2, $message2, $headers2);
//         header("Location:/w3tec.com?formsubmitted=success");
//     } else {
//         header("Location:/w3tec.com?formsubmitted=failed");
//     }
   
// } else {
//     header("Location:/w3tec.com?formsubmitted=failed");
// }
// exit(); 
include "db-config.php";
// Retrieve form data
$name = $_POST['enq-name'];
$email = $_POST['enq-email'];
$contact_no = $_POST['enq-contact-no'];
$whatsapp_no = $_POST['enq-whatsapp-no'];
$time = $_POST['enq-pref-time'];
$message = $_POST['enq-message'];
$file_name= $_POST['file-name'];
// Prepare and execute the SQL query
$query = "INSERT INTO enquiry_form (enq_name, enq_email, enq_contact_no, enq_whatsapp_no, pref_time, message_note) 
          VALUES ('$name', '$email', '$contact_no', '$whatsapp_no', '$time', '$message')";
$result = $conn->query($query);
// Close the database connection
$conn->close();

if ($result) {
    // header("Location:/w3tec.com?formsubmitted=success");

    $to = $email;
    $subject = "W3 Technologies: Your Message Has Been Received!";
    $body = "
        <html>
        <head>
        <title>We've received your message - W3 Technologies</title>
        </head>
        <body>
        <p>Hi ". htmlspecialchars($name) . ",</p>

        <p>Thank you for reaching out to W3 Technologies! We appreciate your interest and we're here to assist you.</p>

        <p>We will review your message and get back to you shortly. If you have any immediate questions, please feel free to contact us at <a href=\"mailto:info@w3tec.com\">info@w3tec.com</a> or call us at <a href=\"tel:+917416939333\">+91 74169 39333</a>.</p>
    
        <p>Best regards,<br>
        W3 Technologies </p>
        </body>
        </html>
    ";

    $from = "info@w3tec.com";
    $subject2 = "New Inquiry Received";
    $message2 = "$name has contacted us.";
    
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
