/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

const steps = [
    {
        number: '01',
        title: 'Audit',
        body: 'I start by reading the protocol as it actually behaves, not as the docs describe it: ABIs, deployment history, version skews, disabled feature paths. Undocumented behavior gets documented before anything is built.',
    },
    {
        number: '02',
        title: 'Design',
        body: 'I lay out the contract surface and the interface together: data flow, wallet paths, gas-sensitive routes. You review, give feedback, and we align before a single line of code is written.',
    },
    {
        number: '03',
        title: 'Build',
        body: 'I write and integrate contracts and the dapp that talks to them, using modern tools that are fast and maintainable. You get regular progress updates so you are never left in the dark.',
    },
    {
        number: '04',
        title: 'Verify',
        body: 'I verify against the live chain, not a local fork: revert paths, feature flags, edge cases, and version skews. The verification suite stays green or it does not ship.',
    },
    {
        number: '05',
        title: 'Ship',
        body: 'Deployment, final checks, and handover. The integration is live, monitored, and you have everything you need to manage it confidently.',
    },
]

export default function ProcessSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

    return (
        <section className="w-full bg-[#0e0e0e] py-20 px-6 sm:px-8 lg:px-16">
            {/* Section Label */}
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#a0a0a0] mb-3">How I Work</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-12 leading-tight font-cormorant-garamond capitalize">A rigorous process, no surprises.</h2>

            {/* Two-column layout: mobile stacks (image top, steps bottom), desktop side by side */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Steps accordion — left on desktop, bottom on mobile */}
                <div className="flex flex-col gap-0 w-full md:w-1/2 order-2 md:order-1">
                    {steps.map((step, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div key={step.number} className="border-b border-[#2a2a2a]">
                                <button onClick={() => toggle(i)} className="w-full flex items-center gap-4 py-5 text-left group cursor-pointer">
                                    {/* Step number */}
                                    <span className="text-xs font-semibold text-[#444] tracking-widest w-6 shrink-0 select-none">{step.number}</span>

                                    {/* Step title */}
                                    <span className={`flex-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#777] group-hover:text-[#ccc]'}`}>{step.title}</span>

                                    {/* Chevron icon */}
                                    <span className={`shrink-0 transition-all duration-300 ${isOpen ? 'text-white rotate-180' : 'text-[#444]'}`}>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 5.5L7.5 10.5L12.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>

                                {/* Collapsible body */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-sm text-[#888] leading-relaxed pb-5 pl-10 pr-2">{step.body}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Image — right on desktop, top on mobile */}
                <div className="w-full md:w-1/2 order-1 md:order-2 shrink-0">
                    <div className="w-full rounded-lg overflow-hidden bg-[#1a1a1a]" style={{ height: '420px' }}>
                        <img src="/Comment jongler entre plusieurs langues lorsqu ‘on travaille à l ‘étranger _.webp" alt="Developer at work" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}
