// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Short description of your project?.",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install the app?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do we use your app?",
  },
  {
    type: "input",
    name: "credits",
    message: "List collaborators if any.",
  },
  {
    type: "list",
    name: "license",
    message: "Chose a license for your app.",
    choices: ["Apache Licence 2.0", "MIT License", "GNU GPLv3"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Write tests for your application. Then provide examples on how to run them.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(
    `${fileName}.md`,
    generateMarkdown(data),
    "utf8",
    function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Success! Data written to ${fileName}.md.`);
      }
    }
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      // console.log(response);
      writeToFile(response.title, response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
