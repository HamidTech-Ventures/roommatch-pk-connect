
import { Home, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">RoomMatch PK</h3>
                <p className="text-xs text-gray-400">Your Perfect Space</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting students and young professionals with safe, affordable 
              accommodations across Pakistan.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Find Rooms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">List Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">FAQ</a></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Cities</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Lahore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Karachi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Islamabad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Rawalpindi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Faisalabad</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">info@roommatchpk.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} RoomMatch PK. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
