import React, { useState } from 'react'
const useCreateOrder = () => {
    const [loading, setLoading] = useState(false)
    const createOrder = async (payload) => {
        setLoading(true)
        try {
            const res = await fetch('http://localhost:8080/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)

            })
            const data = await res.json()
            return data
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, createOrder }
}
export default useCreateOrder
