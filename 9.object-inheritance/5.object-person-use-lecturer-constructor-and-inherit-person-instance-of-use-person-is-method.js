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

Lecturer.prototype = Object.create(Person.prototype) //Set the prototype of Lecture to be Person

Lecturer.prototype.getLecturerDetails = function () {
    //Now I can call the getFullName function of Person, since it's the prototype of Teacher
    return this.getFullName() + ' has ' + this.studentsCount + ' students '
}

const myPerson = new Person('Avri', 'Nisim')
const myLecturer = new Lecturer('Avri', 'Nisim', 26)

console.log(myLecturer.getLecturerDetails())
debugger
