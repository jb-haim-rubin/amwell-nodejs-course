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

function getDataAndPrintIt() {
    const obj = getObject() //This line (17) will be a part of the stack
    console.log(obj) // We will never get into this line
}

try {
    getDataAndPrintIt() //This line (21) will be a part of the stack
} catch (error) {
    console.log(error.stack)
    debugger
}

console.log('Program continued')
