import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Playfair_Display, Bebas_Neue, Inter, JetBrains_Mono, Cormorant_Garamond } from 'next/font/google'
import Head from 'next/head'

const playfairDisplay = Playfair_Display({
    variable: '--font-playfair-display',
    subsets: ['latin'],
})
const bebasNeue = Bebas_Neue({
    variable: '--font-bebas-neue',
    subsets: ['latin'],
    weight: ['400'],
})
const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-cormorant-garamond', // This maps to your CSS variable
})

// Configure the Sans font for body and logistics
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter', // This maps to your CSS variable
})

const jetBrainsMono = JetBrains_Mono({
    variable: '--font-jet-brains-mono',
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
    const finalUrl = 'https:/adrielolokostudio.vercel.app'
    return (
        <>
            <Head>
                <title>Adriel Oloko | Blockchain & Full-Stack Engineer</title>
                <meta name="description" content="Adriel Oloko is a blockchain and full-stack engineer building launchpads, dapps, and Web3 interfaces end to end. Smart contracts verified against live chains, frontend shipped with craft." />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Adriel Oloko | Blockchain & Full-Stack Engineer" />
                <meta property="og:description" content="Adriel Oloko is a blockchain and full-stack engineer building launchpads, dapps, and Web3 interfaces end to end. Smart contracts verified against live chains, frontend shipped with craft." />
                <meta property="og:image" content={`${finalUrl}/api/og`} />
                <meta property="og:url" content={finalUrl} />

                {/* Twitter/X Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Adriel Oloko | Blockchain & Full-Stack Engineer" />
                <meta name="twitter:description" content="Adriel Oloko is a blockchain and full-stack engineer building launchpads, dapps, and Web3 interfaces end to end. Smart contracts verified against live chains, frontend shipped with craft." />
                <meta name="twitter:image" content={`${finalUrl}/api/og`} />

                <meta name="google-site-verification" content="9UvLq4B0RleKE9W7_67kK5c5X5xiRt70GmNwho9oXfY" />
            </Head>

            <main className={`${playfairDisplay.variable} ${bebasNeue.variable} ${cormorantGaramond.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
                <Component {...pageProps} />
            </main>
        </>
    )
}
