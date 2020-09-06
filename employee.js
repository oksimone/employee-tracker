var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "goldfish",
    database: "employee_db"
  });

const firstQuestion = [{
  type: "list",
  name: "question1",
  message: "What would you like to do?",
  choices: ["View all employees",
      "View all departments",
      "View all roles",
      "Add department",
      "Add role",
      "Add employees",
      "Update employee roles"
  ]
}]

const addEmployee = [{
  type: "input",
  name: "employeeFirst",
  message: "What is the employees first name?"
},
{
  type: "input",
  name: "employeeLast",
  message: "What is the employees last name?"
},
{
  type: "list",
  name: "employeeRole",
  // add choices to this
  message: "What is the employees role?"
},
{
  type: "list",
  name: "employeeManager",
  // add choices to this
  message: "Who is the employees manager?"
}]

const addRole = [{
  type: "list",
  name: "titleRole",
  // insert choices
  message: "What is the title of the employees role"
},
{
  type: "input",
  name: "salaryRole",
  message: "What is the salary of the role?",
},
{
  type: "input",
  name: "departmentTitle",
  message: "What is the title of the department?"
}]

const viewDepart = [{
  type: "list",
  name: "viewDepartment",
  // input choices
  message: "Which department would you like to view?"

}]

const viewRole = [{
  type: "list",
  name: "viewRole",
  // choices
  message: "Which role would you like to view?"

}]
const employeeUpdate = [{
  type: "list",
  name: "updateEm",
  // add choices
  message: "Which employee do you want to update?"
},
{
  type: "list",
  name: "switchEm",
  // add choices
  message: "Which role is the employee switching to?"
}

]
  
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });
  
  
  function afterConnection() {
    inquirer.prompt(firstQuestion).then(questionAnswer => {
      console.log(firstQuestion.questionAnswer)
    })
  }
      
  
  
  // connection.query("SELECT * FROM department, role, employee", function(err, res) {
  //       if (err) throw err;
  //       console.table(res);
  //       connection.end();
  //     });