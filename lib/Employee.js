class Employee {

    constructor(name, id, email) {
        this.name =name;
        this.id= id;
        this.email= email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole () {
        return "Employee"
    }
}

module.exports = Employee;




//////////////////////////////////////////////////

// // there are two things inside of a class
// // properties -> inside of the constructors
// // methods -> functions that an Employee can do

// // creating normal objects manually
// const myEmployee = {
//     name: "John",
//     id: 10,
//     email: "john@mail.com",
//     sayName:  () => {
//         return "John"
//     }
// }

// // console.log(myEmployee.sayName())
// console.log(myEmployee)


// // creating objects through classes / blueprints

// const newEmployee = new Employee("John", 10, "john@mail.com")

// console.log(newEmployee.getId())