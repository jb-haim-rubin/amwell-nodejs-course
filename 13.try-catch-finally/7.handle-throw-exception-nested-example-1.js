/*
    // Try the following statement/s
    try {
        //statement/s
    }
    catch(error) {
        //In case of exception do the following
    }
 
 */

try {
    const value = myUndefinedVariable
    console.log(value) // We will never get into this line
} catch (error) {
    console.log(error)
    try {
        const maxValue = Math.max.apply(null, new Array(1000000000))
        console.log(maxValue) // We will never get into this line
    } catch (error2) {
        console.log(error2)
    }
}

console.log('Program continued')
