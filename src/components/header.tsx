const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="bg-yellow-400 text-black text-sm text-center py-2 px-4">
        Go from idea to action faster than ever before—with our latest features
        .
        <button className="ml-2 bg-black text-white px-3 py-1 rounded text-sm hover:opacity-90">
          Watch now
        </button>
      </div>

      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-lg">actor</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm">
          <div className="relative group">
            <button className="hover:text-blue-600">Home</button>
          </div>
          <div className="relative group">
            <button className="hover:text-blue-600">Solutions</button>
          </div>
          <div className="relative group">
            <button className="hover:text-blue-600">Resources</button>
          </div>
          <a href="#" className="hover:text-blue-600">
            Price
          </a>
        </nav>

        <div className="flex items-center space-x-4 text-sm">
          <button className="hover:underline">Contact</button>
          <button className="hover:underline">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
