import { MailIcon } from 'lucide-react'

export default function Footer() {
    return (
        <footer id={'f'} className="bg-transparent py-12 relative z-10 text-white">
            <div className="mx-auto max-w-container px-4 md:px-8 relative flex flex-col w-full justify-between">
                <div className="flex flex-col gap-2 items-center justify-between lg:flex-row">
                    <div className="flex items-center justify-start md:justify-center overflow-visible dark-mode order-first h-7 shrink-0 lg:order-0">
                        <h2 className="font-medium text-lg">Adriel Oloko Studio</h2>
                    </div>
                    <ul className="mt-12 flex gap-4 lg:mt-0 lg:max-w-x">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex rounded-xs text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2">
                                <svg viewBox="0 0 24 24" fill="none" className="size-4.5 translate-y-0.5" aria-label="Facebook">
                                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@heisadriel" target="_blank" rel="noopener noreferrer" className="flex rounded-xs text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2">
                                <svg key="tiktok" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/+15632024269" target="_blank" rel="noopener noreferrer" className="flex rounded-xs text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2">
                                <svg key="whatsapp" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 72 72" viewBox="0 0 72 72" width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth="1.5">
                                    <switch>
                                        <g>
                                            <path
                                                d="M68,36c0,17.7-14.3,32-32,32c-6.3,0-12.1-1.8-17.1-5L4,68l5.4-14.3C6,48.6,4,42.6,4,36C4,18.3,18.3,4,36,4S68,18.3,68,36z
                                             M36,8C20.5,8,8,20.5,8,36c0,6.4,2.2,12.4,5.9,17.1l-3.2,8.5l8.8-2.9C24.2,62,29.8,64,36,64c15.5,0,28-12.5,28-28S51.5,8,36,8z
                                             M52,44.8c0,0,0,2.1,0,2.6c0,0.5-0.6,1.4-0.6,1.4c-1.7,2.7-5.8,3.1-6.7,3.2C39.4,52.3,34,48.1,29,43c-5.1-5-9.3-10.5-8.9-15.8
                                            c0.1-0.9,0.5-4.9,3.2-6.7c0,0,0.9-0.6,1.4-0.6c0.5,0,2.6,0,2.6,0s0.7,0.1,1,0.9c0.3,0.7,2.5,6,2.7,6.4c0.2,0.4,0.6,1.4-0.1,2.3
                                            c-0.7,0.9-2.1,2.6-2.1,2.6s-0.6,0.5-0.1,1.3c0.5,0.8,2.2,3.5,4.4,5.5c2,2.2,4.7,3.9,5.5,4.4c0.8,0.5,1.3-0.1,1.3-0.1
                                            s1.7-1.4,2.6-2.1c0.9-0.7,1.9-0.3,2.3-0.1c0.4,0.2,5.6,2.4,6.4,2.7C51.9,44.1,52,44.8,52,44.8z"></path>
                                        </g>
                                    </switch>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:adrielloks@gmail.com" target="_blank" rel="noopener noreferrer" className="flex rounded-xs text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2">
                                <MailIcon size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="mt-6 text-sm text-center flex min-w-full justify-center md:justify-end lg:mt-0 lg:float-right lg:w-full lg:max-w-xs lg:text-right">© 2026 Adriel Oloko. All rights reserved.</p>
            </div>
        </footer>
    )
}
