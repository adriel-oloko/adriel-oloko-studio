'use client'

import { motion } from 'framer-motion'

const STATS = [
    { value: '2+', label: 'launchpads shipped' },
    { value: '5+', label: 'protocols integrated' },
    { value: '100%', label: 'verification green on live RPC' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.15 },
    }),
}

export default function StatsBar() {
    return (
        <section className="w-full mt-4">
            <div className="grid grid-cols-3 divide-x divide-white/50 text-white lg:divide-black/50 xl:divide-white/50">
                {STATS.map(({ value, label }, i) => (
                    <motion.div key={label} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} className="flex flex-col items-center justify-center gap-1 py-4 px-4">
                        <span className="text-5xl leading-none font-cormorant-garamond">{value}</span>

                        <span className="text-xs tracking-widest uppercase text-muted mt-1 text-center mx-auto lg:mx-0 font-sans">{label}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
