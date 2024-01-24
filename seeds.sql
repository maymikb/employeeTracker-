use employeeInfo;

insert into department (name) VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

insert into role (title, salary, department_id) VALUES 
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000,1),
    ("Lead engineer",150000,2 ),
    ("Software engineer", 120000,2),
    ("Account manager", 16000, 3),
    ("Accountant",125000,3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);

insert into employee (first_name, last_name, role_id, manager_id) VALUES
    ("John", "Doe", 1, null),
    ("Mike", "Chan", 2, 1),
    ("Ashley", "Rodriguez",3,null ),
    ("Kevin", "Tupik", 4, 3),
    ("Kunal", "Singh", 5, null),
    ("Malia", "Brown", 6, 5),
    ("Sarah", "Lourd", 7, null ),
    ("Tom", "Allen", 8, 7);