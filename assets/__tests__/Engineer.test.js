
//modified by: Eloy Gonzalez
//modified date: 04/12/2021
//Include Test needed Engineer
/*This test create a new Engineer -  add the information to build the html card array.*/

const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create a new Employee class ', () => {

        const name = 'Eloy';
        const id = 1;
        const email = 'eloy.gonzalez.com';
        const gitHubUser = 'eloy5225';

       //get class
        const engineer = new Engineer(name, id, email, gitHubUser);

        expect(engineer.getName()).toEqual(name);
        expect(engineer.getId()).toEqual(id);
        expect(engineer.getEmail()).toEqual(email);
        expect(engineer.github()).toEqual(gitHubUser);
        expect(engineer.getRole()).toEqual('Engineer');
    });

})