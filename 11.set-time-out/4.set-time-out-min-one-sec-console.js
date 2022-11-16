const milliseconds = 1000
console.log('first print (1): ', new Date())

setTimeout(function () {
    console.log('from setTimeout (2): ', new Date())
}, milliseconds)
console.log('Last print (3):', new Date())
