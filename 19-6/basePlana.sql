--Primero crear BD
create database IF NOT EXISTS libros;
/*Crear una tabla con el mismo nombre de mis class constructora y con los mismo atributos. Definir el tipo de dato de cada una y declarar la primary key de la tabla
DDL*/
CREATE TABLE libro(
	id int PRIMARY KEY AUTO_INCREMENT,
	autor varchar(80),
    titulo varchar(70),
    precio int unsigned,
    stock int unsigned
    
)
-- Realizar los registros que corresponde con las instanciaciones que hicimos en el proyecto front
INSERT INTO libro(autor, titulo, precio, stock) VALUES
	("Jorge Luis Borges", "Aleph", 800, 10),
    ("Gabriel García Marquez", "Cien años de Soledad", 4500, 8),
    ("Isabel Allende", "Paula", 2800, 7),
    ("Jorge Luis Borges","Ficciones", 1400,20),
    ("Mario Benedetti", "Andamios", 2200,12),
    ("Mario Vargas Llosa", "La ciudad y los perros", 2800, 20);

