function getData() {
    const data = [
        { id: 1, price: 5.9, name: 'Milk' },
        { id: 2, price: 7.5, name: 'Choclate' },
        { id: 3, price: 10.9, name: 'Apple' },
    ]

    return Promise.resolve(data)
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

getData()
    .then(getListOfPrices) //Pass the function reference instead of anonymous function
    .then(getTotalPrice) //Pass the function reference instead of anonymous function
    .then(function (totalPrice) {
        console.log(`Total price: ${totalPrice}`)
    })

//Why this is working? because the funcations are getting value and returns new value
