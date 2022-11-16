//The "use strict" directive was new in ECMAScript version 5.
'use strict'

function getPie() {
    y = 3.14 // This will cause an error
    return y
}

const p = getPie()
