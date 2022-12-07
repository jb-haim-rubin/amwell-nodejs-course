import fastify from 'fastify'
import urlEncoded from '@fastify/formbody'
import { v4 } from 'uuid'
import { initRepositories } from './repositories/index.js'
import { compile, getCheckout } from './templates-loader.js'
import fetch from 'node-fetch'
;(async ({ port }) => {
    const app = fastify()
    app.register(urlEncoded)
    const { Checkout } = await initRepositories()
    const exists = await Checkout.search().return.first()

    app.get('/', async (request, reply) => {
        reply.send('Amwell')
    })

    app.post('/checkout', async (request, reply) => {
        const { amount, id, productName, webhookUrl, redirectUrl } =
            request.body
        const pgId = v4()
        await Checkout.createAndSave({
            pgId,
            amount,
            id,
            productName,
            webhookUrl,
            redirectUrl,
        })

        reply.send({
            id: pgId,
            url: `http://localhost:${port}/checkout/${pgId}`,
        })
    })

    app.get('/checkout/:id', async (request, reply) => {
        const checkoutPage = await getCheckout(request.params)
        reply.header('Content-Type', 'text/html').send(checkoutPage)
    })

    app.post('/pay/:id', async (request, reply) => {
        const { id } = request.params
        const checkout = await Checkout.search()
            .where('pgId')
            .eq(id)
            .return.first()
        try {
            const webhookResponse = await fetch(checkout.webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(checkout),
            })

            reply.redirect(checkout.redirectUrl)
        } catch (err) {
            reply.status(500).send('Error')
        }
    })

    const start = async () => {
        try {
            await app.listen({ port })
        } catch (err) {
            app.log.error(err)
            process.exit(1)
        }
    }
    start()
})({ port: 3131 })
