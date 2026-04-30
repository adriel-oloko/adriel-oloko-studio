import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
        index: '01',
        name: 'Astoria Caterers',
        clientType: 'Food & Hospitality',
        category: 'Website Development',
        summary: `The client had no online presence. Customers couldn't find them, couldn't book, and couldn't see their menu. We built a clean, fast website that gave them a professional digital front door. Inquiries started coming in the week it launched.`,
        url: 'https://astoria-caterers.vercel.app',
        tags: ['Next.js', 'TailwindCSS', 'SEO', 'Booking Flow'],
        metric: 'From zero to online',
        accentColor: '#d97706',
        image: 'Facebook post - 1.png',
    },
    {
        index: '02',
        name: 'Zurvia',
        clientType: 'DeFi / Web3 Startup',
        category: 'Website Development',
        summary: `This client needed a site that explained a complex service in plain language and made new visitors trust them fast. We stripped away the jargon and built something that converts visitors into leads.`,
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
        category: 'Website Development',
        summary: `The client's old site looked nothing like the calibre of work they actually delivered. We rebuilt it from the ground up. The new site now matches the quality of their service and positions them to attract the clients they actually want.`,
        url: 'https://crestpointbank.com',
        tags: ['Next.js', 'Brand Positioning', 'Corporate', 'SEO'],
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
        <section ref={ref} className="w-full bg-gray-50 py-24 px-6 md:px-12 lg:px-20" style={{ fontFamily: 'var(--font-dm-sans)' }}>
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
                        Each project solves a specific business problem. Screenshots are secondary. Results are not.
                    </motion.p>

                    <motion.div variants={headingVariants} className="w-full h-px bg-stone-100 mt-4" />
                </motion.div>

                {/* Cards */}
                <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <motion.div key={project.index} variants={cardVariants} className="group border border-stone-100 rounded-md overflow-hidden transition-colors duration-300 flex flex-col gap-4">
                            <Image src={'/' + project.image} className="rounded-md" width={1200} height={630} alt="" />
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
                    <p className="text-sm text-stone-400">Full case studies available on request.</p>
                    <a href="mailto:adrielloks" className="text-sm font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600 transition-colors">
                        Discuss your project
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
