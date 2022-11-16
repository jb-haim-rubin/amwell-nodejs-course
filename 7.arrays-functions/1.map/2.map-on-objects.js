const arrayOfObjects = [
    { id: 1, name: 'Haim' },
    { id: 2, name: 'Sharon' },
    { id: 3, name: 'Rina' },
]

function getName(obj) {
    return obj.name
}

const names = arrayOfObjects.map(getName)
console.log(names)
