--crear una tabla con el mismo nombre de mi class constructora y con los mismos atributos. 
create database clashroyale;
use clashroyale;
create table carta(
    id int primary key auto_increment,
    nombre varchar(255),
    rareza varchar(255),
    elixir int,
    nivel int,
    stock int
);
--definir el tipo de cada una y declarar la primary key de la tabla
insert into carta values ( 1,'princesa', 'legendaria', 3, 15, 10);
insert into carta values (2, 'caballero', 'comun', 3, 14, 10);
insert into carta values (3, 'goblin gang', 'comun', 3, 14, 10);
insert into carta values (4, 'skeleton army', 'epica', 3, 14, 10);
insert into carta values (5, 'inferno tower', 'rara', 5, 14, 10);
insert into carta values (6, 'rocket', 'rara', 6, 14, 10);
insert into carta values ( 7,'goblin barrel', 'epica', 3, 14, 10);
insert into carta values (8, 'arrows', 'comun', 3, 15, 10);
--realizar los registros que corresponden con las instanciaciones que hicimos en el proyecto front
