<?php
// $server = 'localhost';
// $username = 'w3tec-website';
// $password = 'plTSUNOomHnfOJETd59V';
// $database = 'w3tec-website';
$server = 'localhost';
$username = 'root';
$password = '';
$database = 'w3tech';

$conn =mysqli_connect($server, $username, $password, $database); 
if(mysqli_connect_error()){
echo "Connection Fail".mysqli_connect_error();
}
?>