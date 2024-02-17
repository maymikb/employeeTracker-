var inquirer = require("inquirer")
var mysql2 = require("mysql2")
var cTable = require("console.table")
var db = mysql2.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Teranga3!",
    database: "employeeInfo"
})

console.log('testing ') 
//("cfonts")?
inquirer.prompt([
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
        ]
    }
])
.then(answers => {
    if (answers.choice === "View all departments") {
        db.query("SELECT * FROM DEPARTMENT", function (err, data) {
            console.table(data)
        })
    } else if (answers.choice === "View all roles") {
        db.query("SELECT * FROM ROLE", function (err, data) {
            console.table(data)
        })
    } else if (answers.choice === "View all employees") {
        db.query("SELECT *  FROM EMPLOYEE", function (err, data) {
            console.table(data)
            //inquirer.console(data)
           // done(null, true);
        })
    } else if (answers.choice === "Add a department") {
        inquirer.prompt({
            type: "input",
            name: "department", // (not "new departments" bc we are not making a new file or is this name linked)
            message: "What is the name of the department?",
        })
        .then(answers => {
            db.query(`insert into department (name) VALUES ("${answers.department}")`, function (err, results) {
                if (err) {
                    console.log("Something wrong happened!")
                    return;
                }
                console.log("Added service to database")
            })
        })
    }else if (answers.choice === "Add a role") {
        inquirer.prompt([
            {
                type: "input",
                name: "title", // (not "new departments" bc we are not making a new file or is this name linked)
                message: "What is the title of the role?",
            },
            {
                type: "input",
                name: "salary", // (not "new departments" bc we are not making a new file or is this name linked)
                message: "What is the salary of the role?",
            },
            {
                type: "input",
                name: "department_id", // (not "new departments" bc we are not making a new file or is this name linked)
                message: "What is the department_id of the role?",
            },

            {
                type: "list",
                name: "department",
                message: "Which department does this role belong to?",
                choices: [
                    "Sales",
                    "Sales",
                    "Engineering",
                    "Engineering",
                    "Finance",
                    "Finance",
                    "Legal",
                    "Legal",
                ]
            }
        ])
        .then(answers => {
            db.query(`insert into role (title, salary, department_id, department) VALUES ("${answers.title}", "${answers.salary}", "${answers.department_id}", "${answers.department}",)`, function (err, results) {
                if (err) {
                    console.log("Something wrong happened!")
                    return;
                }

                console.log("Added service to database")
            })
        })
    } else if (answers.choice === "Add an employee") {
        inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is the employee's first name?",
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the employee's last name?",
            },
            {
                type: "list",
                name: "role", 
                message: "What is the employee's role?",
                choices: [
                    "Sales Lead",
                    "Salesperson",
                    "Lead Engineer",
                    "Software Engineer",
                    "Accountant Manager",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer",
                ]

            },
            {
                type: "List",
                name: "manager",
                message: "Who is the employee's manager?", //add list of choices
                choices: [
                    "null",
                    "John Doe",
                    "null",
                    "Ashley Rodriguez",
                    "null",
                    "Kunal Singh",
                    "null",
                    "Sarah Lourd",
                ]
            }])
            .then(answers => {
                db.query(`insert into employees (firstName, lastName, role, manager) VALUES ("${answers.firstName}", "${answers.lastName}", "${answers.role}", "${answers.manager}",)`, function (err, results) {
                    if (err) {
                        console.log("Something wrong happened!")
                        return;
                    }

                    console.log("Added service to database")
                })

            })
    } else if (answers.choice === "Update an employee role") {
        inquirer.prompt([
            {
                type: "List",
                name: "employee",
                message: "Which employee's role do you want to update?", //add list of choices
                choices: [
                    "John Doe",
                    "Mike Chan",
                    "Ashley Rodriguez",
                    "Kevin Tupik",
                    "Kunal Singh",
                    "Malia Brown",
                    "Sarah Lourd",
                    "Sarah Lourd",                 //include previously added employee if there is one
                ]
            },
            {
                type: "list",
                name: "Update",
                message: "Which role do you want to assign to the selected employee?",
                choices: [
                    "Sales Lead",
                    "Salesperson",
                    "Lead Engineer",
                    "Software Engineer",
                    "Accountant Manager",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer",                        //include previously added employee if there is one
                ]
            }
        ])
        .then(answers => {
            db.query(`update employee (firstName, lastName, department_id, department) VALUES ("${answers.employee}", "${answers.role}")`, function (err, results) {
                if (err) {
                    console.log("Something wrong happened!")
                    return;
                }
                console.log("Added service to database")
            })
        })
    }
})
console.log('about to start')
// start