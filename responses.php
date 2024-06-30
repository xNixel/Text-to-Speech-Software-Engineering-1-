<?php
 
$user = 'root';
$password = '';
$database = 'contact';
$servername='localhost';
$mysqli = new mysqli($servername, $user,
                $password, $database);
 
if ($mysqli->connect_error) {
    die('Connect Error (' .
    $mysqli->connect_errno . ') '.
    $mysqli->connect_error);
}
 
// SQL query to select data from database
$sql = "SELECT * FROM `contact_us`;";
$result = $mysqli->query($sql);
$mysqli->close();
?>