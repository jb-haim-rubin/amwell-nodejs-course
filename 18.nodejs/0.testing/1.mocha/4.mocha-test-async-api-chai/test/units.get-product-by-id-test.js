import assert from 'assert'
import { getProductLike, getProductById } from '../app/products-management.js'

describe('App', function () {
    describe('Test (Unit) the get product by id', function () {
        //Suite of testing
        // Do the following before the next test/'it'

        it('should return Tomato product when the running getProductById(3)', function () {
            const productId = 3
            const product = getProductById(productId)
            const expectedResult = { id: 3, name: 'Tomato' }
            assert.equal(product.id, expectedResult.id)
            assert.equal(product.name, expectedResult.name)
        })

        it('should return Bread product when the running GET getProductById(2)', function () {
            const productId = 2
            const product = getProductById(productId)
            const expectedResult = { id: 2, name: 'Bread' }
            assert.equal(product.id, expectedResult.id)
            assert.equal(product.name, expectedResult.name)
        })
    })
})
