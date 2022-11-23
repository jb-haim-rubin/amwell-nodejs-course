import should from 'should'
const persons = [
    {
        firstName: 'Haim',
        lastName: 'Rubin',
        Company: 'NSO Group',
        yearOfBirth: 1978,
    },
    {
        firstName: 'Nisim',
        lastName: 'Yehiam',
        Company: 'Apple',
        yearOfBirth: 1995,
    },
]
const [person] = persons

person.should.have.property('firstName').with.lengthOf(4)
person.should.have.property('firstName', 'Haim')
person.yearOfBirth.should.be.exactly(1978)
persons.should.be.with.lengthOf(3)
