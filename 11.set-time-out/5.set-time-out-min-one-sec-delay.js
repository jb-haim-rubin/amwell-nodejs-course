const milliseconds = 1000
console.log('first print: ', new Date())

setTimeout(function () {
    console.log('from setTimeout: ', new Date())
}, milliseconds)

for (let i = 0; i < 3000000000; i++) {}
console.log('last print: ', new Date())
