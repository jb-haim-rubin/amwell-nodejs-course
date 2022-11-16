const personObject = {
    firstName: 'Eli',
    lastName: 'Rubin',
    print: function () {
        console.log(this.firstName + ' ' + this.lastName)
    },
}
//Any function has function called 'bind'
//The 'bind' function is used for keep the context of specific object that we wish it to be
//The 'bind' function return a new function with relation to the supplied object argument
const myFunctionRef = personObject.print.bind(personObject)

myFunctionRef()
