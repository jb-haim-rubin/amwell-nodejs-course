import { initNodemailer } from '../providers/nodemailer'

export const emailService = () => {
    const config = {
        from: process.env.FROM,
        host: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        },
    }

    return initNodemailer(config)
}
