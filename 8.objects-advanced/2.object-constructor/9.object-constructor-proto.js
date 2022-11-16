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
//Every Instance has a property with the special name '__proto__'
//This '__proto__' is the object is prototype
console.log(personObject.__proto__) //This is the object is prototype
debugger
