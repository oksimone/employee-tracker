-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the "employee_db" database --
CREATE DATABASE employee_db;
-- Makes it so all of the following code will affect employee_db --
USE employee_db;

-- You need three tables - department, employee, role --

-- Creates the table "people" within animals_db --department
CREATE TABLE department (
  ID INT AUTO_INCREMENT NOT NULL,
  -- hold department name --
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(ID)
);

-- Creates the table "role" within emplpyee_db --
CREATE TABLE role (
 ID INT AUTO_INCREMENT NOT NULL,
 title VARCHAR(30),
 salary DECIMAL NOT NULL,
 PRIMARY KEY(ID)
);

-- Creates the table "employee" within emplpyee_db --
CREATE TABLE employee (
    ID INT AUTO_INCREMENT NOT NULL,
  -- to hold title --
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  PRIMARY KEY(ID)
);

INSERT INTO department(name)
VALUES("Fashion"), ("Photography"), ("Accessories"), ("Model");

INSERT INTO role(title, salary)
VALUES("Director", 100000), ("Fashion Assistant", 40000), ("Intern", 30000), ("Intern", 30000), ("Fasion Assistant", 65000);

INSERT INTO employee(first_name, last_name, role_id)
VALUES("Lisa", "Love", 1), ( "Lauren", "Conrad",2),( "Heidi", "Montag",3), ( "Lo", "Bosworth", 4), ( "Whitney", "Port",5);

