const arrayOfNumbers = [1, 2, 3, 4, 5]

function filterGreaterThan2(num) {
    return num > 2
}

const greaterThan2 = arrayOfNumbers.filter(filterGreaterThan2)

console.log(greaterThan2)
