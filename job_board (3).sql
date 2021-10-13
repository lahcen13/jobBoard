-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 06, 2021 at 04:00 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
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
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `published` tinyint(1) NOT NULL,
  `companie_id` int(11) NOT NULL,
  `salary` bigint(20) DEFAULT NULL,
  `activity` varchar(255) NOT NULL
) ENGINE = MyISAM DEFAULT CHARSET = utf8;
--
-- Dumping data for table `advertisements`
--
INSERT INTO `advertisements` (
    `id`,
    `title`,
    `description`,
    `date`,
    `published`,
    `companie_id`,
    `salary`,
    `activity`
  )
VALUES (
    1,
    'Python developper',
    ' # Super ritu angustum\n\n  ## Unum nata\n  \n  Lorem markdownum pectora ferrum addidit vultumque et iamque, prolem florem\n  *miratur thymo*: dominis. Babylonia et Sparte habuisse factaque fronti Paridis,\n  pennis temptare aureus dicentem mentem, euntem est iamque genitor. Cruoris rure\n  deum. Herbis relicto, reflectitur sociasque anteit ultima, caelum hos.\n  \n  Mirabile pariter domitamque novenis profectu est vires mutata miserrima quemque.\n  *Aglauros* ibi exierat moriens, declive pomi Fames, viva **es**, et velit! Sub\n  Venus tormento, gente tamen tergo, cui rebus et sibi non. Putes locum minatur\n  aliquisque haec attollens refers non, quam ecce!\n  \n  > **Quo est inmaduit** victa, monstraverat rami ad pede paruerit undas iubet\n  > praeteriit captus. Servat alta mortali iuvenem morti; verum aut non dimittit;\n  > sui culpa tulit, diu gladii **videat** si Hyllus. Sunt Pentheus dumque necem?\n  \n  ## Quo umquam\n  \n  Hinnitibus occurrunt Andros, adorat amplexa dentibus censu. Certa loci ubi:\n  dicta Proca anilibus. Sub moveri seque caelesti causa alioque hasta dedit,\n  discedere quove, blanditiis terras postera.\n  \n  1. At pars publica\n  2. Missus consanguineas tympana pendentia certe\n  3. Illa iussis stirpe gelidumque duxit\n  4. Nescioquam morte\n  5. Nexis creatus',
    '2021-09-27 19:08:55',
    1,
    1,
    0,
    ''
  ),
  (
    2,
    'FullStack developper',
    ' # Super ritu angustum\n\n  ## Unum nata\n  \n  Lorem markdownum pectora ferrum addidit vultumque et iamque, prolem florem\n  *miratur thymo*: dominis. Babylonia et Sparte habuisse factaque fronti Paridis,\n  pennis temptare aureus dicentem mentem, euntem est iamque genitor. Cruoris rure\n  deum. Herbis relicto, reflectitur sociasque anteit ultima, caelum hos.\n  \n  Mirabile pariter domitamque novenis profectu est vires mutata miserrima quemque.\n  *Aglauros* ibi exierat moriens, declive pomi Fames, viva **es**, et velit! Sub\n  Venus tormento, gente tamen tergo, cui rebus et sibi non. Putes locum minatur\n  aliquisque haec attollens refers non, quam ecce!\n  \n  > **Quo est inmaduit** victa, monstraverat rami ad pede paruerit undas iubet\n  > praeteriit captus. Servat alta mortali iuvenem morti; verum aut non dimittit;\n  > sui culpa tulit, diu gladii **videat** si Hyllus. Sunt Pentheus dumque necem?\n  \n  ## Quo umquam\n  \n  Hinnitibus occurrunt Andros, adorat amplexa dentibus censu. Certa loci ubi:\n  dicta Proca anilibus. Sub moveri seque caelesti causa alioque hasta dedit,\n  discedere quove, blanditiis terras postera.\n  \n  1. At pars publica\n  2. Missus consanguineas tympana pendentia certe\n  3. Illa iussis stirpe gelidumque duxit\n  4. Nescioquam morte\n  5. Nexis creatus',
    '2021-09-28 11:28:39',
    1,
    1,
    0,
    ''
  ),
  (
    3,
    'Web designer',
    ' # Super ritu angustum\n\n  ## Unum nata\n  \n  Lorem markdownum pectora ferrum addidit vultumque et iamque, prolem florem\n  *miratur thymo*: dominis. Babylonia et Sparte habuisse factaque fronti Paridis,\n  pennis temptare aureus dicentem mentem, euntem est iamque genitor. Cruoris rure\n  deum. Herbis relicto, reflectitur sociasque anteit ultima, caelum hos.\n  \n  Mirabile pariter domitamque novenis profectu est vires mutata miserrima quemque.\n  *Aglauros* ibi exierat moriens, declive pomi Fames, viva **es**, et velit! Sub\n  Venus tormento, gente tamen tergo, cui rebus et sibi non. Putes locum minatur\n  aliquisque haec attollens refers non, quam ecce!\n  \n  > **Quo est inmaduit** victa, monstraverat rami ad pede paruerit undas iubet\n  > praeteriit captus. Servat alta mortali iuvenem morti; verum aut non dimittit;\n  > sui culpa tulit, diu gladii **videat** si Hyllus. Sunt Pentheus dumque necem?\n  \n  ## Quo umquam\n  \n  Hinnitibus occurrunt Andros, adorat amplexa dentibus censu. Certa loci ubi:\n  dicta Proca anilibus. Sub moveri seque caelesti causa alioque hasta dedit,\n  discedere quove, blanditiis terras postera.\n  \n  1. At pars publica\n  2. Missus consanguineas tympana pendentia certe\n  3. Illa iussis stirpe gelidumque duxit\n  4. Nescioquam morte\n  5. Nexis creatus',
    '2021-09-28 11:28:39',
    0,
    1,
    0,
    ''
  ),
  (
    4,
    'Python developper',
    ' # Super ritu angustum\n\n  ## Unum nata\n  \n  Lorem markdownum pectora ferrum addidit vultumque et iamque, prolem florem\n  *miratur thymo*: dominis. Babylonia et Sparte habuisse factaque fronti Paridis,\n  pennis temptare aureus dicentem mentem, euntem est iamque genitor. Cruoris rure\n  deum. Herbis relicto, reflectitur sociasque anteit ultima, caelum hos.\n  \n  Mirabile pariter domitamque novenis profectu est vires mutata miserrima quemque.\n  *Aglauros* ibi exierat moriens, declive pomi Fames, viva **es**, et velit! Sub\n  Venus tormento, gente tamen tergo, cui rebus et sibi non. Putes locum minatur\n  aliquisque haec attollens refers non, quam ecce!\n  \n  > **Quo est inmaduit** victa, monstraverat rami ad pede paruerit undas iubet\n  > praeteriit captus. Servat alta mortali iuvenem morti; verum aut non dimittit;\n  > sui culpa tulit, diu gladii **videat** si Hyllus. Sunt Pentheus dumque necem?\n  \n  ## Quo umquam\n  \n  Hinnitibus occurrunt Andros, adorat amplexa dentibus censu. Certa loci ubi:\n  dicta Proca anilibus. Sub moveri seque caelesti causa alioque hasta dedit,\n  discedere quove, blanditiis terras postera.\n  \n  1. At pars publica\n  2. Missus consanguineas tympana pendentia certe\n  3. Illa iussis stirpe gelidumque duxit\n  4. Nescioquam morte\n  5. Nexis creatus',
    '2021-09-28 11:41:45',
    1,
    1,
    0,
    ''
  ),
  (
    5,
    'Web designer',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat malesuada justo, at tempus metus dapibus eleifend. Maecenas eleifend dignissim massa. Mauris convallis feugiat diam, nec mollis augue varius vitae. Suspendisse gravida tellus leo, eu maximus ex aliquet quis. Vestibulum accumsan, dui non bibendum condimentum, diam ligula convallis metus, quis imperdiet mauris dui non orci. Donec quis scelerisque mi, nec suscipit libero.',
    '2021-09-28 11:41:45',
    1,
    1,
    0,
    ''
  );
