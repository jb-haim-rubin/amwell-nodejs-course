const arrayOfNumbers = [1, 2, 3, 4, 5]

Array.prototype.myFilter = function (funcToCall) {
    debugger
    const array = this
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        debugger
        if (funcToCall(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray
}

const power2 = arrayOfNumbers.myFilter(function (num, index, array) {
    return num > 2
})

console.log(power2)
