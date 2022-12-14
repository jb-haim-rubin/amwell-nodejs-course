class Person {
    private firstName: string
    constructor(firstName: string) {
        this.firstName = firstName
    }

    get fullname() {
        return this.firstName
    }
}

const p = new Person('Haim')
console.log(p.fullname)
