"use client"

import { motion } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'

const Header = () => {
  return (
    <header className="h-screen flex flex-col items-center justify-center overflow-hidden relative p-4">
      <div className="relative w-full max-w-7xl text-center">
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.line
            x1="0"
            y1="4"
            x2="100%"
            y2="4"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.line
            x1="0"
            y1="100%"
            x2="100%"
            y2="100%"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.line
            x1="0"
            y1="calc(100% - 4px)"
            x2="100%"
            y2="calc(100% - 4px)"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
          />
        </svg>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="uppercase tracking-[0.5em] inline-block py-6 relative z-10 text-[rgba(255,255,255,0.25)] font-['Neuton'] text-base leading-normal"
        >
          &mdash; Come join us at &mdash;
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="block text-5xl sm:text-7xl lg:text-8xl font-bold font-['Oswald',sans-serif] tracking-normal py-2 my-0 mx-auto"
            style={{
              textShadow: "0 0 80px rgba(255, 165, 0, 0.5)",
              backgroundImage: "url(https://i.ibb.co/RDTnNrT/animated-text-fill.png)",
              backgroundRepeat: "repeat",
              backgroundSize: "1200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "aitf 180s linear infinite",
              WebkitAnimation: "aitf 180s linear infinite",
              WebkitTransform: "translate3d(0, 0, 0)",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            Design Club
          </motion.span>
          Html · Blender · Unity 
        </motion.p>
      </div>
      <ScrollIndicator />
    </header>
  )
}

export default Header