import { createClient } from 'redis'
import rockstars from './rockstars.json' assert { type: 'json' }

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

    const ROCKSTARS_KEY = 'rock-stars'
    await client.del(ROCKSTARS_KEY)
    // Set the initial empty json
    await client.json.set(ROCKSTARS_KEY, '.', { category: null })

    // Get the catrgory
    const { category } = await client.json.get(ROCKSTARS_KEY, '$.category')

    // In case od category's null set category to Rockstars
    if (category === null) {
        await client.json.set(ROCKSTARS_KEY, '.category', 'Rockstars')
    }

    // Get the catrgory again and rename the key to 'categoryUpdated'
    const { category: categoryUpdated } = await client.json.get(
        ROCKSTARS_KEY,
        '$.category',
    )
    console.log('categoryUpdated:', categoryUpdated)

    const currentData = await client.json.get(ROCKSTARS_KEY)
    console.log('currentData:', currentData)

    await client.json.set(ROCKSTARS_KEY, '.list', rockstars)

    const dataWithImportedJson = await client.json.get(ROCKSTARS_KEY)
    console.log('dataWithImportedJson:', dataWithImportedJson)

    // Append 'new' rockstars to the list
    await client.json.arrAppend(ROCKSTARS_KEY, '.list', {
        name: 'Robert Plant',
        age: 74,
    })

    // Get & Print the rockstars list
    const allRockstars = await client.json.get(ROCKSTARS_KEY)
    console.log(allRockstars.category, allRockstars.list)

    // Select all rockstars where their age equal to 27
    const club27 = await client.json.get(ROCKSTARS_KEY, {
        // JSON Path: https://goessner.net/articles/JsonPath/
        // JsonPath syntax for Select all rockstars where their age equal to 27
        path: '$.list[?(@.age == 27)]',
    })

    // What if we want only their names?
    console.log(`27 Year Old Club ${allRockstars.category}:`, club27)
})()
