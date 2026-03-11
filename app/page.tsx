import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import FeaturesSection from '@/components/FeaturesSection'
import Committees from '@/components/Committees'
import Leadership from '@/components/Leadership'
import BestMembers from '@/components/BestMembers'
import Gallery from '@/components/Gallery'
import Partners from '@/components/Partners'
import Consular from '@/components/Consular'
import Leaderboard from '@/components/Leaderboard'
import StatsSection from '@/components/StatsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-ieee-blue-dark min-h-screen">
      <div>
        <Navbar />
        <Hero />
        <AboutPreview />
        <FeaturesSection />
        <Committees />
        <Leadership />
        <BestMembers />
        <Gallery />
        <Partners />
        <Consular />
        <Leaderboard />
        <StatsSection />
        <Footer />
      </div>
    </main>
  )
}
