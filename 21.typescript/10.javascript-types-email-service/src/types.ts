export type EmailInfoBase = {
    to: string
    subject: string
}

export type EmailInfo = EmailInfoBase & {
    body: string
    isHTML: boolean
    content: string
}

export type NodemailerEmailInfo = EmailInfoBase & {
    text: string | undefined
    html: string | undefined
}
