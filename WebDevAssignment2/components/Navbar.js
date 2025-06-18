export default function Navbar() {
    return (
        <nav className="w-full bg-cyan-800 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold">New Generation High School</h1>
                <p className="text-sm sm:text-base text-gray-200">Student Portal</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <button className="bg-white text-green-800 px-4 py-2 rounded-md hover:bg-blue-100 transition">
                  Contact Us
                </button>
              </div>
            </div>
        </nav>
    )
}
