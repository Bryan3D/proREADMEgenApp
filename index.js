const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
import chalk from "chalk";

// inquirer for input
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your project name?'
    }
])

.then((inquirer) => {
    console.log(inquirer);
    const markdown = generateMarkdown(inquirer);
    fs.writeFile('README.md', markdown, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
})