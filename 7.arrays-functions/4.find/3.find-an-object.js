const arrayOfPersons = [
    { name: 'Haim' }, //index 0
    { name: 'Efrat' }, //index 1
    { name: 'Esther' }, //index 2
    { name: 'Ronen' }, //index 3
    { name: 'Eli' }, //index 4
]

const nameOfObjectToFind = 'Ronen'

function objectHasNameOf(obj) {
    return obj.name === nameOfObjectToFind
}

const objectOfRonen = arrayOfPersons.find(objectHasNameOf)

console.log(objectOfRonen)
