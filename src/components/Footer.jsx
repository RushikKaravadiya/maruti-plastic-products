import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Layout Fix: Changed to 4-column system for perfectly even spacing across sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 mb-12">
            {/* Company Info (Spans 2 columns on medium viewports to protect typography sizing) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/MPlogo.png"
                  alt="Maruti Plastic Products"
                  className="h-10 w-10 object-contain shrink-0"
                />
                <span className="font-bold text-lg">
                  Maruti Plastic Products
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-sm">
                Premium industrial Plastic solutions for over 17 years. Trusted
                by leading manufacturers worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-accent-orange mt-1 shrink-0"
                  />
                  <span className="text-sm text-gray-300">
                    Rajpar Road, Morbi, India
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="text-accent-orange mt-1 shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+919714586233"
                      className="text-sm text-gray-300 hover:text-accent-orange transition-colors"
                    >
                      +91-97145 86233
                    </a>
                    <a
                      href="tel:+919265202308"
                      className="text-sm text-gray-300 hover:text-accent-orange transition-colors"
                    >
                      +91-92652 02308
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-accent-orange shrink-0" />
                  <a
                    href="mailto:admin.marutiplastic@gmail.com"
                    className="text-sm text-gray-300 hover:text-accent-orange transition-colors"
                  >
                    admin.marutiplastic@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links (Perfectly centered inside its own quadrant) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-accent-orange transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-300 hover:text-accent-orange transition-colors text-sm"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#contact"
                    className="text-gray-300 hover:text-accent-orange transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-300 hover:text-accent-orange transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className="text-gray-300 hover:text-accent-orange transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Social Media & Newsletter (Occupies the final equal segment) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-6">Follow Us</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Connect with us on social media for latest updates and news
              </p>
              <div className="flex gap-3 mb-6">
                  <a
                href="https://www.facebook.com/profile.php?id=61590489238190"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
                {/* <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a> */}
                <a
                href="https://www.instagram.com/maruti_plastic_products/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              </div>
            </motion.div>
          </div>
          {/* Bottom Row: Full Width Map Section sits right below the columns */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-white/10 mb-12 shadow-inner"
          >
            <iframe
              title="Maruti Plastic Products Location Map"
              src="https://maps.google.com/maps?q=22.785577326117767,70.79929839924627&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div> */}
          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm">
              <p>
                © {currentYear} Maruti Plastic Products. All rights reserved.
              </p>
              <p className="mt-3 flex flex-wrap justify-center gap-4">
                <Link
                  to="/privacy-policy"
                  className="hover:text-accent-orange transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link
                  to="/terms-of-service"
                  className="hover:text-accent-orange transition-colors"
                >
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
