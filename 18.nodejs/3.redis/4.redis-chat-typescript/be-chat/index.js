import dotenv from 'dotenv'
import http from 'http'
import express from 'express'
import { Server } from 'socket.io'
import { v4 } from 'uuid'
import { initRepositories } from './repositories/index.js'
dotenv.config()

const saveMessage = async (Message, messageInfo) => {
    return await Message.createAndSave(messageInfo)
}
;(async ({ port }) => {
    try {
        const app = express()
        const httpServer = http.createServer(app)
        const io = new Server(httpServer, {
            path: '/socket', // added this line of code
        })

        const socketClients = []
        const { Message } = await initRepositories()

        app.get('/messages', async (req, res) => {
            const messages = await Message.search().returnAll()
            res.json({ messages })
        })

        io.on('connection', (socket) => {
            console.log('a user connected')
            const {
                id,
                handshake: { address },
            } = socket

            const clientInfo = {
                id,
                socket,
                address,
            }

            socketClients[id] = clientInfo
            socket.on('message', async ({ message }) => {
                const savedMessage = await saveMessage(Message, {
                    id: v4(),
                    clientId: clientInfo.id,
                    message,
                    address,
                    datetime: new Date(),
                })

                Object.entries(socketClients).forEach(([_, { socket }]) => {
                    socket.emit('message', savedMessage)
                })
            })
        })

        io.on('disconnect', (socket) => {
            console.log('disconnected')
        })
        httpServer.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.error(error)
    }
})({ port: 7070 })
