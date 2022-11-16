function readFile(fileName, callback) {
    //read file from disk
    callback(null, data)
}

readFile(fileName, function (error, data) {
    if (error) {
        setError(error)
        return
    }
    setData(data)
})

function readFilePromisify(fileName) {
    return new Promise(function (resolve, reject) {
        readFile(fileName, function (error, data) {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    })
}
//readFilePromisify().then().catch()

function getDataPromise() {
    const data = [
        { id: 1, price: 5.9, name: 'Milk' },
        { id: 1, price: 7.5, name: 'Choclate' },
        { id: 1, price: 10.9, name: 'Apple' },
    ]
    return new Promise(function (resolve, reject) {
        //The promise entity return two function
        //The resolve function we should call it in case of succeeded
        //The reject function we should call it in case of fail
        reject(new Error('Simulate error during getDataPromise'))
    })
}

function getListOfPrices(data) {
    const prices = data.map(function (item) {
        return item.price
    })
    return prices
}

function getTotalPrice(prices) {
    const total = prices.reduce(function (totalPrice, price) {
        return totalPrice + price
    }, 0)

    return total
}

getDataPromise()
    .catch(function (error) {
        console.error(error)
        return []
    })
    .then(function (data) {
        const listOfPrices = getListOfPrices(data)
        return listOfPrices
    })
    .then(function (listOfPrices) {
        const totalPrice = getTotalPrice(listOfPrices)
        return totalPrice
    })
    .then(function (totalPrice) {
        console.log(`Total price: ${totalPrice}`)
    })
