/*
    // Try the following statement/s
    try {
        //statement/s
    }
    catch(error) {
        //In case of exception do the following
    }
    finally {

    }
 
 */

try {
    let obj
    obj.firstName = 'Haim'
} catch (error) {
    console.log(error)
} finally {
    //This is the new things
    console.log('This line will be run anyway')
}

console.log('Program continued')
