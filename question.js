const inquirer = require("inquirer")


const questions =[
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username', 
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailaddress',
        
    },

    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'title',
        
    },
    {
        type: 'input',
        message: 'Please write short description of your project?',
        name: 'description',
        
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices :["mit", "mozilla", "apache-2.0", "wtfpl", "unlicense"]
        
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
        
    },
    {
        type: 'input',
        message: 'What command should be run to  run test?',
        name: 'test',
        
    },
    {
        type: 'input',
        message: 'What does user need to know about contributing the repo?',
        name: 'contribute',
          
    }

]
 

module.exports = questions;