//IIFE (Immediately Invoked Function Expression)
//Today, most of the framework bundles (solution) are wrapped with IIFE
;(function () {
    //Function block/body
    var value = 'IIFE'
    console.log('My value: ', value)
})() // This parentheses is to create the function expression,
// if we will run it without the parentheses the JS engine will think that it's a function statement and will expect to name // This parentheses invoke the function

//What will be if we will remove the following commented out?
//console.log(value)
