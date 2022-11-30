export const checkout = (req, res) => {
    res.json({ url: 'https://google.com' })
}

export const checkPaymentStatus = (req, res) => {
    //check status in db
    if (+req.params.id === 1111) {
        res.json({ status: 'Failed' })
        return
    }
    res.json({ status: 'Success' })
}
