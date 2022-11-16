const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    print: function (printThisAlso, printThisAlso2) {
        console.log(this.firstName + ' ' + this.lastName)
        console.log(printThisAlso)
        console.log(printThisAlso2)
    },
}

const personObject2 = {
    firstName: 'David',
    lastName: 'Raviv',
}

personObject.print('This is personObject', 'Another text of personObject')

//call to apply function with arguments
//The params here should supply as an array
personObject.print.apply(personObject2, [
    'This is personObject2',
    'Another text of personObject2',
])
//Example of re
//Example: Math.max
