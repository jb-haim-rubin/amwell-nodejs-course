import express from 'express'
import bodyParser from 'body-parser'
import { initProductsBl } from './bl/products-management.js'
import { connect } from './dal/connect.js'
import {
    authenticationMiddle,
    welcomeApiGet,
    addProductApiPost,
    getProductByIdApiGet,
    getProductsApiGet,
} from './controllers/products.js'

import { checkout, checkPaymentStatus } from './controllers/checkout.js'

const server = async ({ port, uri }) => {
    const app = express()
    app.use(bodyParser.json())

    const connection = await connect(uri)
    const productsBl = initProductsBl(connection)

    app.get('/', welcomeApiGet)

    app.post('/products', authenticationMiddle, addProductApiPost(productsBl))

    app.get(
        '/products/:id',
        authenticationMiddle,
        getProductByIdApiGet(productsBl),
    )

    app.get('/products', authenticationMiddle, getProductsApiGet(productsBl))

    app.post('/checkout', checkout)

    app.get('/check-payment-status/:id', checkPaymentStatus)
    app.listen(port, () => {
        console.log(`E-commerce server is up, on port: ${port} `)
    })
}

server({ port: 4545, uri: 'mongodb://localhost:27017/ecommerce' })
