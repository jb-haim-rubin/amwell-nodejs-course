export const plus = async (x, y) => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(x + y)
        }, 1000)
    })
}
