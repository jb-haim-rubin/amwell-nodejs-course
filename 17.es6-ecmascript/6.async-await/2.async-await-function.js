async function getData() {
    return ['This is the data']
}

const d = await getData()

;(async function () {
    const actualData = await getData()
    console.log(actualData)
})()
;(async function () {
    const data = getData()
    const actualData = await data
    console.log(actualData)
})()
;(async function () {
    const data = getData()
    const data2 = getData()
    const actualData = await data
    const actualData2 = await data2
    console.log(actualData, actualData2)
})()
;(async function () {
    const allData = await Promise.all([getData(), getData()])

    console.log(allData)
})()
;(async function () {
    const actualData = await getData()
    const actualData2 = await getData2(actualData)
    console.log(actualData, actualData2)
})()

//Use than in async function
;(async function () {
    getData().than((actualData) => {
        console.log(actualData)
        return getData()
    })
})()
