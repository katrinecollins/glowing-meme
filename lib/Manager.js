const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        // this.name =name;
        // this.id= id;
        // this.email= email;
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;





////////////////////////////

// const newManager = new Manager("Mary", 11, "mary@mail.com", 123)

// console.log(newManager.getId())