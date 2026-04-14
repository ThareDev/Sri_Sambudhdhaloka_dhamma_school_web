'use client'
import { useEffect, useRef, useState } from 'react'

const schoolFeatures = [
  { icon: '📚', title: 'Structured Curriculum', desc: 'Comprehensive Dhamma education from primary to advanced levels, following traditional Theravāda teachings with modern pedagogical approaches.' },
  { icon: '🎓', title: 'Qualified Teachers', desc: 'Dedicated and experienced monastic and lay teachers committed to student development and spiritual growth.' },
  { icon: '🏆', title: 'Excellence Records', desc: 'Consistently producing top results in island-wide Dhamma examinations with 100% pass rate.' },
  { icon: '🌍', title: 'Holistic Development', desc: 'Balancing spiritual, moral, and social education for complete character building.' },
  { icon: '📖', title: 'Scriptural Studies', desc: 'In-depth study of Pāli scriptures, Suttas, and Buddhist philosophy.' },
  { icon: '🧘', title: 'Meditation Training', desc: 'Regular mindfulness and meditation sessions for inner peace and focus.' },
]

const achievements = [
  { number: '25+', label: 'Years of Excellence', icon: '📅' },
  { number: '5000+', label: 'Students Nurtured', icon: '👨‍🎓' },
  { number: '100%', label: 'Examination Pass Rate', icon: '📊' },
  { number: '15+', label: 'Dedicated Teachers', icon: '👩‍🏫' },
  { number: '50+', label: 'Annual Events', icon: '🎉' },
  { number: '30+', label: 'Villages Covered', icon: '🏘️' },
]

