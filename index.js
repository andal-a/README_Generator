//Require Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//User Prompts
async function main(){
    const userResponse = await inquirer
    .prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the project description",
        name: "description"
    },
    {
        type: "input",
        message: "What are the instructions for installation?",
        name: "installation"
    },
    {
        type: "input",
        message: "What are the instructions for usage?",
        name: "usage"
    },
    {
        type: "input",
        message: "What is the usage example?",
        name: "usageExample"
    },
    {
        type: "checkbox",
        message: "What is the license type?",
        name: "license", 
        choices: [
            "Academic Free License v3.0",
            "Apache License 2.0",	
            "Artistic License 2.0",	
            "Boost Software License 1.0",
            "BSD 2-clause Simplified License",	
            "BSD 3-clause New or Revised License",	
            "BSD 3-clause Clear License",
            "Creative Commons License",
            "Creative Commons Zero v1.0", 
            "Creative Commons Attribution 4.0",	
            "Creative Commons Attribution Share Alike 4.0",
            "Do What The F*ck You Want To Public License",
            "Educational Community License v2.0",	
            "Eclipse Public License 1.0",	
            "Eclipse Public License 2.0",	
            "European Union Public License 1.1",	
            "GNU Affero General Public License v3.0",	
            "GNU General Public License family",	
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",	
            "GNU Lesser General Public License Family",
            "GNU Lesser General Public License v2.1",	
            "GNU Lesser General Public License v3.0",	
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",	
            "MIT",
            "Mozilla Public License 2.0",	
            "Open Software License 3.0",	
            "PostgreSQL License",	
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",	
            "zLib License",
            "NONE"
        ]
    },
    {
        type: "input",
        message: "What is the license url?",
        name: "licenseUrl"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub URL?",
        name: "gitUrl"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {   type: "input",
        message: "What is your collaborator's GitHub username (if mulitple seperate names with comma)?",
        name: "collabUsernames"
    },
    {   type: "input",
        message: "What is the link to your collaborator's GitHub Profile (if mulitple seperate names with comma)?",
        name: "collabGitSite"
    },
    {   type: "input",
        message: "What is your collaborator's email (if mulitple seperate names with comma)?",
        name: "collabEmail"
    },
    {
        type: "input",
        message: "What is the command to run tests?",
        name: "test"
    }
    ])
    
    const collabGitUsernames = userResponse.collabUsernames;
    const collabGitNamesArray = collabGitUsernames.split(",");
    var resultContributor;
    //Creates
    for (i=0; i<collabGitNamesArray.length; i++){
        var collabGitNames = collabGitNamesArray[i]
        var collabUrl = userResponse.collabGitSite;
        var collabContact = userResponse.collabEmail;
        var resultContributor = (`[${collabGitNames}] [Email](mailto:${collabContact}) | [GitHub Profile](${collabUrl})`);
    }
 //Appends user input values to README template
var responses = (`

# ${userResponse.title}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Test Instructions](#Tests)
* [Contribute](#Contribute)
* [Questions](#Questions)

## Description
${userResponse.description}

## Installation
${userResponse.installation}

## Usage
${userResponse.usage}

## License
${userResponse.license} ${userResponse.licenseUrl}

## Tests
${userResponse.test}

## Contributors
${resultContributor}

## Questions
Direct any questions, comments, or issues to:
\n[${userResponse.username}] [Email](mailto:${userResponse.email}) | [GitHub Profile](${userResponse.gitUrl})

`)
//Function generates README file
var createReadMe = fs.writeFileSync(path.join('readmeExample.md'), responses )
console.log("Congratulations! Your README file has been generated!")
}
main();