// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

// What is your project's title?
// Please write a short description of your project:
// What does the user need to know about the installation for your project?
// What does the user need to know about using the repo?
// What does the user need to know about contributing to the repo?
// What does the user need to know about testing protocol for your project?
// Please select the license you used for this project
// What is your GitHub username?
// What is your email address?

// What command should be run to install dependencies? node 
// What command should be run to run test? node index.js


// array of questions
// const generateHTML = ({ name, location, github, linkedin }) => can  be const generateHTML = (data) =>
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
