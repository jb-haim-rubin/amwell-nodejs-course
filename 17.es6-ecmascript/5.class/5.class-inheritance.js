class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    //prototype function
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}

class Teacher extends Person {}

console.log(new Teacher())
