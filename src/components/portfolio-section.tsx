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
        summary: 'To combat lost bookings, a professional website with menu showcases and inquiry forms was built, establishing a credible online presence.',
        problem: 'No online booking system, zero SEO presence, and a WhatsApp number as the only contact channel.',
        outcome: 'Built a conversion-focused site with an inquiry form and menu showcase, giving Astoria a credible digital storefront.',
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
        summary: `We transformed a consultant's brand by replacing a weak site with an editorial-quality presence that commands premium pricing and authority.`,
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
        summary: 'An International consulting firm needed a website that positioned them as a premium advisory brand, not just another local agency.',
        problem: 'Their existing presence undercut their pricing because the design did not match the calibre of clients they were targeting.',
        outcome: 'Delivered a refined, editorial-quality site that communicates authority, trust, and competence from the first scroll.',
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
                            <div className="hidden flex-col lg:flex-row">
                                {/* Left accent strip */}
                                <div className="w-full lg:w-1 h-1 lg:h-auto shrink-0 transition-opacity duration-300 opacity-40 group-hover:opacity-100" style={{ backgroundColor: project.accentColor }} />

                                {/* Main content */}
                                <div className="flex flex-col md:flex-row gap-0 flex-1">
                                    {/* Index + meta */}
                                    <div className="flex flex-col justify-between gap-6 px-8 py-8 md:w-56 shrink-0 border-b md:border-b-0 md:border-r border-stone-100">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-xs text-stone-300 tracking-widest" style={{ fontFamily: 'var(--font-jet-brains-mono)' }}>
                                                {project.index}
                                            </span>
                                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-stone-50 text-stone-400 border border-stone-100 self-start" style={{ fontFamily: 'var(--font-jet-brains-mono)' }}>
                                                {project.category}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-stone-400 uppercase tracking-widest">Client type</span>
                                            <span className="text-sm text-stone-600 font-medium">{project.clientType}</span>
                                        </div>
                                    </div>

                                    {/* Core content */}
                                    <div className="flex flex-col gap-5 px-8 py-8 flex-1">
                                        <div className="flex flex-col gap-1.5">
                                            <h3
                                                className="text-xl font-semibold text-stone-900 leading-snug"
                                                style={{
                                                    fontFamily: 'var(--font-cormorant-garamond)',
                                                    fontSize: '1.5rem',
                                                }}>
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-stone-500 leading-relaxed">{project.summary}</p>
                                        </div>

                                        <div className="flex flex-col gap-2 pl-3 border-l-2 border-stone-100">
                                            <span className="text-xs text-stone-400 uppercase tracking-widest">The problem</span>
                                            <p className="text-sm text-stone-600 leading-relaxed">{project.problem}</p>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <span className="text-stone-300 text-sm leading-snug mt-0.5">→</span>
                                            <p className="text-sm font-medium text-stone-700">{project.outcome}</p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-xs px-2.5 py-1 rounded bg-stone-50 text-stone-400 border border-stone-100" style={{ fontFamily: 'var(--font-jet-brains-mono)' }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: metric + CTA */}
                                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-between gap-4 px-8 py-8 lg:w-52 shrink-0 border-t lg:border-t-0 lg:border-l border-stone-100">
                                        <div className="flex flex-col gap-1 lg:items-end">
                                            <span className="text-xs text-stone-400 uppercase tracking-widest">Result</span>
                                            <span className="text-sm font-semibold leading-snug text-stone-800 lg:text-right" style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '1.05rem' }}>
                                                {project.metric}
                                            </span>
                                        </div>

                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-stone-900 border border-stone-200 px-4 py-2 rounded-md hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-200 whitespace-nowrap" style={{ fontFamily: 'var(--font-jet-brains-mono)' }}>
                                            View live →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer note */}
                <motion.div variants={headingVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-stone-100">
                    <p className="text-sm text-stone-400">Full case studies available on request.</p>
                    <a href="/contact" className="text-sm font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600 transition-colors">
                        Discuss your project
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
