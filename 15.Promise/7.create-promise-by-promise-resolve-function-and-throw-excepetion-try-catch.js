function getData() {
    const data = [
        { id: 1, price: 5.9, name: 'Milk' },
        { id: 1, price: 7.5, name: 'Choclate' },
        { id: 1, price: 10.9, name: 'Apple' },
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
    .then(function (data) {
        //then function of Promise, takes function to call and inject the value to the function
        const listOfPrices = getListOfPrices(data)
        throw new Error(
            'This is my custom error, it is to show you that you must handle exception cases ',
        )
        return listOfPrices
    })
    .catch(function (error) {
        console.error(error)
        return []
    })
    .then(function (listOfPrices) {
        const totalPrice = getTotalPrice(listOfPrices)
        return totalPrice
    })
    .finally(() => {
        console.log('Is this will happen in the end?')
    })
    .then(function (totalPrice) {
        console.log(`Total price: ${totalPrice}`)
    })
