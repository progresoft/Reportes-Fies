CREATE TABLE Reportes_api
   (
      ID int AUTO_INCREMENT,
      Nombre varchar(255),
      Clase varchar(100),
      PRIMARY KEY (ID)
   );
/
INSERT INTO Reportes_api (Nombre, Clase)
VALUES ('Facturacion Recaudo Por Cliente', 'Fies');
/
select * from Reportes_api
/
commit;