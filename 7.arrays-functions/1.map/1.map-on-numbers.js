const arrayOfNumbers = [1, 2, 3, 4, 5]

function add1ToValue(num) {
    return num + 1
}

const arrayOfNumbersPlus1 = arrayOfNumbers.map(add1ToValue)

console.log(arrayOfNumbersPlus1)
