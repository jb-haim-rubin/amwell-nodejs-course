//First entity

// Function can also be an object constructor
// There's no any observation if this function is constructor or regular function
// But when constructing the entity by the new operator it will create an instance of this object
// As we already saw when we learn Object, we construct an object by the new operator
function Person(firstName) {
    // 'this' keyword inside a function constructor will be the reference to the instance of the object itself
    // Using 'this' here is like to do it with the reference p1.firstName = firstName
    this.firstName = firstName
}

const p1 = new Person('Kostya') // It will create Person object

console.log(p1)
