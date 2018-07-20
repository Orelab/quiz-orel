-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 20 Juillet 2018 à 14:11
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.2.7-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `quiz`
--

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `question`
--

INSERT INTO `question` (`id`, `text`) VALUES
(1, 'A quelle date a démarré la promo #2 ?'),
(2, 'De combien d\'apprenants est constituée la formation ?');

-- --------------------------------------------------------

--
-- Structure de la table `response`
--

CREATE TABLE `response` (
  `id` int(11) NOT NULL,
  `fk_question` int(11) NOT NULL,
  `text` text NOT NULL,
  `is_good` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `response`
--

INSERT INTO `response` (`id`, `fk_question`, `text`, `is_good`) VALUES
(1, 1, 'Le 30 mai 2018 !', 1),
(2, 1, 'Le 31 juin 2018 !', 0),
(3, 2, '5', 0),
(4, 2, '10', 0),
(5, 2, '15', 1),
(6, 2, '20', 0),
(7, 2, '25', 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `response`
--
ALTER TABLE `response`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `response`
--
ALTER TABLE `response`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
