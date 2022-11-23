async function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve('This is the data')
            }

            reject(new Error('Id can not be empty'))
        }, 2000)
    })
}

;(async function () {
    try {
        const data = await getData()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
})()
