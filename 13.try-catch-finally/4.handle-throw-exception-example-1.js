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
    let obj
    obj.firstName = 'Haim'
} catch (error) {
    console.log(error)
}

console.log('Program continued')
