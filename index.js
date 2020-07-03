const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
const generateMarkdown = require("./generateMarkdown")
const questions = require("./question")



// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>generateMarkdown(response))
    .catch((err)=> console.error(err)); 


}
// console.log(questions)
// function call to initialize program
init();
