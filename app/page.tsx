import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import FeaturesSection from '@/components/FeaturesSection'
import Committees from '@/components/Committees'
import Leadership from '@/components/Leadership'
import BestMembers from '@/components/BestMembers'
import Events from '@/components/Events'
import Partners from '@/components/Partners'
import Consular from '@/components/Consular'
import StatsSection from '@/components/StatsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutPreview />
      <FeaturesSection />
      <Committees />
      <Leadership />
      <BestMembers />
      <Events />
      <Partners />
      <Consular />
      <StatsSection />
      <Footer />
    </main>
  )
}
