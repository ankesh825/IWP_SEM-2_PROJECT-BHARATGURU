<?php
/**
 * BharatGuru - User Registration Processor
 * Handles inserting registration form data into MySQL database
 */

require_once 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fname   = trim($_POST['fname'] ?? '');
    $lname   = trim($_POST['lname'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $phone   = trim($_POST['phone'] ?? '');
    $pass    = trim($_POST['password'] ?? '');
    $gender  = trim($_POST['gender'] ?? 'male');
    $dob     = trim($_POST['dob'] ?? '');
    $city    = trim($_POST['city'] ?? '');
    $message = trim($_POST['message'] ?? '');

    // Handle hobbies array or string
    $hobbies = '';
    if (isset($_POST['hobby'])) {
        if (is_array($_POST['hobby'])) {
            $hobbies = implode(', ', $_POST['hobby']);
        } else {
            $hobbies = $_POST['hobby'];
        }
    }

    if (empty($fname) || empty($email) || empty($pass)) {
        die("<script>alert('Please fill all required fields!'); window.history.back();</script>");
    }

    // Check if email already registered
    $checkStmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $checkStmt->bind_param("s", $email);
    $checkStmt->execute();
    $checkResult = $checkStmt->get_result();

    if ($checkResult->num_rows > 0) {
        echo "<script>
            alert('Email already registered! Please login instead.');
            window.location.href = 'login.html';
        </script>";
        exit;
    }
    $checkStmt->close();

    // Secure password hashing
    $hashedPassword = password_hash($pass, PASSWORD_BCRYPT);

    // Insert new user into database
    $stmt = $conn->prepare("INSERT INTO users (fname, lname, email, phone, password, gender, dob, city, hobbies, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $fname, $lname, $email, $phone, $hashedPassword, $gender, $dob, $city, $hobbies, $message);

    if ($stmt->execute()) {
        session_start();
        $_SESSION['user_name'] = $fname . ' ' . $lname;
        $_SESSION['user_email'] = $email;

        // Visual confirmation screen
        echo "<!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <title>Registration Successful | BharatGuru</title>
            <link rel='stylesheet' href='style.css'>
            <meta http-equiv='refresh' content='2;url=index.html'>
        </head>
        <body class='auth-page' style='display:flex; align-items:center; justify-content:center; text-align:center;'>
            <div class='auth-card' style='max-width:480px; padding:40px;'>
                <div style='font-size:48px; margin-bottom:12px;'>🎉</div>
                <h2 style='color:#1b4332; margin-bottom:10px;'>Registration Successful!</h2>
                <p style='color:#555;'>Welcome to BharatGuru, <strong>" . htmlspecialchars($fname) . "</strong>.</p>
                <p style='font-size:13px; color:#888; margin-top:14px;'>Data has been saved to MySQL Database. Redirecting to Home page in 2 seconds...</p>
                <div style='margin-top:20px;'>
                    <a href='index.html' class='btn btn-primary'>Go to Home Now →</a>
                </div>
            </div>
            <script>
                localStorage.setItem('bharatguru_current_user', '" . htmlspecialchars($fname . ' ' . $lname) . "');
            </script>
        </body>
        </html>";
    } else {
        echo "Error saving data: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    header("Location: registationform.html");
    exit;
}
?>
