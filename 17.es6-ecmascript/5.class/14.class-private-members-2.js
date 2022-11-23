class Person {
    #fullname
    constructor(firstName, lastName) {
        //When creating an instance this function constructor will be called

        this.#fullname = firstName + ' ' + lastName
    }
    #getIt() {}
    getFullname() {
        this.#getIt()
        return this.#fullname
    }
}
const p = new Person('Noa', 'Rubin')
console.log(p.getFullname())
debugger
//Will fail on compile time
console.log(p.#fullname)
