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
    constructor(studentsCount, firstName, lastName) {
        super(firstName, lastName)

        this.studentsCount = studentsCount
    }

    getFullName() {
        return 'TEACHER'
    }
}

const teacher = new Teacher(28, 'Haim', 'Rubin')
console.log(teacher.firstName)

debugger
console.log(teacher)
