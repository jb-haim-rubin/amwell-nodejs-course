function getData() {
    const arrayOfNumbers = [1, 2, 3, 4, 5]
    return arrayOfNumbers
}

function doSomeChanges(data) {
    const arrayOfNumbersSquared = data.map(function (num) {
        return num * num
    })
    return arrayOfNumbersSquared
}

function printData(data) {
    return data.join(' ')
}

printData(doSomeChanges(getData()))
