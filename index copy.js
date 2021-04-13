//modified by: Eloy Gonzalez
//modified date: 04/08/2021
//Include packages needed for this application
const Engineer = require('./assets/lib/Engineer');
const Intern = require('./assets/lib/Intern');
const Manager = require('./assets/lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
let TeamMembersHTMLCard =+ [];

//Create an array of questions for user input and  rename our destructured properties like so
const questionsManager = [
    "What is your team manager’s name?",
    "What is your employee Id?",
    "What is your email address?",
    "What is your office number?"
 ];
 //rename our destructured properties like so
const [managerName,managerEmployeeId, manageremail, managerOfficeNumber] = questionsManager 

inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: managerName,
    },
    {
      type: 'input',
      name: 'managerEmployeeId',
      message: managerEmployeeId,
    },
    {
      type: 'input',
      name: 'manageremail',
      message: manageremail,
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: managerOfficeNumber,
    },,
  ])
  .then((answers) => {
    const manager = new Manager(answers.managerName,answers.managerEmployeeId,answers.manageremail,answers.managerOfficeNumber);
  
    TeamMembersHTMLCard.Push(
    `<div class="card col-12 col-sm-4 mt-3">
    <div class="card-header bg-primary">
    <h2>Jared</h2>
    <i class="fas fa-mug-hot"> Manager</i>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}?subject=Contact Engineer">${manager.email}</a></li>
            <li class="list-group-item">Office number:${manager.officeNumber}</li>
          </ul>
    </div>
    </div>`
    )
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

const generateHTML = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://kit.fontawesome.com/7e97b8e52c.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      
      <title>Document</title>
  </head>
  <body>
      <!-- As a link -->
          <div class="card">
              <div class="card-header pt-5  text-center bg-danger">
               <h1>My Team</h1>
              </div>
  
         
              <div class="container">
                  <div class="row">
                      <div class="card col-12 col-sm-4 mt-3">
                          <div class="card-header bg-primary">
                          <h2>Jared</h2>
                          <i class="fas fa-mug-hot"> Manager</i>
                          </div>
                          <div class="card-body">
                              <ul class="list-group">
                                  <li class="list-group-item">ID:1</li>
                                  <li class="list-group-item">Email: <a href="mailto:eloy522752@gmail.com?subject=Contact Engineer">eloy522752@gmail.com</a></li>
                                  <li class="list-group-item">Office number: 1 </li>
                                </ul>
                          </div>
                      </div>
                  <div class="card col-12 col-sm-4 mt-3">
                      <div class="card-header bg-primary">
                      <h2>Alec</h2>
                      <i class="fas fa-glasses"> Engineer</i>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID:2</li>
                              <li class="list-group-item">Email: <a href="mailto:eloy522752@gmail.com?subject=Contact Engineer">eloy522752@gmail.com</a></li>
                              <li class="list-group-item">Github: <a href="https://github.com/eloy522752868">eloy522752868</a> </li>
                            </ul>
                      </div>
                  </div>
                  <div class="card col-12 col-sm-4 mt-3">
                      <div class="card-header bg-primary">
                      <h2>Grace</h2>
                      <i class="fas fa-glasses"> Engineer</i>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID:3</li>
                              <li class="list-group-item">Email: <a href="mailto:eloy522752@gmail.com?subject=Contact Engineer">grace2222@gmail.com</a></li>
                              <li class="list-group-item">Github: <a href="https://github.com/eloy522752868">grace22</a> </li>
                            </ul>
                      </div>
                  </div>
                  <div class="w-100 d-none d-md-block  mt-3 "></div>
                  <div class="card col-12 col-sm-4">
                      <div class="card-header bg-primary">
                      <h2>Tammer</h2>
                      <i class="fas fa-glasses"> Engineer</i>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID:4</li>
                              <li class="list-group-item">Email: <a href="mailto:eloy522752@gmail.com?subject=Contact Engineer">Tammer2222@gmail.com</a></li>
                              <li class="list-group-item">Github: <a href="https://github.com/eloy522752868">Tammer22</a> </li>
                            </ul>
                      </div>
                  </div>
                  <div class="card col-12 col-sm-4 ">
                      <div class="card-header bg-primary">
                      <h2>John</h2>
                      <i class="fas fa-user-graduate"> Intern</i>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID:4</li>
                              <li class="list-group-item">Email: <a href="mailto:eloy522752@gmail.com?subject=Contact Engineer">Jhone2222@gmail.com</a></li>
                              <li class="list-group-item">Github: <a href="https://github.com/eloy522752868">Jhone22</a> </li>
                            </ul>
                      </div>
                  </div>
              </div>
          </div>
  </body>
  </html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


//Create an array of questions for user input and  rename our destructured properties like so
const questions = [
   "What is your Github username?",
   "What is your email address?",
   "What is your project's name?",
   "Please write a short description of your project?",
   "What kind of license should your project have?",
   "What command should be run to install dependencies?",
   "What command should be run to run tests?",
   "What does the user need to know about using the repo?",
   "What does the user need to know about contributing to the repo?"
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
   const filename =  fileName ; 
   fs.writeFile(filename,data, (err) =>
     err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
  
//adding prompt user input
    const [userName, email, projectName, shortDesc, license, installCommand, testCommand, userUse, userContribute] = questions

   inquirer
   .prompt([
     {
       type: 'input',
       name: 'userName',
       message: userName,
     },
     {
      type: 'input',
      name: 'email',
      message: email,
    },
    {
      type: 'input',
      name: 'projectName',
      message: projectName,
    },
    {
      type: 'input',
      name: 'shortDesc',
      message: shortDesc,
    },
     {
      type: 'list',
       message:  license,
       choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'None'],
       default: 'MIT',
       name: 'license',
     },
     {
      type: 'input',
      name: 'installCommand',
      default: 'npm i',
      message: installCommand,
    },
    {
      type: 'input',
      name: 'testCommand',
      default: 'npm test',
      message: testCommand,
    },
    {
      type: 'input',
      name: 'userUse',
      message: userUse,
    },
    {
      type: 'input',
      name: 'userContribute',
      message: userContribute,
    },
   ])
   .then((data) => {
       
  // Using the file system module to read and write the README.md file, I calling the file GENERATED-README.md.
     writeToFile("GENERATED-README.md",generateMarkdownfunc(data))
   });

 }

// Function call to initialize app
init();
