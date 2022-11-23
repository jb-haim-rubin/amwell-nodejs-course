import assert from 'assert'

import fetch from 'node-fetch'
import { start } from '../app/server.js'

describe('App', function () {
    describe('Test (integration) the api /products/:id', function () {
        //Suite of testing
        // Do the following before the next test/'it'

        let server

        before(async () => {
            // runs once before the first test in this block
            server = (await start({ port: 3535 })).server
        })

        after(async () => {
            await server.close()
        })

        //async test
        it('should return Tomato product when the running GET /products/3', async function () {
            const productId = 3
            const res = await fetch(
                `http://localhost:3535/products/${productId}`,
            )
            const product = await res.json()
            const expectedResult = { id: 3, name: 'Tomato' }

            assert.equal(product.id, expectedResult.id)
            assert.equal(product.name, expectedResult.name)
        })

        it('should return Bread product when the running GET /products/2', async function () {
            const productId = 2
            const res = await fetch(
                `http://localhost:3535/products/${productId}`,
            )
            const product = await res.json()
            const expectedResult = { id: 2, name: 'Bread' }

            assert.equal(product.id, expectedResult.id)
            assert.equal(product.name, expectedResult.name)
        })
    })
})
