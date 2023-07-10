drop database if exists bda_alumnos;
create database bda_alumnos;
use bda_alumnos;

create table notas(
id_alumnos int primary key auto_increment,
nombre_completo varchar (60) not null,
nota1 int,
nota2 int,
nota3 int
);