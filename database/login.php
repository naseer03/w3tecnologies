
<?php
session_start();
include 'db-config.php';
 $name = $_POST['name'];
 $password = $_POST['password'];

 $sql= "select * from admin where admin_name='$name' and admin_password='$password' ";
 $result = $conn->query($sql);
 if ($result->num_rows>=1){
   $row = $result->fetch_assoc();
   // $_SESSION['admin_id'] = $row['admin_id'];
   $_SESSION['admin_name'] = $row['admin_name'];
   header('Location: ../dashboard.php?login=success');
 }
 else{
    header('Location:../adminlogin.php?login=failed');
 }
