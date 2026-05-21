import React, { useState, useEffect } from "react";

const useProductsData  = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let res = await fetch('http://localhost:8080/api/products')
                let data = await res.json()
                setProducts(data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    }, [])
    return products;
}
export default useProductsData