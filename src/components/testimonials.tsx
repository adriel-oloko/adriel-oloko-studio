import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
    {
        id: 1,
        quote: "I didn't think I needed a website. Adriel showed me what one could look like for my business and I changed my mind the same day. Clients now find me on Google before I even have to pitch myself.",
        name: 'Travis Holden',
        role: 'Owner',
        company: 'Holden Lawn & Landscape',
        image: '/testimonial-1.png',
    },
    {
        id: 2,
        quote: "Before we had a website, people would find us on WhatsApp through referrals only. Now we get inquiries from people who found us by searching online. The site paid for itself within the first month.",
        name: 'Chisom Eze',
        role: 'Founder',
        company: 'Astoria Caterers',
        image: '/testimonial-2.png',
    },
    {
        id: 3,
        quote: "My Facebook page was dead for almost a year. I had no time to post and it showed. He took it over and within three weeks the page actually looked like a real business again. Clients started commenting and messaging.",
        name: 'Anita Broussard',
        role: 'Owner',
        company: 'Broussard Cleaning Solutions',
        image: '/testimonial-3.jpg',
    },
]

const SLIDE_DIRECTION = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
}

export default function Testimonials() {
    const [[index, direction], setIndex] = useState([0, 0])
    const [autoplay, setAutoplay] = useState(true)

    const paginate = (newDir: number) => {
        setAutoplay(false)
        setIndex(([prev]) => [(prev + newDir + testimonials.length) % testimonials.length, newDir])
    }

    useEffect(() => {
        if (!autoplay) return
        const t = setInterval(() => {
            setIndex(([prev]) => [(prev + 1) % testimonials.length, 1])
        }, 5000)
        return () => clearInterval(t)
    }, [autoplay])

    const current = testimonials[index]

    return (
        <section id='testimonials' className="relative bg-[#f5f0eb] min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
            {/* Decorative grain overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px',
                }}
            />

            {/* Section header */}
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 flex flex-col items-center text-center mb-14">
                <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 border border-dashed border-amber-500 text-xs font-medium px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                    Client success stories
                </span>
                <h2 className="text-5xl sm:text-6xl font-semibold text-[#1a1208] leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    What our clients say
                </h2>
                <p className="text-[#5c4a2a]/80 mt-3 max-w-sm text-sm leading-relaxed">Real words from people who trusted us to build something they&apos;re proud of.</p>
            </motion.div>

            {/* Carousel card */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 w-full max-w-4xl">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-amber-950/20 flex flex-col md:flex-row-reverse min-h-95 md:min-h-85">
                    {/* Image panel */}
                    <div className="relative w-full md:w-2/5 min-h-55 md:min-h-0 overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div key={current.id + '-img'} custom={direction} variants={SLIDE_DIRECTION} initial="enter" animate="center" exit="exit" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
                                <Image src={current.image} alt={current.name} fill className="object-contain object-center p-12 bg-white" sizes="(max-width: 768px) 100vw, 40vw" />
                                {/* Company badge */}
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-md">
                                    <span className="text-xs font-semibold text-[#1a1208] tracking-wide">{current.company}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Quote panel */}
                    <div className="relative flex-1 bg-[#2c1a0e] flex flex-col justify-between p-8 md:p-10 overflow-hidden">
                        {/* Decorative quotation mark */}
                        <span className="absolute top-4 left-7 text-[120px] leading-none text-white/5 select-none pointer-events-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} aria-hidden>
                            &rdquo;
                        </span>

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div key={current.id + '-quote'} custom={direction} variants={SLIDE_DIRECTION} initial="enter" animate="center" exit="exit" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="flex-1 flex flex-col justify-between">
                                {/* Author */}
                                <div className="mb-6">
                                    <p className="text-white/50 text-xs tracking-widest uppercase font-medium">{current.name}</p>
                                    <p className="text-white/30 text-xs mt-0.5">{current.role}</p>
                                </div>

                                {/* Quote text */}
                                <blockquote className="text-white text-2xl sm:text-3xl font-medium leading-snug flex-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                                    &ldquo;{current.quote}&rdquo;
                                </blockquote>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex items-center gap-3 mt-8">
                            <button onClick={() => paginate(-1)} aria-label="Previous testimonial" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button onClick={() => paginate(1)} aria-label="Next testimonial" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Dot indicators */}
                            <div className="flex items-center gap-1.5 ml-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setAutoplay(false)
                                            setIndex(([prev]) => [i, i > prev ? 1 : -1])
                                        }}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-amber-400 w-5' : 'bg-white/25 w-1.5'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
