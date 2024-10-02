import { MessageCircle, GraduationCap, BookOpen } from 'lucide-react'

const ConnectSection = () => {
  return (
    <section className="py-16 relative">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-lg text-gray-300">Join our community and stay updated with the latest events and resources.</p>
        </div>
        <div className="flex justify-center space-x-12">
          <a href="#" className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20 group-hover:shadow-lg group-hover:shadow-orange-500/50">
              <MessageCircle className="w-8 h-8 text-white transition-all duration-300 group-hover:text-orange-400" />
            </div>
            <span className="mt-2 text-white group-hover:text-orange-400 transition-all duration-300">Discord</span>
          </a>
          <a href="#" className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20 group-hover:shadow-lg group-hover:shadow-orange-500/50">
              <GraduationCap className="w-8 h-8 text-white transition-all duration-300 group-hover:text-orange-400" />
            </div>
            <span className="mt-2 text-white group-hover:text-orange-400 transition-all duration-300">Classroom</span>
          </a>
          <a href="#" className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20 group-hover:shadow-lg group-hover:shadow-orange-500/50">
              <BookOpen className="w-8 h-8 text-white transition-all duration-300 group-hover:text-orange-400" />
            </div>
            <span className="mt-2 text-white group-hover:text-orange-400 transition-all duration-300">Resources</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection