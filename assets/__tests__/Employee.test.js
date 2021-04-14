
//modified by: Eloy Gonzalez
//modified date: 04/12/2021
//Include Test needed Employee

const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


// What does this test need to do - When I create a new manager , Engineer , Intern , I want to see that object created, and I want to make sure it's added to the array.

describe('Employee', () => {
    it('should create a new Employee class', () => {

        const name = 'Eloy';
        const id = 1;
        const email = 'eloy.gonzalez.com';
        const officeNumber = 4049936698;

        //get class Manager
        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getName()).toEqual(name);
        expect(manager.getId()).toEqual(id);
        expect(manager.getEmail()).toEqual(email);
    });

    it('should create a new Employee class ', () => {

        const name = 'Eloy';
        const id = 1;
        const email = 'eloy.gonzalez.com';
        const gitHubUser = 'eloy5225';

       //get class Engineer 
        const engineer = new Engineer(name, id, email, gitHubUser);

        expect(engineer.getName()).toEqual(name);
        expect(engineer.getId()).toEqual(id);
        expect(engineer.getEmail()).toEqual(email);
    });

    it('should create a new Intern class ', () => {

        const name = 'Eloy';
        const id = 1;
        const email = 'eloy.gonzalez.com';
        const School = "FIU"

       //get class Intern
        const intern = new Intern(name, id, email, School);

        expect(intern.getName()).toEqual(name);
        expect(intern.getId()).toEqual(id);
        expect(intern.getEmail()).toEqual(email);
    });

})