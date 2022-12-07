import { useEffect, useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'
import { Message } from './util/types'
import { socket } from './services/socket-client'
import { getMessages } from './services/apis'

const App = () => {
    const [messages, setMessages] = useState([] as Array<Message | any>)
    const [message, setMessage] = useState('')
    const [socketId, setSocketId] = useState('')

    socket.on('message', (message) => {
        console.log('sss', messages)
        const updatedMessages = [...messages, message]
        console.log(updatedMessages)
        setMessages(updatedMessages)
    })
    useEffect(() => {
        ;(async () => {
            const { messages } = await getMessages()
            setMessages(messages)
        })()

        socket.on('connect', () => {
            setSocketId(socket.id)
        })

        return () => {}
    }, ['do-not-rerender'])

    const sendMessage = async (message: string) => {
        console.log(socket.emit)
        socket.emit('message', { message })
    }

    return (
        <div className='app'>
            <header className='app-header'>Wellom to Redis & React Caht</header>
            <Chat
                messages={messages || []}
                onKeyPress={(event) => {
                    if (event.code === 'Enter') {
                        sendMessage(message)
                        setMessage('')
                    }
                }}
                onChange={(event) => {
                    setMessage(event.target.value)
                }}
                value={message}
                socketId={socketId}
            ></Chat>
        </div>
    )
}

export default App
