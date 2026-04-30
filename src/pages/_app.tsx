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
    const finalUrl = 'https:/adrielolokostudios.vercel.app'
    return (
        <>
            <Head>
                <title>Adriel Oloko Studio | Web Design & Development Agency</title>
                <meta name="description" content="Adriel Oloko Studio builds clean, conversion-focused websites for small businesses. Web design, development, and digital presence, done right." />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Adriel Oloko Studio | Web Design & Development Agency" />
                <meta property="og:description" content="Adriel Oloko Studio builds clean, conversion-focused websites for small businesses. Web design, development, and digital presence, done right." />
                <meta property="og:image" content={`${finalUrl}/api/og`} />
                <meta property="og:url" content={finalUrl} />

                {/* Twitter/X Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Adriel Oloko Studio | Web Design & Development Agency" />
                <meta name="twitter:description" content="Adriel Oloko Studio builds clean, conversion-focused websites for small businesses. Web design, development, and digital presence, done right." />
                <meta name="twitter:image" content={`${finalUrl}/api/og`} />
            </Head>

            <main className={`${playfairDisplay.variable} ${bebasNeue.variable} ${cormorantGaramond.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
                <Component {...pageProps} />
            </main>
        </>
    )
}
