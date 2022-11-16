const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    printFullNameOfPersonObject: function (obj) {
        console.log(obj.firstName + ' ' + obj.lastName)
    },
}
//Who call the function?
personObject.printFullNameOfPersonObject(personObject)
