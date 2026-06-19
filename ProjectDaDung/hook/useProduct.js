import react, { useState, useEffect } from 'react'
import { useProductsData } from '../servers/produc'
export const useGetProductsData = async() => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await useProductsData();
                setProducts(data);
            }
            catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]);
            }
            finally {
                setLoading(false);
            }
        };
    }, []);
    return { products, loading };
}