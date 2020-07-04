
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
        case "mozilla":
        licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
        break;
        case "wtfpl":
        licenseBadge ="![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)"
        break;
        case "unlicense":
        licenseBadge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
        break;
        default:
        licenseBadge =false;




    }    
    const header = " ## Table of contents"
    const installationLink = " ## " + "<a name = 'Installation'></a>"
    const usage = " ## " + "<a name ='UsageInstruction'></a>"
    const test = "##" + " <a name = 'TestInstruction'></a>"
    const tableOfContents = " \n * [Installation Instruction](#Installation) \n\n * [Usage Instruction](#UsageInstruction)\n\n  * [Test Instruction](#TestInstruction)\n\n * [Contributing](#contributing)\n\n * [License](#Licence)\n\n * [Questions](#questions)"
    const githubLink =`[${response.username}](https://github.com/${response.username})`
    const installDepend =`\n## Installation\n\n>To install the needed dependencies, run this command:\n\n\`\`\`\n${response.dependencies}\n\`\`\`\n`
    const description = `\n\n## Description\n\n${response.description}\n`;
    const questions = `\n## Questions\n\nIf you have any questions, please open an issue or contact [${response.username}](https://github.com/${response.username}).\n`;
    const testRun = `\n## TestInstruction\n\n>To run tests, run this command:\n\n\`\`\`\n${response.test}\n\`\`\`\n`;
    



    return asyncFileWrite("Readme.md", `# ${response.title} \n\n ${description}\n\n ${licenseBadge}\n\n${header}\n\n${tableOfContents}\n\n ${installationLink}\n\n${usage}\n\n${test}\n\n ${githubLink}\n\n${response.emailaddress}\n\ ${installDepend}\n\n${response.contribute}\n\n ${testRun}\n\n${questions}`)
}