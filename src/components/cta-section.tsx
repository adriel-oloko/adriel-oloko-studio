'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// ---------------------------------------------------------------------------
// Telegram messenger – simplified to fire once on contact-form submission
// ---------------------------------------------------------------------------
interface ContactSubmission {
    name: string
    email: string
    project: string
}

const BOT_TOKEN = process.env.NEXT_BOT_CODE
const CHAT_ID = process.env.NEXT_CHAT_ID

function sendContactFormAlert(data: ContactSubmission): void {
    const now = new Date()
    const formatted = now.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })

    const message = [`📬 New Contact Form Submission`, ``, `👤 Name: ${data.name}`, `📧 Email: ${data.email}`, `📝 Project: ${data.project || '(not provided)'}`, ``, `🕐 ${formatted}`].join('\n')

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage` + `?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`

    fetch(url, { method: 'GET' })
        .then((res) => {
            if (!res.ok) throw new Error(`Network error: ${res.status}`)
            return res.json()
        })
        .then((json) => {
            if (json.ok) {
                console.log('Telegram alert sent:', json)
            } else {
                console.warn('Telegram responded but ok !== true:', json)
            }
        })
        .catch((err) => console.error('Telegram fetch error:', err))
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const lineVariant = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
}

export default function CTASection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const [form, setForm] = useState({ name: '', email: '', project: '' })
    const [focused, setFocused] = useState<string | null>(null)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Fire Telegram alert with form data
        sendContactFormAlert(form)

        setSubmitted(true)
    }

    return (
        <section ref={ref} className="bg-transparent relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-28 md:py-36">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-175 md:w-full h-125 rounded-full bg-white opacity-[0.025] blur-[120px]" />

            <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="relative z-10 md:w-3/4 gap-8 bg-black/20 p-4 rounded-xl grid md:grid-cols-2">
                <div className="">
                    {/* Eyebrow label */}
                    <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
                        <span className="inline-block w-2 h-2 rounded-full bg-white opacity-60" />
                        <span className="text-xs uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: 'var(--font-jet-brains-mono)' }}>
                            Start a project
                        </span>
                    </motion.div>
                    {/* Headline */}
                    <motion.h2 variants={fadeUp} className="text-5xl capitalize md:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                        Let&apos;s build something great.
                    </motion.h2>
                    {/* Divider */}
                    <motion.div variants={lineVariant} className="h-px md:hidden bg-white/10 mb-8 origin-left" />
                </div>
                <div className="">
                    {/* Reassurance copy */}
                    <motion.p variants={fadeUp} className="text-sm text-white/40 leading-relaxed mb-12 max-w-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                        No long-term contracts. No upfront commitment. Just a free call to see if we&apos;re a good fit.
                    </motion.p>

                    {/* Form */}
                    {!submitted ? (
                        <motion.form variants={fadeUp} onSubmit={handleSubmit} className="flex flex-col gap-0">
                            {/* Name */}
                            <FieldRow label="Name" name="name" type="text" placeholder="Your name" value={form.name} focused={focused} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />

                            {/* Email */}
                            <FieldRow label="Email" name="email" type="email" placeholder="your@email.com" value={form.email} focused={focused} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />

                            {/* Project */}
                            <TextAreaRow label="Project" name="project" placeholder="Tell me about your project" value={form.project} focused={focused} onChange={handleChange} onFocus={() => setFocused('project')} onBlur={() => setFocused(null)} />

                            {/* Submit */}
                            <motion.div variants={fadeUp} className="mt-10">
                                <button type="submit" className="group relative inline-flex items-center gap-3 text-sm tracking-wide text-black bg-white px-8 py-4 overflow-hidden transition-all duration-300 hover:bg-white/90 active:scale-[0.98]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                                    <span className="relative z-10 font-medium">Send message</span>
                                    <ArrowIcon />
                                </button>
                            </motion.div>
                        </motion.form>
                    ) : (
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="py-12">
                            <p className="text-2xl text-white/80 font-light" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                                Got it. I&apos;ll be in touch soon.
                            </p>
                            <p className="mt-3 text-sm text-white/30" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                                Expect a reply within 24 hours.
                            </p>
                        </motion.div>
                    )}

                    {/* Alternative contact */}
                    <motion.div variants={fadeUp} className="mt-10 flex items-center gap-2">
                        <span className="text-xs text-white/25" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                            Or reach me directly at
                        </span>
                        <a href="mailto:adrielloks@gmail.com" className="text-xs text-white/50 hover:text-white/80 transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white/50" style={{ fontFamily: 'var(--font-jet-brains-mono)' }}>
                            adrielloks@gmail.com
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

/* ---- Sub-components ---- */

interface FieldProps {
    label: string
    name: string
    type?: string
    placeholder: string
    value: string
    focused: string | null
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus: () => void
    onBlur: () => void
}

function FieldRow({ label, name, type = 'text', value, focused, onChange, onFocus, onBlur }: FieldProps) {
    const isActive = focused === name || value.length > 0

    return (
        <div className="relative border-b border-white/10 group">
            {/* Active border overlay */}
            <div className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${focused === name ? 'w-full' : 'w-0'}`} />
            <label htmlFor={name} className={`absolute left-0 transition-all duration-300 pointer-events-none select-none ${isActive ? 'top-3 text-xs text-white/25' : 'top-1/2 -translate-y-1/2 text-sm text-white/25'}`} style={{ fontFamily: 'var(--font-dm-sans)' }}>
                {label}
            </label>
            <input id={name} name={name} type={type} autoComplete="off" value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} placeholder="" className="w-full bg-transparent pt-7 pb-3 text-sm text-white/80 placeholder-transparent outline-none" style={{ fontFamily: 'var(--font-dm-sans)' }} />
        </div>
    )
}

interface TextAreaProps {
    label: string
    name: string
    placeholder: string
    value: string
    focused: string | null
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onFocus: () => void
    onBlur: () => void
}

function TextAreaRow({ label, name, value, focused, onChange, onFocus, onBlur }: TextAreaProps) {
    const isActive = focused === name || value.length > 0

    return (
        <div className="relative border-b border-white/10 group mt-2">
            <div className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${focused === name ? 'w-full' : 'w-0'}`} />
            <label htmlFor={name} className={`absolute left-0 transition-all duration-300 pointer-events-none select-none ${isActive ? 'top-3 text-xs text-white/25' : 'top-5 text-sm text-white/25'}`} style={{ fontFamily: 'var(--font-dm-sans)' }}>
                {label}
            </label>
            <textarea id={name} name={name} rows={4} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} className="w-full bg-transparent pt-7 pb-3 text-sm text-white/80 outline-none resize-none" style={{ fontFamily: 'var(--font-dm-sans)' }} />
        </div>
    )
}

function ArrowIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M1 7h12M7.5 1.5L13 7l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
