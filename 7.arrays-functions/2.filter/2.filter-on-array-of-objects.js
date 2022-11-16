const arrayOfObjects = [
    { id: 1, name: 'Haim' },
    { id: 2, name: 'Sharon' },
    { id: 3, name: 'Rina' },
]

function hasIdNumber2(obj) {
    return obj.id === 2
}

const arrayWithIdNumber2 = arrayOfObjects.filter(hasIdNumber2)
console.log(arrayWithIdNumber2)
