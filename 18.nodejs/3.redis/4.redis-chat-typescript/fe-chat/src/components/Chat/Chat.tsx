import { Message } from '../Message'
import { InputBar } from '../InputBar'
import { OnChangeHandler, OnKeyPressHandler, Messages } from '../../util/types'
import { useEffect, useRef } from 'react'

export const Chat = ({
    messages,
    onChange,
    onKeyPress,
    value,
    socketId,
}: {
    messages: Messages
    onChange: OnChangeHandler
    onKeyPress: OnKeyPressHandler
    value: string
    socketId: string
}) => {
    const bottomRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 10)
    })

    return (
        <div className='container-wrapper'>
            <div className='container'>
                <div className='chatbox'>
                    <div className='top-bar'>
                        <div className='avatar'>
                            <p>V</p>
                        </div>
                        <div className='name'>Voldemort</div>
                        <div className='icons'>
                            <i className='fas fa-phone'></i>
                            <i className='fas fa-video'></i>
                        </div>
                        <div className='menu'>
                            <div className='dots'></div>
                        </div>
                    </div>
                    <div className='middle' ref={bottomRef}>
                        <div className='voldemort'>
                            {messages.map(
                                ({ message, clientId, datetime, id }) => (
                                    <Message
                                        key={id}
                                        text={message}
                                        type={
                                            clientId === socketId
                                                ? 'outgoing'
                                                : 'incoming'
                                        }
                                        datetime={datetime}
                                    />
                                ),
                            )}
                            <div className='typing'>
                                <div className='bubble'>
                                    <div className='ellipsis one'></div>
                                    <div className='ellipsis two'></div>
                                    <div className='ellipsis three'></div>
                                </div>
                            </div>
                        </div>
                        <div className='typing'>
                            <div className='bubble'>
                                <div className='ellipsis one'></div>
                                <div className='ellipsis two'></div>
                                <div className='ellipsis three'></div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-bar'>
                        <InputBar
                            onChange={onChange}
                            onKeyPress={onKeyPress}
                            value={value}
                        />
                    </div>
                </div>
            </div>
            <footer>
                <p>
                    made by <a href='https://codepen.io/juliepark'> julie</a>{' '}
                </p>
            </footer>
        </div>
    )
}
