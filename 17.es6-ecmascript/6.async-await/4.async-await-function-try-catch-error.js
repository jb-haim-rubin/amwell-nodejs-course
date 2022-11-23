async function getData(id) {
    if (id) {
        return 'This is the data'
    }

    throw new Error('Id can not be empty')
}

;(async function () {
    try {
        const data = await getData()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
})()
