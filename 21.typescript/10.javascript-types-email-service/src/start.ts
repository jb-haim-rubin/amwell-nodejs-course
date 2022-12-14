import fastify from 'fastify'
import { EmailInfo } from 'types'
import { emailService } from './bl/email-service'
export const start = async ({ port }) => {
    const app = fastify({ logger: true })
    const emails = emailService()

    app.get('/', (request, reply) => {
        reply.send({ message: 'Hello, Amwell' })
    })

    app.post('/emails', async (request, reply) => {
        try {
            const emailRequest: EmailInfo = request.body as EmailInfo
            const { isHTML, content, ...restEmailInfo } = emailRequest
            const email = isHTML
                ? { ...restEmailInfo, html: content }
                : { ...restEmailInfo, text: content }
            const emailRes = await emails.sendMail(email)
            reply.send(emailRes)
        } catch (error) {
            reply.send(error)
        }
    })

    app.listen(port, () => {
        console.log(`Listen to port: ${port}`)
    })
}
