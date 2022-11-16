const arrayOfObjects = [
    { id: 1, name: 'Haim', scores: 43 },
    { id: 2, name: 'Sharon', scores: 253 },
    { id: 3, name: 'Rina', scores: 405 },
    { id: 4, name: 'Efrat', scores: 2310 },
]

function getScoresDiff(obj1, obj2) {
    return obj1.scores - obj2.scores
}

const arrayOfObjectsSortedByScores = arrayOfObjects.sort(getScoresDiff)
console.log(arrayOfObjectsSortedByScores)
debugger
