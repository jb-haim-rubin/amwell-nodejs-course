//First entity

// Function can also be an object constructor
// There's no any observation if this function is constructor or regular function
// But when constructing the entity by the new operator it will create an instance of this object
// As we already saw when we learn Object, we construct an object by the new operator
function Person(firstName, lastName) {
    // 'this' keyword inside a function constructor will be the reference to the instance of the object itself
    // Using 'this' here is like to do it with the reference p1.firstName = firstName
    this.firstName = firstName
    this.lastName = lastName
    this.printFirstName = function () {
        console.log('The first name is: ', this.firstName)
    }
}
// This is what's new - adding function on the prototype of the object
//Benefit - prototype function are created once on the memory and not like when having then on each instance
Person.prototype.printLastName = function () {
    console.log('The last name is:', this.lastName)
}

const p1 = new Person('Freddie', 'Mercury') // It will create Person object

console.log(p1)

p1.printFirstName()
p1.printLastName()
