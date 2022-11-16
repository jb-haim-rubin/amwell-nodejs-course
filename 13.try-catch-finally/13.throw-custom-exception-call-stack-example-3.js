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
    //Called by line 29
    const obj = getObject() //This line (17) will be a part of the stack
}

try {
    getObjectAndAddAge() //This line (21) will be a part of the stack
    console.log(obj) // We will never get into this line
} catch (error) {
    console.log(error.stack)
    debugger
}

function getObjectAndAddAge() {
    //Called by line 21
    getDataAndPrintIt() //This line (29) will be a part of the stack
}
