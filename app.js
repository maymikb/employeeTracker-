// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role


var inquirer = require("inquirer")
//ca=("mysqil2")
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