-- --------------------------------------------------------
--
-- Table structure for table `applied`
--
CREATE TABLE `applied` (
  `id` int(11) NOT NULL,
  `motivation_people` text NOT NULL,
  `advertisement_id` int(11) DEFAULT NULL,
  `people_id` int(11) DEFAULT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL
) ENGINE = MyISAM DEFAULT CHARSET = utf8;
--
-- Dumping data for table `applied`
--
INSERT INTO `applied` (
    `id`,
    `motivation_people`,
    `advertisement_id`,
    `people_id`,
    `first_name`,
    `last_name`
  )
VALUES (
    5,
    'Gdslmksmlfmsdfmlsdmfkmskfls',
    4,
    23,
    'xdcvsdqssqd',
    'dsvdsvdsvdsvd'
  ),
  (
    2,
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    4,
    23,
    'xdcvsdqssqd',
    'dsvdsvdsvdsvd'
  ),
  (
    3,
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    4,
    23,
    'xdcvsdqssqd',
    'dsvdsvdsvdsvd'
  ),
  (
    4,
    'sdoipek,mfekùjmgfeijzeilezijo',
    4,
    23,
    'dsjfkksdkfùfze',
    'fslmfksdfkmlfd'
  ),
  (
    6,
    'sdf,msdfmlsdlmsdklmfsklsefnlef,xkjdn;nkjhyjkjshkjeszhjghrbgfgfg',
    4,
    24,
    'dsjfkksdkfùfze',
    'fslmfksdfkmlfd'
  ),
  (
    7,
    '1111111111111111111111111111111',
    1,
    24,
    'SALUT',
    'AHAHAHAAH'
  );
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
  `image` text DEFAULT NULL,
  `contact` varchar(15) NOT NULL DEFAULT 'none'
) ENGINE = MyISAM DEFAULT CHARSET = utf8;
--
-- Dumping data for table `companies`
--
INSERT INTO `companies` (
    `id`,
    `name`,
    `activities`,
    `address`,
    `postal_code`,
    `city`,
    `siret`,
    `password_`,
    `number_employes`,
    `website`,
    `phone`,
    `email`,
    `contact_name`,
    `image`,
    `contact`
  )
