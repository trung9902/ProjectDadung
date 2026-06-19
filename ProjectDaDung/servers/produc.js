export const useProductsData = async() => {
    try {
        let res = await fetch('http://localhost:8080/api/products')
        if (res.ok) {
            let data = await res.json()
            return data
        }
    }
    catch (error) {
        console.error('Error fetching products:', error)
        return []
    }
}
