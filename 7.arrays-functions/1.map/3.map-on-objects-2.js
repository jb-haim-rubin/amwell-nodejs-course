const arrayOfObjects = [
    { id: 1, firstName: 'Haim', lastName: 'Rubin' },
    { id: 2, firstName: 'Sharon', lastName: 'Aviv' },
    { id: 3, firstName: 'Rina', lastName: 'Hevron' },
]

function getObjectFullName(obj) {
    const newObject = {
        id: obj.id,
        firstName: obj.firstName,
        lastName: obj.lastName,
        fullName: obj.firstName + ' ' + obj.lastName,
    }

    return newObject
}

const arrayOfObjectsWithFullNameProperty = arrayOfObjects.map(getObjectFullName)
console.log(arrayOfObjectsWithFullNameProperty)
