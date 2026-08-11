import { motion } from 'framer-motion'

const findings = [
    {
        id: 1,
        index: '01',
        title: 'Version-skew discovery',
        body: 'getTokenV8Safe reverts on the live portal. The integration auto-falls back to the V6 path, so trades keep flowing instead of dying on a silent version mismatch.',
        tag: 'Revert handling',
    },
    {
        id: 2,
        index: '02',
        title: 'Feature-disabled launch path',
        body: 'FeatureDisabled flags on both live portals. The launch path was toggled off in production; I mapped the disabled flow and shipped around it before users hit dead ends.',
        tag: 'Feature flags',
    },
    {
        id: 3,
        index: '03',
        title: 'RPC log-limit workaround',
        body: 'RPC log limits truncate event history. I scan in bounded chunks so verification covers the full history, not just the tail the provider is willing to return.',
        tag: 'Verification tooling',
    },
    {
        id: 4,
        index: '04',
        title: 'Green against live RPC',
        body: 'A 26-field struct in exact ABI order, sub-second keccak vanity salts, 600s permit TTLs. The no-wallet verification suite runs green against live RPC, not a fork.',
        tag: 'Live verification',
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

export default function FindingsSection() {
    return (
        <section id="findings" className="relative bg-[#f5f0eb] min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
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
                    Found in production
                </span>
                <h2 className="text-5xl sm:text-6xl font-semibold text-[#1a1208] leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    Proof from the field
                </h2>
                <p className="text-[#5c4a2a]/80 mt-3 max-w-sm text-sm leading-relaxed">Undocumented behavior, found and fixed before it cost anyone a cent.</p>
            </motion.div>

            {/* Findings grid */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-4 md:gap-6">
                {findings.map((finding) => (
                    <motion.div
                        key={finding.id}
                        variants={cardVariants}
                        className="relative bg-[#2c1a0e] rounded-2xl p-8 md:p-10 flex flex-col gap-6 overflow-hidden group"
                    >
                        {/* Decorative quotation mark */}
                        <span className="absolute -top-6 right-4 text-[120px] leading-none text-white/5 select-none pointer-events-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} aria-hidden>
                            &rdquo;
                        </span>

                        <div className="flex items-center justify-between">
                            <span className="text-white/40 text-xs tracking-widest font-medium">{finding.index}</span>
                            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 border border-dashed border-amber-500 text-xs font-medium px-3 py-1 rounded-full tracking-wide uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                                {finding.tag}
                            </span>
                        </div>

                        <h3 className="text-white text-2xl sm:text-3xl font-medium leading-snug" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            {finding.title}
                        </h3>

                        <p className="text-white/70 text-sm leading-relaxed">{finding.body}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
