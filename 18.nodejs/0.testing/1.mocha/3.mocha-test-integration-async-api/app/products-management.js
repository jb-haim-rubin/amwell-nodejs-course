import products from './products.json' assert { type: 'json' }

export const getProductLike = (name) => {
    const filtered = name
        ? products.filter((product) => product.name.includes(name))
        : products
    return filtered
}

export const getProductById = (id) => {
    // What is the result of this ?
    const product = products.find((product) => product.id === id)
    return product
}
