import React, { useState } from 'react'
const useSaveDraft = () => {
    const [loading, setLoading] = useState(false)
    const fetchDraft = async (sectionId, payload) => {
        setLoading(true)
        try {
            const res = await fetch('http://localhost:8080/api/checkout-drafts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sectionId,
                    payload
                })

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
    return { loading, fetchDraft }
}
export default useSaveDraft