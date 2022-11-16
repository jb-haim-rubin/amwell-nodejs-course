function add(value1, value2) {
    return value1 + value2
}

//If the function doesn't use the context object so we can supply null instead of object
const sum = add.call(null, 10, 15)
console.log(sum)
