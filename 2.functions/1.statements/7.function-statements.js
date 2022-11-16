//Javascript closure

function add(value1) {
    //Closure to value1 - Closure a closure gives you access to an outer function’s scope from an inner function.

    const fn = function (value2) {
        return value1 + value2
    }

    value1 = 5
    return fn
}

const res = add(4)

console.log(res(4)) //Can someone guess what is the result of res?
