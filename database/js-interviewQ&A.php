<?php 
//  $basepath ="/w3tec.com";
// include "db-config.php";
// $name = $_POST['name'];
// $email =$_POST['email'];
// $contact_no = $_POST['contact-no'];
// $whatsapp_no = $_POST['whatsapp-no'];
// $query =  "INSERT INTO js_interviewqa (js_name,email,contact_no,whatsapp_no) 
// VALUES('$name','$email','$contact_no','$whatsapp_no')";
// $result = $conn->query($query);
// if($result){
//     $executed =true;
// }
// else{
//     $executed = false;
// }
// $conn->close();
// if($executed){
//     echo json_encode(["status" => "success", "message" => "Your response has been recorded"]);
//     $to = $email;
//     $subject = "W3 Technologies: JavaSript Interview Questions and Answers - Download Now";
//     $body = "
//         <html>
//         <head>
//         <title>W3 Technologies: JavaSript Interview Questions and Answers - Download Now</title>
//         </head>
//         <body>
//         <p>Hi ". htmlspecialchars($name) . "</p>


//         <p>Thank you for downloading the <strong>JavaScript Interview Questions and Answers PDF</strong> from W3 Technologies. We hope it provides valuable insights to help you excel in your interview preparations.</p>

//         <p>If you need further assistance, additional resources, or have any questions about JavaScript, feel free to reach out to us at <a href=\"mailto:info@w3tec.com\">info@w3tec.com</a> or call us at <a href=\"tel:+917416939333\">+91 74169 39333</a>.</p>
    
       
//         <p>Best regards,<br>
//         W3 Technologies</p>
//         </body>
//         </html>
//     ";
    
//     $from = "info@w3tec.com";
    
//     $subject2 ="Downloaded Course Syllabus";
//     $message2 ="$name  downloaded the $course Course Syllabus "; 

//     $boundary = uniqid();

//     $headers = "From: $from\r\n";
//     $headers .= "MIME-Version: 1.0\r\n";
//     $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

//     $headers2 = "From: $to\r\n";

//      $pdfFilePath = "../interview-questions/javascript Intervew questions.pdf"; 
//     // $pdfFilePath = "$basepath/interview-questions/javascript Intervew questions.pdf";
//     $pdffileName = basename($pdfFilePath); 

//     $pdfContent = file_get_contents($pdfFilePath);
//     $pdfEncoded = chunk_split(base64_encode($pdfContent));

//     $message = "--$boundary\r\n";
//     $message .= "Content-Type: text/html; charset=UTF-8\r\n";
//     $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
//     $message .= $body . "\r\n";

//     $message .= "--$boundary\r\n";
//     $message .= "Content-Type: application/octet-stream; name=\"$pdffileName\"\r\n";
//     $message .= "Content-Transfer-Encoding: base64\r\n";
//     $message .= "Content-Disposition: attachment; filename=\"$pdffileName\"\r\n\r\n";
//     $message .= $pdfEncoded . "\r\n";
//     $message .= "--$boundary--";

//     //  Send email to the user and company
//     if (mail($to, $subject, $body, $headers)) {
//         mail($from, $subject2, $message2, $headers);

//         // Return a JSON response indicating success
//         echo json_encode(["status" => "success", "message" => "Your response has been recorded"]);
//     } else {
//         echo json_encode(["status" => "error", "message" => "Failed to send email. Please try again later."]);
//     }
    
// } else {
//     echo json_encode(["status" => "error", "message" => "Failed to submit the form. Please try again."]);
// }
?> 

<?php 
$basepath = "/w3tec.com";
include "db-config.php";

$name = $_POST['name'];
$email = $_POST['email'];
$contact_no = $_POST['contact-no'];
$whatsapp_no = $_POST['whatsapp-no'];

// Insert data into the database
$query = "INSERT INTO js_interviewqa (js_name, email, contact_no, whatsapp_no) 
VALUES('$name', '$email', '$contact_no', '$whatsapp_no')";
$result = $conn->query($query);

if ($result) {
    $executed = true;
} else {
    $executed = false;
}
$conn->close();

if ($executed) {
    echo json_encode(["status" => "success", "message" => "Your response has been recorded"]);

    $to = $email;
    $subject = "W3 Technologies: JavaScript Interview Questions and Answers - Download Now";

    $from = "info@w3tec.com";
    $pdfFilePath = "../interview-questions/javascript Intervew questions.pdf"; 
    $pdfFileName = basename($pdfFilePath);

    // Read the PDF file and encode it
    if (!file_exists($pdfFilePath)) {
        echo json_encode(["status" => "error", "message" => "PDF file not found."]);
        exit;
    }
    $pdfContent = file_get_contents($pdfFilePath);
    $pdfEncoded = chunk_split(base64_encode($pdfContent));

    // Create email headers
    $boundary = md5(time());
    $headers = "From: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Create the email body
    $message = "--$boundary\r\n";
    $message .= "Content-Type: text/html; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $message .= "
        <p>Hi " . htmlspecialchars($name) . ",</p>
        <p>Thank you for downloading the <strong>JavaScript Interview Questions and Answers PDF</strong> from W3 Technologies.</p>
        <p>We hope it helps you prepare for your interviews. If you have any questions, feel free to contact us at <a href=\"mailto:info@w3tec.com\">info@w3tec.com</a>.</p>
        <p>Best regards,<br>W3 Technologies</p>
    \r\n";

    $message .= "--$boundary\r\n";
    $message .= "Content-Type: application/pdf; name=\"$pdfFileName\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment; filename=\"$pdfFileName\"\r\n\r\n";
    $message .= $pdfEncoded . "\r\n";
    $message .= "--$boundary--";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully with the PDF attached."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Failed to submit the form."]);
}
?>
