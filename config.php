<?php
$dsn = 'mysql:host=localhost;dbname=ajaxjqueryapi';
$dbuser = 'root';
$dbpass = '';

try {
    // Create a new PDO instance for database connection
    $conn = new PDO($dsn, $dbuser, $dbpass);

    // Uncomment the following lines if you want to check if the connection is successful
    // if($conn){
    //    echo 'Connected';
    // }

} catch (PDOException $e) {
    // Handle any errors that occur during the connection attempt
    echo "Error: " . $e->getMessage();
}
?>
