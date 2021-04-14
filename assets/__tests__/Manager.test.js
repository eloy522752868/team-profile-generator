//modified by: Eloy Gonzalez
//modified date: 04/12/2021
//Include Test needed Manager
const Manager = require('../lib/Manager');

// This test create a new Manager -  add the information to build the html card array.

describe('Manager', () => {
    it('should create a new Manager class', () => {

        const name = 'Eloy';
        const id = 1;
        const email = 'eloy.gonzalez.com';
        const officeNumber = '4049936698';

       //get class
        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getName()).toEqual(name);
        expect(manager.getId()).toEqual(id);
        expect(manager.getEmail()).toEqual(email);
        expect(manager.officeNumber()).toEqual(officeNumber);
        expect(manager.getRole()).toEqual('Manager');
    });
});
