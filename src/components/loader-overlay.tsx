/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { Loader2Icon } from 'lucide-react'
import { useEffect, useState } from 'react'

interface LoaderOverlayProps {
    isLoading: boolean
}

export function LoaderOverlay({ isLoading }: LoaderOverlayProps) {
    const [visible, setVisible] = useState(isLoading)

    useEffect(() => {
        if (isLoading) {
            setVisible(true)
        } else {
            // Keep mounted during exit animation, then unmount
            const timer = setTimeout(() => setVisible(false), 400)
            return () => clearTimeout(timer)
        }
    }, [isLoading])

    if (!visible) return null

    return (
        <div className={`fixed inset-0 z-999 flex items-center justify-center bg-[#121212] transition-opacity duration-400 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
            <Loader2Icon className="animate-spin text-white" size={40} strokeWidth={1.5} />
        </div>
    )
}
