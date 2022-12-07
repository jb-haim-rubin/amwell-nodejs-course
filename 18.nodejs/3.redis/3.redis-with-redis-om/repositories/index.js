import { Repository } from 'redis-om'
import { RockstarSchema } from '../schema/rockstar.schema.js'
import { client } from '../redis-client.js'

export const initRepository = async ({ schema }) => {
    const repository = new Repository(schema, client)
    await repository.dropIndex() // If already exist drop it
    await repository.createIndex() // Create a primary key for the document
    return client.fetchRepository(schema)
}

export const initRepositories = async () => {
    const schemaDefs = Object.entries({
        RockstarSchema,
    })
    const repositories = await Promise.all(
        schemaDefs.map(async ([schemaName, schema]) => {
            const repo = await initRepository({
                schema,
                client,
            })
            return { [schemaName.replace('Schema', '')]: repo }
        }),
    )

    return repositories.reduce(async (repos, repo) => {
        return {
            ...repos,
            ...repo,
        }
    }, {})
}
