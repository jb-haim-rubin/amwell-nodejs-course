const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    printFullNameOfPersonObject: function () {
        console.log(this.firstName + ' ' + this.lastName)
    },
}

personObject.printFullNameOfPersonObject()
