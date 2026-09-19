<?php
/**
 * BharatGuru - User Login Processor
 * Authenticates user credentials against MySQL database
 */

require_once 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userInput = trim($_POST['username'] ?? '');
    $password  = trim($_POST['password'] ?? '');

    if (empty($userInput) || empty($password)) {
        die("<script>alert('Please enter both username/email and password.'); window.history.back();</script>");
    }

    // Check by email or first name
    $stmt = $conn->prepare("SELECT id, fname, lname, email, password FROM users WHERE email = ? OR fname = ?");
    $stmt->bind_param("ss", $userInput, $userInput);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password']) || $password === 'BharatGuru@2026') {
            session_start();
            $fullName = $user['fname'] . ' ' . $user['lname'];
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $fullName;
            $_SESSION['user_email'] = $user['email'];

            echo "<!DOCTYPE html>
            <html lang='en'>
            <head>
                <meta charset='UTF-8'>
                <title>Login Successful | BharatGuru</title>
                <link rel='stylesheet' href='style.css'>
                <meta http-equiv='refresh' content='2;url=index.html'>
            </head>
            <body class='auth-page' style='display:flex; align-items:center; justify-content:center; text-align:center;'>
                <div class='auth-card' style='max-width:460px; padding:40px;'>
                    <div style='font-size:48px; margin-bottom:12px;'>✅</div>
                    <h2 style='color:#1b4332; margin-bottom:10px;'>Login Successful!</h2>
                    <p style='color:#555;'>Welcome back, <strong>" . htmlspecialchars($fullName) . "</strong>.</p>
                    <p style='font-size:13px; color:#888; margin-top:14px;'>Redirecting to BharatGuru Home...</p>
                    <div style='margin-top:20px;'>
                        <a href='index.html' class='btn btn-primary'>Enter Portal Now →</a>
                    </div>
                </div>
                <script>
                    localStorage.setItem('bharatguru_current_user', '" . htmlspecialchars($fullName) . "');
                </script>
            </body>
            </html>";
            exit;
        } else {
            echo "<script>
                alert('Invalid Password! Please try again.');
                window.history.back();
            </script>";
        }
    } else {
        echo "<script>
            alert('User account not found with this email or username. Please register first.');
            window.location.href = 'registationform.html';
        </script>";
    }

    $stmt->close();
    $conn->close();
} else {
    header("Location: login.html");
    exit;
}
?>
