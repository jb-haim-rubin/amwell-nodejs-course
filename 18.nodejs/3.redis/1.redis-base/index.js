import { createClient } from 'redis'

const redisConnect = async ({ url }) => {
    try {
        const client = createClient({ url })

        client.on('error', (err) => {
            console.log('Redis Client Error', err)
        })

        client.on('reconnecting', async () => {
            await client.disconnect()
            throw new Error('Connection failed.')
        })

        await client.connect()
        return client
    } catch (error) {
        console.log(error)
        throw error
    }
}

;(async () => {
    const client = await redisConnect({
        url: 'redis://:@localhost:6379',
    })

    await client.set('company', 'AmWell')

    const company = await client.get('company')

    console.log(`Company: ${company}`)
})()
