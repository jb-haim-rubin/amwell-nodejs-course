class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    //prototype function
    getFullName() {
        debugger
        return this.firstName + ' ' + this.lastName
    }
}
const person = new Person('Noa', 'Rubin')
const getFullName = person.getFullName
console.log(getFullName()) //Will throw an exception - Uncaught TypeError: Cannot read property 'firstName' of undefined
