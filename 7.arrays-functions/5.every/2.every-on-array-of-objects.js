const arrayOfObjects = [
    { id: 1, name: 'Haim' },
    { id: 2, name: 'Sharon' },
    { id: 3, name: 'Rina' },
]

function haveIdGreaterThan0(obj) {
    return obj.id > 0
}

const isAllObjectsHaveIdGreaterThan0 = arrayOfObjects.every(haveIdGreaterThan0)
console.log(isAllObjectsHaveIdGreaterThan0)
