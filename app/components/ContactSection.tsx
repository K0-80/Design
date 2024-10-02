import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section className="py-32 relative">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-pulse">Contact</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection