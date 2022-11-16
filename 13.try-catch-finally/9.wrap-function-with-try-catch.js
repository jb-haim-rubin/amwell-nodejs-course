function getObject() {
    let obj
    obj.firstName = 'Haim'
}

try {
    const obj = getObject()
    console.log(obj) // We will never get into this line
} catch (error) {
    console.log(error)
}

console.log('Program continued')
