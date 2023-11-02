// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projName',
    },
    {
        type: 'input',
        message: 'What is a good description of project?',
        name: 'projDesc',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installInst',
    },
    {
        type: 'input',
        message: 'Pick a type of license?',
        name: 'license',
        choices: ['', '', '', ''],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
