//First entity

// Function can also be an object constructor
// There's no any observation if this function is constructor or regular function
// But when constructing the entity by the new operator it will create an instance of this object
// As we already saw when we learn Object, we construct an object by the new operator
function Person() {
    return 'Test'
}
const p2 = Person()
const p1 = new Person() // It will create Person object
console.log(p1, p2)
