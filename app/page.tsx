import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import TempleSection from '@/app/components/Templesection'
import TheroSection from '@/app/components/TheroSection'
import DeputyTheroSection from './components/DeputyTheroSection'
import DhammaSchoolSection from './components/DhammaSchoolSection'
import PortfolioSection from '@/app/components/PortfolioSection'
import ContactSection from './components/ContactSection'
// import MediaSection from '../components/MediaSection'
// import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TempleSection />
      <TheroSection />
      <DeputyTheroSection />
      <DhammaSchoolSection />
      <PortfolioSection />
      <ContactSection />

    </main>
  )
}