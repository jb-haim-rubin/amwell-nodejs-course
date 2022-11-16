const param = 'This is the second outside param'

;(function (outsideParam, anotherParam) {
    //Function block/body
    console.log('The first param', outsideParam) //This will be the literal string 'This is the outside params'
    console.log('The second param', anotherParam) //This is a copy of the value of param 'This is the second outside param'
})(
    // This parentheses is to create the function expression,
    // if we will run it without the parentheses the JS engine will think that it's a function statement and will expect to name
    'This is the outside params',
    param,
) // This parentheses invoke the function
