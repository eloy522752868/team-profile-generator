switch(answersEmployee.Selection)
{
   case 'Engineer':
     // code block
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
     .then((engineeranswers) => {
       console.log(engineeranswers);
     const engineer = new Engineer(engineeranswers.engineerName,engineeranswers.engineerEmployeeId,engineeranswers.engineeremail,engineeranswers.engineerGitHubUsername);
     console.log(engineeranswers.engineerName);
     TeamMembersHTMLCard.push(
     `<div class="card col-12 col-sm-4 mt-3">
     <div class="card-header bg-primary">
     <h2>${engineer.name}</h2>
     <i class="fas fa-glasses"> Engineer</i>
     </div>
     <div class="card-body">
         <ul class="list-group">
             <li class="list-group-item">ID:3</li>
             <li class="list-group-item">Email: <a href="mailto:${engineer.email}?subject=Contact Engineer">${engineer.email}</a></li>
             <li class="list-group-item">Github: <a href="https://github.com/${engineer.githubusername}">${engineer.githubusername}</a> </li>
           </ul>
     </div>
 </div>`
     )
   });
   console.log(TeamMembersHTMLCard);


   inquirer
   .prompt([
   {
       type: 'input',
       name: 'engineerName',
       message:  "What is your team engineer's name?",
     },
 

   ])
   .then((answersEmployee) =>
   {  
       if (answersEmployee.Selection != 'Done Selecting Team')
       {
           switch(answersEmployee.Selection)
            {
               case 'Engineer':
                 // code block
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
                 .then((engineeranswers) => {
                   console.log(engineeranswers);
                 const engineer = new Engineer(engineeranswers.engineerName,engineeranswers.engineerEmployeeId,engineeranswers.engineeremail,engineeranswers.engineerGitHubUsername);
                 console.log(engineeranswers.engineerName);
                 TeamMembersHTMLCard.push(
                 `<div class="card col-12 col-sm-4 mt-3">
                 <div class="card-header bg-primary">
                 <h2>${engineer.name}</h2>
                 <i class="fas fa-glasses"> Engineer</i>
                 </div>
                 <div class="card-body">
                     <ul class="list-group">
                         <li class="list-group-item">ID:3</li>
                         <li class="list-group-item">Email: <a href="mailto:${engineer.email}?subject=Contact Engineer">${engineer.email}</a></li>
                         <li class="list-group-item">Github: <a href="https://github.com/${engineer.githubusername}">${engineer.githubusername}</a> </li>
                       </ul>
                 </div>
             </div>`
                 )
               });
               console.log(TeamMembersHTMLCard);
                 break;
               case 'Intern':
                 // code block
                 break;
               default:
                 // code block
             }

           employeeSelection  =  answersEmployee.Selection
       }
       else
       {
           employeeSelection  =  answersEmployee.Selection
       }

   });


   const getPetCount = () => {
    inquirer
      .prompt([
        {
          name: "pet_count",
          type: "number",
          message: "How many pets do you own?",
        },
      ])
      .then((answer) => {
        console.log("You own", answer.pet_count, "pets");
        getPetCount3();
      });
    }
    
    const getPetCount3 = () => {
      inquirer
        .prompt([
          {
            name: "pet_count",
            type: "number",
            message: "How many Cats do you own ?",
          },
        ])
        .then((answer) => {
          console.log("You own", answer.pet_count, "pets");
          getPetCount4();
        });
      }
    
      const getPetCount4 = () => {
        inquirer
          .prompt([
            {
              type: 'list',
               message: 'Do want to selecet another Team meamber?',
               choices: ['Yes', 'No'],
               default: 'MIT',
               name: 'finish',
             },
          ])
          .then((answer) => {
            if(answer.finish == 'No')
            {
              console.log("Done...");
    
            }
            else
            { 
              console.log("You own", answer.pet_count, "pets");
              getPetCount3();
            }
    
          });
        }
    getPetCount();