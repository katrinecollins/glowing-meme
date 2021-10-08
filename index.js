const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const idArray = [];

function appMenu() {

    function createManager() {
        console.log("Build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of the team manager?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter the team manager's id.",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter a number that is greater than zero."
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter the manager's email.",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "The team manager's office number.",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter a number greater than zero.";
                }
            }
        ]).then(answers => {

            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answer.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What does the team member that you would like to add do?",
                choices: [
                    "Intern",
                    "Engineer",
                    "No more team members to add."
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Intern":
                    addIntern();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's id?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "This ID has already been taken. Enter a different number, please.";
                        } else {
                            return true;
                        }
                    }
                    return "Enter a number greater than zero.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter the intern's email address.",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter the intern's school name.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter at least one character.";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter the engineer's name.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter the engineer's id.",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "The ID is already taken. Enter a different number.";
                        } else {
                            return true;
                        }

                    }
                    return "Enter a number greater than zero.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter the engineer's email.",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter at least one character.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }

    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    createManager();

}
appMenu();
