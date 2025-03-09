"use client"

import { useState } from "react"
import HeroImage from "../assets/HeroImage.png"
import Logo from "../assets/TechPulseLogo3.png"
import { HashLink as Link } from "react-router-hash-link"
import { motion, AnimatePresence } from "framer-motion"

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Animation variants for letter-by-letter animation
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  }

  // Split the heading text into words for animation
  const headingText = "We are a top-notch"
  const developmentText = "development"
  const agencyText = "agency"

  return (
    <div className="min-h-screen bg-[#0B0F19] block" id="Home">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-12 -mt-10 -mb-10 flex items-center justify-between relative z-50 py-6"
      >
        <div className="flex-1 ">
          <motion.div
            className="inline-block h-40 w-40"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img 
              src={Logo} 
              alt="Tech Pulse Logo" 
            
          
            />
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Link smooth to="#Home" className="text-blue-500">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Link smooth to="#services" className="text-gray-300 hover:text-white">
              Services
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Link smooth to="#why-us" className="text-gray-300 hover:text-white">
              Why Us
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Link smooth to="#development-process" className="text-gray-300 hover:text-white">
              Our Process
            </Link>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Link
              smooth
              to="#contact"
              className="text-white"
            >
              Contact us
            </Link>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden text-center absolute top-20 left-0 right-0 bg-[#0B0F19] border-b border-blue-500/20 z-40 px-4 py-5 shadow-lg"
          >
            <motion.div className="flex flex-col space-y-4" variants={menuVariants}>
              <motion.div variants={menuItemVariants}>
                <Link
                  smooth
                  to="#Home"
                  className="block py-2 text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  smooth
                  to="#services"
                  className="block py-2 text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  smooth
                  to="#why-us"
                  className="block py-2 text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Us
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  smooth
                  to="#development-process"
                  className="block py-2 text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Process
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  smooth
                  to="#contact"
                  className="block py-2 bg-blue-600 text-white px-4 rounded-full hover:bg-blue-700 transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                  
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-20 md:pb-20 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-4 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              {/* Letter-by-letter animated heading without background animation */}
              <motion.h1
                className="text-4xl md:text-6xl heroHeading text-white leading-tight"
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                {/* First part of heading */}
                {headingText.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-4">
                    {word.split("").map((char, charIndex) => (
                      <motion.span key={charIndex} variants={letterVariants} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
                <br className="md:hidden" />
                {/* Development word with blue color */}
                <span className="text-blue-500 inline-block mr-4">
                  {developmentText.split("").map((char, index) => (
                    <motion.span key={index} variants={letterVariants} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </span>
                <br className="" />
                {/* Agency word */}
                {agencyText.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: "easeOut",
              }}
              className="text-gray-400 text-lg max-w-xl"
            >
              We transform complex challenges into elegant digital solutions that elevate your business, blending innovative technology with unparalleled expertise to deliver results that exceed expectations.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: "easeOut",
              }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Link
                  smooth
                  to="#contact"
                  className="text-white"
                >
                  Contact us
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-[#1A1F2E] text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-[#252B3D] transition-colors"
              >
                <Link
                  smooth
                  to="#services"
                  className="text-white"
                >
                  Our Services
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="relative scale-110 md:scale-110 lg:scale-125 xl:scale-150 transform origin-center mt-8 md:mt-0"
          >
            {/* Image without animations */}
            <img src={HeroImage || "/placeholder.svg"} alt="3D Development Illustration" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero