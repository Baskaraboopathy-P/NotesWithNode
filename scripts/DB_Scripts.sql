create database base;

use base;
create table `users` (
	`Id` bigint NOT NULL AUTO_INCREMENT,
    `FirstName` varchar(255) DEFAULT NULL,
	`LastName` varchar(255) DEFAULT NULL,
    `PhoneNumber` varchar(15) DEFAULT NULL,
    `EmailAddress` varchar(255) DEFAULT NULL,
	`Address` varchar(255) DEFAULT NULL,
    `UserName` varchar(50) DEFAULT NULL,
	`Password` varchar(255) DEFAULT NULL,
	`Active` tinyint(1) DEFAULT '0',
	`Created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `CreatedBy` bigint DEFAULT '0',
    `Modified` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`ModifiedBy` bigint DEFAULT NULL,
     PRIMARY KEY (`Id`)
)ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;