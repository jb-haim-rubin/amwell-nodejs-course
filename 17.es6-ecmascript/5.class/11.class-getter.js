class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    //prototype function
    getFullName() {
        //This is not new for you
        return this.firstName + ' ' + this.lastName
    }

    //This is new, it called 'getter'
    //The get syntax binds an object property to a function that will be called when that property is looked up.
    get fullname() {
        return this.firstName + ' ' + this.lastName
    }
}

const person1 = new Person('Avri', 'Finkelshtain')

console.log(`Calling the 'getFullName' function: `, person1.getFullName())
const c = 'dd'
console.log(`
    Reading the 'fullname' property:  ${person1.fullname} ${c}

`)
