const res = (function () {
    return {
        value: 100,
        print: function (param) {
            console.log(param)
        },
    }
})()

res.print(res.value)
