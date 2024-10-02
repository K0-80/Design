"use client"

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <ChevronDown className="w-8 h-8 text-white opacity-50" />
    </motion.div>
  )
}

export default ScrollIndicator