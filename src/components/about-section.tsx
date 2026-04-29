import Image from 'next/image'
import StatsBar from './StatsBar'

export default function AboutSection() {
    return (
        <div className="bg-white rounded-t-3xl -mt-12 md:mt-0 relative w-full p-4 grid md:grid-cols-2 gap-4">
            <div className="h-full relative">
                <Image src={'/Gemini_Generated_Image_b1qk0cb1qk0cb1qk.png'} className="aspect-square md:aspect-auto object-cover object-center xl:object-[100%_25%] rounded-2xl h-fit max-h-full md:absolute" width={806} height={1075} alt="Founder of the agency at work" />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-medium tracking-wide">Available for new projects</span>
                </div>
            </div>

            <div className="p-4 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 font-jet-brains-mono">Who we are</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>

                    <h2 className="font-bold text-3xl md:text-4xl text-black leading-tight font-cormorant-garamond capitalize">A design agency that builds websites people actually use.</h2>

                    <p className="text-neutral-600 text-base leading-relaxed">We are a web development agency focused on helping businesses grow through fast, well-crafted websites. From landing pages to full product builds, we combine clean code with thoughtful design to create digital experiences that convert visitors into clients.</p>

                    <p className="text-neutral-600 text-base leading-relaxed">We work best with founders, startups, and service businesses who want a reliable technical partner, not just a vendor. Every project we take on gets our full attention from kickoff to launch.</p>

                    <div className="lg:block xl:hidden text-black">
                        <StatsBar />
                    </div>
                </div>

                <div className="hidden grid-cols-3 gap-3 pt-2 border-t border-neutral-100">
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-black">40+</span>
                        <span className="text-xs text-neutral-500 leading-snug">Projects delivered</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-black">5 yrs</span>
                        <span className="text-xs text-neutral-500 leading-snug">In the industry</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-black">100%</span>
                        <span className="text-xs text-neutral-500 leading-snug">On-time delivery</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
