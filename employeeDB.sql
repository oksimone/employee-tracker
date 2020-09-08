-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the "employee_db" database --
CREATE DATABASE employee_db;
-- Makes it so all of the following code will affect employee_db --
USE employee_db;

-- You need three tables - department, employee, role --

-- Creates the table "people" within animals_db --
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
 department_id INT NOT NULL,
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
VALUES("legal"), ("receptionist"), ("doctor"), ("mechanic");

INSERT INTO role(title, salary, department_id)
VALUES("laywer", 95000, 1), ("receptionist", 100000, 2), ("doctor", 50000, 3);

INSERT INTO employee(first_name, last_name, role_id)
VALUES("k", "s", 1), ( "c", "w",2), ( "l", "w", 3), ( "s", "w",4);

