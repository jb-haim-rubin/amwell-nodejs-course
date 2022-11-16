const arrayOfNames = ['Haim', 'Efrat', 'Esther', 'Ronen', 'Eli']

function notEmpty(name) {
    return name !== ''
}

const isAllNamesNotEmpty = arrayOfNames.every(notEmpty)

console.log(isAllNamesNotEmpty)
