import Link from "next/link";
import { FaBirthdayCake, FaHeart, FaStar , FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <footer 
        aria-label="Site Footer" 
        className="bg-black text-gray-300 py-12 w-full"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* About Us Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">About Us</h2>
              <p className="text-gray-400 leading-relaxed">
                Patna Decoration specializes in transforming special moments into magical experiences. 
                We craft unforgettable decorations tailored to your celebration.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Quick Links</h2>
              <nav aria-label="Footer Navigation">
                <ul className="space-y-2">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" }
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link 
                        href={href} 
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Services</h2>
              <ul className="space-y-2">
                {[
                  { href: "/birthday-decoration", icon: FaBirthdayCake, label: "Birthday Celebrations" },
                  { href: "/anniversary-decoration", icon: FaHeart, label: "Anniversary Celebrations" },
                  { href: "/special-occasions", icon: FaStar, label: "Special Occasions" }
                ].map(({ href, icon: Icon, label }) => (
                  <li key={href}>
                    <Link 
                      href={href} 
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 space-x-2"
                    >
                      <Icon className="mr-2" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Contact Us</h2>
              <address className="not-italic space-y-2">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <span>Biharsharif, Nalanda</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-gray-400" />
                  <a 
                    href="mailto:patnadecor@gmail.com" 
                    className="hover:underline"
                  >
                    patnadecor@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-gray-400" />
                  <a 
                    href="tel:+919693108300" 
                    className="hover:underline"
                  >
                    +91 96931 08300
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Copyright Section */}
          <div 
            className="mt-12 pt-8 border-t border-gray-800 text-center"
            aria-label="Copyright Information"
          >
            <p className="text-gray-400">
              © {currentYear} Patna Decoration. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;