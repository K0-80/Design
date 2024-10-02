import AnimatedText from './AnimatedText'

const AboutSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <AnimatedText>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About Us
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-white text-2xl md:text-3xl leading-relaxed">
            In an era where artificial intelligence is <strong>rapidly advancing</strong>, many of us feel <strong>uncertain</strong> about our future in design and the arts. Personally, I paused my coding and 3D modeling journey for quite a while because I believed it was becoming <strong>obsolete due to AI</strong>. The Design Club aims to address these concerns by <strong>providing Information and Resources</strong>, we wish to equip students with facts and insights about design, enabling them to develop a comprehensive understanding of their future roles in the life.
          </p>
        </AnimatedText>
      </div>
    </section>
  )
}

export default AboutSection