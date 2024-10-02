import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section className="py-8 relative">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-pulse">Contact</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection