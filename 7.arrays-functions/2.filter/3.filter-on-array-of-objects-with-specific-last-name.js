const arrayOfObjects = [
    { id: 1, firstName: 'Haim', lastName: 'Rubin' },
    { id: 2, firstName: 'Sharon', lastName: 'Aviv' },
    { id: 3, firstName: 'Rina', lastName: 'Rubin' },
]

function isLastNameRubin(obj) {
    return obj.lastName === 'Rubin'
}

const arrayOfObjectsWithLastNameRubin = arrayOfObjects.map(isLastNameRubin)
console.log(arrayOfObjectsWithLastNameRubin)
