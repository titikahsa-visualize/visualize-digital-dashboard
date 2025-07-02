export default function Navbar() {
  return (
    <header className="w-full flex justify-center mt-4">
      <div className="flex items-center justify-between bg-white px-10 py-3 rounded-full shadow-lg w-full max-w-[100rem] mx-6 mt-[-28px]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo192.png" alt="logo" className="h-8 w-8" />
          <span className="font-bold text-sm">
            <span className="text-sky-600">Visualize</span>{" "}
            <span className="text-lime-600">Digital</span>
            <p className="text-gray-500 text-xs font-medium -mt-1">
              Your Tech Partner
            </p>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-black font-semibold text-sm">
          <a href="#" className="hover:text-lime-600">Services</a>
          <a href="#" className="hover:text-lime-600">Technologies</a>
          <a href="#" className="hover:text-lime-600">Industries</a>
          <a href="#" className="hover:text-lime-600">Portfolio</a>
          <a href="#" className="hover:text-lime-600">Insights</a>
          <a href="#" className="hover:text-lime-600">About</a>
        </nav>

        {/* Contact Button */}
        <button className="bg-gradient-to-r from-green-400 to-lime-500 text-white font-semibold text-sm px-5 py-2 rounded-full border-2 border-purple-300 shadow-md hover:scale-105 transition">
          CONTACT →
        </button>
      </div>
    </header>
  );
}