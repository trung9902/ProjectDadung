import React, { useEffect, useState } from "react";

export const useWishlist = () => {
    const [wishlist, setWishlist] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchwishlist = async () => {
            try {
                const res = await fetch('/api/wishlist')
                const data = await res.json()
                setWishlist(data)
            } catch (error) {
                setError(error.ReactError || 'An error occurred while fetching wishlist.')
            } finally {
                setLoading(false)
            }
        }
        fetchwishlist()
    }, [])
    return { wishlist, loading, error }
}

