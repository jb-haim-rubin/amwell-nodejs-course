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

const personObject = new Person('Matan', 'Rubin', 9)
personObject.print()
