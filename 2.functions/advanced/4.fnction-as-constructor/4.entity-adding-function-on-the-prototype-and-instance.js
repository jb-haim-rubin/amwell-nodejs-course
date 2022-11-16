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
//
Person.prototype.printLastName = function () {
    console.log('The last name is:', this.lastName)
}

const p1 = new Person('Freddie', 'Mercury') // It will create Person object
p1.addingFunctionOnSpecificInstance = function () {
    //We already did it when we've talk about object
    console.log(
        'This function will be only in p1, p2 will not have this function',
    )
}

console.log(p1)

p1.printFirstName()
p1.printLastName()

const p2 = new Person('Noam', 'Karmi')

console.log(p2)

/* 
    p1:
Person {firstName: "Sagi", lastName: "Hindi", printFirstName: ƒ, addingFunctionOnSpecificInstance: ƒ}
    addingFunctionOnSpecificInstance: ƒ () //This is the new function that we added on p1
    firstName: "Sagi"
    lastName: "Hindi"
    printFirstName: ƒ ()
[[Prototype]]: Object
    printLastName: ƒ ()
    constructor: ƒ Person(firstName, lastName)


    p2: (p2 doesn't have the 'addingFunctionOnSpecificInstance' that we've added on p1)
Person {firstName: "Noam", lastName: "Karmi", printFirstName: ƒ} 
    firstName: "Noam"
    lastName: "Karmi"
    printFirstName: ƒ ()
[[Prototype]]: Object
    printLastName: ƒ ()
    constructor: ƒ Person(firstName, lastName)

*/
