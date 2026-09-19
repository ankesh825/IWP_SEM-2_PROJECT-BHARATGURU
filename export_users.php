<?php
/**
 * BharatGuru - Export Registered Users to CSV / Excel
 */

require_once 'db_connect.php';

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=bharatguru_registered_users_' . date('Y-m-d') . '.csv');

$output = fopen('php://output', 'w');

// Set CSV column headers
fputcsv($output, ['User ID', 'First Name', 'Last Name', 'Email Address', 'Phone Number', 'Gender', 'Date of Birth', 'City', 'Hobbies', 'Message/Bio', 'Registration Timestamp']);

// Fetch and output rows
$query = "SELECT id, fname, lname, email, phone, gender, dob, city, hobbies, message, created_at FROM users ORDER BY id ASC";
$result = $conn->query($query);

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        fputcsv($output, [
            $row['id'],
            $row['fname'],
            $row['lname'],
            $row['email'],
            $row['phone'],
            $row['gender'],
            $row['dob'],
            $row['city'],
            $row['hobbies'],
            $row['message'],
            $row['created_at']
        ]);
    }
}

fclose($output);
exit;
?>
