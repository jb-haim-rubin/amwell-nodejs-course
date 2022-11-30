export const authenticationMiddle = (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        res.status(401).json({ message: 'Unauthorize' })
    } else {
        next()
    }
}

export const welcomeApiGet = (req, res) => {
    res.send('Welcome to e-commerce server')
}

export const addProductApiPost = (productsBl) => async (req, res) => {
    const { body } = req
    const product = await productsBl.addProduct(body)
    res.json({ message: 'Product saved', product })
}

const mapProduct = (product) => {
    return {
        ...product,
        name: `Name: ${product.name}`,
    }
}

const mapProductV2 = (product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                ...product,
                name: `Name: ${product.name}`,
            })
        }, 2000)
    })
}

export const addProductApiPostV2 = (req, res) => {
    const { body } = req
    productsBl
        .addProduct(body)
        .then(mapProduct)
        .then(mapProductV2)
        .then((product) => {
            return mapProduct(product)
        })
        .then((productMapped) => {
            res.json({ message: 'Product saved', product: productMapped })
        })
}

export const getProductByIdApiGet = (productsBl) => async (req, res) => {
    const { id } = req.params
    const product = await productsBl.getProductById(id)
    res.json({ product })
}

export const getProductsApiGet = (productsBl) => async (req, res) => {
    const { query } = req
    const products = await productsBl.getProducts(query)
    res.json({ products })
}

export const getProductsApiGetV2 = function (productsBl) {
    return async function (req, res) {
        const { query } = req
        const products = await productsBl.getProducts(query)
        res.json({ products })
    }
}
