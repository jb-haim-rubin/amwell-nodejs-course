//The "use strict" directive was new in ECMAScript version 5.
'use strict'

const arrayOfPersons = [
    {
        firstName: 'Haim',
        lastName: 'Rubin',
    },
    {
        firstName: 'Ronen',
        lastName: 'Eliyau',
    },
]

console.log('before delete person in index 1', arrayOfPersons)
debugger

delete arrayOfPersons[1]
console.log('after delete person in index 1', arrayOfPersons)
debugger
