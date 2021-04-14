const Employee = require('./Employee');

class Engineer extends Employee 
{
    constructor(name,id,email,githubusername,getgithub)
    {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubusername = githubusername;
        this.getgithub = getgithub;
    }

    github()
    {
        return this.githubusername;
    }



    getRole = () => 'Engineer';
}

module.exports = Engineer;