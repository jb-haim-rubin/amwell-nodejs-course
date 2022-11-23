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
const person = new Person('Noa', 'Rubin')
const getFullName = person.getFullName
console.log(getFullName())
