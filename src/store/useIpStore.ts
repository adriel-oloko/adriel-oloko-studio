import { create } from 'zustand'

interface IpInfo {
    ip?: string
    city?: string
    country?: string
    region_code?: string
    timezone?: string
    org?: string
    postal?: string
    latitude?: number
    longitude?: number
}

interface IpStore {
    ip: IpInfo
    setIp: (ip: IpInfo) => void
}

const useIpStore = create<IpStore>((set) => ({
    ip: {},
    setIp: (ip) => set({ ip }),
}))

export default useIpStore
export type { IpInfo, IpStore }
