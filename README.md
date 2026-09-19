# 🗄️ BharatGuru Complete Database & Backend Setup Guide (XAMPP / MySQL / PHP)

This comprehensive guide details the complete database configuration, data schema, preloaded datasets, and execution steps for **BharatGuru** under **XAMPP / WAMP / LAMP / phpMyAdmin**.

---

## 🚀 Quick 3-Step Setup

### Step 1: Open XAMPP Control Panel
1. Open the **XAMPP Control Panel** application on your system.
2. Click **Start** for the **Apache** web server module.
3. Click **Start** for the **MySQL** database server module.
4. Ensure both modules turn green indicating active status on ports `80`/`443` and `3306`.

---

### Step 2: Import Database in phpMyAdmin
1. Open your web browser and navigate to: **`http://localhost/phpmyadmin`**
2. Click on the **Databases** tab in the top navigation bar.
3. In the database name input box, enter: **`bharatguru_db`** and click **Create** *(Note: `database.sql` includes `CREATE DATABASE IF NOT EXISTS`, so importing directly also works)*.
4. Click on the **Import** tab at the top.
5. Click **Choose File** (or **Browse**) and select **`database.sql`** from your project directory:
   ```
   C:\xampp\htdocs\Bharatguru\database.sql
   ```
6. Scroll down and click **Import** (or **Go**).
7. ✅ **Database Ready!** All 3 tables (`users`, `trip_inquiries`, `user_wishlist`) are created with pre-populated sample demo data.

---

### Step 3: Put Project Folder in `htdocs` & Run
1. Verify this `Bharatguru` folder is placed in the Apache root directory:
   ```
   C:\xampp\htdocs\Bharatguru
   ```
2. Open your web browser and visit the following URLs:

| Portal Section | URL | Purpose |
| :--- | :--- | :--- |
| **Main Web Portal** | `http://localhost/Bharatguru/index.html` | Explore destinations, voice search, itinerary, weather |
| **Showcase Portal** | `http://localhost/Bharatguru/ankesh.html` | Dedicated showcase version |
| **Registration Form** | `http://localhost/Bharatguru/registationform.html` | Register new user with live validation & MySQL insert |
| **User Login** | `http://localhost/Bharatguru/login.html` | Authenticate with email/username and password |
| **Admin Database Viewer** | `http://localhost/Bharatguru/admin_dashboard.php` | Real-time table viewer with live search & counters |
| **CSV / Excel Downloader** | `http://localhost/Bharatguru/export_users.php` | Download user records in `.csv` spreadsheet |
| **phpMyAdmin Console** | `http://localhost/phpmyadmin` | Direct database management GUI |

---

## 📊 Complete Database Schema & Data Dictionary

### Database Configuration
- **Database Name**: `bharatguru_db`
- **Engine**: `InnoDB`
- **Charset**: `utf8mb4`
- **Collation**: `utf8mb4_unicode_ci`

---

### 1. Table: `users` (Registered Explorers & Students)
| Field | Data Type | Key / Null | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `INT(11)` | `PRIMARY KEY`, `AUTO_INCREMENT` | *None* | Unique User ID |
| `fname` | `VARCHAR(100)` | `NOT NULL` | *None* | First Name |
| `lname` | `VARCHAR(100)` | `NOT NULL` | *None* | Last Name |
| `email` | `VARCHAR(150)` | `UNIQUE`, `NOT NULL` | *None* | Login Email Address |
| `phone` | `VARCHAR(20)` | `NOT NULL` | *None* | Contact Mobile Number |
| `password` | `VARCHAR(255)` | `NOT NULL` | *None* | BCRYPT Encrypted Password Hash |
| `gender` | `ENUM('male','female','other')`| `NOT NULL` | *None* | Gender |
| `dob` | `DATE` | `NOT NULL` | *None* | Date of Birth (`YYYY-MM-DD`) |
| `city` | `VARCHAR(100)` | `NOT NULL` | *None* | User Origin / Living City |
| `hobbies` | `TEXT` | `NULL` | `NULL` | Selected Hobbies & Travel Interests |
| `message` | `TEXT` | `NULL` | `NULL` | Bio / Travel Message |
| `created_at` | `TIMESTAMP` | `NOT NULL` | `CURRENT_TIMESTAMP` | Account Registration Date & Time |

---

### 2. Table: `trip_inquiries` (Trip Planner & Budget Leads)
| Field | Data Type | Key / Null | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `INT(11)` | `PRIMARY KEY`, `AUTO_INCREMENT` | *None* | Inquiry ID |
| `user_email` | `VARCHAR(150)` | `NULL` | `NULL` | Associated User Email |
| `destination` | `VARCHAR(150)` | `NOT NULL` | *None* | Selected Destination |
| `days` | `INT(11)` | `NOT NULL` | *None* | Number of Tour Days |
| `travelers` | `INT(11)` | `NOT NULL` | *None* | Number of Travelers |
| `travel_style` | `VARCHAR(50)` | `NOT NULL` | *None* | Budget / Moderate / Luxury |
| `estimated_cost` | `VARCHAR(50)` | `NOT NULL` | *None* | Calculated Cost Estimate |
| `created_at` | `TIMESTAMP` | `NOT NULL` | `CURRENT_TIMESTAMP` | Submission Timestamp |

