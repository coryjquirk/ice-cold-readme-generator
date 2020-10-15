var fs = require("fs");
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
        type: "input",
        message: "Please enter a project description: ",
        name: "description"
    },
    {
      type: "input",
      message: "Please enter any installation instructions: ",
      name: "installation"
    },
    {
      type: "input",
      message: "Please enter any additional usage information: ",
      name: "usage"
    },
    {
      type: "input",
      message: "Please enter the names of contributors: ",
      name: "contributors"
    },{
      type: "input",
      message: "Please enter testing instructions: ",
      name: "test"
    },
    {
        type: "checkbox",
        message: "Choose a license and hit enter:",
        choices: [
            "The Unlicense",
            "MIT",
            "Apache v2",
            "GNU General Public License v3"
        ],  
        name: "license"
    },
    {
      type: "input",
      message: "Please enter your GitHub username.",
      name: "username"
    },
    {
      type: "input",
      message: "Please enter your email address.",
      name: "email"
    }
])
  .then(function(response) {
    function makeReadme (){
        return `
# ${response.title}

# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Description:
${response.description}
## Installation:
${response.installation}
## Usage: 
${response.usage}
## Contributing:
${response.contributors}
## Tests:
${response.test}
## License:
This is covered under the following license:  ${response.license}
## Questions:
Contact me here with questions...

GitHub: https://github.com/${response.username}

Email: ${response.email}
        `;
    }
  fs.writeFile("README.md", makeReadme(), function(err) {
    if (err) {
        return console.log(err);
    }
  });
});