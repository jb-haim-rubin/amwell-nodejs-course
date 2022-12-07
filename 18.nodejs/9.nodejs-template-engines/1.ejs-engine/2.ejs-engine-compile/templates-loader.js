import { readFile } from 'fs/promises'
import path from 'path'
import ejs from 'ejs'
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
//Example of assumption how ejs create their compile
const compileV2 = (content) => {
    return (data) => {
        return ejs.render(content, data)
    }
}

export const compile = async ({ templateName }) => {
    const fileContent = await getTemplate({ fileName: `${templateName}.html` })
    const template = ejs.compile(fileContent)

    return template
}
