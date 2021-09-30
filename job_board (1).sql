-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 30 sep. 2021 à 12:03
-- Version du serveur :  5.7.31
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `job_board`
--

-- --------------------------------------------------------

--
-- Structure de la table `advertisements`
--

DROP TABLE IF EXISTS `advertisements`;
CREATE TABLE IF NOT EXISTS `advertisements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `published` tinyint(1) NOT NULL,
  `companie_id` int(11) NOT NULL,
  `salary` bigint(20) DEFAULT NULL,
  `activity` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `companie_id` (`companie_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `advertisements`
--

INSERT INTO `advertisements` (`id`, `title`, `description`, `date`, `published`, `companie_id`, `salary`, `activity`) VALUES
(1, 'Python developper', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis imperdiet orci. Nunc ut lacus hendrerit lorem dapibus tincidunt et quis ante. Donec vitae rhoncus erat, et vulputate nunc.', '2021-09-27 19:08:55', 1, 14, 0, ''),
(2, 'FullStack developper', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat malesuada justo, at tempus metus dapibus eleifend. Maecenas eleifend dignissim massa. Mauris convallis feugiat diam, nec mollis augue varius vitae. Suspendisse gravida tellus leo, eu maximus ex aliquet quis. Vestibulum accumsan, dui non bibendum condimentum, diam ligula convallis metus, quis imperdiet mauris dui non orci. Donec quis scelerisque mi, nec suscipit libero.', '2021-09-28 11:28:39', 1, 14, 0, ''),
(3, 'Web designer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat malesuada justo, at tempus metus dapibus eleifend. Maecenas eleifend dignissim massa. Mauris convallis feugiat diam, nec mollis augue varius vitae. Suspendisse gravida tellus leo, eu maximus ex aliquet quis. Vestibulum accumsan, dui non bibendum condimentum, diam ligula convallis metus, quis imperdiet mauris dui non orci. Donec quis scelerisque mi, nec suscipit libero.', '2021-09-28 11:28:39', 0, 0, 0, ''),
(4, 'Python developper', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat malesuada justo, at tempus metus dapibus eleifend. Maecenas eleifend dignissim massa. Mauris convallis feugiat diam, nec mollis augue varius vitae. Suspendisse gravida tellus leo, eu maximus ex aliquet quis. Vestibulum accumsan, dui non bibendum condimentum, diam ligula convallis metus, quis imperdiet mauris dui non orci. Donec quis scelerisque mi, nec suscipit libero.', '2021-09-28 11:41:45', 1, 14, 0, ''),
(5, 'Web designer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat malesuada justo, at tempus metus dapibus eleifend. Maecenas eleifend dignissim massa. Mauris convallis feugiat diam, nec mollis augue varius vitae. Suspendisse gravida tellus leo, eu maximus ex aliquet quis. Vestibulum accumsan, dui non bibendum condimentum, diam ligula convallis metus, quis imperdiet mauris dui non orci. Donec quis scelerisque mi, nec suscipit libero.', '2021-09-28 11:41:45', 1, 141, 0, ''),
(6, 'hello', 'mdrrrrr', '2021-09-29 11:50:55', 0, 3, 0, ''),
(7, 'student', 'job for noobs', '2021-09-30 11:05:48', 1, 1, 1000, 'agriculture'),
(8, 'hello', 'saluuuuuuuuuuuut', '2021-09-30 11:08:30', 1, 1, 200, 'economie'),
(9, 'titre annonce', 'recherche d\'un chomeur', '2021-09-30 11:20:24', 1, 1, 3000, 'agriculture'),
(10, 'titre annonce', 'recherche d\'un chomeur', '2021-09-30 11:21:30', 1, 1, 1000, 'envrionnement');

-- --------------------------------------------------------

--
-- Structure de la table `applied`
--

DROP TABLE IF EXISTS `applied`;
CREATE TABLE IF NOT EXISTS `applied` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `motivation_people` text NOT NULL,
  `advertisement_id` int(11) DEFAULT NULL,
  `people_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `advertisement_id` (`advertisement_id`),
  KEY `people_id` (`people_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `companies`
--

DROP TABLE IF EXISTS `companies`;
CREATE TABLE IF NOT EXISTS `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `activities` text,
  `address` varchar(255) DEFAULT NULL,
  `postal_code` int(5) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `siret` varchar(20) DEFAULT NULL,
  `password_` varchar(32) DEFAULT NULL,
  `number_employes` bigint(20) DEFAULT NULL,
  `website` text,
  `phone` int(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_name` varchar(32) DEFAULT NULL,
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `companies`
--

INSERT INTO `companies` (`id`, `name`, `activities`, `address`, `postal_code`, `city`, `siret`, `password_`, `number_employes`, `website`, `phone`, `email`, `contact_name`, `image`) VALUES
(1, 'epitech', 'school', 'bd paris ', 13003, 'Marseille', '12312312322', 'epitech', 12, 'epitech.com', 766564783, 'epitech@epitech.eu', 'vicent', 'epitech.png');

-- --------------------------------------------------------

--
-- Structure de la table `people`
--

DROP TABLE IF EXISTS `people`;
CREATE TABLE IF NOT EXISTS `people` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `first_name` varchar(32) NOT NULL,
  `password_` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `postal_code` int(5) DEFAULT NULL,
  `city` varchar(32) DEFAULT NULL,
  `phone` int(20) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `cv` text,
  `picture` text,
  `gender` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `people`
--

INSERT INTO `people` (`id`, `name`, `first_name`, `password_`, `email`, `address`, `postal_code`, `city`, `phone`, `birth_date`, `cv`, `picture`, `gender`) VALUES
(1, 'fdgfdg', 'dfgfdg', 'dfgdfgfd', 'fdgdfgfd', 'fdgdfgfd', 84222, 'fdgdfgfd', 5545454, '9999-12-31', 'fdgdfgfd', 'fdgdfgfd', 'fdgdfgfd'),
(2, 'Bourlon', 'Lyann', '123456', 'bourlon.lyann84@gmail.com', '', 13003, 'Marseille', 645740510, '1999-02-26', NULL, NULL, NULL),
(3, 'lebo', 'jean', 'mdr123bc', 'mdr@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'undefined', 'undefined', 'undefined', 'undefined', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'undefined', 'undefined', 'undefined', 'hello', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'undefined', 'undefined', 'undefined', 'hello', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'undefined', 'undefined', 'undefined', 'hello', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'hello', 'mdr', 'abcderferffzsvdc', 'meedlaah@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'hello', 'mdr', '$2b$10$VNYMfDh1md8AOVXw2oTXkOJT3V95fzBTOrpo5FcbvsEq.N3qFdnsa', 'meedlaah@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'hello', 'mdr', '$2b$10$gbEuN.TOiyE/.4Q/OWNARew1p/a9i95pxroJTwqji9pU8y95/WYpq', 'meedlaah@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'hello', 'mdr', '$2b$10$2uwEoI9iyjCH8DvWY9QnTe8VWNX07FkBw8R5YUkDPcPyXvK2c6eOq', 'meedlaah@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'last', 'first', '$2b$10$/KmYLK2sx6qHXfXHo5sESuMBpgvEO5AeVQyXn1jxQkymRZNmS7t9i', 'haha@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'lahcen', 'med', '$2b$10$r0mdCUtPvbQ5TVA49lYZU.IfYxocUlV9fHZ.FtNyE/1JT3HqXn9.C', 'haha@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 'lahcen', 'med', '$2b$10$jl.EZmc1Z.TR3O4QaUFmrOk4YihX/1P1qvCYwe59S6At0/.KUij8q', 'haha@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 'azerty', 'azerty', '$2b$10$hEFtM4LN0uXOFwhFMYPFP.8TkzJMs3tDLxEzl8tfk3pVuZtiH7tm6', 'hah@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `people_links`
--

DROP TABLE IF EXISTS `people_links`;
CREATE TABLE IF NOT EXISTS `people_links` (
  `nom_reseau_social` varchar(32) NOT NULL,
  `url` text NOT NULL,
  `people_id` int(11) NOT NULL,
  PRIMARY KEY (`nom_reseau_social`),
  KEY `people_id` (`people_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
