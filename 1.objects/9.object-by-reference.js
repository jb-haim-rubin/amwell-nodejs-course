// Create an Object by using curly braces allows to create the properties inline
const person = {
    firstName: 'Fred', //Note that when defining a property inline we need to use ':' instead of '=' and we must have ',' between the the properties
    lastName: 'Bulsara',
    address: {
        city: 'London',
        street: '22 Gladstone Avenue, Feltham',
        zipCode: 22319,
    },
}

person.firstName = 'Haim'
const person2 = clone(person)
person2.firstName = 'Haim'
const refPerson = person

refPerson.firstName = 'Freddie'
refPerson.lastName = 'Mercury'

console.log('refPerson: ', refPerson)
//console.log('persion: ', person) //Someone can guess what the results of person?

// dont forget ===
