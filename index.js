//modified by: Eloy Gonzalez
//modified date: 04/08/2021
//Include packages needed for this application
const Engineer = require('./assets/lib/Engineer');
const Intern = require('./assets/lib/Intern');
const Manager = require('./assets/lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

var TeamMembersHTMLCard = [];

const generateHTML = (TeamMembersHTMLCard) =>
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
                  ${TeamMembersHTMLCard[0]}
                  </div>
              </div>
          </div>
  </body>
  </html>`;
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
    },
  ])
  .then((answers) => {
      console.log(answers)
    const manager = new Manager(answers.managerName,answers.managerEmployeeId,answers.manageremail,answers.managerOfficeNumber);
    console.log(manager.name);
    TeamMembersHTMLCard.push(
    `<div class="card col-12 col-sm-4 mt-3">
    <div class="card-header bg-primary">
    <h2>${manager.name}</h2>
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
    console.log(TeamMembersHTMLCard);
    const htmlPageContent = generateHTML(TeamMembersHTMLCard);

    fs.writeFile('indexTeam.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
   // const htmlPageContent = generateHTML(answers);

   // fs.writeFile('index.html', htmlPageContent, (err) =>
   //   err ? console.log(err) : console.log('Successfully created index.html!')
   // );
  });



// Function call to initialize app
//init();
