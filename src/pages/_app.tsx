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
    const finalUrl = 'https:/zurvia-studios.vercel.app'
    return (
        <>
            <Head>
                <title>Zurvia Studios: Website Development Agency</title>
                <meta name="description" content={"Secure your place in the night. Official ticket reservations for the Morgan Wallen Tour. Experience the 'One Thing At A Time' journey with exclusive PIT and VIP floor access."} />
                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={'MORGAN WALLEN: Still the Problem Tour'} />
                <meta property="og:description" content={"Secure your place in the night. Official ticket reservations for the Morgan Wallen Tour. Experience the 'One Thing At A Time' journey with exclusive PIT and VIP floor access."} />

                {/* Fixed: Pointing to your dynamic OG API route */}
                <meta property="og:image" content={`${finalUrl}/api/og`} />
                <meta property="og:url" content={finalUrl} />

                {/* Twitter/X Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'MORGAN WALLEN: Still the Problem Tour'} />
                <meta name="twitter:description" content="Secure your place in the night. Official ticket reservations for the Morgan Wallen Tour. Experience the 'One Thing At A Time' journey with exclusive PIT and VIP floor access." />
                {/* Fixed: Use config.ogImage or the API route */}
                <meta name="twitter:image" content={`${finalUrl}/api/og`} />
            </Head>

            <main className={`${playfairDisplay.variable} ${bebasNeue.variable} ${cormorantGaramond.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
                <Component {...pageProps} />
            </main>
        </>
    )
}
