import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-white">Actors</div>

          <nav className="flex space-x-6 text-sm md:text-base">
            <Link to="/price" className="hover:text-gray-400 transition-colors">
              Price
            </Link>
            <Link
              to="/resources"
              className="hover:text-gray-400 transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/solutions"
              className="hover:text-gray-400 transition-colors"
            >
              Solutions
            </Link>
          </nav>
        </div>

        <div className="border-t border-gray-700 my-6" />

        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
