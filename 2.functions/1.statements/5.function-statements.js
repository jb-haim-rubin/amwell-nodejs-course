const myDocument = {
    //Functions can be declare on object's variables
    getElementById: function (id) {
        return 'Lets say it will return the tag reference of: ' + id
    },
    firsName: 'Haim',
}

const res = myDocument.getElementById('id')

console.log(res)
