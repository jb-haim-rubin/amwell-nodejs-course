function Person(firstName, lastName) {
    // 'this' keyword inside a function constructor will be the reference to the instance of the object itself
    // Using 'this' here is like to do it with the reference p1.firstName = firstName
    this.firstName = firstName
    this.lastName = lastName
    this.printFirstName = function () {
        console.log('The first name is:', this.firstName)
    }
}
//
Person.prototype.printLastName = function () {
    console.log('The last name is:', this.lastName)
}

const p1 = new Person('Freddie', 'Mercury') // It will create Person object
p1.printFirstName()
p1.printLastName()
