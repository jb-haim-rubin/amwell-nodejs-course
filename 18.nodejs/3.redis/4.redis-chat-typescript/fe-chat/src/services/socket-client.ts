import { io } from 'socket.io-client'

export const socket = io('/', {
    transports: ['websocket'],
    path: '/socket', // added this line of code
})
