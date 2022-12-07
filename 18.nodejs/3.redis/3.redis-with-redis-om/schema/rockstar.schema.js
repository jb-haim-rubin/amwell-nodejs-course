import { Entity, Schema } from 'redis-om'

class Rockstar extends Entity {}

const RockstarProperties = {
    name: { type: 'string' },
    age: { type: 'number' },
}

export const RockstarSchema = new Schema(Rockstar, RockstarProperties, {
    dataStructure: 'JSON',
})
