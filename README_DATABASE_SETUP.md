# 🗄️ BharatGuru Database Setup Guide (XAMPP / MySQL / PHP)

This guide explains how to connect and run **BharatGuru** with its MySQL database in **XAMPP / WAMP / phpMyAdmin**.

---

## 🚀 Quick 3-Step Setup

### Step 1: Open XAMPP Control Panel
1. Open **XAMPP Control Panel** on your computer.
2. Click **Start** for **Apache** and **Start** for **MySQL**.

---

### Step 2: Import Database in phpMyAdmin
1. Open your browser and go to: **`http://localhost/phpmyadmin`**
2. Click on **Databases** tab $\rightarrow$ create a database named: **`bharatguru_db`** (or leave it blank).
3. Click on the **Import** tab at the top.
4. Click **Choose File** $\rightarrow$ select the **`database.sql`** file from this project folder.
5. Scroll down and click **Import** (or **Go**).
6. ✅ **Done!** The `users`, `trip_inquiries`, and `user_wishlist` tables will be created automatically with sample demo data.

---

### Step 3: Put Project Folder in `htdocs` & Run
1. Copy this `Bharatguru` folder into:
   ```
   C:\xampp\htdocs\Bharatguru
   ```
2. Open your browser and visit:
   - **Main Website**: `http://localhost/Bharatguru/index.html` or `http://localhost/Bharatguru/ankesh.html`
   - **Registration Form**: `http://localhost/Bharatguru/registationform.html`
   - **Login Page**: `http://localhost/Bharatguru/login.html`
   - **Admin Database Viewer**: `http://localhost/Bharatguru/admin_dashboard.php`

---

## 📋 Backend & Database Files Reference

| File | Purpose |
|------|---------|
| **`database.sql`** | Complete MySQL database schema and sample records |
| **`db_connect.php`** | Connects PHP with MySQL (`localhost`, `root`, `bharatguru_db`) |
| **`register_process.php`** | Saves registration data into MySQL table `users` with hashed passwords |
| **`login_process.php`** | Authenticates users against MySQL database |
| **`admin_dashboard.php`** | Live admin panel showing all registered users from database |
| **`export_users.php`** | Downloads all registered users in an Excel / CSV spreadsheet |

---

## 💡 Viva / Practical Evaluation Tips for IIPS DAVV:
- **Show phpMyAdmin**: Open `http://localhost/phpmyadmin` $\rightarrow$ `bharatguru_db` $\rightarrow$ `users` table to show the examiner the real stored rows.
- **Live Registration Demo**: Register a new user on `registationform.html` and show that the new row instantly appears in phpMyAdmin and `admin_dashboard.php`.
- **Show CSV Export**: Click the **"Export to Excel/CSV"** button on `admin_dashboard.php` to demonstrate report generation.
