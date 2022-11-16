//Functions can be pass to another functions
function getFirstName() {
    return 'Freddie'
}
function getLastName() {
    return 'Mercury'
}
function getPersonObject(getFirstNameFunc, getLastNameFunc) {
    //Functions as a parameters to the function
    const firstName = getFirstNameFunc()
    const lastName = getLastNameFunc()
    return {
        firstName: firstName,
        lastName: lastName,
    }
}
const person = getPersonObject(getFirstName, getLastName)

console.log(person)
