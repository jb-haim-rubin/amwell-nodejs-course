// The system act as follow:
// const firstName = person.firstName
// const first = person.firstName

function getPersonFullName({ firstName, lastName }) {
    return firstName + ' ' + lastName
}

function getPersonFullName2({ firstName: first, lastName }) {
    return first + ' ' + lastName
}

const person = {
    firstName: 'Evyatar',
    lastName: 'Rabinovitz',
}

console.log(getPersonFullName(person))
