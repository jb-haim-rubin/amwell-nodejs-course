'use strict'
function printFullNameOfPersonObject() {
    console.log(this.firstName + ' ' + this.lastName)
}

const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    printFullNameOfPersonObject: printFullNameOfPersonObject,
}

const personObject2 = {
    firstName: 'Nisim',
    lastName: 'Aharon',
    printFullNameOfPersonObject: printFullNameOfPersonObject,
}
const $ = function () {
    console.log('$')
}
$.fn2 = function () {
    console.log('fn2')
}
$()
$.fn2()

printFullNameOfPersonObject()

personObject.printFullNameOfPersonObject()
personObject2.printFullNameOfPersonObject()
