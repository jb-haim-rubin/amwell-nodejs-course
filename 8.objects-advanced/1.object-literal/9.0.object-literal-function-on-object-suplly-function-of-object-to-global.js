const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    printFullNameOfPersonObject: function () {
        debugger
        console.log(this)
    },
}

const myFunctionRef = personObject.printFullNameOfPersonObject

personObject.printFullNameOfPersonObject()

myFunctionRef()
