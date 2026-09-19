<?php
/**
 * BharatGuru - Database Connection Script
 * Project: BharatGuru India Tourism Web Portal
 * Institution: IIPS DAVV Indore
 */

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'bharatguru_db';

// Create connection using MySQLi
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error . "<br>Please make sure MySQL is running in XAMPP and 'bharatguru_db' is imported.");
}

// Set charset to utf8mb4 for Hindi and special characters
$conn->set_charset("utf8mb4");
?>
