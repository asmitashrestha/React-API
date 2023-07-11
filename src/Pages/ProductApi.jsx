import axios from 'axios'
import { useState } from 'react'

const ProductApi = () => {
    const [products, setProducts] = useState([])
    const fetchProducts = () => {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setProducts(res.data.products)
            })
            console.log("Fteching product details");

    }

    return (
        <div>
            <button onClick={fetchProducts}>fetchProducts</button>
            <ul style={{
                listStyle:"none",
                lineHeight:"1"
            }}>
                <li>
                    {
                        products.map(product =>{
                            return <p key={product.id}>{product.description}</p>
                        })
                    }
                </li>
            </ul>
        </div>
    )
}

export default ProductApi
