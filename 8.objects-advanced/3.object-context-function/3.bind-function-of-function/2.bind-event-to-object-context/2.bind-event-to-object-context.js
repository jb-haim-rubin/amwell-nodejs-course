const btnRef = document.querySelector('#btn-exp')
const person = {
    id: 123,
    firstName: 'Ronit',
    lastName: 'Timor',
}
// This will bind the person object to the called function
const deletePersonBindedTo = deletePerson.bind(person)
btnRef.addEventListener('click', deletePersonBindedTo) //Assign the function reference to the event

function deletePerson(event) {
    console.log(this)
    debugger
}
