// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
      },
      {
        type: 'input',
        name: 'runinstallation',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'runtest',
        message: 'What command should be run to run the test?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What does the user need to know about testing protocol for your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select the license of your project.',
        choices: [
            'MIT',
            'Apache',
            'GPL',
        ]
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];
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
// 
const generateReadme = (data) =>
`# ${data.title} ![]()

## Description

${data.description}. 
Please visit the application here: [${data.title}](https://retnodamayanti.github.io/readme-generator/)

## Table of Contents
- [Installation](#installation)
- [License](#license)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credit](#credit)

## Installation
- Clone the repo
- Initialize Node.js project: run `npm init -y`
- Install the dependencies: run `${data.runinstallation}`
- Please run `${data.runtest}` to test the application.


## License
${data.license}

## Usage 
${data.usage}

## Contributing
${data.contributing} 

## Tests
${data.tests}

## Questions
- Github username: ${data.username}
- Github email: ${data.email}
 
## Credit
- [Bootcamp GitLab 09-NodeJS](https://git.bootcampcontent.com/University-of-Adelaide/UADEL-VIRT-FSF-PT-03-2023-U-LOLC/-/tree/main/09-NodeJS) 
- Assistance from TA and Tutor
- [Inquirer.js/packages/inquirer/examples/list.js](https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/list.js)
`;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
