"use client"


import { motion } from 'framer-motion'

const OrangeDot = () => {
  const size = Math.random() * 4 + 2
  const opacity = Math.random() * 0.5 + 0.1

  const randomPosition = () => ({
    x: Math.random() * 100 + "%",
    y: Math.random() * 100 + "%",
  })

  const initialPosition = randomPosition()
  const targetPosition = randomPosition()

  return (
    <motion.circle
      cx={initialPosition.x}
      cy={initialPosition.y}
      r={size}
      fill={`rgba(255, 165, 0, ${opacity})`}
      initial={initialPosition}
      animate={targetPosition}
      transition={{
        duration: Math.random() * 60 + 60,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
      style={{
        filter: "blur(1px)",
        boxShadow: `0 0 5px rgba(255, 165, 0, ${opacity})`,
      }}
    />
  )
}

const OrangeDots = () => {
  // Removed useScroll and associated code
  const dots = Array.from({ length: 200 }, (_, i) => <OrangeDot key={i} />)

  return (
    <svg className="fixed inset-0 w-full h-full" aria-hidden="true">
      {dots}
    </svg>
  )
}

export default OrangeDots