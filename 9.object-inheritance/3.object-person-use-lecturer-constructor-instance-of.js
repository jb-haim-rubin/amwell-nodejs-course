function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}

function Lecturer(firstName, lastName, studentsCount) {
    Person.call(this, firstName, lastName)
    this.studentsCount = studentsCount
}

Lecturer.prototype.getLecturerDetails = function () {
    return (
        this.firstName +
        ' ' +
        this.lastName +
        ' has ' +
        this.studentsCount +
        ' students '
    )
}

const myPerson = new Person('Avri', 'Nisim')
const myLecturer = new Lecturer('Avri', 'Nisim', 26)

console.log('myPerson instanceof Person:', myPerson instanceof Person)
console.log('myPerson instanceof Object:', myPerson instanceof Object)

console.log('myLecturer instanceof Lecturer: ', myLecturer instanceof Lecturer)
console.log('myLecturer instanceof Object: ', myLecturer instanceof Object)
//What will be here?
console.log('myLecturer instanceof Person: ', myLecturer instanceof Person)

myLecturer.getLecturerDetails()
