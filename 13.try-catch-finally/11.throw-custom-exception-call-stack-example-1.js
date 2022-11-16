const arrayOfObjects = [
    { id: 1, name: 'Eli' },
    { id: 2, name: 'David' },
    { id: 3, name: 'Evyatar' },
]

function getDataById(id) {
    if (!id) {
        throw new Error('id is required')
    }
}

try {
    const obj = getObject() //This line (17) will be a part of the stack
    console.log(obj) // We will never get into this line
} catch (error) {
    console.log(error.stack)
    debugger
}

console.log('Program continued')
