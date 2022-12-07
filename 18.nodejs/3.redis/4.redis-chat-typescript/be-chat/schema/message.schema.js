import { Entity, Schema } from 'redis-om'

class Message extends Entity {}

const MessageProperties = {
    id: { type: 'string' },
    message: { type: 'string' },
    clientId: { type: 'string' },
    datetime: { type: 'date' },
    address: { type: 'string' },
}

export const MessageSchema = new Schema(Message, MessageProperties, {
    dataStructure: 'JSON',
})
