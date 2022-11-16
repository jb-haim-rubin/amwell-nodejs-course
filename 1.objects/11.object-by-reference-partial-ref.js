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

const refPerson = {
    firstName: 'Fred', //Note that when defining a property inline we need to use ':' instead of '=' and we must have ',' between the the properties
    lastName: 'Bulsara',
    address: person.address,
    age: 12,
}

person.address.zipCode = 303020

console.log('person: ', person.address)
console.log('refPerson: ', refPerson.address)

// person.firstName = "Freddie"
// console.log('person: ', person)
// console.log('refPerson: ', refPerson)
