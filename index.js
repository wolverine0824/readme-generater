// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [];
inquire.prompt([
    { 
        type: 'input',
        name: "title",
        message:"what is the title of this application?",
    },
    { 
        type: 'input',
        name: "username",
        message:"what is your github username?",
    },
    { 
        type: 'input',
        name: "email",
        message:"what is your email address?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this application used for?"
    },
    { 
        type: 'input',
        name: "installation",
        message:"what is the installation process?",
    },
    { 
        type: 'input',
        name: "description",
        message:"give a brief description of the application if any?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this application?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
])




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    async function init() {
        try {
            const answers = await promptUser();
            const generateContent = generateMarkdown(answers); 
            await writeFileAsync('./dist/README.md', generateContent);
            console.log('✔️  Successfully wrote to README.md');
        }   catch(err) {
            console.log(err);
        }
      }
}


// TODO: Create a function to initialize app
function init() {
    this.type=type
    this.name=name
    this.message=message
}

// Function call to initialize app
this.init();
