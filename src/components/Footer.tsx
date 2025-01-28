import React, { useState } from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  LucideIcon,
} from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  delay: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-700 group-hover:duration-200" />
      <Icon
        className={`relative w-6 h-6 cursor-pointer transition-all duration-300 transform hover:scale-110 
          ${isHovered ? "text-white animate-bounce" : "text-gray-300"}`}
      />
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Brand Section */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Wanderlust Adventures
            </h3>
            <div className="flex justify-center space-x-6">
              {/* Social Icons */}
              <a
                href="https://www.instagram.com/internee.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <SocialIcon icon={Instagram} delay={0} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100093222249320"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <SocialIcon icon={Facebook} delay={100} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <SocialIcon icon={Twitter} delay={200} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-4">
            <h4 className="font-semibold text-lg text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {["Terms and Conditions", "Privacy Policy", "FAQs"].map(
                (link) => (
                  <li key={link} className="text-center">
                    <a
                      href="#"
                      className="group relative overflow-hidden inline-block"
                    >
                      <span className="relative z-10 text-gray-300 transition-colors duration-300 group-hover:text-white">
                        {link}
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-4">
            <h4 className="font-semibold text-lg text-blue-400">Contact</h4>
            <address className="not-italic space-y-3 flex flex-col items-center">
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                  123 Travel Street
                  <br />
                  Adventure City, Gulberg Karachi
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  (+92) 335-6969696
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  info@wanderlust.com
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Wanderlust Adventures. All rights reserved. Designed by
            Hamyz.
          </p>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-8 -top-6 p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
