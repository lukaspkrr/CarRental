INSERT INTO `marca` (`marca`) VALUES ("Porsche"),("Peugeot"),("Ferrari"),("Mustang"),("Jaguar"),("Volkswagen"),("Jeep");

INSERT INTO `carrental`.`modelo` (`preco`, `id_marca`, `modelo`, `ano`, `combustivel`, `transmissao`, `num_portas`, `tanque`) VALUES ('250.00', 1, 'Panamera', 2015, 'Flex', 'Automática', 2, 30);
INSERT INTO `carrental`.`modelo` (`preco`, `id_marca`, `modelo`, `ano`, `combustivel`, `transmissao`, `num_portas`, `tanque`) VALUES ('180.00', 2, '208', 2017, 'Flex', 'Automática', 2, 35);
INSERT INTO `carrental`.`modelo` (`preco`, `id_marca`, `modelo`, `ano`, `combustivel`, `transmissao`, `num_portas`, `tanque`) VALUES ('350.00', 3, '2018 Ferrari 488 GTB', 2014, 'Flex', 'Automática', 2, 30);
INSERT INTO `carrental`.`modelo` (`preco`, `id_marca`, `modelo`, `ano`, `combustivel`, `transmissao`, `num_portas`, `tanque`) VALUES ('230.00', 4, 'mustang gt 5.0', 2015, 'Flex', 'Automática', 2, 37);
INSERT INTO `carrental`.`modelo` (`preco`, `id_marca`, `modelo`, `ano`, `combustivel`, `transmissao`, `num_portas`, `tanque`) VALUES ('210.00', 5, 'Sedã XE', 2013, 'Flex', 'Manual', 2, 30);
INSERT INTO `carrental`.`modelo` (`preco`, `id_marca`, `modelo`, `ano`, `combustivel`, `transmissao`, `num_portas`, `tanque`) VALUES ('210.00', 6, 'Golf GTI', 2012, 'Flex', 'Manual', 2, 30);
INSERT INTO `carrental`.`modelo` (`preco`, `id_marca`, `modelo`, `ano`, `combustivel`, `transmissao`, `num_portas`, `tanque`) VALUES ('150.00', 6, 'Polo', 2012, 'Flex', 'Manual', 2, 35);
INSERT INTO `carrental`.`modelo` (`preco`, `id_marca`, `modelo`, `ano`, `combustivel`, `transmissao`, `num_portas`, `tanque`) VALUES ('230.00', 7, 'Grand Cherokee', 2009, 'Flex', 'Manual', 2, 30);

INSERT INTO `carrental`.`veiculo` (`id_modelo`, `renavam`, `cor`, `placa`, `lugares`, `chassi`, `imagem`, `disponivel`) VALUES (7 ,01234567899, 'Branco', 'HSE5436', 2, '9BG116W04C400001', 'carro8-1',  1);
INSERT INTO `carrental`.`veiculo` (`id_modelo`, `renavam`, `cor`, `placa`, `lugares`, `chassi`, `imagem`, `disponivel`) VALUES (6, 94324678641, 'Vermelho', 'YRN3476', 4, '9BG116W04C46741', 'carro7-1',  1);
INSERT INTO `carrental`.`veiculo` (`id_modelo`, `renavam`, `cor`, `placa`, `lugares`, `chassi`, `imagem`, `disponivel`) VALUES (2, 94324678642, 'Azul', 'GBH8524', 2, '3TE116b04C74377', 'carro6-1',  1);
INSERT INTO `carrental`.`veiculo` (`id_modelo`, `renavam`, `cor`, `placa`, `lugares`, `chassi`, `imagem`, `disponivel`) VALUES (3, 65646633525, 'Vermelho', 'BAT7483', 2, '5BJ656b04C7994', 'carro4-1',  1);
INSERT INTO `carrental`.`veiculo` (`id_modelo`, `renavam`, `cor`, `placa`, `lugares`, `chassi`, `imagem`, `disponivel`) VALUES (4, 74724536346, 'Branco', 'TAY9713', 2, '5PQ777R04C1993', 'carro3-1',  1);
INSERT INTO `carrental`.`veiculo` (`id_modelo`, `renavam`, `cor`, `placa`, `lugares`, `chassi`, `imagem`, `disponivel`) VALUES (5, 99734866643, 'Amarelo', 'QLC9713', 2, '5TE763R04C5543', 'carro2-1',  1);
INSERT INTO `carrental`.`veiculo` (`id_modelo`, `renavam`, `cor`, `placa`, `lugares`, `chassi`, `imagem`, `disponivel`) VALUES (1, 74567484568, 'Vermelho', 'TQE9713', 2, '5QWvc4325QWw31', 'carro1-1',  1);

INSERT INTO `tipo_pag` (`id_tipo_pag`,`tipo_pag`) VALUES (1,"Cartão-Débito"), (2,"Cartão-Crédito"),(3,"Dinheiro"),(4,"Cheque");