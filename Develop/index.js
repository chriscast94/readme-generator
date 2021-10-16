// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "fileName",
        message: 'What is your Project Title?'

    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions nad examples of use for your project.',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributing members?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'TBD?',
    },

    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub username?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use? ',
        choices: 'MIT, Apache 2.0, '

    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
    .then((answers) => fs.writeFileSync("README.md", writeToFile(answers)))
    .then (() => console.log("Congratulations!\nSuccessfully created and wrote new README.md file."))
};

init();
