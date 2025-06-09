import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; 

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="bg-yellow-400 text-black text-sm text-center py-2 px-4">
        Go from idea to action faster than ever before—with our latest features.
        <Link to="/watch-now">
          <button className="ml-2 bg-black text-white px-3 py-1 rounded text-sm hover:opacity-90">
            Watch Now
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <Link className="font-semibold text-lg" to="/">
            actor
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/price">Price</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/solutions">Solutions</Link>
        </nav>

        <div className="flex items-center space-x-4 text-sm">
          <Link className="hover:underline" to="/contact">
            Contact
          </Link>

          {!user ? (
            <>
              <Link className="hover:underline" to="/login">
                Login
              </Link>
              <Link
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                to="/register"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link className="hover:underline" to="/profile">
                Profile
              </Link>
              <button onClick={logout} className="hover:underline text-red-500">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
