class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    //prototype function
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}

class Teacher extends Person {
    constructor(studentsCount) {
        super()
        debugger
        this.studentsCount = studentsCount
    }
}

const teacher = new Teacher(28, 'Haim', 'Rubin')
console.log(teacher.firstName)
debugger
console.log(teacher)
