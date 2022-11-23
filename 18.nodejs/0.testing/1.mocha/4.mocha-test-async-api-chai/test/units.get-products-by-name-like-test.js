import assert from 'assert'
import { getProductLike } from '../app/products-management.js'

describe('App', function () {
    describe('Test (Unit) the get products by name like', function () {
        //Suite of testing
        // Do the following before the next test/'it'

        it(`should return Tomato product when the running getProductLike('Tomato')`, function () {
            const name = 'Tomato'
            const [product] = getProductLike(name)
            const expectedResult = { id: 3, name: 'Tomato' }
            assert.equal(product.id, expectedResult.id)
            assert.equal(product.name, expectedResult.name)
        })

        it(`should return Bread product when the running GET getProductLike('Bread')`, function () {
            const name = 'Bread'
            const [product] = getProductLike(name)
            const expectedResult = { id: 2, name: 'Bread' }
            assert.equal(product.id, expectedResult.id)
            assert.equal(product.name, expectedResult.name)
        })
    })
})
