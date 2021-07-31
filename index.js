const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs"); // -> used for handling files e.g writing/reading files

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const idArray = [];

// main function
function appMenu() {
    createManager()
        .then((answer) => {
            // create a new Manager using the Manager class
            const newManager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber)

            console.log(newManager)

            // add the new manager into the teamMembers array
            teamMembers.push(newManager);

            // ask whether to add an Engineer next, or an Intern.. or stop adding anymore employees
            inquirer.prompt([{
                type: 'list',
                name: 'employeeType',
                message: 'Which employee would you like to add next?',
                choices: ['Engineer', 'Intern', 'None']
            }]).then((answer) => {
                
                // if answer.employeeType is equal to Engineer
                // createEngineer

                // else if INTERN

                // else
                // start rendering the HTML
                // const renderedHTML = redner(teamMembers);
                // console.log(renderedHTML)
                // fs.writeFile --> outputPath
            })

        })

}
//create manager
async function createManager() {
    console.log("Please build your team");
    return await inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "WHat is the team manager's id?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's Email?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid office number.";
            }
        }
    ])
}

//create engineer
// function createEngineer() {
//     console.log("Please build your team");
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "engineerName",
//             message: "What is the team engineer's name?",
//             validate: answer => {
//                 if (answer !== "") {
//                     return true;
//                 }
//                 return "Please enter at least one character.";
//             },
//                 {
//             type: "input",
//             name: "engineerId",
//             message: "WHat is the team engineer's id?",
//             validate: answer => {
//                 const pass = answer.match(
//                     /^[1-9]\d*$/
//                 );
//                 if (pass) {
//                     return true;
//                 }
//                 return "Please enter a positive number greater than zero.";
//             }
//         },
//         {
//             type: "input",
//             name: "engineerEmail",
//             message: "What is the team engineer's Email?",
//             validate: answer => {
//                 const pass = answer.match(
//                     /\S+@\S+\.\S+/
//                 );
//                 if (pass) {
//                     return true;
//                 }
//                 return "Please enter a valid email address.";
//             }
//         },
//         {
//             type: "input",
//             name: "engineerGithub",
//             message: "What is the team engineer's github?",
//             validate: answer => {
//                 if (answer !== "") {
//                     return true;
//                 }
//                 return "Please enter at least one character.";
//             }
//         }
//             }
//         ])
//     }
// //create intern
// function createIntern() {
//     console.log("Please build your team");
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "internName",
//             message: "What is the team intern's name?",
//             validate: answer => {
//                 if (answer !== "") {
//                     return true;
//                 }
//                 return "Please enter at least one character.";
//             },
//                 {
//             type: "input",
//             name: "internId",
//             message: "What is the team intern's id?",
//             validate: answer => {
//                 const pass = answer.match(
//                     /^[1-9]\d*$/
//                 );
//                 if (pass) {
//                     return true;
//                 }
//                 return "Please enter a positive number greater than zero.";
//             }
//         },
//         {
//             type: "input",
//             name: "internEmail",
//             message: "What is the team intern's Email?",
//             validate: answer => {
//                 const pass = answer.match(
//                     /\S+@\S+\.\S+/
//                 );
//                 if (pass) {
//                     return true;
//                 }
//                 return "Please enter a valid email address.";
//             }
//         },
//         {
//             type: "input",
//             name: "internSchool",
//             message: "What is the team intern's school?",
//             validate: answer => {
//                 if (answer !== "") {
//                     return true;
//                 }
//                 return "Please enter at least one character.";
//             }
//         }
//         }
//     ])
// }





// activate main function
appMenu()