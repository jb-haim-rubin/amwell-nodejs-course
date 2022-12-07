import express from 'express'
import { compile } from './templates-loader.js'
;(async ({ port }) => {
    const welcomePage = await compile({
        templateName: 'welcome',
    })
    const app = express()

    app.get('/', async (req, res) => {
        res.send(welcomePage({ companyName: 'Amwell' }))
    })

    app.get('/microsoft', (req, res) => {
        res.send(welcomePage({ companyName: 'Microsoft' }))
    })

    app.listen(port, () => {
        console.log(`Listen to port: ${port}`)
    })
})({ port: 3030 })
