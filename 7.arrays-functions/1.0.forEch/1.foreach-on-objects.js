const arrayOfObjects = [
    { id: 1, name: 'Haim' },
    { id: 2, name: 'Sharon' },
    { id: 3, name: 'Rina' },
]

function printName(obj) {
    console.log(obj.name)
}

//const names = arrayOfObjects.forEach(printName)
Array.prototype.MyForEach = function (fnToRun) {
    for (let i = 0; i < this.length; i++) {
        fnToRun(this[i])
    }
}
arrayOfObjects.MyForEach((obj) => {
    console.log(obj.name)
})
