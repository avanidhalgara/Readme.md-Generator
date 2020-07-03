
const fs =require("fs")
const util = require("util")

const asyncFileWrite = util.promisify(fs.writeFile)
// function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

 module.exports = function(response)

{ var licenseBadge =""
    switch(response.license){
        case "mit":
        licenseBadge ="![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
        break;
        case "apache-2.0":
        licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
        break;


    }    
    
    const installationLink = " ## " + "<a name = 'Installation'>Reference</a>"
    const usage = " ## " + "<a name ='UsageInstruction'>Usage</a>"
    const tableOfContents = "[Installation Instruction](#Installation) \n\n [Usage Instruction](#UsageInstruction)\n\n"


    return asyncFileWrite("Readme.md", `# ${response.title} \n\n ${licenseBadge}\n\n ${response.dependencies}\n\n ${response.test}\n\n${tableOfContents}\n\n ${installationLink}`)
}