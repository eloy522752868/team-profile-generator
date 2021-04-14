const Employee = require('./Employee');

class Manager extends Employee 
{
    constructor(name,id,email,officeNumber)
    {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber1 = officeNumber;
    }

    officeNumber()
    {
        return this.officeNumber1;
    }

    getRole = () => 'Manager';
}

module.exports = Manager;