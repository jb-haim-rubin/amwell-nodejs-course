import { Entity, Schema } from 'redis-om'

class Checkout extends Entity {}

const CheckoutProperties = {
    amount: { type: 'number' },
    id: { type: 'string' },
    productName: { type: 'string' },
    webhookUrl: { type: 'string' },
    redirectUrl: { type: 'string' },
    pgId: { type: 'string' },
}

export const CheckoutSchema = new Schema(Checkout, CheckoutProperties, {
    dataStructure: 'JSON',
})
