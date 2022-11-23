import assert from 'assert'
import { plus } from '../app/index.js'

describe('App', function () {
    describe('Test async plus function', function () {
        //async test
        it('should return 8 when the running plus(2, 6)', async function () {
            const answer = await plus(2, 6)
            assert.equal(answer, 8)
        })
    })
})
