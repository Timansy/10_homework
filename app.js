const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];

function saveAsHTML(data){
    console.log("about to write...");
        fs.writeFile(outputPath, data, function (err) {
            if (err) return console.log(err);
            console.log('Team HTML created successfully');
        });
}

function gatherTeam() {
  var idNum = 1;
  
  //What type of employee
  const askQuestion = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeType",
          message: "What type of employee do you wish to enter?",
          choices: ["Manager", "Engineer", "Intern"],
          default: "Engineer",
        },
        {
          type: "input",
          name: "name",
          message: "Employee Name",
          default: "Tim",
        },
        {
          type: "input",
          name: "idNum",
          message: "ID",
          default: idNum,
        },
        {
          type: "input",
          name: "email",
          message: "Email",
          default: "tim@tim.com",
        },
      ])
      .then((answers) => {
        if (answers.employeeType == "Engineer") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: "Their GitHub user name?",
                default: "Timansy",
              },
              {
                type: "confirm",
                name: "continue",
                message: "Add another?",
                default: "Y",
              }
            ])
            .then((entry) => {
              let temp = new Engineer(
                answers.name,
                answers.idNum,
                answers.email,
                entry.github
              );
              team.push(temp);
              if (entry.continue == true) {
                askQuestion();
                idNum++;
              } else {
                saveAsHTML(render(team));
              }
            });
        } else if (answers.employeeType == "Manager") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "office",
                message: "Their office number?",
                default: 100,
              },
              {
                type: "confirm",
                name: "continue",
                message: "Add another?",
                default: "Y",
              },
            ])
            .then((entry) => {
              let temp = new Manager(
                answers.name,
                answers.idNum,
                answers.email,
                entry.office
              );
              team.push(temp);
              if (entry.continue == true) {
                askQuestion();
                idNum++;
              } else {
                  saveAsHTML(render(team));
              }
            });
        } else {
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message: "School?",
                default: "Some School",
              },
              {
                type: "confirm",
                name: "continue",
                message: "Add another?",
                default: "Y",
              },
            ])
            .then((entry) => {
              let temp = new Intern(
                answers.name,
                answers.idNum,
                answers.email,
                entry.school
              );
              team.push(temp);
              if (entry.continue == true) {
                askQuestion();
                idNum++;
              } else {
                saveAsHTML(render(team));
              }
            });
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });
  };
  askQuestion();
}

gatherTeam();



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
