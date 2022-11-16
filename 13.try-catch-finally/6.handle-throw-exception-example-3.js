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
    Math.max.apply(null, new Array(1000000000))
}

//The program ended because of the exception from the catch
console.log('This line will not print to the console.')
