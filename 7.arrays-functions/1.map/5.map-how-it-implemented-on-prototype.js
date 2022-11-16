const arrayOfNumbers = [1, 2, 3, 4, 5]

Array.prototype.myMap = function (funcToCall) {
    debugger
    const array = this
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        debugger
        newArray.push(funcToCall(array[i], i, array))
    }
    return newArray
}

const power2 = arrayOfNumbers.myMap(function (num, index, array) {
    return num * num
})

console.log(power2)
