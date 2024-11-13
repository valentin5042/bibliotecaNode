/*Crear la base de datos biblioteca*/
CREATE DATABASE biblioteca; 

/*usamos la base de datos biblioteca*/
USE biblioteca;

/*Creamos las tablas */

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE libros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    autor VARCHAR(100) NOT NULL,
    editorial VARCHAR(100) NOT NULL,
    libro VARCHAR(150) NOT NULL,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);


/* agregamos datos a las tablas de usuarios*/

INSERT INTO usuario (name, email, password)
VALUES 
('Juan Pérez', 'perez@gmail.com', '123456'),
('Michell Corona', 'cor@gmail.com', '123456'),
('Alberto Jiménez', 'al16@gmail.com', '123456'),
('Laura Santiago', 'lau@gmail.com', '123456'),
('Javier Pérez', 'perez@gmail.com', '123456'),


/* Agregamos a la tabla de libros */

INSERT INTO libros (autor, editorial, libro, usuario_id)
VALUES 
('Gabriel García Márquez', 'Editorial XYZ', 'Cien años de soledad', 1),
('J.K. Rowling', 'Bloomsbury', 'Harry Potter y la piedra filosofal', 3),
('George Orwell', 'Secker & Warburg', '1984', 2),
('Jane Austen', 'Penguin Books', 'Orgullo y prejuicio', 5),
('J.R.R. Tolkien', 'HarperCollins', 'El señor de los anillos', 1),
('Isabel Allende', 'Plaza & Janés', 'La casa de los espíritus', 4),
('F. Scott Fitzgerald', 'Scribner', 'El gran Gatsby', 2),
('Miguel de Cervantes', 'Francisco de Robles', 'Don Quijote de la Mancha', 3),
('Mark Twain', 'Chatto & Windus', 'Las aventuras de Tom Sawyer', 1),
('Ernest Hemingway', 'Charles Scribner’s Sons', 'El viejo y el mar', 5),
('Leo Tolstoy', 'The Russian Messenger', 'Guerra y paz', 4),
('Harper Lee', 'J.B. Lippincott & Co.', 'Matar a un ruiseñor', 2),
('Charles Dickens', 'Chapman & Hall', 'Oliver Twist', 5),
('Herman Melville', 'Richard Bentley', 'Moby Dick', 1),
('Virginia Woolf', 'Hogarth Press', 'Mrs. Dalloway', 3),
('Gabriel García Márquez', 'Editorial Mondadori', 'El amor en los tiempos del cólera', 4),
('Franz Kafka', 'Kurt Wolff Verlag', 'La metamorfosis', 2),
('Albert Camus', 'Gallimard', 'El extranjero', 5),
('William Shakespeare', 'The Arden Shakespeare', 'Hamlet', 1),
('Leo Tolstoy', 'The Russian Messenger', 'Anna Karenina', 3);
