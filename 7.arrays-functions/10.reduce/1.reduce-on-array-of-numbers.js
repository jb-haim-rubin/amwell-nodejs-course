const arrayOfNumbers = [22, 12, 3, 49, 5, 19]

const matrix = [
    {
        firstName: 'Haim',
    },
    { lastName: 'Rubin' },
    { age: 45 },
]

const obj = matrix.reduce(function (obj, valueKeyPair) {
    return Object.assign(obj, valueKeyPair)
}, {})

// const flat = matrix
//     .reduce(function (flatArray, array) {
//         return flatArray.concat(array)
//     })
//     .reduce(function (all, item) {
//         return all + item
//     })

console.log(flat)

// const maxNumber = arrayOfNumbers.reduce(function (num1, num2) {
//     debugger
//     if (num1 > num2) {
//         return num1
//     }

//     return num2
// })

// console.log(maxNumber)
