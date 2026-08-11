import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
        index: '01',
        name: 'Web3 Token Launchpad',
        clientType: 'Private DeFi Client',
        category: 'Smart Contracts + Web3 UI',
        summary: `Two live launchpad portals for a private client, unnamed by choice: contracts, permit-based sell flows, and interfaces wired to live RPC. Found version skews and disabled feature paths on both portals before they cost users a cent.`,
        url: 'https://github.com/adriel-oloko',
        tags: ['Solidity', 'EVM', 'Next.js', 'TypeScript'],
        metric: 'Verified green against live RPC',
        accentColor: '#f97316',
        image: 'pools-launchpad.png',
    },
    {
        index: '02',
        name: 'Zurvia',
        clientType: 'DeFi / Web3 Startup',
        category: 'Web3 Frontend',
        summary: `A DeFi startup needed a site that explained a complex protocol in plain language and earned trust from day one. Built as a fast Next.js landing page with Web3-native positioning that converts visitors into leads.`,
        url: 'https://zurvia.vercel.app',
        tags: ['Next.js', 'Web3 UI', 'DeFi', 'Landing Page'],
        metric: 'Clarity for two audiences',
        accentColor: '#0ea5e9',
        image: 'zurvia.png',
    },
    {
        index: '03',
        name: 'Crest Point Bank',
        clientType: 'Bank',
        category: 'Frontend / Product Build',
        summary: `The client's old site looked nothing like the calibre of work they actually delivered. I rebuilt it from the ground up so the digital front door finally matched the service behind it, and positioned the bank to attract the clients it actually wants.`,
        url: 'https://crestpointbank.com',
        tags: ['Next.js', 'Corporate', 'Finance', 'SEO'],
        metric: 'Premium positioning unlocked',
        accentColor: '#16a34a',
        image: 'crestpointbank.png',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const headingVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
}

export default function PortfolioSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="projects" ref={ref} className="w-full bg-gray-50 py-24 px-6 md:px-12 lg:px-20" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col gap-0 mb-16">
                    <motion.p variants={headingVariants} className="text-xs tracking-widest uppercase text-stone-400 mb-3 font-jet-brains-mono">
                        Selected Work
                    </motion.p>

                    <motion.h2 variants={headingVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize  text-stone-900 leading-tight max-w-md font-cormorant-garamond">
                        Work that earns trust
                    </motion.h2>

                    <motion.p variants={headingVariants} className="mt-3 text-sm text-stone-400 max-w-sm leading-relaxed">
                        Each project solves a specific problem. Screenshots are secondary. Live deployments and verified results are not.
                    </motion.p>

                    <motion.div variants={headingVariants} className="w-full h-px bg-stone-100 mt-4" />
                </motion.div>

                {/* Cards */}
                <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <motion.div key={project.index} variants={cardVariants} className="group border border-stone-100 rounded-md overflow-hidden transition-colors duration-300 flex flex-col gap-4">
                            <Image src={'/' + project.image} className="rounded-t-md" width={1200} height={630} alt="" />
                            <div className="text-black flex flex-col gap-2 p-4 pt-0">
                                <h3 className="font-cormorant-garamond text-2xl font-semibold">{project.name}</h3>
                                <p className="text-sm">{project.summary}</p>
                                <Link href={project.url} className="bg-black px-4 pr-5 text-sm py-1.5 w-fit rounded text-white">
                                    Visit
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer note */}
                <motion.div variants={headingVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-stone-100">
                    <p className="text-sm text-stone-400">Client launchpad work is unnamed by choice. Sanitized repos and case studies on request.</p>
                    <a href="mailto:adrielloks@gmail.com" className="text-sm font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600 transition-colors">
                        Let&apos;s talk about your stack
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
