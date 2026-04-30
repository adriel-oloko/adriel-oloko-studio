// src/pages/api/og.tsx (Move or rename your file to this)
import { ImageResponse } from 'next/og'

export const config = {
    runtime: 'edge',
}

// In Pages Router, the handler MUST be the default export
export default function handler() {
    try {
        return new ImageResponse(
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    background: '#0d0b09',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 16,
                    textAlign: 'center',
                }}>
                <p style={{ color: '#b8965a', fontSize: 64, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Adriel Oloko Studio:</p>
                <p style={{ color: '#b8965a', fontSize: 48, fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>Web Design & Development Agency</p>
            </div>,
            { width: 1200, height: 630 }
        )
    } catch (e: unknown) {
        return new Response(`Failed to generate the image: ${e}`, { status: 500 })
    }
}
