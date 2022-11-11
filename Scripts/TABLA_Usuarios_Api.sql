
CREATE TABLE Usuarios_Api(
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    usuario varchar(150) not null,
    clave   varchar(200) not null,
    rol     varchar(200)
)
/
INSERT INTO Usuarios_Api (usuario,clave,rol) VALUES
('ADMIN','Progre01','ADMINISTRADOR');

/
select * from Usuarios_Api
