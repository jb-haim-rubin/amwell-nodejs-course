// Create an Object by using curly braces allows to create the properties inline
const person = {
    firstName: 'Freddie', //Note that when defining a property inline we need to use ':' instead of '=' and we must have ',' between the the properties
    lastName: 'Mercury',
    address: {
        city: 'London',
        street: '22 Gladstone Avenue, Feltham',
        zipCode: 22319,
    },
}

console.log('Zip code: ', person.address.zipCode)
