const obj = {
    firstName: 'Haim',
    lastName: 'Rubin',
    age: 43,
}

const { firstName, ...objectWithoutFirstName } = obj
console.log(firstName, objectWithoutFirstName)
