import { useEffect, useState } from 'react'
import { Product } from '../Product/Product'

export const BuyProducts = (props) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('/api/products', {
            headers: {
                token: '12233',
            },
        })
            .then((res) => res.json())
            .then(({ products }) => {
                setProducts(products)
            })
    }, [])
    return (
        <div>
            <div>Products</div>
            <div className='center'>
                {products.map((product) => {
                    const { name, _id, price } = product
                    const selected = !!cart.find((prd) => {
                        return prd._id === _id
                    })

                    return (
                        <Product
                            selected={selected}
                            key={_id}
                            name={name}
                            price={price}
                            onClick={(event) => {
                                const exists = cart.find((prd) => {
                                    return prd._id === _id
                                })
                                if (!exists) {
                                    setCart([...cart, product])
                                } else {
                                    const cartWithoutSelected = cart.filter(
                                        (prd) => {
                                            return prd._id !== _id
                                        },
                                    )
                                    setCart(cartWithoutSelected)
                                }
                            }}
                        />
                    )
                })}
            </div>
            <button
                onClick={async () => {
                    const res = await fetch('/api/checkout', {
                        method: 'POST',
                        headers: {
                            token: '12334',
                        },
                        body: JSON.stringify(cart),
                    })

                    const { url } = await res.json()
                    window.location.href = url
                }}
            >
                Checkout
            </button>
        </div>
    )
}
