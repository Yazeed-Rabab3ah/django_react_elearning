import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      

      {/* Lower Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo Section */}
            <div className="text-4xl font-bold text-black">EduMate</div>
            {/* Menu Section (Desktop) */}
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className={`text-gray-600 hover:text-black ${
                  location.pathname === "/" ? "text-black font-bold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className={`text-gray-600 hover:text-black ${
                  location.pathname === "/aboutus" ? "text-black font-bold" : ""
                }`}
              >
                About Us 
              </Link>
              <Link
                to="/courses"
                className={`text-gray-600 hover:text-black ${
                  location.pathname === "/courses" ? "text-black font-bold" : ""
                }`}
              >
                Courses
              </Link>
              <Link
                to="/contact"
                className={`text-gray-600 hover:text-black ${
                  location.pathname === "/contact" ? "text-black font-bold" : ""
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Button Section */}
            <div className="flex">
              <button
                className="text-black hover:text-white border border-black bg-white hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>

              <button
                className="text-white hover:text-black border border-black bg-black hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center -ml-1"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <Link
              to="/"
              className={`block px-4 py-2 text-gray-600 hover:bg-gray-200 ${
                location.pathname === "/" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className={`block px-4 py-2 text-gray-600 hover:bg-gray-200 ${
                location.pathname === "/aboutus" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block px-4 py-2 text-gray-600 hover:bg-gray-200 ${
                location.pathname === "/services" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-2 text-gray-600 hover:bg-gray-200 ${
                location.pathname === "/contact" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex justify-center space-x-4 py-4">
              <FaFacebook className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="w-6 h-6 text-gray-600 hover:text-gray-400 cursor-pointer" />
              <FaTwitter className="w-6 h-6 text-gray-600 hover:text-blue-400 cursor-pointer" />
              <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-900 cursor-pointer" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}