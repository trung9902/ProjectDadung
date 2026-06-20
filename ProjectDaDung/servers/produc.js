export const getProductsData = async() => {
    try {
        let res = await fetch('http://localhost:8080/api/products')
        if (res.ok) {
            let data = await res.json()
            console.log('Fetched products:', data);
            return data
        }
    }
    catch (error) {
        console.error('Error fetching products:', error)
        return []
    }
}
