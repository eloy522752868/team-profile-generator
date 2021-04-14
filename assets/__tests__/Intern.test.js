//modified by: Eloy Gonzalez
//modified date: 04/12/2021
//Include Test needed Intern
/*This test create a new Intern -  add the information to build the html card array.*/
const Intern = require('../lib/Intern');

describe('Intern', () => {

    it('should create a new Intern class ', () => {

        const name = 'Eloy';
        const id = 1;
        const email = 'eloy.gonzalez.com';
        const School = "FIU"
      
        //get class
        const intern = new Intern(name, id, email, School);

        expect(intern.getName()).toEqual(name);
        expect(intern.getId()).toEqual(id);
        expect(intern.getEmail()).toEqual(email);
        expect(intern.getSchool()).toEqual(School);
        expect(intern.getRole()).toEqual('Intern');
    });

})

