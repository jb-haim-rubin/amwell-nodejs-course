type Fun = (value: string, name: string) => void

interface IEventEmitter {
    subscribe(eventName: string, func: Fun): void
    subscribeV2: (eventName: string, func: Function) => void
}

interface IEventEmitter {
    publish(eventName: string, params: any)
}

class EventEmitter implements IEventEmitter {
    subscribe(eventName: string, func: Fun): void {
        throw new Error('Method not implemented.')
    }
    subscribeV2: (eventName: string, func: Function) => void
    publish(eventName: string, params: any) {
        throw new Error('Method not implemented.')
    }
}
