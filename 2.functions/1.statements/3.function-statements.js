function add(num1, num2) {
    //Primitive values are pass by value (as a copy)

    const total = num1 + num2
    num1 = 33
    return total //Function return primitive value number
}

const n1 = 12
const n2 = 13
const n1PlusN2 = add(n1, n2)
console.log(n1PlusN2)
