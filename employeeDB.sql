-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the "employee_db" database --
CREATE DATABASE emplpyee_db;

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

SELECT * FROM department;

-- Creates the table "role" within emplpyee_db --
CREATE TABLE role (
 ID INT AUTO_INCREMENT NOT NULL,
 title VARCHAR(30),
 salary DECIMAL NOT NULL,
 department_id INT NOT NULL,
 PRIMARY KEY(ID)
);

SELECT * FROM role;

-- Creates the table "people" within animals_db --
CREATE TABLE employee (
    ID INT AUTO_INCREMENT NOT NULL,
  -- to hold title --
  title VARCHAR(30) NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY(ID)
);

SELECT * FROM employee;









