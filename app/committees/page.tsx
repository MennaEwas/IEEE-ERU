import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Committees from '@/components/Committees'
import Link from 'next/link'

export default function CommitteesPage() {
  return (
    <main className="bg-ieee-blue-dark min-h-screen overflow-x-hidden">
      <div className="overflow-x-hidden">
        <Navbar />
      
      {/* Use the same Committees component from the home page */}
      <Committees />

      {/* Additional CTA section */}
      <section className="section-padding bg-ieee-blue-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 fade-in-up text-white text-2xl sm:text-3xl md:text-4xl">Interested in Joining a Committee?</h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 fade-in-delay-1 px-4">
              Our committees are always looking for passionate members who want to make a difference. 
              Join us and contribute to our mission!
            </p>
            <div className="fade-in-delay-2">
              <Link href="/join" className="btn-secondary inline-block">
                Join Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </main>
  )
}
