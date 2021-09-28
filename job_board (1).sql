-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 28, 2021 at 11:44 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job_board`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisements`
--

CREATE TABLE `advertisements` (
  `id` int(11) NOT NULL,
  `title` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `date` datetime NOT NULL,
  `published` tinyint(1) NOT NULL,
  `companie_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `advertisements`
--

INSERT INTO `advertisements` (`id`, `title`, `description`, `date`, `published`, `companie_id`) VALUES
(1, 'Python developper', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis imperdiet orci. Nunc ut lacus hendrerit lorem dapibus tincidunt et quis ante. Donec vitae rhoncus erat, et vulputate nunc.', '2021-09-27 19:08:55', 1, 14),
(2, 'FullStack developper', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat malesuada justo, at tempus metus dapibus eleifend. Maecenas eleifend dignissim massa. Mauris convallis feugiat diam, nec mollis augue varius vitae. Suspendisse gravida tellus leo, eu maximus ex aliquet quis. Vestibulum accumsan, dui non bibendum condimentum, diam ligula convallis metus, quis imperdiet mauris dui non orci. Donec quis scelerisque mi, nec suscipit libero.', '2021-09-28 11:28:39', 1, 14),
(3, 'Web designer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat malesuada justo, at tempus metus dapibus eleifend. Maecenas eleifend dignissim massa. Mauris convallis feugiat diam, nec mollis augue varius vitae. Suspendisse gravida tellus leo, eu maximus ex aliquet quis. Vestibulum accumsan, dui non bibendum condimentum, diam ligula convallis metus, quis imperdiet mauris dui non orci. Donec quis scelerisque mi, nec suscipit libero.', '2021-09-28 11:28:39', 0, 0),
(4, 'Python developper', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat malesuada justo, at tempus metus dapibus eleifend. Maecenas eleifend dignissim massa. Mauris convallis feugiat diam, nec mollis augue varius vitae. Suspendisse gravida tellus leo, eu maximus ex aliquet quis. Vestibulum accumsan, dui non bibendum condimentum, diam ligula convallis metus, quis imperdiet mauris dui non orci. Donec quis scelerisque mi, nec suscipit libero.', '2021-09-28 11:41:45', 1, 14),
(5, 'Web designer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat malesuada justo, at tempus metus dapibus eleifend. Maecenas eleifend dignissim massa. Mauris convallis feugiat diam, nec mollis augue varius vitae. Suspendisse gravida tellus leo, eu maximus ex aliquet quis. Vestibulum accumsan, dui non bibendum condimentum, diam ligula convallis metus, quis imperdiet mauris dui non orci. Donec quis scelerisque mi, nec suscipit libero.', '2021-09-28 11:41:45', 1, 141);

-- --------------------------------------------------------

--
-- Table structure for table `applied`
--

CREATE TABLE `applied` (
  `id` int(11) NOT NULL,
  `motivation_people` text NOT NULL,
  `advertisement_id` int(11) DEFAULT NULL,
  `people_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `activities` text DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `postal_code` int(5) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `siret` varchar(20) DEFAULT NULL,
  `password_` varchar(32) DEFAULT NULL,
  `number_employes` bigint(20) DEFAULT NULL,
  `website` text DEFAULT NULL,
  `phone` int(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_name` varchar(32) DEFAULT NULL,
  `image` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `first_name` varchar(32) NOT NULL,
  `password_` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `postal_code` int(5) NOT NULL,
  `city` varchar(32) NOT NULL,
  `phone` int(20) NOT NULL,
  `birth_date` date NOT NULL,
  `cv` text DEFAULT NULL,
  `picture` text DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`id`, `name`, `first_name`, `password_`, `email`, `address`, `postal_code`, `city`, `phone`, `birth_date`, `cv`, `picture`, `gender`) VALUES
(1, 'fdgfdg', 'dfgfdg', 'dfgdfgfd', 'fdgdfgfd', 'fdgdfgfd', 84222, 'fdgdfgfd', 5545454, '9999-12-31', 'fdgdfgfd', 'fdgdfgfd', 'fdgdfgfd');

-- --------------------------------------------------------

--
-- Table structure for table `people_links`
--

CREATE TABLE `people_links` (
  `nom_reseau_social` varchar(32) NOT NULL,
  `url` text NOT NULL,
  `people_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisements`
--
ALTER TABLE `advertisements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companie_id` (`companie_id`);

--
-- Indexes for table `applied`
--
ALTER TABLE `applied`
  ADD PRIMARY KEY (`id`),
  ADD KEY `advertisement_id` (`advertisement_id`),
  ADD KEY `people_id` (`people_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `people_links`
--
ALTER TABLE `people_links`
  ADD PRIMARY KEY (`nom_reseau_social`),
  ADD KEY `people_id` (`people_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `applied`
--
ALTER TABLE `applied`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
