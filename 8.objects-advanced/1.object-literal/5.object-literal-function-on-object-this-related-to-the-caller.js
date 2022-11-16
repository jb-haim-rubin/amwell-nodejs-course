const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    printFullNameOfPersonObject: function () {
        console.log(this.firstName + ' ' + this.lastName)
    },
}

const personObject2 = {
    firstName: 'Nisim',
    lastName: 'Aharon',
    printFullNameOfPersonObject: function () {
        console.log(this.firstName + ' ' + this.lastName)
    },
}

personObject.printFullNameOfPersonObject()
personObject2.printFullNameOfPersonObject()
