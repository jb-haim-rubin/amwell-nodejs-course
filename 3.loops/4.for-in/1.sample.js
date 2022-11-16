// For more information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
const person = {
    firstName: 'Ido',
    age: 22,
    hobbies: 'Biking',
}

for (let prop in person) {
    //Going through any prop
    console.log(prop, ' = ' + person[prop])
}
