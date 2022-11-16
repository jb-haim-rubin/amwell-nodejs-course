const arrayOfNumbers = [22, 12, 3, 49, 5, 19]

const maxNumber = arrayOfNumbers.reduce(
    function (num1, num2) {
        debugger
        if (num1 > num2) {
            return num1
        }

        return num2
    },
    //Initial value - this will be the first 'num1'
    78,
)

console.log(maxNumber)
