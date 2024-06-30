<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact";

$conn =  mysqli_connect($servername, $username, $password, $dbname);

if($conn === false){
  die("ERROR: Could not connect. "
      . mysqli_connect_error());
}
        $name =  $_REQUEST['UName'];
        $email = $_REQUEST['Email'];
        $msg =  $_REQUEST['msg'];
$sql = "INSERT INTO contact_us VALUES('$name', '$email', '$msg')";

if(mysqli_query($conn, $sql)){
  //to be fixed
echo '<!DOCTYPE html>';
echo '<html style="font-size: 16px;" lang="en"><head>';
echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
echo '<meta charset="utf-8">';
echo '<meta name="keywords" content="Thank you for the response!">';
echo '<meta name="description" content="">';
echo '<title>Thank you </title>';
echo '<link rel="stylesheet" href="style.css" media="screen">';
echo '<link rel="stylesheet" href="Thank-you-.css" media="screen">';
echo '<script class="u-script" type="text/javascript" src="jquery.js" defer=""></script>';
echo '<script class="u-script" type="text/javascript" src="function.js" defer=""></script>';
echo '<link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">';
echo '<link id="u-page-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i">';
echo '';
echo '';
echo '<script type="application/ld+json">{';
echo '"@context": "http://schema.org",';
echo '"@type": "Organization",';
echo '"name": ""';
echo '}</script>';
echo '<meta name="theme-color" content="#478ac9">';
echo '<meta property="og:title" content="Thank you">';
echo '<meta property="og:type" content="website">';
echo '</head>';
echo '<body class="u-body u-xl-mode" data-lang="en">';
echo '<section class="u-align-center u-clearfix u-image u-section-1" id="carousel_7504" data-image-width="1669" data-image-height="1080">';
echo '<div class="u-clearfix u-sheet u-sheet-1">';
echo '<h1 class="u-custom-font u-text u-text-font u-text-palette-3-base u-title u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1000">Thank you for contacting us!</h1>';
echo '<h2 class="u-text u-text-palette-5-light-3 u-text-2">We hope for more of your messages and feedbacks!</h2>';
echo '<a href="Home.html" class="u-border-none u-btn u-btn-round u-button-style u-hover-palette-3-light-1 u-palette-2-base u-radius-6 u-btn-1">BACK TO HOME</a>';
echo '</div>';
echo '</section>';
echo '</body></html>';

} else{
  //pwedeng baguhin yug content ng echo dito
  echo "ERROR: Hush! Sorry $sql. "
      . mysqli_error($conn);
}


mysqli_close($conn);



?>