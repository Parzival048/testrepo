'use client';

import Link from 'next/link';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-950 relative overflow-hidden">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <Link href="/" className="inline-block">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                                ELITE GYM
                            </h3>
                        </Link>
                        <p className="mt-4 text-gray-400 max-w-xs">
                            Transform your body and mind with our world-class fitness facilities and expert trainers.
                        </p>
                        <div className="mt-6 flex gap-4">
                            {['fb', 'ig', 'tw', 'yt'].map((s) => (
                                <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300">
                                    <span className="text-xs">{s}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'Press', 'Blog'].map((l) => (
                                <li key={l}><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">{l}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-3">
                            {['Help Center', 'Contact Us', 'FAQs', 'Locations'].map((l) => (
                                <li key={l}><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">{l}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Elite Gym. All rights reserved.</p>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service'].map((l) => (
                            <a key={l} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{l}</a>
                        ))}
                    </div>
                    <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
