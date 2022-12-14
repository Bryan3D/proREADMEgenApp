
//  import the inquirer
const inquirer = require('inquirer');
//  file system requirer
const fs = require('fs');

// Markdown document generator
const generateMarkdown = ({ name, description, tableOf, hyperLink }) => '\n# ' + name + ' \n---\n## Table of Contents\n---\n    -' + tableOf + '\n    \n## Project Description\n--- ' + description + '\n\n\n\n## Website project link\n---\n[Link here](' + hyperLink + ')\n\n';

// inquirer for input
inquirer
    .prompt([
     {
        // Project Title
        name: 'name',
        message: 'Name title of your Project?',
        type: 'input'
     },
     {
        // Project Description
        name: 'description',
        message: 'Description of the project',
        type: 'input'
        },
        {
        // Table of Contents
        name: 'tableOf',
        message: 'Table of Contents of your project',
        type: 'checkbox',
        choices: ['description', 'Installation', 'Usage', 'Credits', 'License']

        },
        {
        // App or website link of you project
        name: 'hyperLink',
        message: 'Input your website link project',
        type: 'input'
        },


])

//  Output of README file been successfully  generated
.then((inquirer) => {
    console.log(inquirer);
    const markdown = generateMarkdown(inquirer);

// Return the contents of 'README.md' as a string in the variable "README"
    fs.readFile('README.md', 'utf8', (err, README) => {
        if (err) {
            console.log(err);
        } else {
            console.log(README);
            fs.writeFile('./doc/README.md', markdown, (err) => {  
                if (err) {
                    console.log(err);
                } else {
                    console.log('README.md has been successfully generated');
                }
            });
        }
    });
});