export default function DhammaSchoolSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animatedNumbers, setAnimatedNumbers] = useState(achievements.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          e.target.classList.toggle('visible', e.isIntersecting)
          
          // Animate numbers when section becomes visible
          if (e.isIntersecting && e.target.id === 'stats-container') {
            achievements.forEach((_, index) => {
              let start = 0
              const end = parseInt(achievements[index].number)
              const duration = 2000
              const increment = end / (duration / 16)
              
              const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                  setAnimatedNumbers(prev => {
                    const newArr = [...prev]
                    newArr[index] = end
                    return newArr
                  })
                  clearInterval(timer)
                } else {
                  setAnimatedNumbers(prev => {
                    const newArr = [...prev]
                    newArr[index] = Math.floor(start)
                    return newArr
                  })
                }
              }, 16)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    observer.observe(document.getElementById('stats-container') as Element)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="dhamma-school" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-maroon-900 via-maroon-800 to-maroon-900 overflow-hidden">
      {/* Animated decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 animate-spin-slow" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L50 25 L40 40 L30 25 Z' fill='%23D4A017'/%3E%3Cpath d='M40 40 L50 55 L40 70 L30 55 Z' fill='%23D4A017'/%3E%3Cpath d='M10 40 L25 50 L40 40 L25 30 Z' fill='%23D4A017'/%3E%3Cpath d='M40 40 L55 50 L70 40 L55 30 Z' fill='%23D4A017'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header with animated underline */}
        <div className="text-center mb-20 reveal">
          <span className="section-badge mb-6 inline-flex animate-pulse-slow">✦ Nurturing Wisdom ✦</span>
          <h2 className="font-display text-5xl sm:text-7xl gold-shimmer mb-4 animate-slide-down">
            Dhamma School
          </h2>
          <p className="font-sinhala text-gold-300/70 text-2xl mb-4 animate-slide-up">ශ්‍රී සම්බුද්ධාලෝක දහම් පාසල </p>
          <div className="lotus-divider max-w-md mx-auto mt-6">
            <span className="text-gold-500 text-2xl px-4 animate-pulse">☸</span>
          </div>
        </div>

        {/* Hero description with animated border */}
        <div className="reveal mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-400/20 via-gold-400/40 to-gold-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-gradient-to-br from-maroon-800/50 to-maroon-900/50 rounded-3xl p-10 border border-gold-400/20 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gold-400/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 text-center">
                <div className="inline-block mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                </div>
                <p className="font-serif text-cream-200 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                  <span className="text-gold-300 font-semibold">Sri Sambuddhaloka Dhamma School</span> stands as a beacon of Buddhist education, 
                  recognized as <span className="text-gold-300 font-semibold">one of the finest Dhamma schools in Udagahapaththuwa Balamandalaya</span>.
                </p>
                <div className="inline-block mt-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - Mission text */}
          <div className="reveal space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-gold-400 to-transparent" />
              <h3 className="font-serif text-3xl text-cream-100 leading-relaxed">
                A Legacy of<br />
                <em className="text-gold-300 text-4xl">Dhamma Excellence</em>
              </h3>
            </div>
            
            <p className="font-serif text-cream-300/80 text-lg leading-loose">
              Under the visionary guidance of our esteemed Head Thero, Ven Vitiyala Indasiri Thero, and the dedicated leadership of our Principal, 
              Ven Kahathuduwe Indasara Thero, we have established ourselves as a premier institution for Buddhist education.
            </p>
            
            <p className="font-serif text-cream-300/80 text-lg leading-loose">
              Our institution is built on the foundation of traditional Theravāda Buddhist values while embracing modern pedagogical approaches. 
              We believe in nurturing not just knowledgeable students, but compassionate, ethical, and spiritually grounded individuals.
            </p>

            {/* Animated lotus icon */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center animate-spin-slow">
                <span className="text-gold-400 text-xl">☸</span>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest text-gold-400/70 uppercase">Established</p>
                <p className="font-serif text-cream-200 text-lg">1998 · Over 25 Years of Service</p>
              </div>
            </div>
          </div>

          {/* Right side - Stats with animated numbers */}
          <div id="stats-container" className="reveal">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="group text-center p-5 rounded-2xl bg-maroon-700/30 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <p className="font-display text-3xl text-gold-400 mb-1">
                    {animatedNumbers[i]}{item.number.includes('+') && '+'}
                  </p>
                  <p className="font-sans text-[10px] tracking-widest text-cream-300/60 uppercase">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features grid with hover animations */}
        <div className="mb-20">
          <div className="text-center mb-12 reveal">
            <h3 className="font-serif text-3xl text-cream-100 mb-3">What Makes Us Unique</h3>
            <div className="w-20 h-px bg-gold-400/50 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolFeatures.map((feature, i) => (
              <div
                key={i}
                className="reveal group p-6 rounded-2xl border border-gold-400/20 bg-maroon-700/30 hover:bg-maroon-700/50 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {feature.icon}
                </div>
                <h4 className="font-serif text-xl text-cream-100 mb-2 group-hover:text-gold-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="font-sans text-sm text-cream-300/60 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="mt-4 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Special recognition badge with animation */}
        <div className="reveal mb-20">
          <div className="relative bg-gradient-to-r from-gold-400/5 via-gold-400/15 to-gold-400/5 rounded-3xl p-10 border border-gold-400/30 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-400/5 via-transparent to-transparent animate-pulse-slow" />
            
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <div className="w-16 h-16 rounded-full bg-gold-400/10 flex items-center justify-center animate-bounce-slow">
                  <span className="text-gold-400 text-4xl">🏆</span>
                </div>
              </div>
              <h4 className="font-serif text-2xl text-cream-100 mb-3">Recognized Excellence</h4>
              <p className="font-serif text-cream-300/80 text-xl max-w-3xl mx-auto">
                Consistently recognized as <span className="text-gold-300 font-semibold">one of the best Dhamma schools in Udagahapaththuwa Balamandalaya</span>
              </p>
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-400 text-2xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action with animated button */}
        <div className="text-center reveal">
          <div className="inline-block border-gold-glow rounded-2xl px-12 py-10 bg-maroon-700/40 hover:bg-maroon-700/50 transition-all duration-500">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center mx-auto animate-pulse">
                <span className="text-gold-400 text-2xl">☸</span>
              </div>
            </div>
            <p className="font-sans text-xs tracking-widest text-gold-400/70 uppercase mb-3">Begin Your Journey</p>
            <h4 className="font-serif text-2xl text-cream-100 mb-3">Join Our Dhamma School</h4>
            <p className="font-serif text-cream-300/70 mb-6">Classes every Sunday | 8:30 AM - 11:00 AM</p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold-gradient text-maroon-800 font-sans text-xs tracking-widest uppercase hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Enroll Today
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}