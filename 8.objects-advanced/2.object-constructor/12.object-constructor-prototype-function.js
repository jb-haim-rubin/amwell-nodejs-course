//Creating object constructor is by the familiar keyword 'function'
function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype.print = function () {
    console.log(
        this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old',
    )
}

//What happened in memory any time we use the constructor?
const personObject = new Person('Matan', 'Rubin', 9)
personObject.print()
