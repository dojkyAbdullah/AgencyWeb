"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const ServiceCard = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative">
      <div
        className={`bg-blue-600/5 backdrop-blur-sm rounded-lg box transition-all border-1 border-blue-500/30 duration-300 pt-6 ease-in-out
          ${isExpanded ? "pb-20" : "pb-6"}`}
      >
        <div className="flex items-center justify-between p-6" onClick={() => setIsExpanded(!isExpanded)}>
          <h3 className="text-white text-xl font-medium">{title}</h3>
          <button
            className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center transition-transform duration-300"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <svg
              className={`w-6 h-6 text-white transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        <div
          className={`px-6 transition-all duration-300 ease-in-out overflow-hidden
            ${isExpanded ? "opacity-100 max-h-96" : "opacity-0 max-h-0"}`}
        >
          <p className="text-gray-400 pt-4 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: `Craft modern, responsive, and high-performance websites that engage users and drive business growth. Our web development team specializes in building scalable and secure solutions, from business websites to complex web applications. We ensure seamless functionality, fast load times, and a user-friendly experience tailored to your unique needs.`,
    },
    {
      title: "Mobile App Development",
      description: `Transform your ideas into powerful mobile applications for iOS and Android platforms. 
      Our mobile development team creates intuitive, feature-rich apps that provide exceptional user experiences. 
      We focus on performance, security, and scalability while ensuring your app stands out in the competitive 
      mobile marketplace. From concept to deployment, we handle every aspect of mobile app development.`,
    },
    {
      title: "Software Solutions",
      description: `Our custom software development services are tailored to meet your unique business needs. We specialize in creating scalable, secure, and efficient solutions using cutting-edge technologies. Our experienced team follows industry best practices and agile methodologies to deliver high-quality software that drives business growth and improves operational efficiency. From web applications to enterprise software, we handle projects of any complexity.`,
    },
    {
      title: "UI/UX Design",
      description: `Create compelling user experiences with our UI/UX design services. 
      Our design team combines creativity with user-centered design principles to deliver 
      interfaces that are both beautiful and functional. We conduct thorough user research, 
      create interactive prototypes, and implement designs that engage users and drive conversions. 
      Every pixel is crafted with purpose and precision.`,
    },
    {
      title: "Ecommerce Solutions",
      description: `Build high-converting online stores with seamless shopping experiences. We specialize in e-commerce website development, payment gateway integration, and performance optimization to ensure your store operates smoothly. Whether you're launching a new store or upgrading an existing platform, we create scalable and secure e-commerce solutions tailored to your brand.`,
    },
    {
      title: "Quality Assurance",
      description: `Ensure the highest quality of your software with our comprehensive testing services. 
      Our QA team performs thorough manual and automated testing to identify and eliminate issues 
      before they reach production. We implement test automation frameworks, perform security testing, 
      and conduct performance testing to ensure your software meets the highest quality standards.`,
    },
  ]

  return (
    <section className="bg-[#0B0F19] py-10 block" id="services">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          {/* Background gradient positioned outside but relative to the heading */}
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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heroHeading text-white text-center relative z-10">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

