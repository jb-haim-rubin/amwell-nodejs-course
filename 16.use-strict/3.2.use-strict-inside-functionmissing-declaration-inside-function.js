//The "use strict" directive was new in ECMAScript version 5.

x = 'Robin'
console.log(x)
function getPie() {
    'use strict'
    y = 3.14 // This will cause an error
    return y
}

const p = getPie()
