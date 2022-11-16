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
    const obj = getObject()
    console.log(obj) // We will never get into this line
} catch (error) {
    console.log(error)
}

console.log('Program continued')
