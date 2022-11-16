
const studentsGrades = [ //Array of arrays
    [90, 80, 97],
    [75, 100, 79],
    [89, 60, 100],
]

let maxAvg = 0
for(let studentGrades of studentsGrades) { 
    let totalGrads = 0
    for(let grade of studentGrades) {
        totalGrads += grade
    }
    const avgGrades = totalGrads / studentGrades.length
    if(avgGrades > maxAvg) {
        maxAvg = avgGrades
    }
}

console.log('The max avg grades is: ', maxAvg)