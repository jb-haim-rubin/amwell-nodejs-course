'use strict'

function getFirstName() {
    debugger
    return this.firstName
}
const person = {
    firstName: 'Evyatar',
    getFirstName: getFirstName,
}

const firstName = person.getFirstName()
