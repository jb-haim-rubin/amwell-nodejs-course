import { Messages } from '../util/types'

export const getMessages = async (): Promise<{ messages: Messages }> => {
    try {
        const res = await fetch('/api/messages')
        const messages = await res.json()
        return messages
    } catch (error) {
        console.error(error)
        throw error
    }
}
