type ArrayOrObject = [] | {}

function printNameOrName(ref: ArrayOrObject) {
    //The function prototype of arrays 'isArray' return boolean (true/false) indicator if this is an array
    if (Array.isArray(ref)) {
        ref.forEach(function (person) {
            console.log(person.firstName) //Why?
        })
    } else {
        console.log(ref.firstName) //Why?
    }
}