---

### 3. Table: `user_wishlist` (Saved Destination Bookmarks)
| Field | Data Type | Key / Null | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `INT(11)` | `PRIMARY KEY`, `AUTO_INCREMENT` | *None* | Wishlist Entry ID |
| `user_email` | `VARCHAR(150)` | `NOT NULL` | *None* | Traveler Email |
| `destination_id` | `VARCHAR(100)` | `NOT NULL` | *None* | Destination Slug ID |
| `created_at` | `TIMESTAMP` | `NOT NULL` | `CURRENT_TIMESTAMP` | Saved Date & Time |

---

## 👥 Preloaded Sample Data Reference

### 1. Preloaded Users (`users`)

| ID | Name | Email | City | Interests | Default Testing Password |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#1** | **Ankesh Patel** | `ankesh@iips.edu.in` | Indore | heritage, food, photography | `BharatGuru@2026` |
| **#2** | **Priya Sharma** | `priya.sharma@gmail.com` | Bhopal | trekking, spiritual | `BharatGuru@2026` |
| **#3** | **Rahul Verma** | `rahul.v@gmail.com` | Indore | food, coding | `BharatGuru@2026` |

---

### 2. Preloaded Trip Inquiries (`trip_inquiries`)

| ID | User Email | Destination | Days | Travelers | Travel Style | Estimated Cost |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1** | `ankesh@iips.edu.in` | Indore & Ujjain Heritage | 3 | 2 | Moderate | ₹21,000 |
| **#2** | `priya.sharma@gmail.com` | Kerala Backwaters & Munnar | 5 | 2 | Luxury | ₹80,000 |

---

## 📋 Backend & Database Files Architecture

| File Name | Purpose & Functionality |
| :--- | :--- |
| **`database.sql`** | Complete MySQL schema script (creates DB, 3 tables, indexes, and sample demo data). |
| **`db_connect.php`** | Connects PHP application with MySQL server via `new mysqli('localhost', 'root', '', 'bharatguru_db')` with error handling. |
| **`register_process.php`** | Handles POST data from registration form, validates email duplication, hashes password with `PASSWORD_BCRYPT`, and inserts row using Prepared Statements. |
| **`login_process.php`** | Authenticates credentials with `password_verify()`, initializes PHP Session (`$_SESSION`), and synchronizes state with `localStorage`. |
| **`admin_dashboard.php`** | Live admin dashboard with dynamic statistics badges, responsive data tables, and client-side instant search filter. |
| **`export_users.php`** | Sets CSV stream headers and exports all registered user data into a downloadable Excel/CSV report. |

---

## 🔍 Useful SQL Queries for Evaluation & Testing

You can run these queries directly inside the phpMyAdmin **SQL** tab:

```sql
-- 1. View all registered users
SELECT id, fname, lname, email, phone, city, gender, created_at FROM users ORDER BY id DESC;

-- 2. View user count by city
SELECT city, COUNT(*) AS user_count FROM users GROUP BY city ORDER BY user_count DESC;

-- 3. View all trip inquiries
SELECT * FROM trip_inquiries ORDER BY created_at DESC;

-- 4. Search user by keyword
SELECT * FROM users WHERE fname LIKE '%Ankesh%' OR city LIKE '%Indore%';

-- 5. Delete a test user (replace ID)
DELETE FROM users WHERE id = 99;
```

---

## 💡 Viva / Practical Evaluation Demonstration Script (IIPS DAVV)

Follow this 4-step sequence to demonstrate the project to the examiner:

1. **Show phpMyAdmin Console**:
   - Open `http://localhost/phpmyadmin` $\rightarrow$ click `bharatguru_db` $\rightarrow$ click `users` table.
   - Point out that passwords are encrypted using **BCRYPT hashes** (e.g., `$2y$10$...`) for data security.

2. **Live Registration Test**:
   - Open `http://localhost/Bharatguru/registationform.html`.
   - Fill in a new student/user's details and submit the form.
   - Show the green success message and automatic redirect.
   - Refresh phpMyAdmin and `admin_dashboard.php` to show the new record instantly appearing.

3. **Live User Login Test**:
   - Open `http://localhost/Bharatguru/login.html`.
   - Log in using either the newly registered account or `ankesh@iips.edu.in` / `BharatGuru@2026`.
   - Show that the user's name is dynamically displayed in the top navbar on `index.html`.

4. **CSV Export Demonstration**:
   - Open `http://localhost/Bharatguru/admin_dashboard.php`.
   - Click the **"📥 Export to Excel / CSV"** button in the header.
   - Open the downloaded `.csv` file in Excel to demonstrate automated report generation.

---
*Created for IIPS DAVV Indore | Internet & Web Programming (IWP)*
