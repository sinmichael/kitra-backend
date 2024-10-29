-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: kitra
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1730122613343,'InsertInitialTreasuresData1730122613343'),(2,1730123786092,'InsertInitialMoneyValuesData1730123786092'),(3,1730194996020,'InsertInitialUsersData1730194996020');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `money_values`
--

DROP TABLE IF EXISTS `money_values`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `money_values` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `treasure_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_9d324c9102885a309079979da15` (`treasure_id`),
  CONSTRAINT `FK_9d324c9102885a309079979da15` FOREIGN KEY (`treasure_id`) REFERENCES `treasures` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `money_values`
--

LOCK TABLES `money_values` WRITE;
/*!40000 ALTER TABLE `money_values` DISABLE KEYS */;
INSERT INTO `money_values` VALUES (1,15,100),(2,10,101),(3,15,102),(4,15,103),(5,10,104),(6,15,105),(7,15,106),(8,10,107),(9,15,108),(10,15,109),(11,10,110),(12,15,111),(13,15,112),(14,10,113),(15,15,114),(16,15,115),(17,10,116),(18,15,117),(19,20,100),(20,25,101),(21,20,102),(22,25,103),(23,30,107),(24,30,108),(25,30,109);
/*!40000 ALTER TABLE `money_values` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `treasures`
--

DROP TABLE IF EXISTS `treasures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `treasures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `latitude` double(10,8) NOT NULL,
  `longitude` double(11,8) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `treasures`
--

LOCK TABLES `treasures` WRITE;
/*!40000 ALTER TABLE `treasures` DISABLE KEYS */;
INSERT INTO `treasures` VALUES (100,14.54376481,121.01991170,'T1'),(101,14.55320766,121.05577450,'T2'),(102,14.54464357,121.02036560,'T3'),(103,14.58726159,120.97950480,'T4'),(104,14.57320327,121.02309040,'T5'),(105,14.52311313,121.01945730,'T6'),(106,14.60242292,121.01151340,'T7'),(107,14.60857463,121.01855140,'T8'),(108,14.49111434,121.04374820,'T9'),(109,14.54455953,121.10608830,'T10'),(110,14.58798141,121.05820800,'T11'),(111,14.54886493,121.03363930,'T12'),(112,14.53715059,120.99043020,'T13'),(113,14.52579666,121.02086880,'T14'),(114,14.51709988,120.98100210,'T15'),(115,14.50200687,120.99161810,'T16'),(116,14.52112441,121.04277140,'T17'),(117,14.47720766,120.98679270,'T18');
/*!40000 ALTER TABLE `treasures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3006 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3000,'U1',21,'$2a$10$iQ8Mh3kt5csy.oKropZAHOuEEyPXEvykF.k1VvrvEW7.Wdh.LMOOe','u1@kitra.abc'),(3001,'U2',51,'$2a$10$aM34rS6u11.4axHF6sBfo.L24btvqlfM9gzKqUzOibQmbxUzfuavm','u2@kitra.abc'),(3002,'U3',31,'$2a$10$o23yqKl4rVLDX06SVPwVB.PX4Xk/EsYOgzh1UnK23s9IfKO6DCqdO','u3@kitra.abc'),(3003,'U4',18,'$2a$10$a9Z2SucR1ZpfT4/FBoN1PO3PBV2GIi4l1ujeCQm1EFEbi2zU2vVD6','u4@kitra.abc'),(3004,'U5',21,'$2a$10$mdYPOtKOEFq.frbNNSL4Qe3Al2yreITCbbH4GTS.ikGI16gqB/Y3u','u5@kitra.abc'),(3005,'U6',35,'$2a$10$dnbkyntWnlTSEg2eKIcWjOcUc2w.rEoMDBcviurx5sP82Te00.03m','u6@kitra.abc');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'kitra'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-29 19:21:52
