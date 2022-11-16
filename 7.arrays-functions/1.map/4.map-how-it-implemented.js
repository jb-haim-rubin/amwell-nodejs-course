const arrayOfNumbers = [1, 2, 3, 4, 5]

function map(array, funcToCall) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        debugger
        newArray.push(funcToCall(array[i]))
    }
    return newArray
}

const power = map(arrayOfNumbers, function (num) {
    return num * num
})
console.log(power)
