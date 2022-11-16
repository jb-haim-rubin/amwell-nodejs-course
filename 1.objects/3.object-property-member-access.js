// Create new object
const person = new Object()

// Another way to access/create property is by the following operator
// Member Access operator/Dot operator .
// Write object properties
person.firstName = 'Freddie' // It's create the property with the name 'firstName' and set its value to 'Freddie'
person.lastName = 'Mercury' // It's create the property with the name 'firstName' and set its value to 'Mercury'

// Read object properties
const ma_firstName = person.firstName // Reading the value of the property 'firstName' the value of cma_firstName will be 'Fred'
const ma_lastName = person.lastName // Reading the value of the property 'lastName' the value of cma_lastName will be 'Mercury'

console.log('firstName by the copy:', ma_firstName) // Access by variable copy
console.log('lastName by dot operator: ', person.lastName) // Direct access
console.log('person: ', person)
