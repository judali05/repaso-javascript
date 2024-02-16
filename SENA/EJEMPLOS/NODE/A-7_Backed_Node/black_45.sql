-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 12-02-2024 a las 12:56:06
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `black_45`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(10) NOT NULL COMMENT 'Aquí se le asignara un numero auto-incrementado por codigo a cada usuario.',
  `documento` varchar(30) NOT NULL COMMENT 'Aquí se almacenará el documento del usuario.',
  `nombre_usuario` tinytext NOT NULL COMMENT '	Aquí se almacenará el nombre del usuario.',
  `apellido_usuario` tinytext NOT NULL COMMENT '	Aquí se almacenará el apellido del usuario.',
  `contraseña` varchar(500) NOT NULL COMMENT 'Aquí se almacenará la contraseña del usuario.',
  `correo` varchar(30) NOT NULL COMMENT '	Aquí se almacenará el correo electrónico del usuario.',
  `id_estado` int(10) NOT NULL COMMENT 'Aquí se almacenará el estado del usuario(activo o inactivo).'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `documento`, `nombre_usuario`, `apellido_usuario`, `contraseña`, `correo`, `id_estado`) VALUES
(0, '111', 'Draco', 'Perez', '$2y$10$Ud6jIqWQO7wyExoezoxpMeQ7hEcCRPgaCnP66.sbNkLmECog5pQdu', 'dp@gmail.com', 2),
(1, '222', 'brayan', 'hernandez', '$2y$10$Zwsfb.WSasJoTtEr7F/C9OUuYcMHOMi.PXd9gh2BeDxxE6UnifBs.', 'bh@gmail.com', 1),
(2, '333', 'julian', 'rojas', '$2y$10$Ph4rF0OTyYQZxpAfC5ZXe.EBjJfiT2JCq2/yS2WGn66MQxtzWeiom', 'jr@gmail.com', 1),
(3, '444', 'jesus', 'cabezas', '$2y$10$cUueZVm/Wy9NVIRB55HSh.xoy1ZYQr9bOpllRaTqs92Y4rA.7fUmS', 'jc@gmail.com', 1),
(4, '555', 'esteban', 'salcedo', '$2y$10$mTIY.S8LciTUz.R2nweLDOzf94NEd5sYnzf3ltM4nZpu9Vlm3hWxi', 'es@gmail.com', 1),
(5, '666', 'juan', 'prieto', '$2y$10$mAYVCQSUD/NkoI9VWugSxuLjz6SZKUjW3eSp42LGlfp06E4xloBeC', 'jp@gmail.com', 1),
(6, '777', 'david', 'lopez', '$2y$10$l32jl9H.nRTzex2WNqfbFuKvwNIFMd18/c8w6wCmg6p.DMHByL0Va', 'dl@gmail.com', 1),
(7, '888', 'carlos', 'muñoz', '$2y$10$3dOjStO6Nn5GOZh2cJ.A7.zK5ALHh7kxywvZGwZIhfNpGLjIry18i', 'cm@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`documento`),
  ADD KEY `id_estado` (`id_estado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
