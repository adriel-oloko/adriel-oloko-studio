import AboutSection from '@/components/about-section'
import CTASection from '@/components/cta-section'
import FindingsSection from '@/components/findings-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import { LoaderOverlay } from '@/components/loader-overlay'
import PortfolioSection from '@/components/portfolio-section'
import ProcessSection from '@/components/process-section'
import ServicesSection from '@/components/services-section'
import useIpAddress from '@/hooks/useIpAddress'

export default function Home() {
    const { isLoading } = useIpAddress()

    return (
        <>
            <LoaderOverlay isLoading={isLoading} />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <ProcessSection />
            <FindingsSection />
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
