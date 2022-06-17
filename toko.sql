-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: toko
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admins` (
  `id_admin` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nama_admin` varchar(255) DEFAULT NULL,
  `no_telp` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'admin','admin123','Charles Fernandez New','085123456788','Jln Suwandak No 45 Blok A','2022-05-21 13:37:25','2022-05-25 01:53:48'),(2,'admin2','admin2123',NULL,'081111222333','Jln Raya Jogoyudan','2022-05-21 13:38:49','2022-05-21 13:38:49'),(3,'admin3','admin3123','Adam Putra','085123456788','Jln Suwandak No 45 Blok A','2022-05-21 13:40:23','2022-05-21 13:40:23');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kembalians`
--

DROP TABLE IF EXISTS `kembalians`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kembalians` (
  `id_kembalian` int(11) NOT NULL AUTO_INCREMENT,
  `id_barang` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `bukti_kembalian` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_kembalian`),
  KEY `id_barang` (`id_barang`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `kembalians_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `produks` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `kembalians_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kembalians`
--

LOCK TABLES `kembalians` WRITE;
/*!40000 ALTER TABLE `kembalians` DISABLE KEYS */;
INSERT INTO `kembalians` VALUES (1,3,1,'1654310512839.jpg','1654756186039.jpg','2022-06-04 02:42:22','2022-06-09 06:29:46'),(2,1,1,'1654310520671.jpg','1654791352158.jpg','2022-06-04 02:42:26','2022-06-09 16:15:52'),(3,3,1,'1654784865577.jpg','1654791365783.jpg','2022-06-09 15:23:57','2022-06-09 16:16:05'),(4,1,1,'1654788221910.jpg',NULL,'2022-06-09 15:24:16','2022-06-09 15:24:16'),(5,1,3,'1654788296715.jpg',NULL,'2022-06-09 15:25:13','2022-06-09 15:25:13');
/*!40000 ALTER TABLE `kembalians` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `id_barang` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_order`),
  KEY `id_barang` (`id_barang`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `produks` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (20,3,1,4,'1654788215406.jpg','2022-06-09 15:23:35','2022-06-09 15:23:35'),(22,3,3,3,'1654788291131.jpg','2022-06-09 15:24:51','2022-06-09 15:24:51');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pemasukans`
--

DROP TABLE IF EXISTS `pemasukans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pemasukans` (
  `id_pemasukan` int(11) NOT NULL AUTO_INCREMENT,
  `nama_pembeli` varchar(255) DEFAULT NULL,
  `no_telp` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `nama_barang` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pemasukan`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pemasukans`
--

LOCK TABLES `pemasukans` WRITE;
/*!40000 ALTER TABLE `pemasukans` DISABLE KEYS */;
INSERT INTO `pemasukans` VALUES (1,'Pembeli Offline','000000000000','Offline','Keranjang Sayur Mini    ',40000,4,'1654783432400.jpg','2022-06-09 13:25:15','2022-06-09 14:03:52'),(2,'Pembeli Offline','000000000000','Offline','Keranjang Buah',45000,6,'1654783619888.jpg','2022-06-09 14:06:59','2022-06-09 14:06:59'),(3,'Pembeli Offline','000000000000','Offline','Keranjang Sayur Mini    ',40000,7,'1654783640776.jpg','2022-06-09 14:07:08','2022-06-09 14:07:20');
/*!40000 ALTER TABLE `pemasukans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pengeluarans`
--

DROP TABLE IF EXISTS `pengeluarans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pengeluarans` (
  `id_pengeluaran` int(11) NOT NULL AUTO_INCREMENT,
  `nama_penjual` varchar(255) DEFAULT NULL,
  `no_telp` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `nama_barang` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pengeluaran`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pengeluarans`
--

LOCK TABLES `pengeluarans` WRITE;
/*!40000 ALTER TABLE `pengeluarans` DISABLE KEYS */;
INSERT INTO `pengeluarans` VALUES (1,'Toko Sambi Joyo','086123456789','Jalan Supratman No 55 Blok AA RT 005 RW 003','Kulit Rambak',600000,4,'1653133932159.jpg','2022-06-10 15:51:44','2022-06-10 15:51:44'),(2,'Toko Create Lagi Edit','085123456788','Jln Suwandak No 45 Blok A','Plastik',5,45,'1654872313936.jpg','2022-06-10 14:19:17','2022-06-10 14:45:13'),(3,NULL,'081111222333','Jln Jaksel no 50','Plastik',4000,12,'1654870952351.jpg','2022-06-10 14:22:32','2022-06-10 14:22:32'),(4,'Toko Create Penjual','085123456788','Jln Jaksel no 52','Plastik',4000,4,'1654871013848.jpg','2022-06-10 14:23:33','2022-06-10 14:23:33');
/*!40000 ALTER TABLE `pengeluarans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produks`
--

DROP TABLE IF EXISTS `produks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produks` (
  `id_barang` int(11) NOT NULL AUTO_INCREMENT,
  `nama_barang` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_barang`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produks`
--

LOCK TABLES `produks` WRITE;
/*!40000 ALTER TABLE `produks` DISABLE KEYS */;
INSERT INTO `produks` VALUES (1,'Keranjang Sayur Mini    ','Sepatu baru ukuran 45    ',40000,1,'1653879417891.jpg','2022-05-21 13:43:28','2022-05-30 02:56:57'),(3,'Keranjang Buah','Ukuran 45cm x 30cm',45000,1,'1653467614888.jpg','2022-05-25 08:33:34','2022-05-25 08:33:34');
/*!40000 ALTER TABLE `produks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ratings` (
  `id_rating` int(11) NOT NULL AUTO_INCREMENT,
  `id_barang` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `bintang` int(11) DEFAULT NULL,
  `pesan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_rating`),
  KEY `id_barang` (`id_barang`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `produks` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,1,1,3,'5','2022-05-22 14:34:42','2022-05-22 14:34:42'),(4,1,1,3,'bagusssssss','2022-05-25 08:37:21','2022-05-25 08:37:21'),(5,1,1,4,'gg welcomes','2022-05-25 08:37:40','2022-05-25 08:37:40'),(6,1,3,4,'sangat bagus bintang empat','2022-05-27 08:21:12','2022-05-27 08:21:12');
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaksis`
--

DROP TABLE IF EXISTS `transaksis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaksis` (
  `id_transaksi` int(11) NOT NULL AUTO_INCREMENT,
  `id_barang` int(11) DEFAULT NULL,
  `nama_pembeli` varchar(255) DEFAULT NULL,
  `no_telp` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `nama_barang` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_transaksi`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaksis`
--

LOCK TABLES `transaksis` WRITE;
/*!40000 ALTER TABLE `transaksis` DISABLE KEYS */;
INSERT INTO `transaksis` VALUES (1,1,'Ardin Nugraha','085123456788','Jln Jaksel no 50','Keranjang Sayur Mini  ',40000,4,'1653141703107.png','1653142221647.jpg','2022-05-21 14:13:51','2022-05-21 14:13:51'),(2,2,'Ardin Nugraha','085123456788','Jln Jaksel no 50','Keranjang Buah ',45000,3,'1653142415526.png','1653142229545.jpg','2022-05-21 14:14:24','2022-05-21 14:14:24'),(3,1,'Ardin Nugraha','085123456788','Jln Jaksel no 50','Keranjang Sayur Mini  ',40000,4,'1653142421696.png','1653142221647.jpg','2022-05-25 08:34:18','2022-05-25 08:34:18'),(4,1,'Dek wildan','085123456788','Jln Jaksel no 52','Keranjang Sayur Mini  ',40000,4,'1653639624728.jpg','1653142221647.jpg','2022-05-27 08:20:51','2022-05-27 08:20:51'),(5,1,'Ardin Nugraha','085123456788','Jln Jaksel no 50','Keranjang Sayur Mini    ',40000,10,'1653901627996.jpg','1653879417891.jpg','2022-06-04 02:37:19','2022-06-04 02:37:19');
/*!40000 ALTER TABLE `transaksis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nama_pembeli` varchar(255) DEFAULT NULL,
  `no_telp` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ardin','ardin123','Ardin Nugraha','085123456788','an36598fdfd04@gmail.com','Jln Jaksel no 50','2022-05-21 14:01:07','2022-05-21 14:01:07'),(3,'wildan','wildan123','Dek wildan','085123456788','an36598fdfd04@gmail.com','Jln Jaksel no 52','2022-05-27 08:19:44','2022-05-27 08:19:44');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-10 21:50:17
