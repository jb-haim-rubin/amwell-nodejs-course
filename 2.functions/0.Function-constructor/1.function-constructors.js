//Create a function from string
const myFunction = new Function('a', 'b', 'return a * b')

console.log('myFunction(2,5): ', myFunction(2, 5))
