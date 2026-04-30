import { AnimatePresence, motion } from 'framer-motion'
import { ShieldCheck, RefreshCw, Zap, WandSparkles, Bitcoin, MenuIcon, StarIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import StatsBar from './StatsBar'
import useIpAddress from '@/hooks/useIpAddress'
import router, { useRouter } from 'next/router'

const avatars = ['https://i.pravatar.cc/40?img=1', 'https://i.pravatar.cc/40?img=2', 'https://i.pravatar.cc/40?img=3', 'https://i.pravatar.cc/40?img=4', 'https://i.pravatar.cc/40?img=5']

export default function HeroSection() {
    const { ip, city, region_code } = useIpAddress()
    useEffect(() => {
        console.log(city, region_code)
    }, [city, region_code])

    return (
        <section id="hjk" className="hjk bg-fixed w-full min-h-svh md:min-h-screen relative flex items-center justify-center bg-black px-4">
            <NavBar />

            <div className="xl:w-4/5 md:px-4 items-center flex flex-col gap-2 md:gap-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex md:hidden items-center w-fit mx-auto gap-1.5 bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Available for New Projects
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex items-center gap-1.5 text-white text-4xl lg:text-7xl text-center font-cormorant-garamond! font-bold px-3 py-1 rounded-full">
                    <h2 className="capitalize leading-8 md:leading-16">
                        Premium
                        <span className="bg-white min-h-6 md:min-h-10 min-w-12 md:min-w-20 rounded-full mx-2 inline-block bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("../../Image_fx.png")' }} />
                        Web Development <span className="text-stroke-[0.5px] text-transparent font-inter italic lg:text-6xl text-stroke-white">for</span>
                        <span className="bg-white min-h-6 md:min-h-10 min-w-12 md:min-w-20 rounded-full mx-4 inline-block bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("../../Image_fx (1).png")' }} /> businesses based in <span className="text-stroke-[0.5px] text-transparent font-inter italic lg:text-6xl text-stroke-white">{(city && region_code) == null ? `${city}, ${region_code}` : 'Tuscaloosa, AL'}.</span>
                    </h2>
                </motion.div>
                <p className="text-center my-2 md:my-0 px-8 md:w-1/2">I build fast, professional websites for trade businesses and local companies. Clean design, real results, no fluff.</p>
                <div className="border-2 p-1 rounded-[14px] my-2">
                    <button className="bg-orange-500 w-fit px-4 py-1.5 rounded-lg mx-auto">Get Started</button>
                </div>
                <div className="hidden grid-cols-2 mx-auto w-fit gap-4 mt-8 md:mt-4">
                    <div className="flex -space-x-3 justify-end border-r pr-4">
                        {['/avatar-1.jpg', '/avatar-2.jpg', '/avatar-3.jpg'].map((src, i) => (
                            <Image key={i} src={src} alt="avatar" width={32} height={32} className="rounded-full border-2 border-black size-9" />
                        ))}
                    </div>
                    <div className="flex flex-col gap-1 text-white/80 text-sm">
                        <span className="flex gap-0 items-start">
                            {[1, 2, 3, 4, 5].map((i) => {
                                return <StarIcon key={i} size={12} className="fill-current" />
                            })}
                        </span>
                        <span className="text-white/50 font-medium">5.0 based on reviews</span>
                    </div>{' '}
                </div>
                <div className="lg:hidden xl:block">
                    <StatsBar />
                </div>
            </div>
        </section>
    )
}

export function NavBar() {
    const router = useRouter()
    const [isMenu, setIsMenu] = useState(false)
    const navData = [
        [
            ['About', ''],
            ['Our Services', ''],
            ['Projects', ''],
            ['Testimonial', ''],
        ],
    ]
    return (
        <nav className="absolute top-0 inset-x-0 flex justify-between md:grid md:grid-cols-3 w-full items-center px-8 py-4 z-999">
            <h2 className="font-cormorant-garamond text-xl font-semibold relative z-999">Adriel Oloko</h2>
            <div className="md:flex mx-auto font-jet-brains-mono items-center w-fit gap-8 hidden">
                {navData[0].map(([text, link], index) => (
                    <a key={index} href={link} className="text-nowrap">
                        {text}
                    </a>
                ))}
            </div>

            <div className="hidden md:flex gap-4 items-center justify-end">
                <Link href={'mailto:adrielloks@gmail.com'} className="border-[1.5px] min-w-fit max-w-fit border-solid rounded-full px-3 py-1.5 text-sm">
                    Contact Me
                </Link>
            </div>

            <button type="button" className="size-fit md:hidden relative z-999" onClick={() => setIsMenu((prev) => !prev)}>
                {!isMenu ? <MenuIcon size={22} /> : <XIcon size={22} />}
            </button>

            <AnimatePresence>
                {isMenu && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`fixed bg-black/50 backdrop-blur inset-0 flex flex-col gap-2 px-8 py-24 text-xl font-semibold z-10`}>
                        {navData[0].map(([text, link], index) => (
                            <motion.button
                                key={index}
                                initial={{ translateY: 12, opacity: 0 }}
                                animate={{ translateY: 0, opacity: 1 }}
                                onClick={() => {
                                    setIsMenu(false)
                                    router.push(link)
                                }}
                                className="ease-snappy w-fit">
                                {text}
                            </motion.button>
                        ))}

                        <motion.a initial={{ translateY: 12, opacity: 0 }} animate={{ translateY: 0, opacity: 1, transition: { delay: 0.2 } }} href="https://github.com/adriel-oloko" className="uppercase mt-4 ease-snappy">
                            / Github
                        </motion.a>
                        <motion.a initial={{ translateY: 12, opacity: 0 }} animate={{ translateY: 0, opacity: 1, transition: { delay: 0.3 } }} href="https://x.com/adrielloks" className="uppercase ease-snappy">
                            / X [Twitter]
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
