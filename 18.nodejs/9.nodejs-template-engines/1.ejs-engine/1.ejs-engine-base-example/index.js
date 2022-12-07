import express from 'express'
import { render } from './templates-loader.js'
;(({ port }) => {
    const app = express()
    app.get('/', async (req, res) => {
        const welcomePage = await render({
            templateName: 'welcome',
            params: { companyName: 'Amwell' },
        })
        res.send(welcomePage)
    })

    app.listen(port, () => {
        console.log(`Listen to port: ${port}`)
    })
})({ port: 3030 })
