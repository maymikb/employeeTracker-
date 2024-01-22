// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role


var inquirer = require("inquirer")
var mysql2 =require=("mysql2")
var db=mysql2.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Teranga3!",
    database: "employeeInfo"
})
//("cfonts")

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
            "Update and employee role",
        ]
    }
])
    .then((answers) => {
        if (answers.choice === "View all departments") {

        } else if (answers.choice === "View all roles") {

        } else if (answers.choice === "View all employees") {

        } else if (answers.choice === "Add a department") {

        } else if (answers.choice === "Add a role") {

        } else if (answers.choice === "Add an employee") {

        } else if (answers.choice === "Update an employee role") {


            

    }
})