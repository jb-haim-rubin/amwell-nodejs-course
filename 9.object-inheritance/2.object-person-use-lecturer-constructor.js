function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}

function Lecturer(firstName, lastName, studentsCount) {
    Person.call(this, firstName, lastName) //Call Person's constructor - apply Person's constructor functionality on Lecturer
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

console.log(myPerson.getFullName())
console.log(myLecturer.getLecturerDetails())
