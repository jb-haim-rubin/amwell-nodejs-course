class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    //
    get fullname() {
        return this.firstName + ' ' + this.lastName
    }

    //This is new, it called 'setter'
    //The set syntax binds an object property to a function that will be called when that property is looked up.
    set fullname(value) {
        debugger
        const nameSplited = value.split(' ')
        this.firstName = nameSplited[0]
        this.lastName = nameSplited[1]
    }
}
//Would getter/setter works also on literal object?
//Ltes try
const person1 = new Person('Farrokh', 'Bulsara')

console.log(`Reading the 'fullname' property: ${person1.fullname}`)

person1.fullname = 'Freddie Mercury'

let { fullname } = person1
fullname = 'HAIM RUBIN'
console.log(`Reading the 'fullname' property:  ${person1.fullname}`)
