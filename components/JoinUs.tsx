'use client'

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
          <div className="bg-white rounded-xl p-4 md:p-8 overflow-hidden shadow-2xl fade-in-delay-2 border-2 border-white/30 hover:border-white/100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group hover:brightness-110 hover:shadow-[0_0_50px_rgba(255,255,255,1)] hover:ring-4 hover:ring-white/100">
            {/* 
              NOTE: Update the `action` URL to point to your online sheet integration
              (e.g., a Google Apps Script Web App or form endpoint that writes to a sheet).
            */}
            <form
              action="https://your-sheet-endpoint-url-here"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6 text-left"
            >
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-800">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-800">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email & University ID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-800">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-800">
                    University ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="universityId"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                    placeholder="e.g., 2023XXXXX"
                  />
                </div>
              </div>

              {/* Non-ERU Info */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  If you're not an ERU student please mention your University and Faculty
                </label>
                <input
                  type="text"
                  name="otherUniversityFaculty"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                  placeholder="University and Faculty (if applicable)"
                />
              </div>

              {/* Faculty & Year of Study */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-800">
                    Faculty <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="faculty"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                    placeholder="Faculty"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-800">
                    Year of Study <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="yearOfStudy"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900 bg-white"
                  >
                    <option value="">Select year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="5th Year">5th Year</option>
                  </select>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                  placeholder="+20..."
                />
              </div>

              {/* Position */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  Which position do you want to apply to? <span className="text-red-500">*</span>
                </label>
                <select
                  name="position"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900 bg-white"
                >
                  <option value="">Select a position</option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Multi Media">Multi Media</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Public Relations">Public Relations</option>
                  <option value="Operations">Operations</option>
                  <option value="Projects">Projects</option>
                </select>
              </div>

              {/* Open Questions */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  Why do you want to join IEEE ERU? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="whyJoin"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                  placeholder="Tell us your motivation..."
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  Why did you choose this position? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="whyPosition"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                  placeholder="Explain why this position suits you..."
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  Have you previously participated in any student activities? If so, please specify the activity, your role in it, and whether you are currently involved. <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="previousActivities"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                  placeholder="Describe your previous student activities..."
                />
              </div>

              {/* CV Upload */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  CV (Max 10 MB)
                </label>
                <input
                  type="file"
                  name="cv"
                  className="w-full text-gray-900"
                  accept=".pdf,.doc,.docx"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="linkedin"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                  placeholder="https://www.linkedin.com/in/username"
                />
              </div>

              {/* Comments */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  Comments
                </label>
                <textarea
                  name="comments"
                  rows={3}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-ieee-blue focus:border-ieee-blue outline-none text-gray-900"
                  placeholder="Any additional comments..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 rounded-md bg-ieee-blue text-white font-semibold hover:bg-ieee-blue-light transition-colors duration-200"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
