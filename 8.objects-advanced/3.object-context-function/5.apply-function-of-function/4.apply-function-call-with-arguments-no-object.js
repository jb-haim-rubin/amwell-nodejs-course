function add(value1, value2) {
    return value1 + value2
}

const sum = add.apply(null, [10, 15])
console.log(sum)
