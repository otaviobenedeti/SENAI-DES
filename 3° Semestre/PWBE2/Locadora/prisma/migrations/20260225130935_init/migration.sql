-- CreateTable
CREATE TABLE `Carros` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,

    UNIQUE INDEX `Carros_placa_key`(`placa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clentes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `CPF` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `CNH` INTEGER NOT NULL,

    UNIQUE INDEX `Clentes_CPF_key`(`CPF`),
    UNIQUE INDEX `Clentes_email_key`(`email`),
    UNIQUE INDEX `Clentes_CNH_key`(`CNH`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
