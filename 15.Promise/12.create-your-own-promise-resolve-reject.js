function getDataPromise(id) {
    const data = [
        { id: 1, price: 5.9, name: 'Milk' },
        { id: 2, price: 7.5, name: 'Choclate' },
        { id: 3, price: 10.9, name: 'Apple' },
    ]
    return new Promise(function (resolve, reject) {
        //The promise entity return two function
        //The resove function we should call it in case of succeeded
        //The reject function we should call it in case of fail
        if (!id) {
            reject(new Error('id is required'))
            return
        }
        const itemFounded = data.find(function (item) {
            return item.id === id
        })
        resolve(itemFounded, 'sd')
    })
}

function getItemMessage(item) {
    return `The price of ${item.name} is ${item.price}`
}

getDataPromise(2)
    .then(function (item, ss) {
        const message = getItemMessage(item)
        return message
    })
    .then(function (message) {
        console.log(message)
    })
    .catch(function (error) {
        console.error(error)
    })
