-- Schema used by the site. Matches the tables of the original PHP site
-- (db/w3tech-dump.sql), plus `js_interviewqa`, which the dump was missing.

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(255) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  -- bcrypt hash. Legacy plain-text values are re-hashed on the admin's next login.
  `admin_password` varchar(225) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `blog_data` (
  `blog_id` int(11) NOT NULL AUTO_INCREMENT,
  `blog_title` varchar(255) NOT NULL,
  `blog_content` text NOT NULL,
  `header_image` varchar(225) NOT NULL,
  `meta_title` varchar(225) NOT NULL,
  `meta_description` text NOT NULL,
  `tagname` varchar(255) NOT NULL,
  `feature_image` varchar(255) NOT NULL,
  `seo_url` varchar(255) NOT NULL,
  `created_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`blog_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `course_form` (
  `course_enq_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_enq_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact_no` varchar(10) NOT NULL,
  `whatsapp_no` varchar(10) NOT NULL,
  `course` varchar(150) NOT NULL,
  `pref_time` time NOT NULL,
  `created_dateTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`course_enq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `enquiry_form` (
  `enq_id` int(11) NOT NULL AUTO_INCREMENT,
  `enq_name` varchar(100) NOT NULL,
  `enq_email` varchar(100) NOT NULL,
  `enq_contact_no` varchar(20) NOT NULL,
  `enq_whatsapp_no` varchar(20) NOT NULL,
  `pref_time` time NOT NULL,
  `message_note` varchar(255) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`enq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `internship_form` (
  `intern_enq_id` int(11) NOT NULL AUTO_INCREMENT,
  `intern_name` varchar(100) NOT NULL,
  `intern_email` varchar(100) NOT NULL,
  `intern_contact_no` varchar(20) NOT NULL,
  `intern_whatsapp_no` varchar(20) NOT NULL,
  `college_name` varchar(150) NOT NULL,
  `pref_time` time NOT NULL,
  `message_note` varchar(255) NOT NULL,
  `created_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`intern_enq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `service_form` (
  `service_enq_id` int(11) NOT NULL AUTO_INCREMENT,
  `ser_name` varchar(100) NOT NULL,
  `ser_email` varchar(100) NOT NULL,
  `ser_contact_no` varchar(20) NOT NULL,
  `ser_whatsapp_no` varchar(20) NOT NULL,
  `company_name` varchar(150) NOT NULL,
  `pref_time` time NOT NULL,
  `message_note` varchar(255) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`service_enq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `js_interviewqa` (
  `js_id` int(11) NOT NULL AUTO_INCREMENT,
  `js_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  `whatsapp_no` varchar(20) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`js_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
