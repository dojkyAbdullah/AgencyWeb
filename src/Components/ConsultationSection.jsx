import { useState } from "react"
import { motion } from "framer-motion"

const ConsultationSection = () => {
  const [submissions, setSubmissions] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const submission = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }
    setSubmissions([...submissions, submission])
    e.target.reset()
  }

  return (
    <section className="bg-[#0B0F19] py-20 block" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl heroHeading text-center font-bold  text-white relative z-10">
                CONTACT US
              </h2>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
            {/* Contact Form */}
            <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-[#1A1F2E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-[#1A1F2E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 bg-[#1A1F2E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative h-[300px] md:h-[400px] bg-blue-600/5 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Decorative Elements */}
              <div className="absolute w-full h-full">
                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full" />
              </div>

              {/* Main Illustration */}
              <svg
                className="w-64 h-64 text-blue-500/20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                <path d="M12 22.08V12" />
              </svg>

              {/* Additional Decorative Elements */}
              <div className="absolute w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-500 rounded-full" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationSection

