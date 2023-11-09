// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');

const {generateMarkdown} =require('./utils/generateMarkdown');


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
        message: 'What was your motivation?',
        name: 'descMotiv',
    },
    {
        type: 'input',
        messsage: 'Why did you build this project?',
        name: 'descWhy',
    },
    {
        type: 'input',
        message:'What problem does it solve?',
        name: 'descSolution',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'descWhatLearn?',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installInst',
    },
    {
        type: 'list',
        message: 'Pick a type of license badge?',
        name: 'license',
        choices: ['Apache-2.0', 'MIT', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'List your collaborators names, if any, with links to their GitHub profiles.',
        name: 'collaborators',
    },
    {
         type: 'input',
         message: 'If your project has a lot of features, list them here.',
         name: 'features',

    },
//     {
//         type: 'input',
//         message: '',
//         name: '',

//    },
//    {
//         type: '',
//         message: '',
//         name: '',

//     },

])



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

//worked with tutor on insert code below 

// inquirer.prompt(questions)
.then((response)=>{
    console.log(response)
    fs.writeFile('myREADME.md', generateMarkdown(response), (err)=>{
        err ? console.error(err) : console.log("Generator is WORKING!");
    });
} );

}
    

// // Function call to initialize app
init();


