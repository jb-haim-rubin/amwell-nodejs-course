// Create new object
const person = new Object()

// Another way to access/create property is by the following operator
// Member Access operator/Dot operator .
// Write object properties
person.firstName = 'Freddie' // It's create the property with the name 'firstName' and set its value to 'Freddie'
person.lastName = 'Mercury' // It's create the property with the name 'firstName' and set its value to 'Mercury'

// Create property that hold an object

person.address = new Object() // It's create the property with the name 'address' and set its value to Object/{}

person.address['street'] = '22 Gladstone Avenue, Feltham'
person.address.city = 'London'
person.address.zipCode = 22319
const person = {
    firstName: 'Haim',
    lastName: 'Rubin',
    address: {
        street: 'Mevo',
        city: 'dsdfs',
        zipCode: 22319,
    },
}
console.log(person)
