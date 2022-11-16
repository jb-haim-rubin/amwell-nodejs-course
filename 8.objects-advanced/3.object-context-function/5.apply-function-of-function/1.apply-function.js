const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    print: function () {
        console.log(this.firstName + ' ' + this.lastName)
    },
}

const personObject2 = {
    firstName: 'David',
    lastName: 'Raviv',
}

personObject.print() //We already done this

//Meet the 'apply' function of functions

personObject.print.apply(personObject2)
