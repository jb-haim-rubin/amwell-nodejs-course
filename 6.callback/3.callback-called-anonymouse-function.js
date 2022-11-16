function doSomething(callback) {
    callback(10)
}

doSomething(function (value) {
    console.log(value)
})

doSomething(function (value) {
    console.log(value * 2)
})
