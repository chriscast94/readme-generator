// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


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
        choices: 'MIT, GNU GPLv3, '

    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

];

// TODO: Create a function to write README file
function writeToFile({fileName, description, installation, usage, contributing, tests, githubUser, email}) {
    `# ${fileName}

    ## Description
    ${description}

    ## Table of Contents
    Installation
    Usage
    Contributing
    Tests
    Questions
    License
   
    ## Installation
    ${installation}
  
    ## Usage
    ${usage}
    
    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## Questions
    My GitHub profile is: https://github.com/${githubUser}
    If you have any questions regarding my project, you can reach my at my email, ${email}
    
    ## License`
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
