const obj = {
    firstName: 'Haim',
    lastName: 'Rubin',
    age: 43,
    foo: () => {},
}

//const p = new Person({...})
//const { firstName} = p

//const firstName = obj.firstName   //old syntax
const { firstName: first } = obj // Extract firstName and rename it to first
console.log(first)
