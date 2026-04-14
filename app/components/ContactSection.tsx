'use client'
import { useEffect, useRef } from 'react'

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.1 }
        )
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <section id="contact" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-maroon-900 to-maroon-900 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-20 reveal">
                        <span className="section-badge mb-6 inline-flex">✦ Reach Us ✦</span>
                        <h2 className="font-display text-5xl sm:text-6xl gold-shimmer mb-4">Connect With Us</h2>
                        <p className="font-sinhala text-gold-300/70 text-xl">අප හා සම්බන්ධ වන්න</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact info */}
                        <div className="reveal space-y-6">
                            <div className="border-gold-glow rounded-2xl p-8 bg-maroon-800/40 space-y-6">
                                {[
                                    { icon: '📍', label: 'Address', value: 'Sri Sambuddhaloka Temple,\nKahathuduwa, western Province,\nSri Lanka.' },
                                    { icon: '📞', label: 'Telephone', value: '+94 XX XXX XXXX' },
                                    { icon: '📧', label: 'Email', value: 'info@srisambuddhaloka.lk' },
                                    { icon: '🕐', label: 'Dhamma School Hours', value: 'Saturday & Sunday\n8:00 AM – 12:00 Noon' },
                                ].map((c, i) => (
                                    <div key={i} className="flex gap-4 pb-6 border-b border-gold-400/10 last:border-0 last:pb-0">
                                        <div className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/25 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-lg">{c.icon}</span>
                                        </div>
                                        <div>
                                            <p className="font-sans text-xs tracking-widest text-gold-400/70 uppercase mb-1">{c.label}</p>
                                            <p className="font-serif text-cream-200 leading-relaxed whitespace-pre-line">{c.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Dhamma quote */}
                            <div className="text-center py-6">
                                <p className="font-sinhala text-gold-300/60 text-lg italic">" සෙවිතබ්බෝ ච ධම්මෝ "</p>
                                <p className="font-serif text-cream-300/40 text-sm mt-2">May all beings be well and happy</p>
                            </div>
                        </div>

                        {/* Contact form */}
                        <div className="reveal">
                            <div className="border-gold-glow rounded-2xl p-8 bg-maroon-800/40">
                                <h3 className="font-display text-2xl text-gold-300 mb-8">Send a Message</h3>
                                <div className="space-y-5">
                                    {[
                                        { label: 'Your Name', type: 'text', placeholder: 'Enter your full name' },
                                        { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                                        { label: 'Subject', type: 'text', placeholder: 'Subject of enquiry' },
                                    ].map((f, i) => (
                                        <div key={i}>
                                            <label className="block font-sans text-xs tracking-widest text-gold-400/70 uppercase mb-2">{f.label}</label>
                                            <input
                                                type={f.type}
                                                placeholder={f.placeholder}
                                                className="w-full bg-maroon-700/50 border border-gold-400/20 rounded-xl px-4 py-3 font-serif text-cream-200 placeholder-cream-300/30 focus:outline-none focus:border-gold-400/60 transition-colors duration-200 text-lg"
                                            />
                                        </div>
                                    ))}
                                    <div>
                                        <label className="block font-sans text-xs tracking-widest text-gold-400/70 uppercase mb-2">Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Your message..."
                                            className="w-full bg-maroon-700/50 border border-gold-400/20 rounded-xl px-4 py-3 font-serif text-cream-200 placeholder-cream-300/30 focus:outline-none focus:border-gold-400/60 transition-colors duration-200 resize-none text-lg"
                                        />
                                    </div>
                                    <button className="w-full py-4 bg-gold-gradient text-maroon-800 font-display font-semibold tracking-widest rounded-xl hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5">
                                        Send Message ✦
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative py-12 bg-maroon-900 border-t border-gold-400/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center space-y-6">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-gold">
                                    <span className="text-maroon-800 font-display font-bold text-xs">ශ්‍රී</span>
                                </div>
                                <div>
                                    <p className="font-display text-gold-300 text-sm tracking-widest leading-none">Sri Sambuddhaloka</p>
                                    <p className="font-sans text-cream-200 text-xs tracking-[0.2em] opacity-60 mt-0.5">DHAMMA SCHOOL · KAHATHUDUWA</p>
                                </div>
                            </div>
                        </div>

                        {/* Motto */}
                        <p className="font-sinhala text-gold-400/60 text-lg">" මානිවත්ථ අභික්ඛම "</p>

                        {/* Nav links */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {['Home', 'Temple', 'Head Thero', 'Alumni', 'Gallery', 'Media Unit', 'Contact'].map(link => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    className="font-sans text-xs tracking-widest text-cream-300/50 hover:text-gold-300 transition-colors uppercase"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>

                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent mx-auto" />

                        <p className="font-serif text-cream-300/30 text-sm">
                            © {new Date().getFullYear()} Sri Sambuddhaloka Dhamma School. All rights reserved. ☸ May all beings be happy.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}