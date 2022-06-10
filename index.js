// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type:'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how your project is installed.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your project.' 
       
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a type of license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Describe how others can contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the tests used in the app.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How should others report questions or issues?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter yout GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
// }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to ReadMe'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
