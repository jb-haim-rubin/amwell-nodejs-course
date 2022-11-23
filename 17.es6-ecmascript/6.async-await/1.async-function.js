// Async function will always return promise
async function getData() {
    return 'This is the data'
}
//IIFE - immediately  invoke function expression

;(async function () {
    const data = getData()
    console.log(data)
})()
