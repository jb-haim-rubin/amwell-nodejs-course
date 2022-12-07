export type Message = {
    id: string
    message: string
    clientId: string
    datetime: Date
}

export type Messages = Array<Message> | []

export type OnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
) => void

export type OnKeyPressHandler = (
    event: React.KeyboardEvent<HTMLElement>,
) => void
