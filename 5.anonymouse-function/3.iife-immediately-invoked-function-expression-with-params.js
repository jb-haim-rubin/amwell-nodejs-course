const injectedValue = 'This is the injected value'

;(function (value) {
    console.log('Print and die with dependency injection: ' + value)
})(injectedValue)
