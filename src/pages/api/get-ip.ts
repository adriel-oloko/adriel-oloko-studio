import { NextApiRequest, NextApiResponse } from 'next'

export function getClientIp(req: NextApiRequest): string {
    // Vercel and most proxies
    const forwarded = req.headers['x-forwarded-for']
    if (typeof forwarded === 'string') {
        return forwarded.split(',').shift()?.trim() || 'unknown'
    }

    // Direct connection or nginx
    const realIp = req.headers['x-real-ip']
    if (typeof realIp === 'string') {
        return realIp.split('f:')[1]
    }

    // Fallback to socket address
    return req.socket.remoteAddress || 'unknown'
}

export default function handler(req: NextApiRequest, res: NextApiResponse<{ ip: string }>) {
    const ip = getClientIp(req)
    res.status(200).json({ ip })
}
