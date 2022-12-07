import React from 'react'
import { OnChangeHandler, OnKeyPressHandler } from '../../util/types'

export const InputBar = ({
    onChange,
    onKeyPress,
    value,
}: {
    onChange: OnChangeHandler
    onKeyPress: OnKeyPressHandler
    value: string
}) => {
    return (
        <div className='chat'>
            <input
                type='text'
                placeholder='Type a message...'
                onChange={(event) => {
                    onChange(event)
                }}
                onKeyPress={onKeyPress}
                value={value}
            />
            <button type='submit'>
                <i className='fas fa-paper-plane'></i>
            </button>
        </div>
    )
}
