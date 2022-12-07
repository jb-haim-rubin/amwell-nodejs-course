import dotenv from 'dotenv'
import rockstars from './0.rockstars.json' assert { type: 'json' }
import { initRepositories } from './repositories/index.js'
dotenv.config()

const initialData = async ({ Rockstar }) => {
    const rockstarsEntities = await Promise.all(
        rockstars.map((rockstar) => {
            return Rockstar.createAndSave(rockstar)
        }),
    )

    const savedRockstarsIds = await Promise.all(
        rockstarsEntities.map((rockstarEntity) =>
            Rockstar.save(rockstarEntity),
        ),
    )

    return savedRockstarsIds
}

;(async () => {
    try {
        const { Rockstar } = await initRepositories()
        const exists = await Rockstar.search().return.first()
        if (!exists) {
            initialData({ Rockstar })
        }

        const club27 = await Rockstar.search()
            .where('age')
            .is.equal(27)
            .returnAll()

        console.log(`27 Year Old Club Rockstars:`, club27)
    } catch (error) {
        console.error(error)
    }
})()
