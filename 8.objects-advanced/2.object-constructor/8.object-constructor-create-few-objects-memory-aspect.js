//Creating object constructor is by the familiar keyword 'function'
function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.print = function () {
        console.log(
            this.firstName +
                ' ' +
                this.lastName +
                ' is ' +
                this.age +
                ' years old',
        )
    }
}

//What happened in memory any time we use the constructor?
const personObject = new Person('Matan', 'Rubin', 9) //instance #1
const personObject2 = new Person('Noa', 'Rubin', 12) //instance #2

personObject.print()
personObject2.print()
//Any time we're creating an instance it's create a new function
console.log(personObject.print === personObject2.print)
