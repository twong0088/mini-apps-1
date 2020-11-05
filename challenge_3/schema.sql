DROP DATABASE webstore;

CREATE DATABASE webstore;

USE webstore;

CREATE TABLE customers (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255),
  lastName varchar (255),
  email varchar(255),
  password varchar(255),
  address varchar(255),
  address2 varchar(255),
  city varchar(255),
  state varchar(255),
  phone varchar(255),
  CC varchar(255),
  month varchar(255),
  year int(3),
  cvv int(3),
  PRIMARY KEY(id)
);