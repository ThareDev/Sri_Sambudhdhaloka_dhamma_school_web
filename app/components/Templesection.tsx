'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import temple from '@/public/temple.jpeg'

const templeDetails = [
    { icon: '🏛️', label: 'Founded', value: 'Over 50 Years of Legacy' },
    { icon: '📿', label: 'Tradition', value: 'Theravāda Buddhism' },
    { icon: '🌍', label: 'Global Alumni', value: '1000+ Worldwide' },
    { icon: '📖', label: 'Teaching', value: 'Dhamma & Vinaya' },
]

export default function TempleSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.15 }
        )
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    // YouTube video ID (youtubeThumbnail removed - not being used)
    const youtubeVideoId = "6pWEVTOjtZ0"

    return (
        <section id="temple" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-maroon-900 via-maroon-800 to-maroon-900 overflow-hidden">
            {/* Decorative background motif */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #D4A017 0, #D4A017 1px, transparent 0, transparent 50%)`,
                backgroundSize: '30px 30px'
            }} />

            {/* Top ornament */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20 reveal">
                    <span className="section-badge mb-6 inline-flex">✦ Sacred Ground ✦</span>
                    <h2 className="font-display text-5xl sm:text-6xl gold-shimmer mb-6">Our Temple</h2>
                    <p className="font-sinhala text-gold-300/70 text-xl mb-4">ශ්‍රී සම්බුද්ධාලෝක විහාරය</p>
                    <div className="lotus-divider max-w-md mx-auto">
                        <span className="text-gold-500 text-xl px-4">☸</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Temple Image with Next.js Image */}
                    <div className="reveal">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gold-gradient opacity-20 rounded-2xl blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="relative border-gold-glow rounded-2xl overflow-hidden aspect-[4/3] bg-maroon-700">
                                <Image
                                    src={temple}
                                    alt="Sri Sambuddhaloka Temple - Sacred Buddhist Temple in Kahathuduwa"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {/* Golden border corners */}
                                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold-400/60 rounded-tl z-10" />
                                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold-400/60 rounded-tr z-10" />
                                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold-400/60 rounded-bl z-10" />
                                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold-400/60 rounded-br z-10" />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            </div>
                        </div>
                    </div>

                    {/* Temple description */}
                    <div className="reveal space-y-6">
                        <h3 className="font-serif text-3xl text-cream-100 leading-relaxed">
                            A Beacon of Dhamma,<br />
                            <em className="text-gold-300">standing for generations</em>
                        </h3>
                        <p className="font-serif text-cream-300/80 text-lg leading-loose">
                            Nestled in the serene landscapes of Kahathuduwa, Western Province, Sri Sambuddhaloka Temple has been a spiritual refuge for devotees and seekers alike. For over half a century, this hallowed ground has upheld the pure Theravāda tradition, nurturing countless souls with the profound teachings of the Gautama Buddha.
                        </p>
                        <p className="font-serif text-cream-300/80 text-lg leading-loose">
                            The temple stands as more than a place of worship — it is a living institution of Dhamma education, cultural preservation, and community service. Under the compassionate guidance of its resident monastics, the temple continues to radiate the light of wisdom to all who seek it.
                        </p>
                        <p className="font-serif text-cream-300/80 text-lg leading-loose">
                            The Dhamma School, established as an integral pillar of the temple&apos;s mission, has transformed the lives of thousands of children, who now serve their communities across Sri Lanka and around the world.
                        </p>

                        {/* Decorative quote - FIXED: escaped quotes */}
                        <div className="pl-6 border-l-2 border-gold-400/50 py-2">
                            <p className="font-serif italic text-gold-300/90 text-xl leading-relaxed">
                                &quot;Thousands of lamps can be lit from a single candle, and the life of the candle will not be shortened.&quot;
                            </p>
                            <p className="font-sans text-xs tracking-widest text-gold-400/60 mt-2 uppercase">— The Buddha</p>
                        </div>
                    </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal mb-20">
                    {templeDetails.map((item, i) => (
                        <div
                            key={i}
                            className="relative group text-center p-6 rounded-2xl border-gold-glow bg-maroon-700/40 hover:bg-maroon-700/60 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <p className="font-sans text-xs tracking-widest text-gold-400/70 uppercase mb-2">{item.label}</p>
                            <p className="font-serif text-cream-100 text-lg leading-snug">{item.value}</p>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>

                {/* Attractive YouTube Video Player */}
                <div className="reveal mb-16">
                    <div className="relative group">
                        {/* Video title decoration */}
                        <div className="text-center mb-8">
                            <span className="section-badge mb-4 inline-flex">✦ Temple Documentary ✦</span>
                            <h3 className="font-serif text-3xl text-cream-100">Experience the Sacred Atmosphere</h3>
                            <div className="lotus-divider max-w-md mx-auto mt-4">
                                <span className="text-gold-500 text-xl px-4">☸</span>
                            </div>
                        </div>

                        {/* Video Player Card */}
                        <div className="relative max-w-5xl mx-auto">
                            <div className="absolute -inset-2 bg-gradient-to-r from-gold-400/20 via-gold-500/20 to-gold-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative rounded-2xl overflow-hidden border-gold-glow bg-maroon-800/50 backdrop-blur-sm">
                                {/* Video Container */}
                                <div className="aspect-video relative">
                                    {!isVideoOpen ? (
                                        // Thumbnail with play button overlay
                                        <div
                                            className="relative w-full h-full cursor-pointer group/video"
                                            onClick={() => setIsVideoOpen(true)}
                                        >
                                            <Image
                                                src={temple}
                                                alt="Temple Video Thumbnail"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1280px) 100vw, 1280px"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon-900/20 to-transparent" />

                                            {/* Play Button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="relative">
                                                    <div className="absolute inset-0 rounded-full bg-gold-400/30 blur-xl animate-pulse" />
                                                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center transition-transform duration-300 group-hover/video:scale-110 shadow-2xl">
                                                        <svg className="w-10 h-10 text-maroon-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Video Info Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-maroon-900 to-transparent">
                                                <p className="font-sans text-xs tracking-widest text-gold-400 uppercase mb-2">Watch Now</p>
                                                <p className="font-serif text-xl text-cream-100">A Glimpse into Temple Life & Dhamma School</p>
                                            </div>
                                        </div>
                                    ) : (
                                        // YouTube Video Player
                                        <div className="relative w-full h-full">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                                                title="Sri Sambuddhaloka Temple Video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="absolute inset-0 w-full h-full"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Video Description */}
                                <div className="p-6 border-t border-gold-600/20">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <p className="font-sans text-xs tracking-widest text-gold-400 uppercase mb-1">Featured Video</p>
                                            <p className="font-serif text-cream-200">Explore the serene atmosphere of Sri Sambuddhaloka Temple</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex items-center gap-2 text-gold-400/60 text-sm">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2V7h2v10zm6 0h-2V7h2v10z" />
                                                </svg>
                                                <span>HD Quality</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gold-400/60 text-sm">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                                    <path d="M12 6v6l4 2" />
                                                </svg>
                                                <span>4:18 min</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Temple location / address block */}
                <div className="mt-8 reveal text-center">
                    <div className="inline-block border-gold-glow rounded-2xl px-10 py-6 bg-maroon-700/30 hover:bg-maroon-700/40 transition-all duration-300">
                        <p className="font-sans text-xs tracking-widest text-gold-400/70 uppercase mb-2">Location</p>
                        <p className="font-sinhala text-gold-200 text-xl mb-1">ශ්‍රී සම්බුද්ධාලෝක විහාරය, කහතුඩුව</p>
                        <p className="font-serif text-cream-300 text-lg">Sri Sambuddhaloka Temple, Kahathuduwa, Western Province, Sri Lanka</p>

                        {/* Google Maps Link */}
                        <a
                            href="https://maps.app.goo.gl/tzF61yoUQw36V44g8?g_st=aw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-sm text-gold-400 hover:text-gold-300 transition-colors group/link"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="border-b border-gold-400/30 group-hover/link:border-gold-400 transition-colors">
                                View on Google Maps
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom ornament */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
        </section>
    )
}