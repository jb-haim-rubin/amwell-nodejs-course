import assert from 'assert'
import { plus } from '../app/index.js'

describe('App', function () {
    describe('Test plus function', function () {
        it('should return 8 when the running plus(2, 6)', function () {
            const answer = plus(2, 6)
            assert.equal(answer, 8)
        })
    })
})
