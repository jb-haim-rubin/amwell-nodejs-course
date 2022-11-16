const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    printFullNameOfPersonObject: function () {
        console.log(this.firstName + ' ' + this.lastName)
    },
}
const myFunctionRef = personObject.printFullNameOfPersonObject

personObject.printFullNameOfPersonObject()
myFunctionRef()
