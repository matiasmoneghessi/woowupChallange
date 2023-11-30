CREATE DATABASE Woowup
USE Woowup

CREATE TABLE Clientes (
	Id_cliente int NOT NULL,
	Nombre varchar(255) NOT NULL,
	Apellido varchar(255) NOT NULL,
	PRIMARY KEY(Id_cliente)
)

CREATE TABLE Ventas (
	Fecha date NOT NULL,
	Sucursal varchar(255) NOT NULL,
	Nro_Factura int NOT NULL,
	Importe decimal(8,2) NOT NULL,
	Id_cliente int NOT NULL,
	FOREIGN KEY (Id_cliente) REFERENCES Clientes(Id_cliente)
);

INSERT INTO Woowup.dbo.Clientes VALUES
(001,'Matias', 'Moneghessi'),
(002,'Emiliano', 'Martinez'),
(003,'Angel', 'DiMaria'),
(004,'Lionel', 'Messi'),
(005,'Enzo', 'Fernandez'),
(006,'Alexis', 'MacAllister'),
(007,'Julian', 'Alvarez')

INSERT INTO Woowup.dbo.Ventas VALUES
('2023-11-01','Rafaela', 100,5000,001),
('2022-12-18','Mar del Plata', 101,90000,002),
('2022-12-18','Rosario', 102,95000,003),
('2022-12-18','Rosario', 103,500000,004),
('2022-12-18','Londres', 104,24000,005),
('2022-12-18','Liverpool', 105,5000,006),
('2022-12-18','Manchester', 106,150000.50,007)

SELECT * FROM Ventas WHERE Importe > 100000