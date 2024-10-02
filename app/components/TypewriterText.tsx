"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const TypewriterText = ({ text }: { text: string }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (inView) {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex += 1
        } else {
          clearInterval(interval)
        }
      }, 20)

      return () => clearInterval(interval)
    }
  }, [inView, text])

  return (
    <motion.p
      ref={ref}
      animate={controls}
      className="text-white text-2xl md:text-3xl leading-relaxed"
    >
      {displayedText}
    </motion.p>
  )
}

export default TypewriterText