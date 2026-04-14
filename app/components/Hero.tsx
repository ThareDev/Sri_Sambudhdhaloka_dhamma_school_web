'use client'
import { useEffect, useState } from 'react'

function DhammaWheel({ size = 200, className = '', style = {} }) {
    return (
        <svg
            width={size} height={size} viewBox="0 0 200 200"
            className={className}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f9c74f" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#b8860b" stopOpacity="0.6" />
                </radialGradient>
            </defs>
            {/* Outer ring */}
            <circle cx="100" cy="100" r="92" fill="none" stroke="url(#wheelGrad)" strokeWidth="4" />
            <circle cx="100" cy="100" r="84" fill="none" stroke="#D4A017" strokeWidth="1" strokeOpacity="0.4" />
            {/* Hub */}
            <circle cx="100" cy="100" r="14" fill="none" stroke="url(#wheelGrad)" strokeWidth="3" />
            <circle cx="100" cy="100" r="6" fill="#D4A017" fillOpacity="0.8" />
            {/* 8 spokes */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180
                const x1 = 100 + 14 * Math.cos(rad)
                const y1 = 100 + 14 * Math.sin(rad)
                const x2 = 100 + 84 * Math.cos(rad)
                const y2 = 100 + 84 * Math.sin(rad)
                return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4A017" strokeWidth="2" strokeOpacity="0.7" />
            })}
            {/* Decorative dots on ring */}
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle) => {
                const rad = (angle * Math.PI) / 180
                const x = 100 + 88 * Math.cos(rad)
                const y = 100 + 88 * Math.sin(rad)
                return <circle key={angle} cx={x} cy={y} r="2.5" fill="#f9c74f" fillOpacity="0.6" />
            })}
        </svg>
    )
}

export default function Hero() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
            {/* Background texture overlay */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, #D4A017 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #8B1A1A 0%, transparent 50%),
                            radial-gradient(circle at 60% 80%, #D4A017 0%, transparent 40%)`
                }}
            />

            {/* Large background wheel */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-5">
                <DhammaWheel size={600} className="dhamma-wheel" />
            </div>
            <div className="absolute left-[-10%] top-[-10%] opacity-5">
                <DhammaWheel size={400} className="dhamma-wheel" style={{ animationDirection: 'reverse' }} />
            </div>

            {/* Floating petals */}
            {mounted && [
                { left: '10%', delay: '0s', dur: '8s', size: 8 },
                { left: '25%', delay: '2s', dur: '12s', size: 6 },
                { left: '50%', delay: '4s', dur: '10s', size: 10 },
                { left: '70%', delay: '1s', dur: '9s', size: 7 },
                { left: '85%', delay: '6s', dur: '11s', size: 5 },
                { left: '40%', delay: '3s', dur: '13s', size: 9 },
            ].map((p, i) => (
                <div
                    key={i}
                    className="petal"
                    style={{
                        left: p.left,
                        top: '-20px',
                        animationDuration: p.dur,
                        animationDelay: p.delay,
                    }}
                >
                    {/* Lotus petal SVG */}
                    <svg width={p.size * 2} height={p.size * 3} viewBox="0 0 20 30">
                        <ellipse cx="10" cy="15" rx="7" ry="13" fill="#D4A017" fillOpacity="0.4" transform="rotate(0,10,15)" />
                    </svg>
                </div>
            ))}

            {/* Main content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Spinning wheel centrepiece */}
                <div className={`flex justify-center mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                    <div className="relative">
                        <DhammaWheel size={140} className="dhamma-wheel animate-spin-slow" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-maroon-600/30 border border-gold-400/40 flex items-center justify-center">
                                <span className="text-gold-300 font-sinhala text-lg">☸</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Badge */}
                <div className={`flex justify-center mb-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <span className="section-badge">Est. — Sri Lanka</span>
                </div>

                {/* Sinhala title */}
                <h1 className={`font-sinhala text-2xl sm:text-3xl text-gold-200/80 mb-3 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    ශ්‍රී සම්බුද්ධාලෝක දහම් පාසල
                </h1>

                {/* English display title */}
                <h2 className={`font-display text-4xl sm:text-6xl lg:text-7xl font-semibold mb-4 gold-shimmer transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Sri Sambuddhaloka
                </h2>
                <h3 className={`font-display text-2xl sm:text-4xl lg:text-5xl text-cream-100 mb-8 tracking-widest transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Dhamma School
                </h3>

                {/* Motto - FIXED: escaped quotes */}
                <div className={`lotus-divider mb-6 transition-all duration-700 delay-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="font-sinhala text-gold-400 text-xl tracking-wide px-4">&quot; මානිවත්ථ අභික්ඛම &quot;</p>
                </div>

                {/* Tagline */}
                <p className={`font-serif text-xl sm:text-2xl text-cream-300/80 italic max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Illuminating hearts with the timeless wisdom of the Dhamma,
                    shaping thousands of lives across the globe.
                </p>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-[800ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <a
                        href="#temple"
                        className="px-8 py-4 bg-gold-gradient text-maroon-800 font-display font-semibold tracking-widest text-sm rounded-full hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Discover Our Heritage
                    </a>
                    <a
                        href="#portfolio"
                        className="px-8 py-4 border border-gold-400/40 text-gold-300 font-sans font-light tracking-widest text-xs rounded-full hover:bg-gold-400/10 transition-all duration-300"
                    >
                        View Gallery
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <div className="w-px h-12 bg-gradient-to-b from-gold-400/60 to-transparent"></div>
                    <p className="font-sans text-[10px] tracking-[0.3em] text-gold-400/60 uppercase">Scroll</p>
                </div>
            </div>
        </section>
    )
}