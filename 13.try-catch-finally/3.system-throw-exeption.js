/*
    Math entity throw an exception
*/

Math.max.apply(null, new Array(1000000000))

//The program ended because of this exception
console.log('This line will not print to the console.')
