//Reference
const person = {}
function setAndGetPersonName(per) {
    //Object values are pass by reference (as a reference)

    per.firstName = 'Freddie'
    per.lastName = 'Mercury'
    per.age = 45
    return per //Do i must to return it?
}

const person2 = setAndGetPersonName(person)

console.log(person, person2) //What will be the results of this line?
