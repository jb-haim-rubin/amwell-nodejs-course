import { readFile } from 'fs/promises'
import path from 'path'
import ejs, { render } from 'ejs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getTemplate = async ({ fileName }) => {
    const templateString = await readFile(
        path.join(__dirname, './templates', fileName),
        'utf-8',
    )
    return templateString
}

export const compile = async ({ fileName }) => {
    const fileContent = await getTemplate({ fileName })
    const template = ejs.compile(fileContent, {
        escape: function (content) {
            return content
        },
    })

    return template
}

export const getCheckout = async ({ id }) => {
    const style = await getTemplate({
        fileName: '/credit-card/credit-card.css',
    })
    const html = await getTemplate({
        fileName: '/credit-card/credit-card.html',
    })
    const script = await getTemplate({
        fileName: '/credit-card/credit-card.js',
    })
    const htmlRendered = ejs.render(html, { id })
    const compiled = await compile({ fileName: '/credit-card/checkout.ejs' })

    const htmlString = compiled({ style, html: htmlRendered, script })

    return htmlString
}
