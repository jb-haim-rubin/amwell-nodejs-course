//Hoisting is JavaScript's default behavior of moving declarations to the top.
//In JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared.
console.log(x)
calculate()

function calculate() {
    console.log('This is the unit code that will be run')
    //We can return here any value, primitives of complex like object/function/...
    //If we don't return value so the system will return by default 'undefined'
}

var x = 'Haim'

console.log(x)
