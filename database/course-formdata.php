 <?php 
include __DIR__ . '/db-config.php';
$name = $_POST['name'];
$email =$_POST['email'];
$contact_no = $_POST['contact-no'];
$whatsapp_no = $_POST['whatsapp-no'];
$course = $_POST['course'];
$time = $_POST['pref-time'];
$file_name = $_POST['course-name'];
$query =  "INSERT INTO course_form (course_enq_name,email,contact_no,whatsapp_no,course,pref_time) 
VALUES('$name','$email','$contact_no','$whatsapp_no','$course','$time')";
$result = $conn->query($query);
if($result){
    $executed =true;
}
else{
    $executed = false;
}
$conn->close();
if($executed){
    // header("Location:../courses/$file_name.php?register=success");
    echo json_encode(["status" => "success", "message" => "Your response has been recorded"]);
    $to = $email;
    $subject = "W3 Technologies: Course Syllabus - Download Now";
    $body = "
        <html>
        <head>
        <title>W3 Technologies: Course Syllabus - Download Now</title>
        </head>
        <body>
        <p>Hi ". htmlspecialchars($name) . "</p>

        <p>Thank you for downloading the course syllabus from W3 Technologies, we hope you find it useful! </p>

        <p>If you have any questions or need assistance feel free to reach out to us <a href=\"mailto:info@w3tec.com\">info@w3tec.com</a> or call us <a href=\"tel:+917416939333\" >+91 74169 39333</a></p>
       
        <p>Best regards,<br>
        W3 Technologies</p>
        </body>
        </html>
    ";
    
    $from = "info@w3tec.com";
    
    $subject2 ="Downloaded Course Syllabus";
    $message2 ="$name  downloaded the $course Course Syllabus "; 

    $boundary = uniqid();

    $headers = "From: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    $headers2 = "From: $to\r\n";

    // $pdfFilePath = "../coursepdfs/$course.pdf"; 
    $pdfFilePath = __DIR__ . "/../coursepdfs/$course.pdf";
    $pdffileName = basename($pdfFilePath); 

    $pdfContent = file_get_contents($pdfFilePath);
    $pdfEncoded = chunk_split(base64_encode($pdfContent));

    $message = "--$boundary\r\n";
    $message .= "Content-Type: text/html; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $message .= $body . "\r\n";

    $message .= "--$boundary\r\n";
    $message .= "Content-Type: application/octet-stream; name=\"$pdffileName\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment; filename=\"$pdffileName\"\r\n\r\n";
    $message .= $pdfEncoded . "\r\n";
    $message .= "--$boundary--";

    //  Send email to the user and company
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

<?php
// $basepath ="/w3tec.com";
// include "db-config.php";

// // Retrieve form data
// $name = $_POST['name'];
// $email = $_POST['email'];
// $contact_no = $_POST['contact-no'];
// $whatsapp_no = $_POST['whatsapp-no'];
// $course = $_POST['course'];
// $time = $_POST['pref-time'];
// $file_name = $_POST['course-name'];

// // Insert data into database
// $query = "INSERT INTO course_form (course_enq_name, email, contact_no, whatsapp_no, course, pref_time) 
//           VALUES('$name', '$email', '$contact_no', '$whatsapp_no', '$course', '$time')";

// $result = $conn->query($query);

// // Close the database connection
// $conn->close();

// // Check if the insertion was successful
// if ($result) {
//     $executed = true;
// } else {
//     $executed = false;
// }

// // If data was successfully inserted
// if ($executed) {
//     // Prepare email content
//     $to = $email;
//     $subject = "W3 Technologies: Course Syllabus - Download Now";
//     $body = "
//         <html>
//         <head>
//         <title>W3 Technologies: Course Syllabus - Download Now</title>
//         </head>
//         <body>
//         <p>Hi " . htmlspecialchars($name) . "</p>
//         <p>Thank you for downloading the course syllabus from W3 Technologies, we hope you find it useful! </p>
//         <p>If you have any questions or need assistance feel free to reach out to us <a href='mailto:info@w3tec.com'>info@w3tec.com</a> or call us <a href='tel:+917416939333'>+91 74169 39333</a></p>
//         <p>Best regards,<br>W3 Technologies</p>
//         </body>
//         </html>
//     ";
    
//     $from = "info@w3tec.com";
//     $boundary = uniqid();
//     $headers = "From: $from\r\n";
//     $headers .= "MIME-Version: 1.0\r\n";
//     $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

//     // Email with the course download details
//     $pdfFilePath = __DIR__ . "/../coursepdfs/$course.pdf";
//     $pdffileName = basename($pdfFilePath);
//     $pdfContent = file_get_contents($pdfFilePath);
//     $pdfEncoded = chunk_split(base64_encode($pdfContent));

//     // Construct the email message
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

//     // Send the email
//     if (mail($to, $subject, $message, $headers)) {
//         // Also send a notification email to admin
//         $subject2 = "Downloaded Course Syllabus";
//         $message2 = "$name downloaded the $course Course Syllabus";
//         mail($from, $subject2, $message2);

//         // Redirect after email is sent successfully
//         header("Location: ../courses/$file_name.php?register=success");
//         exit(); // Stop further execution
//     } else {
//         // Redirect if the email failed to send
//         header("Location: ../courses/$file_name.php?register=failed");
//         exit(); // Stop further execution
//     }
// } else {
//     // Redirect if the database insertion failed
//     header("Location: ../courses/$file_name.php?register=failed");
//     exit(); // Stop further execution
// }
?>

