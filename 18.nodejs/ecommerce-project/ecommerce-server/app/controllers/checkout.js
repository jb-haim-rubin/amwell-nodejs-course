import fetch from 'node-fetch'
import { v4 } from 'uuid'

export const webhook = (req, res) => {
    res.json({ message: 'Succeeded' })
}

export const checkout = async (req, res) => {
    const { body } = req
    const { cart } = body
    const amount = cart.reduce((sum, { price }) => {
        return sum + price
    }, 0)
    const productName = cart.map(({ name }) => name).join(', ')
    const id = v4()
    try {
        const paymentDetails = await fetch('http://localhost:3131/checkout', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                amount,
                id,
                productName,
                webhookUrl: 'http://localhost:4545/webhook',
                redirectUrl: `http://localhost:3000/payed/${id}`,
            }),
        })

        const resData = await paymentDetails.json()
        const { url } = resData
        res.json({ url })
    } catch (error) {
        res.json({ message: 'Error' })
    }
}

export const checkPaymentStatus = (req, res) => {
    //check status in db
    if (+req.params.id === 1111) {
        res.json({ status: 'Failed' })
        return
    }
    res.json({ status: 'Success' })
}
