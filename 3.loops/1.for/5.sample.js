//As long as i < 15 the for loop will run
//In any iteration
let timesThat15DivideIn5 = 0
for (let i = 1; i < 15; i++) {
    if (i % 5 === 0) {
        timesThat15DivideIn5 = timesThat15DivideIn5 + 1
    }
}

console.log(timesThat15DivideIn5)
