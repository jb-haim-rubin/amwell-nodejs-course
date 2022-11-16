function getDataPromise(id) {
    const data = [
        { id: 1, price: 5.9, name: 'Milk' },
        { id: 2, price: 7.5, name: 'Choclate' },
        { id: 3, price: 10.9, name: 'Apple' },
    ]
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (id) {
                resolve(data)
            } else {
                reject(new Error('Id is empty'))
            }
        }, 3000)
    })
}

getDataPromise()
    .then(function (items) {
        const message = items[0]
        return message
    })
    .then(function (message) {
        console.log(message)
    })
    .catch(function (error) {
        console.error(error)
    })
