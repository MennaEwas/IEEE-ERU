import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JoinUs from '@/components/JoinUs'

export default function JoinPage() {
  return (
    <main className="bg-ieee-blue-dark min-h-screen overflow-x-hidden">
      <div className="overflow-x-hidden">
        <Navbar />
        <JoinUs />
        <Footer />
      </div>
    </main>
  )
}
