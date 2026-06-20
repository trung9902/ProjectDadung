import react, { useState, useEffect } from 'react'
import { getProductsData } from '../servers/produc'
export const useGetProductsData = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProductsData();
                console.log('Fetched products:', data);
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
        fetchProducts();
    }, []);
    return { products, loading };
}