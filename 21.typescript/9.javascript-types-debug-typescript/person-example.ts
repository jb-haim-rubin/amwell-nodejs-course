class Person {
    private firstName: string
    constructor(firstName: string) {
        this.firstName = firstName
    }

    get fullname() {
        return this.firstName
    }

    set fullname(value) {
        if (value === 'Yossi') {
            return
        }
        this.firstName = value
    }
}

const p = new Person('Haim')
console.log(p.fullname)
p.fullname = 'Yossi'
