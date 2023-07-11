import axios from "axios"
import { useEffect, useState } from "react"

const Useeffectapi = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res => {
            setProducts(res.data.products)
            console.log("Useeffect")
        })
    },[])
  return (
    <div>
      <ul>
        {
            products.map((product)=>{
                return <li key={product.id}>
                    <p >Title: {product.title}</p>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default Useeffectapi
