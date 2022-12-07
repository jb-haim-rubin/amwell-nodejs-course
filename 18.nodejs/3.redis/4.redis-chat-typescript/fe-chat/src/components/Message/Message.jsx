import React from 'react'

export const Message = ({ text, type, datetime }) => {
    return (
        <div className={type === 'incoming' ? 'incoming' : 'outgoing'}>
            <div className='bubble'>{text}</div>
        </div>
    )
}