VALUES (
    1,
    'epitech',
    'school',
    'bd paris ',
    13003,
    'Marseille',
    '12312312322',
    'epitech',
    12,
    'https://epitech.eu',
    766564783,
    'epitech@epitech.eu',
    'vicent',
    'epitech.png',
    'M. Jean Ive'
  );
-- --------------------------------------------------------
--
-- Table structure for table `people`
--
CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `first_name` varchar(32) NOT NULL,
  `password_` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `postal_code` int(5) DEFAULT NULL,
  `city` varchar(32) DEFAULT NULL,
  `phone` int(20) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `cv` text DEFAULT NULL,
  `picture` text DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `role` varchar(5) NOT NULL DEFAULT 'user'
) ENGINE = MyISAM DEFAULT CHARSET = utf8;
--
-- Dumping data for table `people`
--
INSERT INTO `people` (
    `id`,
    `name`,
    `first_name`,
    `password_`,
    `email`,
    `address`,
    `postal_code`,
    `city`,
    `phone`,
    `birth_date`,
    `cv`,
    `picture`,
    `gender`,
    `role`
  )
VALUES (
    24,
    'bourlon',
    'lyann',
    '$2b$10$QBryUhLMDpWqt.uzq2Zoku/EDk6y/BEpKxfVyM68.Sq5vFUgjqrQy',
    'ssdfd@eed.eu',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    'user'
  ),
  (
    20,
    'admin',
    'user',
    '$2b$10$opykjDBXi6CUwrYuzGTQku9UMo2rmvwG02fVgwR33ZA7WqadATGH6',
    'lyann@gmail.com',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    'admin'
  ),
  (
    23,
    'bourlon',
    'lyann',
    '$2b$10$u/Gasz9f.KWDnBf15uQ.YOliB9x5WHmZE/Fgn8ExMRcNN3MgNimD.',
    'lyann.bourlon@epitech.eu',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    'user'
  ),
  (
    22,
    'bourlon',
    'lyann',
    '$2b$10$7YQxpU3THRSKl2KA6Pyj1O4NikyIaJ0wTGsZx18WW.wBLHeYSaD2y',
    'test@blabl.ru',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    'user'
  );
-- --------------------------------------------------------
--
-- Table structure for table `people_links`
--
CREATE TABLE `people_links` (
  `nom_reseau_social` varchar(32) NOT NULL,
  `url` text NOT NULL,
  `people_id` int(11) NOT NULL
) ENGINE = MyISAM DEFAULT CHARSET = utf8;
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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 11;
--
-- AUTO_INCREMENT for table `applied`
--
ALTER TABLE `applied`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 8;
--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 2;
--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 25;
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;