const Footer = () => {
  return (
    <footer className="relative z-10 bg-black bg-opacity-50 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">website was hand crafted by Kaisen</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Discord</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Classroom</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer