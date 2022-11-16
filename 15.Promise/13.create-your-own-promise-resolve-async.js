function getDataPromise(id) {
    const data = [
        { id: 1, price: 5.9, name: 'Milk' },
        { id: 2, price: 7.5, name: 'Choclate' },
        { id: 3, price: 10.9, name: 'Apple' },
    ]
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(data)
        }, 3000)
    })
}

// getDataPromise(2)
//     .then(function (items) {
//         const message = items[0]
//         return message
//     })
//     .then(function (message) {
//         console.log(message)
//     })

function sleep(milliseconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(data)
        }, milliseconds)
    })
}

Promise.all([sleep(2000), sleep(2000), sleep(2000), sleep(2000)]).then()

sleep(2000).then(function () {
    console.log('2000 milliseconds passed')
})
