import express from 'express'
import bodyParser from 'body-parser'
import { getProductLike, getProductById } from './products-management.js'

export const start = ({ port }) => {
    const app = express()

    app.use(bodyParser.json())

    app.get('/products', (req, res) => {
        const { query } = req
        const { name } = query
        const products = getProductLike(name)

        res.json(products)
    })

    app.get('/products/:id', (req, res) => {
        const { params } = req
        const { id } = params
        // What is the result of this ?
        const product = getProductById(+id)

        res.json(product)
    })

    const server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })

    return { app, server }
}
