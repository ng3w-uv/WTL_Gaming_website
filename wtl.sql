

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `msg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `contact` (`id`, `name`, `phone`, `email`, `msg`) VALUES
(1, 'Name', 1212121212, 'test@gmail.com', 'kasjdofihawenfc'),
(2, 'Name', 1212121212, 'test@gmail.com', 'kasjdofihawenfc'),
(3, 'ABC', 7897897899, 'test@gmail.com', 'djkfoauwebckjsx'),
(4, 'Mitesh', 1234567890, 'mitesh@gmail.com', 'very good........');


CREATE TABLE `facts` (
  `id` int(11) NOT NULL,
  `heading` varchar(20) NOT NULL,
  `descp` text NOT NULL,
  `image` varchar(20) NOT NULL DEFAULT 'demo.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `facts` (`id`, `heading`, `descp`, `image`) VALUES
(2, 'Ban', 'Pubg banned in India', 'demo.png');


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `facts`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `facts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

