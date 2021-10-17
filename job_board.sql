-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 17, 2021 at 11:34 PM
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
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `published` tinyint(1) NOT NULL DEFAULT 1,
  `companie_id` int(11) NOT NULL,
  `salary` bigint(20) DEFAULT NULL,
  `short_description` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `advertisements`
--

INSERT INTO `advertisements` (`id`, `title`, `description`, `date`, `published`, `companie_id`, `salary`, `short_description`) VALUES
(50, 'Développeur Angular', '# Cruentos frenisque mortalibus dederant\n\n## Suas missisque crus faciendis consedit et pariter\n\nLorem markdownum, vetus bello manifesta timentem orbem, maesta. Et metuens deos\norat veros oblivia: **pateat totaeque** telaque conspiceris facti manifesta\nsceptra tua tollens quam coniuge subitis! Tamen fidum, qua timet nescit tuis\nquod, data vires profusis dixerat protexi. Dixit cava quoque honore, te expers,\ngramen, miscet conponere Iphi. Actusque ea turis Echione, undis sorte, illos,\ntuo.\n\n> Opto deflent undaque densus Nesseis paratas tum librato has cladis redeunt\n> Dixit orbatura *formae at ut* erat inque. Illic unum effugit petenda subsidit\n> aequor crimen accessit, data deorum spernit bella! Illis in ferrea rogabat sua\n> domesticus ad tuas peritura alebat gentes. Movet *nescit si* sustulit incidit,\n> in malit ora deflent Thoactes mihi tactis. Quo margine sed femur, Iovis\n> resonantia vigor retinere timorque lectusque saetaeque et mors.\n\nPecudis scilicet terras, gravisque et illa [monstra\nceu](http://ligurumplacato.io/) possis illud in picto Bienoris valeant, veni.\n**Nec poposcerit** luna moles venis, licet **infestae**: virga **edita**, et\n*fecunda*, circuiere et!\n\n## Iactantem pallam fugit\n\nFugisse Clanis Iason frontem est quaedam aut suspiria partim iamque amori\nsubscribi furoris dixit terris Thebas traxere. Uni moverat cum est Cephalus\nscitabere quod, tu Pelasgi amens. In canebat, cum et fama coniuge coniuge\nattonitos belloque. Rubentem cladis [monitis\naras](http://www.haec.org/duxere-forma), ille anhelis [naturaeque\nutrumque](http://www.parentipaterni.org/post) esse fratrem, ab mento misereri\nboves. Letum e heros *reponunt heros*, vitatumque liquerat poteremur derectos,\nimagine sociamque.\n\nCaptas corripuere quem opacas venit limite [at](http://www.cetera.net/) est ad,\nAiax acutae; Ossaeae degravat fides. Dent denique fructum Aiacis inrita in dant,\nuna tanta pennatis dubitanti et.\n\nAustri opprobria Troum. Nymphae modo: perque sit, neque, imperio, luctuque quam\nmutato intrepidos, ranae studiisque? Quibus grave non flammas precatus murmur,\nest amorem, sudore. Echo exstant diem, in Cupido forsitan in animum proturbat\nleges vacuum sagacior.\n\nIam ait dignabitur ferum iactasque iugo quem pectore ille mater licet. Neque\ncadente et ut arida scelerata, praemia Delphice. Latet reparatque thalami\ningratumque. Miserarum inquit peperisse in, amorem favilla in ferendo haererem\naequora *numen*, deam ore *tamen a signa* nympharum. Orbem quondam attulit.\n\nIndigenae et laborem sparsos tollens, hac altior bella hinc Ionium, novatrix,\ninseruitque variasque, At nec cum. Quoque pro quoque **mihi** trabes e perdant\ncultis. Figuram sed edo, verba caudam grates inquit passi Phyllei et vivunt\nfacis placuisse. Python *praesagia optat miserorum* lacte: concurrere guttae.', '2021-10-17 00:00:00', 1, 13, 3000, 'Développement d\'une API pour la conception d\'un \"job board\"'),
(49, 'React.js Développeur', '# Welcome to the jungle\n## This is some Mardown\n\n\n# Cruentos frenisque mortalibus dederant\n\n## Suas missisque crus faciendis consedit et pariter\n\nLorem markdownum, vetus bello manifesta timentem orbem, maesta. Et metuens deos\norat veros oblivia: **pateat totaeque** telaque conspiceris facti manifesta\nsceptra tua tollens quam coniuge subitis! Tamen fidum, qua timet nescit tuis\nquod, data vires profusis dixerat protexi. Dixit cava quoque honore, te expers,\ngramen, miscet conponere Iphi. Actusque ea turis Echione, undis sorte, illos,\ntuo.\n\n> Opto deflent undaque densus Nesseis paratas tum librato has cladis redeunt\n> Dixit orbatura *formae at ut* erat inque. Illic unum effugit petenda subsidit\n> aequor crimen accessit, data deorum spernit bella! Illis in ferrea rogabat sua\n> domesticus ad tuas peritura alebat gentes. Movet *nescit si* sustulit incidit,\n> in malit ora deflent Thoactes mihi tactis. Quo margine sed femur, Iovis\n> resonantia vigor retinere timorque lectusque saetaeque et mors.\n\nPecudis scilicet terras, gravisque et illa [monstra\nceu](http://ligurumplacato.io/) possis illud in picto Bienoris valeant, veni.\n**Nec poposcerit** luna moles venis, licet **infestae**: virga **edita**, et\n*fecunda*, circuiere et!\n\n## Iactantem pallam fugit\n\nFugisse Clanis Iason frontem est quaedam aut suspiria partim iamque amori\nsubscribi furoris dixit terris Thebas traxere. Uni moverat cum est Cephalus\nscitabere quod, tu Pelasgi amens. In canebat, cum et fama coniuge coniuge\nattonitos belloque. Rubentem cladis [monitis\naras](http://www.haec.org/duxere-forma), ille anhelis [naturaeque\nutrumque](http://www.parentipaterni.org/post) esse fratrem, ab mento misereri\nboves. Letum e heros *reponunt heros*, vitatumque liquerat poteremur derectos,\nimagine sociamque.\n\nCaptas corripuere quem opacas venit limite [at](http://www.cetera.net/) est ad,\nAiax acutae; Ossaeae degravat fides. Dent denique fructum Aiacis inrita in dant,\nuna tanta pennatis dubitanti et.\n\nAustri opprobria Troum. Nymphae modo: perque sit, neque, imperio, luctuque quam\nmutato intrepidos, ranae studiisque? Quibus grave non flammas precatus murmur,\nest amorem, sudore. Echo exstant diem, in Cupido forsitan in animum proturbat\nleges vacuum sagacior.\n\nIam ait dignabitur ferum iactasque iugo quem pectore ille mater licet. Neque\ncadente et ut arida scelerata, praemia Delphice. Latet reparatque thalami\ningratumque. Miserarum inquit peperisse in, amorem favilla in ferendo haererem\naequora *numen*, deam ore *tamen a signa* nympharum. Orbem quondam attulit.\n\nIndigenae et laborem sparsos tollens, hac altior bella hinc Ionium, novatrix,\ninseruitque variasque, At nec cum. Quoque pro quoque **mihi** trabes e perdant\ncultis. Figuram sed edo, verba caudam grates inquit passi Phyllei et vivunt\nfacis placuisse. Python *praesagia optat miserorum* lacte: concurrere guttae.', '2021-10-17 00:00:00', 1, 13, 6000, 'Recherche d\'un développeur React.js Experimenté');

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
  `sector` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `postal_code` int(5) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `siret` varchar(20) DEFAULT NULL,
  `password_` text DEFAULT NULL,
  `number_employes` bigint(20) DEFAULT NULL,
  `website` text DEFAULT NULL,
  `phone` int(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_name` varchar(32) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `contact` varchar(15) NOT NULL DEFAULT 'none'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `sector`, `address`, `postal_code`, `city`, `siret`, `password_`, `number_employes`, `website`, `phone`, `email`, `contact_name`, `image`, `contact`) VALUES
(13, 'Epitech', 28, '23 Rue Mathieu Stilatti', 13003, 'Marseille', '54544545545455', '$2b$10$Hqpun1mQzEWAFVd/6EA8Z.DyNiB3qw4Vcim/asqE4NjXvk4twWE.K', 20, 'https://epitech.eu', 645740510, 'company@gmail.com', 'Vincent Colomb', NULL, 'none');

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `first_name` varchar(32) NOT NULL,
  `password_` text DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `postal_code` int(5) DEFAULT NULL,
  `city` varchar(32) DEFAULT NULL,
  `phone` int(20) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `cv` text DEFAULT 'SALUTMEC.PDF',
  `picture` text DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `role` varchar(8) NOT NULL DEFAULT 'user'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`id`, `name`, `first_name`, `password_`, `email`, `address`, `postal_code`, `city`, `phone`, `birth_date`, `cv`, `picture`, `gender`, `role`) VALUES
(38, 'Doe', 'John', '$2b$10$spfcAcfhY/zfte8RDn2aYeNdfSXljdPM4VuEfi.jVNhimsidm49Gi', 'user@gmail.com', NULL, NULL, NULL, NULL, NULL, 'SALUTMEC.PDF', NULL, NULL, 'user'),
(39, 'user', 'Admin', '$2b$10$L/1.p4pbGlEhkdjgDNOlr.ItTtexBdXNhuOjx.3D7WfvIgLHmOToS', 'admin@gmail.com', NULL, NULL, NULL, NULL, NULL, 'SALUTMEC.PDF', NULL, NULL, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `people_links`
--

CREATE TABLE `people_links` (
  `nom_reseau_social` varchar(32) NOT NULL,
  `url` text NOT NULL,
  `people_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sector`
--

CREATE TABLE `sector` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sector`
--

INSERT INTO `sector` (`id`, `name`) VALUES
(1, 'Agriculture, Forestry, Fishery'),
(2, 'Arts, entertainment and recreation	\r\n'),
(3, 'Agriculture, Forestry, Fishery	\r\n'),
(4, 'Hospitality and Tourism	\r\n'),
(5, 'Human health and social services activities	\r\n'),
(6, 'ICT service activities	\r\n'),
(7, 'Manufacturing of food, beverages and tobacco	\r\n'),
(8, 'Manufacturing of Textile, Apparel, Leather, Footwear and related products	\r\n'),
(9, 'Mining and heavy industry	\r\n'),
(10, 'Transportation and storage	\r\n'),
(11, 'Veterinary activities	\r\n'),
(12, 'Wholesale and retail trade, renting and leasing	\r\n'),
(13, 'Business administration	\r\n'),
(14, 'Chemical industry	\r\n'),
(15, 'Construction	\r\n'),
(16, 'Education'),
(17, 'Energy and water supply, sewerage and waste management	\r\n'),
(18, 'Finance, insurance and real estate	\r\n'),
(19, 'Manufacturing of consumer goods except food, beverages, tobacco, textile, apparel, leather	\r\n'),
(20, 'Manufacturing of electrical equipment, computer, electronic and optical products	\r\n'),
(21, 'Manufacturing of fabricated metal products, except machinery and equipment	\r\n'),
(22, 'Manufacturing of machinery and equipment, except electrical equipment	\r\n'),
(23, 'Manufacturing of transport equipment	\r\n'),
(24, 'Media'),
(25, 'Personal service -, administrative support service- and security and investigation activities	\r\n'),
(26, 'Public administration and defence and membership organisations	\r\n'),
(27, 'Scientific and technical activities	\r\n'),
(28, 'Wood processing, paper and printing	\r\n'),
(29, 'DRUG');

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
-- Indexes for table `sector`
--
ALTER TABLE `sector`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `applied`
--
ALTER TABLE `applied`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `sector`
--
ALTER TABLE `sector`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
