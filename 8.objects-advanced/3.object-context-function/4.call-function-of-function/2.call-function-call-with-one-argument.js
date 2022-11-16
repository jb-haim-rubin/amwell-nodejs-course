const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    print: function (printThisAlso) {
        console.log(this.firstName + ' ' + this.lastName)
        console.log(printThisAlso)
    },
}

const personObject2 = {
    firstName: 'David',
    lastName: 'Raviv',
}

personObject.print('This is personObject') //We already done this

//call to call function with arguments
personObject.print.call(personObject2, 'This is personObject2')
