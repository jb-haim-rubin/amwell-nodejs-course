async function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve([2, 3, 4])
            }

            reject(new Error('Id can not be empty'))
        }, 1000)
    })
}

;(async function () {
    try {
        const data = await getData().catch((error) => {
            return error
        })
        console.log(data)
    } catch (error) {}
})()
