"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Consultation from "../assets/Consulting.webp"
import Design from "../assets/D&D.webp"
import Testing from "../assets/Testing1.webp"

const ProcessStep = ({ number, title, description, image }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="flex flex-col space-y-4"
    >
      {/* Image Container with subtle animation */}
      <motion.div
        className="bg-blue-600/5 rounded-lg overflow-hidden w-full h-96 flex items-center justify-center relative"
        whileHover={{
          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <img src={image || "/placeholder.svg"} className="w-full h-full text-blue-500 relative z-10" alt={title} />
      </motion.div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <motion.span
            className="text-blue-500 text-lg font-semibold"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
          >
            Step {number}:
          </motion.span>
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
        <motion.p
          className="text-gray-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

const DevelopmentProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Initial Consultation and Planning",
      description:
        "Our team meets with you to understand your vision, goals, and requirements. We collaborate to create a comprehensive project plan that aligns with your business objectives.",
      image: Consultation,
    },
    {
      number: "2",
      title: "Design and Development Phase",
      description:
        "Our skilled designers and developers work together to bring your ideas to life. We create intuitive interfaces and robust backend systems tailored to your specific needs.",
      image: Design,
    },
    {
      number: "3",
      title: "Testing and Quality Assurance",
      description:
        "We conduct thorough testing to ensure your project meets the highest standards of quality and performance. Our team works diligently to deliver a polished, bug-free product.",
      image: Testing,
    },
  ]

  return (
    <section className="bg-[#0B0F19] py-20" id="development-process">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="relative mb-4">
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

          <h2 className="text-4xl md:text-6xl heroHeading text-center font-bold  text-white relative z-10">
            Our Development Process
          </h2>
        </div>

        <motion.p
          className="text-gray-400 text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our seamless development process ensures a structured and efficient approach to bringing your ideas to life.
          From initial consultation to final testing, we prioritize clarity, collaboration, and quality, delivering
          solutions that align with your business goals.
        </motion.p>

        {/* Process Steps Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              image={step.image}
            />
          ))}
        </motion.div>

        {/* Optional: Connection Lines for Desktop */}
        <div className="hidden lg:block relative">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-600/20 -z-10 transform -translate-y-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  )
}

export default DevelopmentProcess

