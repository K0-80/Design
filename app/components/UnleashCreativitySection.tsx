"use client"

import { motion } from 'framer-motion'
import TypewriterText from './TypewriterText'

const UnleashCreativitySection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8"
        >
          We need YOU!
        </motion.h2>
        <TypewriterText
          text="We want to share with you practical experience across various design disciplines, allowing you to enhance your technical skills and along with your creativity through hands-on projects. We will create opportunities for you to present your projects, promoting a vibrant culture of creativity within IRHS, allowing them to showcase their creativity and build connections."
        />
      </div>
    </section>
  )
}

export default UnleashCreativitySection