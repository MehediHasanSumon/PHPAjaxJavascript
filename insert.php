<?php
// Include the database configuration
include('config.php');

// Retrieve raw input data from the request
$mydata = stripslashes(file_get_contents("php://input"));

// Decode the JSON data into an associative array
$data = json_decode($mydata, true);

// Extract the data fields from the decoded JSON
$id = $data['id'];
$name = $data['name'];
$roll = $data['roll'];
$department = $data['department'];

// Check if any required field is empty
if (empty($name) || empty($department) || empty($roll)) {
    echo 'required'; // Indicate that required fields are missing
} else {
    // Prepare and execute the SQL query to insert or update a student record
    $query = "INSERT INTO students (`id`, `name`, `roll`, `department`) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name), roll = VALUES(roll), department = VALUES(department)";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(1, $id);
    $stmt->bindParam(2, $name);
    $stmt->bindParam(3, $roll);
    $stmt->bindParam(4, $department);

    // Check if the query execution was successful and provide the appropriate response
    if ($stmt->execute()) {
        echo 'success'; // Indicate success if the record was inserted or updated
    } else {
        echo 'failed.'; // Indicate failure if there was an issue with the query execution
    }
}
?>
