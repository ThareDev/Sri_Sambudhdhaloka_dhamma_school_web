'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import theroImage from '@/public/thero.jpeg' // Add your thero's photo

const virtues = [
  { label: 'Spiritual Leadership',  desc: 'Guiding the Saṅgha and laity with wisdom and compassion for decades.' },
  { label: 'Dhamma Education',      desc: 'Pioneer of structured Dhamma school education in the region.' },
  { label: 'Community Service',     desc: 'Tireless service to the poor, the sick, and the vulnerable.' },
  { label: 'Cultural Preservation', desc: 'Dedicated to preserving Sri Lankan Buddhist heritage and traditions.' },
]

export default function TheroSection() {
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
    <section id="thero" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-maroon-900 to-maroon-800 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, #D4A017 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-badge mb-6 inline-flex">✦ Venerable Guide ✦</span>
          <h2 className="font-display text-5xl sm:text-6xl gold-shimmer mb-4">Head Thero</h2>
          <p className="font-sinhala text-gold-300/70 text-xl">ප්‍රධාන හිමිපාණෝ</p>
          <div className="lotus-divider max-w-md mx-auto mt-6">
            <span className="text-gold-500 text-xl px-4">☸</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Portrait column */}
          <div className="lg:col-span-2 reveal flex flex-col items-center text-center">
            {/* Portrait frame */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 rounded-full bg-gold-gradient opacity-20 blur-2xl animate-pulse-slow" />
              <div className="relative w-64 h-64 rounded-full border-2 border-gold-400/50 overflow-hidden bg-maroon-700 shadow-gold">
                {/* Replace with actual thero image */}
                <Image
                  src={theroImage}
                  alt="Ven Vitiyala Indasiri Thero - Head Thero of Sri Sambuddhaloka Temple"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Saffron overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-saffron-400/30 to-transparent" />
              </div>

              {/* Halo ring */}
              <div className="absolute -inset-2 rounded-full border border-gold-400/20 dhamma-wheel" />
              <div className="absolute -inset-6 rounded-full border border-gold-400/10" />
            </div>

            {/* Name plate - UPDATED with correct name */}
            <div className="border-gold-glow rounded-2xl px-8 py-6 bg-maroon-700/40 w-full">
              <h3 className="font-display text-2xl text-cream-100 mb-1">Most Venerable</h3>
              <p className="font-serif italic text-gold-300 text-xl mb-3">Ven Vitiyala Indasiri Thero</p>
              <div className="w-12 h-px bg-gold-400/50 mx-auto mb-3" />
              <p className="font-sans text-xs tracking-widest text-gold-400/70 uppercase">Chief Incumbent</p>
              <p className="font-serif text-cream-300/70 text-sm mt-1">Sri Sambuddhaloka Temple</p>
            </div>
          </div>

          {/* Description column */}
          <div className="lg:col-span-3 space-y-8">
            <div className="reveal">
              <h3 className="font-serif text-3xl text-cream-100 mb-6 leading-relaxed">
                The Visionary Behind <br/>
                <em className="text-gold-300">Thousands of Enlightened Lives</em>
              </h3>
              <p className="font-serif text-cream-300/80 text-lg leading-loose mb-4">
                The Venerable Vitiyala Indasiri Thero, Head Thero of Sri Sambuddhaloka Temple, stands as the founding architect of one of Sri Lanka's most impactful Dhamma education programmes. With unwavering dedication, compassionate wisdom, and a profound vision for Buddhist education, he has single-handedly shaped the moral and spiritual foundation of countless young lives.
              </p>
              <p className="font-serif text-cream-300/80 text-lg leading-loose mb-4">
                Under his inspired leadership, the Dhamma School grew from humble beginnings into a celebrated institution whose alumni now serve as doctors, engineers, lawyers, teachers, and community leaders across Sri Lanka and in countries spanning every continent. He saw in every child not just a student, but a potential bodhisattva for the world.
              </p>
              <p className="font-serif text-cream-300/80 text-lg leading-loose">
                Ven Indasiri Thero is renowned not only for his deep scholarship in Pāli and Buddhist philosophy, but also for his warm humanity, his accessibility to all who seek guidance, and his selfless dedication to the welfare of the Saṅgha and the lay community alike.
              </p>
            </div>

            {/* Distinguished Service Section - UPDATED */}
            <div className="reveal">
              <div className="bg-gradient-to-r from-gold-400/10 via-transparent to-gold-400/10 rounded-2xl p-6 border border-gold-400/20">
                <h4 className="font-sans text-xs tracking-widest text-gold-400 uppercase mb-3 flex items-center gap-2">
                  <span className="text-gold-400">✦</span> Distinguished Service
                  <span className="text-gold-400">✦</span>
                </h4>
                <p className="font-serif text-cream-200 text-lg leading-relaxed mb-2">
                  Prior to his spiritual leadership, <span className="text-gold-300 font-semibold">Ven Vitiyala Indasiri Thero</span> served with great distinction as the <span className="text-gold-300 font-semibold">Principal of Mampe Dharmaraja Maha Vidyalaya, Piliyandala</span>, where he shaped the minds of thousands of students through holistic education rooted in Buddhist values.
                </p>
                <div className="flex items-center gap-3 mt-3 text-gold-400/60">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                  <p className="font-sans text-xs tracking-wide">Mampe Dharmaraja Maha Vidyalaya · Piliyandala</p>
                </div>
              </div>
            </div>

            {/* Virtues grid */}
            <div className="grid sm:grid-cols-2 gap-4 reveal">
              {virtues.map((v, i) => (
                <div key={i} className="group p-5 rounded-xl border border-gold-400/20 bg-maroon-700/30 hover:bg-maroon-700/50 hover:border-gold-400/40 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gold-400 text-lg">✦</span>
                    <h4 className="font-sans text-xs tracking-widest text-gold-300 uppercase">{v.label}</h4>
                  </div>
                  <p className="font-serif text-cream-300/70 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Quote - UPDATED */}
            <div className="reveal relative pl-8 py-4 border-l-4 border-gold-400/50 bg-maroon-700/20 rounded-r-2xl">
              <div className="absolute -left-3 top-4 w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center">
                <span className="text-maroon-800 text-xs font-bold">"</span>
              </div>
              <p className="font-serif italic text-gold-200 text-xl leading-relaxed">
                Education of the mind without education of the heart is no education at all. Dhamma is the education of the heart.
              </p>
              <p className="font-sans text-xs tracking-widest text-gold-400/60 mt-3 uppercase">— Ven Vitiyala Indasiri Thero</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
    </section>
  )
}