import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { IpInfo } from '@/store/useIpStore'
import useIpStore from '@/store/useIpStore'

type MessageKind = 'visit' | 'purchase'

interface BaseOptions {
    kind: MessageKind
    shouldFetch: boolean
    link: string
    type?: string
    input?: string
    func?: () => void
}

interface VisitOptions extends BaseOptions {
    kind: 'visit'
}

interface PurchaseOptions extends BaseOptions {
    kind: 'purchase'
    itemName: string
    amountPaid: number | string
    currency?: string
}

type UseTelegramMessengerOptions = VisitOptions | PurchaseOptions

// ─── Helpers ────────────────────────────────────────────────────────────────
/*
function getBrowserData(): string {
    if (typeof navigator === 'undefined') return 'N%2FA'
    const ua = encodeURIComponent(navigator.userAgent)
    const lang = encodeURIComponent(navigator.language ?? 'unknown')
    const platform = encodeURIComponent(
        // @ts-expect-error — deprecated but still widely available
        navigator.userAgentData?.platform ?? navigator.platform ?? 'unknown'
    )
    const screen = typeof window !== 'undefined' ? encodeURIComponent(`${window.screen.width}x${window.screen.height}`) : 'N%2FA'
    return [`%0ABROWSER%3A%20${ua}`, `%0ALANGUAGE%3A%20${lang}`, `%0APLATFORM%3A%20${platform}`, `%0ASCREEN%3A%20${screen}`].join('')
}
*/

function getFormattedTime(): string {
    return new Date().toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    })
}

function buildVisitMessage(ip: IpInfo, type: string, input: string, formatted: string): string {
    //const browser = getBrowserData()
    return (
        `%0A%7C----%20VISITOR%20INFO%20----%7C` +
        //`%0A%7C${encodeURIComponent(type)}%3A%20${encodeURIComponent(input)}` +
        //`%0AIP%20ADDRESS%3A%20${encodeURIComponent(ip.ip ?? 'unknown')}` +
        `%0AIP%20COUNTRY%3A%20${encodeURIComponent(ip.country ?? 'unknown')}` +
        `%0AIP%20CITY%3A%20${encodeURIComponent(ip.city ?? 'unknown')}` +
        //browser +
        `%0ATIME%3A%20${encodeURIComponent(formatted)}`
    )
}

function buildPurchaseMessage(ip: IpInfo, itemName: string, amountPaid: number | string, currency: string, formatted: string): string {
    //const browser = getBrowserData()
    return (
        `PURCHASE%20%40
        %0A%7C----%20PURCHASE%20INFO%20----%7C` +
        `%0AITEM%3A%20${encodeURIComponent(itemName)}` +
        `%0AAMOUNT%20PAID%3A%20${encodeURIComponent(`${currency}${amountPaid}`)}` +
        `%0AIP%20COUNTRY%3A%20${encodeURIComponent(ip.country ?? 'unknown')}` +
        `%0AIP%20CITY%3A%20${encodeURIComponent(ip.city ?? 'unknown')}` +
        `%0ATIME%3A%20${encodeURIComponent(formatted)}`
    )
}

// ─── Hook ────────────────────────────────────────────────────────────────────

// ... (keep all imports and helpers the same)

const useTelegramMessenger = (options: UseTelegramMessengerOptions): void => {
    const { kind, shouldFetch, func } = options

    const ipInformation = useIpStore((state) => state.ip)
    const router = useRouter()
    console.log(ipInformation)
    useEffect(() => {
        if (func) func()

        // CHANGE: Wait until shouldFetch is true AND we have IP/Location data
        if (!shouldFetch || !ipInformation.city || !ipInformation.country) {
            return
        }

        const formatted = getFormattedTime()

        let message: string

        if (kind === 'purchase') {
            const { itemName, amountPaid, currency = '$' } = options as PurchaseOptions
            message = buildPurchaseMessage(ipInformation, itemName, amountPaid, currency, formatted)
        } else {
            const { type = 'PAGE', input = router.asPath } = options as VisitOptions
            message = buildVisitMessage(ipInformation, type, input, formatted)
        }

        const telegramUrl = `https://api.telegram.org/bot8611870904:AAH0x6dnBPJZR2johSYj6b3YTMh6SfP7j-E/sendMessage` + `?chat_id=7922831285&text=${message}`

        fetch(telegramUrl, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                if (!res.ok) throw new Error(`Network error: ${res.status}`)
                return res.json()
            })
            .then((data) => {
                if (data.ok === true) {
                    console.log('Telegram message sent:', data)
                } else {
                    console.warn('Telegram responded but ok is not true:', data)
                }
            })
            .catch((err) => {
                console.error('Telegram fetch error:', err)
            })

        // CHANGE: Added ipInformation to the dependency array
    }, [ipInformation])
}

export default useTelegramMessenger
export type { UseTelegramMessengerOptions, VisitOptions, PurchaseOptions, MessageKind }
