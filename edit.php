<?php
// Include the database configuration
include('config.php');

// Retrieve raw input data from the request
$mydata = stripslashes(file_get_contents("php://input"));

// Decode the JSON data into an associative array
$data = json_decode($mydata, true);

// Extract the 'id' from the data
$id = $data['id'];

// Prepare and execute the SQL query to select a student record by ID
$sql = "SELECT * FROM `students` WHERE `id` = ?";
$stmt = $conn->prepare($sql);
$stmt->bindParam(1, $id);
$stmt->execute();

// Fetch the result as an associative array
$row = $stmt->fetch(PDO::FETCH_ASSOC);

// Encode the fetched data as JSON and echo it
echo json_encode($row);
?>
