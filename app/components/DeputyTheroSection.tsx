'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import deputyThero from '@/public/deputy-thero.jpeg' // Add deputy thero's photo

const deputyVirtues = [
  { label: 'Dhamma Education',      desc: 'Revolutionized Dhamma school curriculum, making it one of the best in Udagahapaththuwa Balamandalaya.' },
  { label: 'Youth Development',     desc: 'Nurturing young minds with both traditional values and modern educational approaches.' },
  { label: 'Community Leadership',  desc: 'Leading numerous social service initiatives benefiting the wider community.' },
  { label: 'Spiritual Guidance',    desc: 'Providing compassionate counsel to students, parents, and devotees alike.' },
]

export default function DeputyTheroSection() {
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
    <section id="deputy-thero" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-maroon-800 via-maroon-800 to-maroon-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #D4A017 1.5px, transparent 1.5px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-badge mb-6 inline-flex">✦ Dhamma School Principal ✦</span>
          <h2 className="font-display text-5xl sm:text-6xl gold-shimmer mb-4">Deputy Head Thero</h2>
          <p className="font-sinhala text-gold-300/70 text-xl mb-2">ප්‍රධානාචාර්‍ය හිමි</p>
          <p className="font-sinhala text-gold-400/50 text-lg">කහතුඩුවේ ඉන්දසාර හිමි</p>
          <div className="lotus-divider max-w-md mx-auto mt-6">
            <span className="text-gold-500 text-xl px-4">☸</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Portrait column */}
          <div className="lg:col-span-2 reveal flex flex-col items-center text-center">
            {/* Portrait frame */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 rounded-full bg-gold-gradient opacity-15 blur-2xl animate-pulse-slow" />
              <div className="relative w-64 h-64 rounded-full border-2 border-gold-400/50 overflow-hidden bg-maroon-700 shadow-gold">
                <Image
                  src={deputyThero}
                  alt="Kahathuduwe Indasara Thero - Deputy Head Thero & Dhamma School Principal"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Saffron overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-saffron-400/25 to-transparent" />
              </div>

              {/* Decorative rings */}
              <div className="absolute -inset-2 rounded-full border border-gold-400/15 dhamma-wheel" />
              <div className="absolute -inset-6 rounded-full border border-gold-400/8" />
            </div>

            {/* Name plate */}
            <div className="border-gold-glow rounded-2xl px-8 py-6 bg-maroon-700/40 w-full">
              <p className="font-sinhala text-gold-200 text-xl mb-1">කහතුඩුවේ ඉන්දසාර හිමි</p>
              <h3 className="font-display text-2xl text-cream-100 mb-1">Venerable</h3>
              <p className="font-serif italic text-gold-300 text-xl mb-3">Kahathuduwe Indasara Thero</p>
              <div className="w-12 h-px bg-gold-400/50 mx-auto mb-3" />
              <p className="font-sans text-xs tracking-widest text-gold-400/70 uppercase">Principal of Dhamma School</p>
              <p className="font-serif text-cream-300/70 text-sm mt-1">Sri Sambuddhaloka Temple, Kahathuduwa</p>
            </div>

            {/* Student-mentor connection badge */}
            <div className="mt-6 flex items-center gap-2 text-xs text-gold-400/50">
              <span className="text-gold-400">✦</span>
              <span>Disciple of Ven Vitiyala Indasiri Thero</span>
              <span className="text-gold-400">✦</span>
            </div>
          </div>

          {/* Description column */}
          <div className="lg:col-span-3 space-y-8">
            <div className="reveal">
              <h3 className="font-serif text-3xl text-cream-100 mb-6 leading-relaxed">
                Carrying the Torch of <br/>
                <em className="text-gold-300">Dhamma Education Forward</em>
              </h3>
              <p className="font-serif text-cream-300/80 text-lg leading-loose mb-4">
                Venerable Kahathuduwe Indasara Thero, the beloved Deputy Head Thero and Principal of the Dhamma School, embodies the same noble qualities as his teacher, Ven Vitiyala Indasiri Thero. A dedicated disciple and spiritual successor, he has taken the sacred mission of Dhamma education to unprecedented heights.
              </p>
              <p className="font-serif text-cream-300/80 text-lg leading-loose mb-4">
                Under his visionary leadership and tireless dedication, the Sri Sambuddhaloka Dhamma School has risen to become <span className="text-gold-300 font-semibold">one of the finest Dhamma schools in the entire Udagahapaththuwa Balamandalaya</span>. His innovative approach to religious education, combined with unwavering commitment to traditional values, has transformed countless young lives.
              </p>
              <p className="font-serif text-cream-300/80 text-lg leading-loose">
                Ven Indasara Thero is widely respected not only for his profound knowledge of the Dhamma but also for his exceptional ability to connect with students, parents, and the broader community. His selfless service and compassionate guidance have made the Dhamma School a beacon of Buddhist education in the Western Province.
              </p>
            </div>

            {/* Legacy connection quote - FIXED: escaped quotes */}
            <div className="reveal relative pl-8 py-4 border-l-4 border-gold-400/40 bg-maroon-700/20 rounded-r-2xl">
              <div className="absolute -left-3 top-4 w-6 h-6 rounded-full bg-gold-400/80 flex items-center justify-center">
                <span className="text-maroon-800 text-xs font-bold">†</span>
              </div>
              <p className="font-serif italic text-gold-200/80 text-lg leading-relaxed">
                &quot;The true measure of a teacher&apos;s legacy is seen in the student who carries forward the light. Ven Indasara Thero is that radiant torch-bearer.&quot;
              </p>
              <p className="font-sans text-xs tracking-widest text-gold-400/50 mt-3 uppercase">— From the Dhamma School Community</p>
            </div>

            {/* Virtues grid */}
            <div className="grid sm:grid-cols-2 gap-4 reveal">
              {deputyVirtues.map((v, i) => (
                <div key={i} className="group p-5 rounded-xl border border-gold-400/20 bg-maroon-700/30 hover:bg-maroon-700/50 hover:border-gold-400/40 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gold-400 text-lg">✦</span>
                    <h4 className="font-sans text-xs tracking-widest text-gold-300 uppercase">{v.label}</h4>
                  </div>
                  <p className="font-serif text-cream-300/70 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Achievement highlight - FIXED: escaped apostrophe */}
            <div className="reveal">
              <div className="bg-gradient-to-r from-gold-400/5 via-gold-400/10 to-gold-400/5 rounded-2xl p-5 border border-gold-400/15 text-center">
                <p className="font-sans text-xs tracking-widest text-gold-400 uppercase mb-2">🏆 Notable Achievement</p>
                <p className="font-serif text-cream-200 text-md leading-relaxed">
                  Under Ven Indasara Thero&apos;s guidance, the Dhamma School has been recognized as one of the <span className="text-gold-300 font-semibold">top Dhamma schools in Udagahapaththuwa Balamandalaya</span>, setting new standards for religious education.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics / Impact numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 reveal">
          <div className="text-center p-6 rounded-2xl border border-gold-400/20 bg-maroon-700/20">
            <p className="font-display text-3xl text-gold-400 mb-2">5000+</p>
            <p className="font-sans text-[10px] tracking-widest text-cream-300/60 uppercase">Students Nurtured</p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-gold-400/20 bg-maroon-700/20">
            <p className="font-display text-3xl text-gold-400 mb-2">25+</p>
            <p className="font-sans text-[10px] tracking-widest text-cream-300/60 uppercase">Years of Service</p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-gold-400/20 bg-maroon-700/20">
            <p className="font-display text-3xl text-gold-400 mb-2">15+</p>
            <p className="font-sans text-[10px] tracking-widest text-cream-300/60 uppercase">Dhamma Teachers Trained</p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-gold-400/20 bg-maroon-700/20">
            <p className="font-display text-3xl text-gold-400 mb-2">100+</p>
            <p className="font-sans text-[10px] tracking-widest text-cream-300/60 uppercase">Community Programs</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
    </section>
  )
}