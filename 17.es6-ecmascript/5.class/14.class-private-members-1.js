class Person {
    #fullname
    constructor(firstName, lastName) {
        //When creating an instance this function constructor will be called

        this.#fullname = firstName + ' ' + lastName
    }

    getFullname() {
        return this.#fullname
    }
}

// function Person(firstName, lastName) {

//     this.fn = function() {
//         console.log(firstName)
//     }

// }

// const p3 = new Person('Alon', 'Pump')
const p = new Person('Noa', 'Rubin')
console.log(p.getFullname())
