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
//Every instance has a property with the special name '__proto__'
//This '__proto__' is the object is prototype
//The '__proto__' has access to the object's constructor
const anotherPersonObjectByProtoConstructor =
    new personObject.__proto__.constructor('Avi', 'Daniel', 34)
console.log(anotherPersonObjectByProtoConstructor)
debugger
