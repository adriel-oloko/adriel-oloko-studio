import useIpStore from '@/store/useIpStore'
import { useEffect } from 'react'

interface IpResponse {
    ip: string
}

interface GeoResponse {
    city: string | null
    region_code: string | null
    error?: boolean
    reason?: string
}

const useIpAddress = () => {
    // Access the store's current state and the setter function
    const ipData = useIpStore((state) => state.ip)
    const setIpStore = useIpStore((state) => state.setIp)

    useEffect(() => {
        fetch(`/api/get-ip`)
            .then((res) => res.json() as Promise<IpResponse>)
            .then((data) => {
                // Step 1: Fetch the geo details using the IP
                return fetch(`https://ipapi.co/${data.ip}/json/`)
            })
            .then((res) => res.json() as Promise<GeoResponse>)
            .then((geoData) => {
                // Step 2: Set the entire object into your Zustand store
                setIpStore({
                    ip: ipData.ip || '', // keep existing IP or handle appropriately
                    city: geoData.city || 'Unknown',
                    region_code: geoData.region_code || 'Unknown',
                })
            })
            .catch((err) => {
                console.error('Failed to set IP address info:', err)
                setIpStore({}) // Reset to empty object on error
            })
    }, []) // Added dependency for safety

    // Return the data directly from the global store
    return {
        ip: ipData.ip,
        city: ipData.city,
        region_code: ipData.region_code,
    }
}

export default useIpAddress
