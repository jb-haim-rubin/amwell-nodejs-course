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

getData().then(function (data) {
    //then function of Promise, takes function to call and inject the value to the function
    console.log(data)
})
