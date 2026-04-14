'use client'
import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

// Import your 10 JPEG images
import img1 from '@/public/gallery/event-1.jpeg'
import img2 from '@/public/gallery/students-1.jpeg'
import img3 from '@/public/gallery/temple-1.jpeg'
import img4 from '@/public/gallery/event-2.jpeg'
import img5 from '@/public/gallery/students-2.jpeg'
import img6 from '@/public/gallery/temple-2.jpeg'
import img7 from '@/public/gallery/event-3.jpeg'
import img8 from '@/public/gallery/teachers-1.jpeg'
import img9 from '@/public/gallery/temple-3.jpeg'
import img10 from '@/public/gallery/event-4.jpeg'

type PortfolioCategory = 'Events' | 'Students' | 'Temple'

interface PortfolioItem {
    id: number
    category: PortfolioCategory
    caption: string
    year: string
    image: StaticImageData  // Fixed: Changed from 'any' to proper type
}

const portfolioItems: PortfolioItem[] = [
    { id: 1, category: 'Events', caption: 'Annual Dhamma Examination', year: '2023', image: img1 },
    { id: 2, category: 'Students', caption: 'Graduation Ceremony', year: '2023', image: img2 },
    { id: 3, category: 'Temple', caption: 'Vesak Lantern Procession', year: '2023', image: img3 },
    { id: 4, category: 'Events', caption: 'Pirith Ceremony', year: '2022', image: img4 },
    { id: 5, category: 'Students', caption: 'Dhamma Class — Primary Level', year: '2023', image: img5 },
    { id: 6, category: 'Temple', caption: 'Katina Ceremony', year: '2022', image: img6 },
    { id: 7, category: 'Events', caption: 'Buddha Puja — Poson Poya', year: '2023', image: img7 },
    { id: 8, category: 'Students', caption: 'Senior Students with Thero', year: '2022', image: img8 },
    { id: 9, category: 'Temple', caption: 'Temple Bo Tree — Sacred Ground', year: '2023', image: img9 },
    { id: 10, category: 'Events', caption: 'Prize Giving Ceremony', year: '2023', image: img10 },
]

const categories = ['All', 'Events', 'Students', 'Temple']

// Removed unused categoryColors
const categoryBadgeColors: Record<PortfolioCategory, string> = {
    Events: 'bg-maroon-600/80 text-cream-100',
    Students: 'bg-gold-600/80 text-maroon-900',
    Temple: 'bg-saffron-400/80 text-maroon-900',
}

export default function PortfolioSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [filter, setFilter] = useState('All')
    const [selected, setSelected] = useState<(typeof portfolioItems)[0] | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.05 }
        )
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const filtered = filter === 'All' ? portfolioItems : portfolioItems.filter(p => p.category === filter)

    return (
        <section id="portfolio" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-maroon-900 via-maroon-800 to-maroon-900 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: `repeating-linear-gradient(0deg, #D4A017 0, #D4A017 1px, transparent 0, transparent 40px),
                          repeating-linear-gradient(90deg, #D4A017 0, #D4A017 1px, transparent 0, transparent 40px)`,
            }} />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="section-badge mb-6 inline-flex">✦ Memories & Moments ✦</span>
                    <h2 className="font-display text-5xl sm:text-6xl gold-shimmer mb-4">Photo Gallery</h2>
                    <p className="font-sinhala text-gold-300/70 text-xl mb-6">ශ්‍රී සම්බුද්ධාලෝකයේ ස්මරණ</p>
                    <p className="font-serif italic text-cream-300/70 text-xl max-w-2xl mx-auto">
                        Glimpses of devotion, celebration, and learning from our temple&apos;s storied life.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 border ${filter === cat
                                    ? 'bg-gold-gradient text-maroon-800 border-transparent font-medium'
                                    : 'border-gold-400/30 text-cream-300/70 hover:border-gold-400/60 hover:text-gold-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-style grid with images */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0 reveal">
                    {filtered.map((item, index) => (
                        <div
                            key={item.id}
                            className="portfolio-card mb-4 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group border border-gold-400/10 hover:border-gold-400/40 transition-all duration-300 relative"
                            onClick={() => setSelected(item)}
                        >
                            <div className={`relative w-full ${index % 5 === 0 ? 'aspect-[3/4]' : index % 3 === 0 ? 'aspect-[4/3]' : 'aspect-square'
                                }`}>
                                <Image
                                    src={item.image}
                                    alt={item.caption}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    quality={85}
                                />

                                {/* Gradient Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 flex flex-col items-center justify-end p-6 text-center">
                                    <span className={`mb-2 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-sans ${categoryBadgeColors[item.category]}`}>
                                        {item.category}
                                    </span>
                                    <p className="font-serif text-cream-100 text-lg leading-snug">{item.caption}</p>
                                    <p className="font-sans text-xs text-gold-400/70 mt-1">{item.year}</p>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <div className="w-7 h-7 rounded-full bg-gold-400/20 border border-gold-400/50 flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-gold-300 text-xs">↗</span>
                                    </div>
                                </div>

                                {/* Category badge for non-hover state */}
                                <div className={`absolute top-3 left-3 z-10 px-2 py-1 rounded-md text-[9px] tracking-widest uppercase font-sans backdrop-blur-sm ${categoryBadgeColors[item.category]} opacity-80`}>
                                    {item.category}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-900/95 backdrop-blur-sm p-6"
                    onClick={() => setSelected(null)}
                >
                    <div className="max-w-4xl w-full border-gold-glow rounded-3xl overflow-hidden bg-maroon-800" onClick={e => e.stopPropagation()}>
                        <div className="relative aspect-video w-full">
                            <Image
                                src={selected.image}
                                alt={selected.caption}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 90vw, 70vw"
                            />
                        </div>
                        <div className="p-6 flex justify-between items-center">
                            <div>
                                <p className="font-display text-gold-300 text-xl">{selected.caption}</p>
                                <p className="font-sans text-xs text-cream-300/50 tracking-wider mt-1">{selected.category} · {selected.year}</p>
                            </div>
                            <button
                                onClick={() => setSelected(null)}
                                className="w-10 h-10 rounded-full border border-gold-400/30 text-gold-400 hover:bg-gold-400/10 transition-colors flex items-center justify-center text-xl"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
        </section>
    )
}