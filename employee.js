var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");
const prompt = require("inquirer");

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
    "Update employee roles",
    "Exit"
  ]
}]

const addEmployee = [{
  type: "input",
  name: "employeeFirst",
  message: "What is the employees first name?",

},
{
  type: "input",
  name: "employeeLast",
  message: "What is the employees last name?"
},
{
  type: "list",
  name: "employeeRole",
  choices: ["Director", "Fashion Assistant", "Intern"],
  message: "What is the employees role?"
},
{
  type: "list",
  name: "employeeManager",
  choices: ["Sam", "Allyson", "Jason", "Kelley"],
  message: "Who is the employees manager?"
}]

const addRole = [{
  type: "input",
  name: "titleRole",
  // insert choices
  message: "What is the title of the employees role"
},
{
  type: "input",
  name: "salaryRole",
  message: "What is the salary of the role?",
},
]


const addDepartment = [{

  type: "input",
  name: "departmentTitle",
  message: "What is the title of the department?"

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


connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});


function afterConnection() {
  inquirer.prompt(firstQuestion).then(questionAnswer => {
    questionAnswer.question1

    console.log(questionAnswer.question1)
  
    if (questionAnswer.question1 === "View all employees") {
      viewAllEmployees()
    } else if (questionAnswer.question1 === "View all departments") {
      viewAllDepart()
    } else if (questionAnswer.question1 === "View all roles") {
      viewAllRoles()
    } else if (questionAnswer.question1 === "Add department") {
      addDepart()
    } else if (questionAnswer.question1 === "Add role") {
      addRoles()
    } else if (questionAnswer.question1 === "Add employees") {
      addEmp()
    } else if (questionAnswer.question1 === "Update employee roles") {
      // updateEmp()
    } else {
      connection.end()
    }
  })
}

function addEmp() {
  inquirer.prompt(addEmployee).then(function (data) {
    //var data = data.firstQuestion
    console.log(data)

    connection.query("SELECT * FROM role", (err, res) => {
      const filteredArray = res.filter(val => {
        console.log(data.employeeRole, val.title)
        return data.employeeRole === val.title
      })
      console.log(filteredArray)
      connection.query("INSERT INTO employee SET ?", {
        first_name: data.employeeFirst,
        last_name: data.employeeLast,
        role_id: filteredArray[0].ID,
      }, (err, res) => {
        if (err) throw err
        afterConnection()
      }

      )
    })
  })
}


function viewAllEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    afterConnection();
  })
}

function viewAllRoles() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    afterConnection();
  })
}

function viewAllDepart() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    afterConnection();
  })
}

function addRoles() {
  inquirer.prompt(addRole).then(data => {
    console.log(data)
    connection.query("INSERT INTO role SET ? ", {
      title: data.titleRole,
      salary: data.salaryRole
    }, (err, res) => {
      if (err) throw err;
      console.table(res);
      afterConnection();
    })

  })
}

// function updateEmp() {
//   connection.query("SELECT ", function (err, res) {
//     if (err) throw err;
//     console.table(res);
//   })
// }

function addDepart() {

  inquirer.prompt(addDepartment).then(data => {
    console.log(data)
    connection.query("INSERT INTO department SET ? ",
      {
        name: data.departmentTitle
      },
      (err, res) => {
        if (err) throw err;
        console.table(res);
        afterConnection();
      })
  })
}