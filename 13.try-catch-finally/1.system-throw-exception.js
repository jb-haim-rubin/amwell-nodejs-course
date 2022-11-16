/*
    The javascript system throw an exceptions for invalid statements that the system don't/doesn't want to deal with them
    Exception handling is in general slower than normal evaluation
    
    For example 
    1. null reference: 
        let obj
        obj.firstName = "Haim"
        
        The result:
            Uncaught TypeError: Cannot set properties of undefined (setting 'firstName')

    2. Read variable that's not defined
        const value = myUndefinedVariable

        The result:
            Uncaught ReferenceError: myUndefinedVariable is not defined

    Math entity throw custom exception
    3. Math.max
        Math.max.apply(null, new Array(1000000000));
        
        The result:
        Uncaught RangeError: Maximum call stack size exceeded

*/

let obj
obj.firstName = 'Haim'

//The program ended because of this exception
console.log('This line will not print to the console.')
