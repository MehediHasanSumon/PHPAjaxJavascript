<?php
// Include the database configuration
include('config.php');

// Create SQL Query to select all records from the "students" table
$sql = "SELECT * FROM students";

// Prepare the SQL statement
$result = $conn->prepare($sql);

// Execute the prepared statement
$data = array(); // Initialize an empty array to store the fetched data
$result->execute();

// Check if there are rows returned from the query
if ($result->rowCount() > 0) {
    // Fetch each row as an associative array and add it to the data array
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $data[] = $row;
    }
}

// Encode the fetched data as JSON and echo it
echo json_encode($data);
?>
