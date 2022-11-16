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
}

console.log('Program continued')
