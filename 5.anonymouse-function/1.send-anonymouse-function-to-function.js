function doWork(anonymousFunction) {
    anonymousFunction()
}

doWork(function () {
    console.log('I will called by another function')
})
