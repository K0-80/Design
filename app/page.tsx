"use client"

import { useEffect, useState } from 'react'
import OrangeDots from './components/OrangeDots'
import Header from './components/Header'
import AboutSection from './components/AboutSection'
import UnleashCreativitySection from './components/UnleashCreativitySection'
import ConnectSection from './components/ConnectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="bg-[#090d00] relative min-h-screen flex flex-col overflow-x-hidden">
      {isClient && <OrangeDots />}
      <Header />
      <main className="flex-grow">
        <AboutSection />
        <UnleashCreativitySection />
        <ConnectSection />
        <ContactSection />
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes aitf {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        html {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  )
}
