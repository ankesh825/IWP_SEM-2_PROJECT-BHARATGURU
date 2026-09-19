<?php
/**
 * BharatGuru - Database Admin & Viva Evaluation Dashboard
 * Displays all registered users from MySQL database with live search and CSV export
 */

require_once 'db_connect.php';

// Fetch summary metrics
$totalUsersQuery = $conn->query("SELECT COUNT(*) as total FROM users");
$totalUsers = $totalUsersQuery->fetch_assoc()['total'] ?? 0;

$citiesQuery = $conn->query("SELECT COUNT(DISTINCT city) as total_cities FROM users");
$totalCities = $citiesQuery->fetch_assoc()['total_cities'] ?? 0;

// Fetch all users
$usersResult = $conn->query("SELECT id, fname, lname, email, phone, gender, dob, city, hobbies, message, created_at FROM users ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Database Admin Panel | BharatGuru (IIPS DAVV)</title>
  <link rel="icon" type="image/png" href="Fevicon.png" />
  <link rel="stylesheet" href="style.css" />
  <style>
    .admin-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background: var(--card-bg);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }
    .admin-table th, .admin-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid var(--border-color);
      font-size: 13.5px;
    }
    .admin-table th {
      background: var(--p-green);
      color: #ffffff;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.5px;
    }
    .admin-table tr:hover {
      background: var(--p-green-50);
    }
    .stat-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--p-green-50);
      border: 1px solid var(--p-green-600);
      color: var(--p-green-900);
      padding: 6px 14px;
      border-radius: var(--radius-full);
      font-weight: 700;
    }
  </style>
</head>
<body style="background: var(--bg-sand); min-height: 100vh;">

  <!-- Header -->
  <header class="top_Header">
    <div class="nav-container">
      <a href="index.html" class="brand-wrapper">
        <div class="MainLogo">Bharat<span class="accent">Guru</span> 🇮🇳 <span style="font-size: 14px; color: var(--goldy); margin-left: 8px;">[DB Admin]</span></div>
        <div class="sub-txt">IWP Coursework | IIPS DAVV Indore</div>
      </a>
      <div style="display: flex; gap: 10px;">
        <a href="export_users.php" class="btn btn-gold">📥 Export to Excel / CSV</a>
        <a href="index.html" class="btn btn-primary">← Go to Portal Home</a>
      </div>
    </div>
  </header>

  <main class="container" style="padding: 40px 24px;">
    <!-- Dashboard Stats Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 30px;">
      <div>
        <h1 style="font-size: 28px; color: var(--p-green-900); margin-bottom: 4px;">Registered Users Database</h1>
        <p style="color: var(--text-muted); font-size: 14px;">Live records directly fetched from MySQL database (<code>bharatguru_db</code>.<code>users</code>)</p>
      </div>
      <div style="display: flex; gap: 14px;">
        <div class="stat-badge">👥 Total Registered Users: <strong><?= $totalUsers ?></strong></div>
        <div class="stat-badge" style="border-color: var(--goldy); color: var(--goldy-dark);">📍 Active Cities: <strong><?= $totalCities ?></strong></div>
      </div>
    </div>

    <!-- Live Search Bar -->
    <div style="margin-bottom: 20px;">
      <input 
        type="text" 
        id="dbSearchInput" 
        class="form-control" 
        placeholder="🔍 Filter records by name, email, phone, city..." 
        onkeyup="filterAdminTable()"
        style="max-width: 400px; background: white;"
      />
    </div>

    <!-- Users Table -->
    <div style="overflow-x: auto;">
      <table class="admin-table" id="usersTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Gender</th>
            <th>Interests / Hobbies</th>
            <th>Bio / Message</th>
            <th>Registered Date</th>
          </tr>
        </thead>
        <tbody>
          <?php if ($usersResult && $usersResult->num_rows > 0): ?>
            <?php while($row = $usersResult->fetch_assoc()): ?>
              <tr>
                <td><strong>#<?= $row['id'] ?></strong></td>
                <td><strong><?= htmlspecialchars($row['fname'] . ' ' . $row['lname']) ?></strong></td>
                <td><a href="mailto:<?= htmlspecialchars($row['email']) ?>" style="color: var(--p-green);"><?= htmlspecialchars($row['email']) ?></a></td>
                <td><?= htmlspecialchars($row['phone']) ?></td>
                <td><span style="background: var(--goldy-soft); padding: 2px 8px; border-radius: 4px; font-weight: 600;"><?= htmlspecialchars($row['city']) ?></span></td>
                <td style="text-transform: capitalize;"><?= htmlspecialchars($row['gender']) ?></td>
                <td><small><?= htmlspecialchars($row['hobbies'] ?: 'None') ?></small></td>
                <td><small style="color: #666;"><?= htmlspecialchars($row['message'] ?: '-') ?></small></td>
                <td><small><?= date('d M Y, h:i A', strtotime($row['created_at'])) ?></small></td>
              </tr>
            <?php endwhile; ?>
          <?php else: ?>
            <tr>
              <td colspan="9" style="text-align: center; padding: 40px; color: var(--text-muted);">
                No users found in MySQL table <code>users</code>. Register via <a href="registationform.html" style="color: var(--p-green); font-weight: bold;">Registration Form</a>!
              </td>
            </tr>
          <?php endif; ?>
        </tbody>
      </table>
    </div>
  </main>

  <script>
    function filterAdminTable() {
      const input = document.getElementById('dbSearchInput').value.toLowerCase();
      const rows = document.querySelectorAll('#usersTable tbody tr');

      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? '' : 'none';
      });
    }
  </script>
</body>
</html>
