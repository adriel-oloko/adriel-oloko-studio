import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
    {
        index: '01',
        title: 'Website Development',
        tagline: 'Built to perform. Designed to convert.',
        description: 'I build fast, responsive websites tailored to your brand and business goals. From single landing pages to full multi-page builds, every line of code is intentional.',
        outcome: 'A site that loads in under 2 seconds, looks sharp on every screen, and turns visitors into clients.',
        tags: ['Next.js', 'React', 'TailwindCSS', 'Responsive'],
        from: 'From $500',
    },
    {
        index: '02',
        title: 'Graphic Design',
        tagline: 'Visuals that make people stop scrolling.',
        description: 'I create brand visuals, social graphics, and marketing assets that communicate clearly and look polished. No templates, no shortcuts.',
        outcome: 'A consistent visual identity that builds trust before you say a word.',
        tags: ['Branding', 'Social Assets', 'Print', 'UI Graphics'],
        from: 'From $50',
    },

    {
        index: '03',
        title: 'Social Media Management',
        tagline: 'Consistent presence. Measurable growth.',
        description: 'I handle content planning, design, and scheduling so your brand stays active and relevant without you lifting a finger.',
        outcome: 'A content calendar that keeps your audience engaged and your brand top of mind every week.',
        tags: ['Content Strategy', 'Scheduling', 'Analytics', 'Copywriting'],
        from: 'From $400/mo',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.15,
        },
    },
}

const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
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

export default function ServicesSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="hjk relative bg-fixed bg-gray-50 py-24 px-8 font-dm-sans">
            <div className="absolute inset-0 backdrop-blur-xl w-full" />
            <div className="mx-auto relative">
                {/* Header */}
                <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mb-14">
                    <motion.p variants={headerVariants} className="text-xs tracking-widest uppercase text-stone-400 mb-3 font-jet-brains-mono">
                        Services
                    </motion.p>
                    <motion.h2 variants={headerVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize text-stone-100 leading-tight" style={{ fontFamily: 'var(--font-cormorant-garamond), serif' }}>
                        What I can do for you
                    </motion.h2>
                    <motion.p variants={headerVariants} className="mt-3 text-sm text-stone-400 max-w-sm leading-relaxed">
                        Clear services. Defined value. No guesswork about whether I am the right fit for your project.
                    </motion.p>
                </motion.div>

                {/* Cards */}
                <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid md:grid-cols-2 gap-4 md:gap-8 xl:grid-cols-3">
                    {services.map((service) => (
                        <motion.div key={service.index} variants={cardVariants} className="border border-stone-100 hover:border-stone-200 bg-white transition-all duration-300 p-6 rounded-md">
                            <div className="flex flex-col gap-7">
                                {/* Left: index + title + tagline */}
                                <div className="flex flex-col gap-2 shrink-0">
                                    <span className="text-xs text-stone-300 tracking-widest" style={{ fontFamily: 'var(--font-jet-brains-mono), monospace' }}>
                                        {service.index}
                                    </span>
                                    <h3 className="text-2xl font-semibold text-stone-900 leading-snug group-hover:text-stone-700 transition-colors duration-200 font-cormorant-garamond">{service.title}</h3>
                                    <p className="text-xs text-stone-400 italic leading-relaxed">{service.tagline}</p>
                                </div>

                                {/* Divider (desktop) */}
                                <div className="hidden lg:hidden w-px bg-stone-100 self-stretch shrink-0" />

                                {/* Middle: description + outcome + tags */}
                                <div className="flex flex-col gap-4 flex-1 min-w-0">
                                    <p className="text-sm text-stone-500 leading-relaxed">{service.description}</p>

                                    <div className="flex items-start gap-2">
                                        <span className="text-stone-300 text-sm mt-0.5 leading-none shrink-0">&#8594;</span>
                                        <p className="text-sm text-stone-700 font-medium leading-snug">{service.outcome}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-2.5 py-1 bg-stone-100 text-stone-500 border border-stone-200" style={{ borderRadius: '4px' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: price + CTA */}
                                <div className="flex items-center justify-between gap-4 shrink-0">
                                    <div className="flex flex-col items-start gap-0.5">
                                        <span className="text-xs text-stone-400 tracking-widest uppercase" style={{ fontFamily: 'var(--font-jet-brains-mono), monospace' }}>
                                            Starting
                                        </span>
                                        <span className="text-sm font-semibold text-stone-900 whitespace-nowrap">{service.from}</span>
                                    </div>
                                    <button className="text-xs font-semibold tracking-wide text-white bg-stone-900 hover:bg-stone-700 active:scale-95 transition-all duration-200 px-4 py-2.5 whitespace-nowrap" style={{ borderRadius: '4px' }}>
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer note */}
                <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.9, duration: 0.5 }} className="mt-8 text-xs text-stone-300 text-center tracking-wide" style={{ fontFamily: 'var(--font-jet-brains-mono), monospace' }}>
                    All packages are scoped per project. Custom bundles available on request.
                </motion.p>
            </div>
        </section>
    )
}
