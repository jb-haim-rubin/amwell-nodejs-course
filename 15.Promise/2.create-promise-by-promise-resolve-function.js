/*
    The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
    When we use promise the minute we initiate it it starts to run

    Three state to promise:
        1. pending: initial state, neither fulfilled nor rejected.
        2. fulfilled: meaning that the operation was completed successfully.
        3. rejected: meaning that the operation failed.

    The Promise lib is also a function constructor/class that generate object
*/

function readFromDB() {
    return 'data'
}

function sendDataToServer(data) {
    return 'OK'
}
function notifyClient(result) {}

notifyClient(sendDataToServer(readFromDB()))

function getData() {
    const data = {
        items: [
            { id: 1, price: 5.9, name: 'Milk' },
            { id: 2, price: 7.5, name: 'Choclate' },
            { id: 3, price: 10.9, name: 'Apple' },
        ],
    }

    return Promise.resolve(data) //Wrap the results with Promise
}

console.log(getData())
debugger
