const milliseconds = 1000
console.log(new Date())
setTimeout(function () {
    console.log('2', new Date())
}, milliseconds)
console.log('HAIM')
