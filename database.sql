-- ============================================================================
-- BharatGuru Database Schema
-- Project: BharatGuru India Tourism Web Portal
-- Coursework: Internet & Web Programming (IWP) | IIPS DAVV Indore
-- Author: Ankesh
-- ============================================================================

-- Create Database if not exists
CREATE DATABASE IF NOT EXISTS `bharatguru_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `bharatguru_db`;

-- ----------------------------------------------------------------------------
-- 1. Table structure for table `users` (Registration Details)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `fname` VARCHAR(100) NOT NULL,
  `lname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `phone` VARCHAR(20) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `gender` ENUM('male', 'female', 'other') NOT NULL,
  `dob` DATE NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `hobbies` TEXT DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
-- 2. Table structure for table `trip_inquiries` (Planner / Budget Estimator Leads)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `trip_inquiries` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_email` VARCHAR(150) DEFAULT NULL,
  `destination` VARCHAR(150) NOT NULL,
  `days` INT(11) NOT NULL,
  `travelers` INT(11) NOT NULL,
  `travel_style` VARCHAR(50) NOT NULL,
  `estimated_cost` VARCHAR(50) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
-- 3. Table structure for table `user_wishlist` (Saved Destinations)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_wishlist` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_email` VARCHAR(150) NOT NULL,
  `destination_id` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
-- Sample Initial Data for Demo / Viva Evaluation
-- ----------------------------------------------------------------------------
INSERT INTO `users` (`fname`, `lname`, `email`, `phone`, `password`, `gender`, `dob`, `city`, `hobbies`, `message`) VALUES
('Ankesh', 'Patel', 'ankesh@iips.edu.in', '+91 9876543210', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'male', '2004-05-15', 'Indore', 'heritage, food, photography', 'Lead developer of BharatGuru portal at IIPS DAVV.'),
('Priya', 'Sharma', 'priya.sharma@gmail.com', '+91 9812345678', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'female', '2003-08-20', 'Bhopal', 'trekking, spiritual', 'Excited to explore Varanasi and Kerala backwaters.'),
('Rahul', 'Verma', 'rahul.v@gmail.com', '+91 9755512345', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'male', '2002-12-10', 'Indore', 'food, coding', 'Love Sarafa night street food and heritage tours.');

INSERT INTO `trip_inquiries` (`user_email`, `destination`, `days`, `travelers`, `travel_style`, `estimated_cost`) VALUES
('ankesh@iips.edu.in', 'Indore & Ujjain Heritage', 3, 2, 'moderate', '₹21,000'),
('priya.sharma@gmail.com', 'Kerala Backwaters & Munnar', 5, 2, 'luxury', '₹80,000');
