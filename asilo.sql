create database asilo;
use asilo;

create table doador
(
id int primary key auto_increment,
nome varchar(100) not null,
cpf varchar(11),
endereco varchar(100)
);

create table estoque
(
id int primary key auto_increment,
nome varchar(10) not null,
categoria varchar(20),
preco int
);

select * from doador;
insert into doador (nome, cpf, endereco) values
('Diego Max', '12345678900, 'Rua das Pétalas, 123, Bairro Jardim Primavera, Cidade Amor, Estado Felicidade, CEP: 12345-678'),
('Wagner Toth', '45678912301', 'Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432');
