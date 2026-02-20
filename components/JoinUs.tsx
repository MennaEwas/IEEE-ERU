export default function JoinUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-ieee-blue via-ieee-blue to-ieee-blue-dark text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 fade-in-up">Join Our Community</h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed fade-in-delay-1">
            Become part of a vibrant community of engineers, innovators, and leaders.
            Connect with peers, develop new skills, and make a lasting impact.
          </p>
          <div className="bg-white rounded-xl p-4 md:p-8 overflow-hidden shadow-2xl fade-in-delay-2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScDqnxi8DqF3s-gTOED0Ve3YY07hqI5yYWO2gEFYlnrm4i0JQ/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="Join Us Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
