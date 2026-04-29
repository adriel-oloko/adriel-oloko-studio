import { getProtected } from '@/lib/api'
import { API_URL } from '@/store/store'
import { useState, useEffect, useCallback } from 'react'

// hooks/useFetch.js
export function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        const isAuth = await getProtected()
        console.log(isAuth)

        if (isAuth.error) {
            localStorage.removeItem('token')
            router.push('/login')
        }

        if (isAuth.status) {
            setLoading(true)
            try {
                const response = await fetch(`${API_URL}/${url}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                const json = await response.json()
                const data = await res.json()
                if (data.status) {
                    setTimeout(() => {
                        isLoading(false)
                    }, 5000)
                }
                setData(json)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
    }, [url])

    useEffect(() => {
        fetchData()
    }, [url, fetchData])

    return { data, loading, error, refetch: fetchData }
}
