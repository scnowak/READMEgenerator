// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown =require('./generateMarkdown');


// TODO: Create an array of questions for user input
//const questions = [
   function init(){
    inquirer
    .prompt([ 
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projName',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions that the user will need to use the app?',
        name: 'installInst',
    },
    {
        type: 'input',
        message: 'What usage information does the user need to get started? Such as User Story or Acceptance Criteria',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List any collaborator GitHub profile.',
        name: 'collaborators',
    },
    {
        type: 'list',
        message: 'Pick a license that the application is covered under?',
        name: 'license',
        choices: ['Apache-2.0', 'MIT', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What info do you want to include for your demo/tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
    },
])



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

//worked with tutor on insert code below 

// inquirer.prompt(questions)
.then((response)=>{
    console.log(response)
    // fs.writeFile('myREADME.md', generateMarkdown(response), (err)=>{
        fs.writeFile('README.md', generateMarkdown(response), (err)=>{    
        err ? console.error(err) : console.log("Generator is WORKING!");
    });
} );

}
    

// // Function call to initialize app
init();


