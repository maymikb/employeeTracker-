create database employeeInfo;
use employeeInfo;

create table Department(
    id INT,
    name VARCHAR(30)
);



create table role(
    id INT,
    title VARCHAR(30),
    salary DECIMAL
    department_id INT
);



create table employee(
    id INT,
    first_name VARCHAR(30),
    last_name DECIMAL,
    role_id INT,
    manager_id INT
);