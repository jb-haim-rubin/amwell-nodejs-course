const arrayOfNames = ['Haim', 'Efrat', 'Esther', 'Ronen', 'Eli']

const nameToFind = 'Nisim'

function isEqual(name) {
    return name === nameToFind
}

const nameOfNisim = arrayOfNames.find(isEqual)

console.log(nameOfNisim)
