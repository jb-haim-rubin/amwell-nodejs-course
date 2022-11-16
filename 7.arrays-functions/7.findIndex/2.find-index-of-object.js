const arrayOfObjects = [
    { name: 'Haim' }, //index 0
    { name: 'Efrat' }, //index 1
    { name: 'Esther' }, //index 2
    { name: 'Ronen' }, //index 3
    { name: 'Eli' }, //index 4
]

const indexOfRonen = arrayOfObjects.findIndex(function (obj) {
    return obj.name === 'Ronen'
})

console.log(indexOfRonen)
