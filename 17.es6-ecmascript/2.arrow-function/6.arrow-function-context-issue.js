function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.print = function (x, y) {
        console.log('Sent args: ' + x + ' ' + y)
        console.log(
            this.firstName +
                ' ' +
                this.lastName +
                ' is ' +
                this.age +
                ' years old',
        )
    }

    return 'This is the return of the function'
}

const personObject = new Person('Matan', 'Rubin', 9)
const t = Person()
console.log(t)
const p2 = {
    firstName: 'Toto',
    lastName: 'Popo',
    age: 34,
}

personObject.print.call(p2, 3, 4)

personObject.print.apply(p2, [3, 4])
personObject.print()
const print = personObject.print.bind(personObject)
print()
