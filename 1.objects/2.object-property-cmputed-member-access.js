// Create new object
const person = new Object()

// Computed Member Access operator [ ... ]
// Write object properties
person.firstName
person['firstName'] = 'Fred' // It's create the property with the name 'firstName' and set its value to 'Fred'
person['lastName'] = 'Bulsara' // It's create the property with the name 'lastName' and set its value to 'Bulsara'

// Read object properties
const cma_firstName = person['firstName'] // Reading the value of the propery 'firstName' the value of cma_firstName will be 'Fred'
const cma_lastName = person['lastName'] // Reading the value of the propery 'lastName' the value of cma_lastName will be 'Bulsara'

console.log('firstName by the copy: ', cma_firstName) // Access by variable copy
console.log('lastName: ', person['lastName']) // Direct access

console.log('person object: ', person)
