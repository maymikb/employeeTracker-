drop database if exists employeeInfo;

create database employeeInfo;
use employeeInfo;

create table department(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);

create table role(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL
    department_id INT
);


create table employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);
