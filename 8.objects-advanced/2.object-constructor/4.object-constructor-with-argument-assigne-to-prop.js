//Creating object constructor is by the familiar keyword 'function'
function Person(firstName) {
    this.firstName = firstName
}

const personObject = new Person('Matan')
console.log(personObject)
