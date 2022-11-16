//Creating object constructor is by the familiar keyword 'function'
function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const personObject = new Person('Matan', 'Rubin', 9)
console.log(personObject)
