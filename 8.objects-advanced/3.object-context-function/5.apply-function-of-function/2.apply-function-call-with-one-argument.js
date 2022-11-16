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

personObject.print('This is personObject')

//call to apply function with arguments
//The params here should supply as an array
personObject.print.apply(personObject2, ['This is personObject2'])

console.log(Math.max.apply(null, [3, 433222, 5, 78, 1000]))
