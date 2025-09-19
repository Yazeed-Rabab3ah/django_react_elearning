import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 font-semibold text-black  text-2xl ">EduMate</h2>
                        <ul className="text-black font-medium">
                        <li className="mb-4"><Link to="/aboutus" className="hover:underline">About Us</Link></li>
                            <li className="mb-4"><Link to="/courses" className="hover:underline">Courses</Link></li>
                            <li className="mb-4"><Link to="/" className="hover:underline">Home</Link></li>
                            <li className="mb-4"><Link to="/contact" className="hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 font-semibold text-black  text-2xl">Help center</h2>
                        <ul className="text-black font-medium">
                            <li className="mb-4"><a href="#" className="hover:underline">Discord Server</a></li>
                            <li className="mb-4"><a href="#" className="hover:underline">Twitter</a></li>
                            <li className="mb-4"><a href="#" className="hover:underline">Facebook</a></li>
                            <li className="mb-4"><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 font-semibold text-black  text-2xl">Legal</h2>
                        <ul className="text-black font-medium">
                            <li className="mb-4"><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li className="mb-4"><a href="#" className="hover:underline">Licensing</a></li>
                            <li className="mb-4"><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
             
      <div className="bg-gray-100 shadow-md">
        <div className="px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2 text-black py-3">2025 EduMate. All right reserved.</span>
            </div>

            <div className="hidden md:flex space-x-4">
              <FaFacebook className="w-6 h-6 text-black hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="w-6 h-6 text-black hover:text-gray-400 cursor-pointer" />
              <FaTwitter className="w-6 h-6 text-black hover:text-blue-400 cursor-pointer" />
              <FaLinkedin className="w-6 h-6 text-black hover:text-blue-900 cursor-pointer" />
            </div>
          </div>
        </div>
        <hr className="border-gray-800" />
      </div>
        </footer>
    );
}

export default Footer;
