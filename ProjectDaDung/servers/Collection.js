import React, { useState, useEffect } from 'react'

export const useCollections = () => {
    const [loading, setLoading] = useState(false)
    const [Collections, setCollections] = useState([])
    useEffect(() => {
        setLoading(true)
        const fetchCollections = async () => {
            try {
                const response = await fetch('/api/collections')
                if (!response.ok) {
                    throw new Error('Failed to fetch collections')
                }
                const data = await response.json()
                setCollections(data)
            } catch (error) {
                console.error('Error fetching collections:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchCollections()
    }, [])
    return { loading, Collections }
}