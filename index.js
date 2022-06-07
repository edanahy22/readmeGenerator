// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your ReadMe?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your app installed? '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your app.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What License are you using?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'what tests were used?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How should others report questions or issues?',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
