<?php
// Include the database configuration
include('config.php');

// Retrieve raw input data from the request
$mydata = stripslashes(file_get_contents("php://input"));

// Decode the JSON data into an associative array
$data = json_decode($mydata, true);

// Extract the 'id' from the data
$id = $data['id'];

// Prepare and execute the SQL query to delete a student record by ID
$sql = "DELETE FROM `students` WHERE `id` = ?";
$stmt = $conn->prepare($sql);
$stmt->bindParam(1, $id);

// Check if the deletion was successful and provide the appropriate response
if ($stmt->execute()) {
    echo 'success'; // Indicate success if the record was deleted
} else {
    echo 'failed.'; // Indicate failure if there was an issue with the deletion
}
?>
