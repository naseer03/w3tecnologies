<?php
 include './db-config.php';
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
echo $name;
$query =  "INSERT INTO admin (admin_name,admin_email,admin_password) 
VALUES('$name','$email','$password')";
$result = $conn->query($query);
if($result){
    $executed =true;
}
else{
    $executed = false;
}
$conn->close();
if($executed){
        header("Location:../adminlogin.php?register=success");
}
else{
    header("Location:../adminregister.php?register=failed");
} 
?> 
