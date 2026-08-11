import Image from 'next/image'
import StatsBar from './StatsBar'
import { motion } from 'framer-motion'
import { fadeIn, scaleIn } from '@/animations/animations'

export default function AboutSection() {
    return (
        <div id="about" className="bg-white rounded-t-3xl -mt-12 md:mt-0 relative w-full p-4 grid md:grid-cols-2 gap-4">
            <motion.div variants={fadeIn} initial="hidden" whileInView={'show'} viewport={{ once: true, margin: '-40px' }} className="h-full relative">
                <Image src={'/Gemini_Generated_Image_b1qk0cb1qk0cb1qk.png'} className="aspect-square md:aspect-auto object-cover object-center xl:object-[100%_25%] rounded-2xl h-fit max-h-full md:absolute" width={806} height={1075} alt="Adriel at work" />
                <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-medium tracking-wide">Open to blockchain engineer roles</span>
                </motion.div>
            </motion.div>

            <div className="p-4 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 font-jet-brains-mono">Who I am</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>

                    <h2 className="font-bold text-3xl md:text-4xl text-black leading-tight font-cormorant-garamond capitalize">A blockchain engineer who ships the full stack, from contract to interface.</h2>

                    <p className="text-neutral-600 text-base leading-relaxed">I am an independent blockchain and full-stack engineer. I build launchpads, dapps, and the Web3 interfaces that talk to them, from smart contracts verified against live chains to frontends shipped with craft. My work starts where the docs end: reverse-engineering protocols, finding version skews, and wiring integrations that stay green against live RPCs.</p>

                    <p className="text-neutral-600 text-base leading-relaxed">I work best with crypto founders and small startup teams who want a builder that ships, not a bloated agency. Every project gets my full attention from kickoff to launch. No handoffs. No middlemen.</p>

                    <div className="lg:block xl:hidden text-black">
                        <StatsBar />
                    </div>
                </div>
            </div>
        </div>
    )
}
