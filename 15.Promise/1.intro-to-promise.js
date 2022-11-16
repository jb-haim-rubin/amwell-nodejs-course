function getData() {
    const data = [
        { id: 1, price: 5.9, name: 'Milk' },
        { id: 2, price: 7.5, name: 'Choclate' },
        { id: 3, price: 10.9, name: 'Apple' },
    ]

    return data
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

const data = getTotalPrice(getListOfPrices(getData()))
console.log(data)
