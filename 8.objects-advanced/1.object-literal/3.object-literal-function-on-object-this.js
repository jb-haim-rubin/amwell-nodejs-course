const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    printFullNameOfPersonObject: function () {
        //What is the 'this' inside the function object and for whom it related
        console.log(this)
    },
}

personObject.printFullNameOfPersonObject()
