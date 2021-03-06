import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = (location) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get(`https://enigmatic-badlands-96738.herokuapp.com/products?location=${location}`)
            setProducts(data)
        }
        getProducts()
    }, [location])
    return [products, setProducts]
}
export default useProducts