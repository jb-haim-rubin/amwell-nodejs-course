function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.print = () => {
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
const p2 = { firstName: 'Toto', lastName: 'Popo', age: 45 }
const print = personObject.print.bind(p2)
print()
