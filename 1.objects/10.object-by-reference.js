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
    address: {
        city: 'London',
        street: '22 Gladstone Avenue, Feltham',
        zipCode: 22319,
    },
}
console.log('refPerson: ', refPerson)
console.log('person: ', person)
console.log('Is person === refPerson: ', person === refPerson)
