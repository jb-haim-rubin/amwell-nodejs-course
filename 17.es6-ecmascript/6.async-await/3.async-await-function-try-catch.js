async function getData() {
    return 'This is the data'
}

;(async function () {
    try {
        const data = await getData()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
})()
