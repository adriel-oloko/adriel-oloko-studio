import AboutSection from '@/components/about-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import PortfolioSection from '@/components/portfolio-section'
import ProcessSection from '@/components/process-section'
import ServicesSection from '@/components/services-section'
import Testimonials from '@/components/testimonials'
import useTelegramMessenger from '@/hooks/useTelegramMessenger'
import { useRouter } from 'next/router'
import { useState } from 'react'

/*
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import useTelegramMessenger from "@/hooks/useTelegramMessenger";
import useIpAddress from "@/hooks/useIpAddress"; // Adjust path as needed
*/
export default function Home() {
    const router = useRouter()


    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <ProcessSection />
            <Testimonials />
            <div className="hjk bg-fixed relative">
                {/* Subtle noise overlay */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '128px 128px',
                    }}
                />

                <div className="absolute inset-0 z-0 backdrop-blur" />

                <CTASection />
                <Footer />
            </div>
        </>
    )
}

const TicketModal = () => {
    const [isOpen, setIsOpen] = useState(true)

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            {/* Modal Container */}
            <div className="w-full max-w-2xl bg-white shadow-2xl rounded-sm overflow-hidden">
                {/* Header Section */}
                <div className="px-8 pt-10 pb-4">
                    <h1 className="text-3xl font-bold text-[#262626] tracking-tight">What You Need To Know</h1>
                </div>

                {/* Content Section */}
                <div className="px-8 pb-8">
                    <h2 className="text-xl font-bold text-[#262626] mb-4">What You Need to Know</h2>
                    <p className="text-[#262626] text-lg leading-relaxed font-light">Entry requirements are subject to change. By purchasing tickets to this event, you agree to abide by entry requirements in effect at the time of the event. Check the venue website leading up to your event for the latest protocols.</p>
                </div>

                {/* Action Section */}
                <div className="px-8 pb-10 flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="bg-[#3749DF] hover:bg-[#2a38b3] text-white font-semibold py-2.5 px-4 rounded-md transition-colors">
                        I Agree
                    </button>
                </div>
            </div>
        </div>
    )
}
