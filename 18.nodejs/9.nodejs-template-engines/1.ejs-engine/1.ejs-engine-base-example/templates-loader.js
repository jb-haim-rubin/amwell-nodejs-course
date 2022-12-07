import { readFile } from 'fs/promises'
import path from 'path'
import ejs from 'ejs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)
export const render = async ({ templateName, params }) => {
    return ejs.renderFile(
        path.join(__dirname, './templates', `${templateName}.html`),
        params,
    )
}
