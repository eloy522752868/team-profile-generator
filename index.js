//modified by: Eloy Gonzalez
//modified date: 04/08/2021
//Include packages needed for this application
//Call Multiple-Classes and inquirer for node prompt and fs for generating html
const Engineer = require('./assets/lib/Engineer');
const Intern = require('./assets/lib/Intern');
const Manager = require('./assets/lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

//Declaring array for building Team HTML Cards
var TeamMembersHTMLCard = [];

//Declaring html to generate
const generateHTML = (teamHtml) =>
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

                  ${teamHtml}

                  </div>
              </div>
          </div>
  </body>
  </html>`;
/*Create an array of questions for user input and  rename our destructured properties for manager.
 I was going to do this for Engineer and Intern but ran out of time do to we two short day's to do this homework.*/
const questionsManager = [
    "What is your team manager’s name?",
    "What is your employee Id?",
    "What is your email address?",
    "What is your office number?"
 ];
 //rename our destructured properties like so
const [managerName,managerEmployeeId, manageremail, managerOfficeNumber] = questionsManager 
//Manager input prompt
const getManager = () => {
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
    //Manager Card build and stored in array. Probably nicer ways to do this but this is how I figured it out.
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
            <li class="list-group-item">Email: <a href="mailto:${manager.email}?subject=Contact Manager">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber1}</li>
          </ul>
    </div>
    </div>`
    )
    //Next call to select if like enter a team
    SelectTeam();

  //  fs.writeFile('indexTeam.html', htmlPageContent, (err) =>
    //  err ? console.log(err) : console.log('Successfully created index.html!')
 //   );

  });
}

const SelectTeam = () => {
   /* Next call to select if like enter a team. 
   If yes prompt will ask if like enter Engineer or intern if not will stop and create index.html base array pended card nd build string to add to html */
  inquirer 
    .prompt([
      {
        type: 'list',
         message: 'Do want to selecet another Team meamber?',
         choices: ['Yes', 'No'],
         default: 'Yes',
         name: 'finish',
       },
    ])
    .then((answer) => {
      if(answer.finish == 'No')
      {
        var teamHtml = "";

        for (let i of TeamMembersHTMLCard) {
          teamHtml += i ;

         }
         const htmlPageContent = generateHTML(teamHtml);
         fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
          );
        console.log("Done...");

      }
      else
      { 
        SelectTypeTeamMember();
      }
    });
  }
     
  const SelectTypeTeamMember = () => {
    //Select team type
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'What time Team member?',
          choices: ['Engineer', 'Intern'],
          default: 'Engineer',
          name: 'TeamType',
        },
      ])
      .then((answer) => {
        switch(answer.TeamType)
        {
           case 'Engineer':
             // code block
             selectEngineer();

          // console.log(TeamMembersHTMLCard);
             break;
           case 'Intern':
             // code block
             selectIntern();
             break;
           default:
             // code block
         }
      });
    }

    const selectEngineer= () => {
      //select Engineer
      inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message:  "What is your team engineer's name?",
        },
        {
          type: 'input',
          name: 'engineerEmployeeId',
          message: "What is your engineer's Id?",
        },
        {
          type: 'input',
          name: 'engineeremail',
          message: "What is your engineer's email address?",
        },
        {
          type: 'input',
          name: 'engineerGitHubUsername',
          message: "What is engineer's GitHub username?",
        },
      ])
        //Build  Engineer html Card
        .then((answer) => {
            const engineer = new Engineer(answer.engineerName,answer.engineerEmployeeId,answer.engineeremail,answer.engineerGitHubUsername);
            TeamMembersHTMLCard.push(
            `<div class="card col-12 col-sm-4 mt-3">
            <div class="card-header bg-primary">
            <h2>${engineer.name}</h2>
            <i class="fas fa-glasses"> Engineer</i>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}?subject=Contact Engineer">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.githubusername}">${engineer.githubusername}</a> </li>
                  </ul>
            </div>
        </div>`)
        SelectTeam();
        });
      }

      const selectIntern= () => {
        //Intern input
        inquirer
        .prompt([
          {
            type: 'input',
            name: 'internName',
            message:  "What is your team intern's name?",
          },
          {
            type: 'input',
            name: 'internEmployeeId',
            message: "What is your intern's Id?",
          },
          {
            type: 'input',
            name: 'internemail',
            message: "What is your intern's email address?",
          },
          {
            type: 'input',
            name: 'internschool',
            message: "What is intern's school?",
          },
        ])
          .then((answer) => {
             //Build  Intern html Card
              const intern = new Intern(answer.internName,answer.internEmployeeId,answer.internemail,answer.internschool);
              TeamMembersHTMLCard.push(
              `<div class="card col-12 col-sm-4 mt-3">
              <div class="card-header bg-primary">
              <h2>${intern.name}</h2>
              <i class="fas fa-user-graduate"> Intern</i>
              </div>
              <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item">ID: ${intern.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${intern.email}?subject=Contact Intern">${intern.email}</a></li>
                      <li class="list-group-item">School: ${intern.school} </li>
                    </ul>
              </div>
          </div>`)
          SelectTeam();
          });
        }
//start function but Manger Input prompt
getManager();

