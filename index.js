// Connect team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Connect to page creation
const generateHTML = require("./src/generateHTML");


const fs = require("fs");
const inquirer = require("inquirer");

const teamArr = [];


// Manager prompts
const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team manager?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID number.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the manager's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter an office number!");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArr.push(manager);
      console.log(manager);
    });
};


// Add new employees - Engineer or Intern
const addNew = () => {
  console.log(`
    =================
    Creating new team members
    =================
    `);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role.",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of this employee?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a valid name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID number.",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("Please enter a valid employee ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's Github username.",
        when: (input) => input.role === "Engineer",
        validate: (username) => {
          if (username) {
            return true;
          } else {
            console.log("Please enter a Github username!");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school does this intern attend?",
        when: (input) => input.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter a school!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAdd",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmAdd } = employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamArr.push(employee);

      if (confirmAdd) {
        return addNew(teamArr);
      } else {
        return teamArr;
      }
    });
};

// Write and create HTML file and display success in terminal
const writeFile = (data) => {
  fs.writeFile("./dist/team.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(
        "Your team profile has been created! Check out 'team.html' for the results!"
      );
    }
  });
};

// Function call
managerQuestions()
  .then(addNew)
  .then((teamArr) => {
    return generateHTML(teamArr);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
