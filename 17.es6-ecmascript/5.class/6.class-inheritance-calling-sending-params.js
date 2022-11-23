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

const teacher = new Teacher('Haim', 'Rubin')
console.log(teacher.firstName)
debugger
console.log(teacher)
