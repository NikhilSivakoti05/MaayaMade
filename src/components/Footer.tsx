import React, { useState } from 'react';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, ArrowUp, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [hovered, setHovered] = useState('');

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Moving Background Circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-600 rounded-full opacity-10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full opacity-10"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 40 },
            }}
          >
            {/* Column 1 */}
            <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 40 } }}>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-white font-bold text-xl">M</span>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">MaayaMade</h3>
                    <p className="text-gray-400 text-sm">3D Printing Studio</p>
                  </div>
                </motion.div>
                <p className="text-gray-300 leading-relaxed">
                  Transforming memories into stunning 3D miniatures using artistic excellence.
                </p>
                <div className="flex items-center text-yellow-400">
                  <Heart className="w-5 h-5 mr-2 animate-pulse" />
                  <span className="text-sm">Made with love in India</span>
                </div>
              </div>
            </motion.div>

            {/* Column 2 */}
            <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 40 } }}>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm hover:scale-105"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 */}
            <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 40 } }}>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {['Wedding Couple Miniatures', 'Individual 3D Portraits', 'Custom Keychains', 'Anime Figurines', 'Corporate Gifts', 'Pet Miniatures'].map((s) => (
                  <li key={s} className="text-gray-300 text-sm">{s}</li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4 */}
            <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 40 } }}>
              <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
              {/* Phone */}
              <div className="space-y-4">
                {/* Map over contact details */}
                {[
                  { icon: Phone, text: '+91 9100991365', sub: 'Mon-Sun, 9AM-7PM', link: 'tel:+919100991365' },
                  { icon: Mail, text: 'hello@maayamade.com', sub: '24/7 support', link: 'mailto:maayamade.india@gmail.com' },
                  { icon: MapPin, text: 'Hyderabad,telangana', sub: 'India', link: null }
                ].map((info) => (
                  <motion.div
                    whileHover={{ x: 5 }}
                    key={info.text}
                    className="flex items-start space-x-3"
                  >
                    <info.icon className="w-5 h-5 text-yellow-400 mt-1" />
                    <div>
                      {info.link ? (
                        <a href={info.link} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                          {info.text}
                        </a>
                      ) : (
                        <span className="text-gray-300 text-sm">{info.text}</span>
                      )}
                      <p className="text-gray-500 text-xs">{info.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  {[
                    { name: 'Instagram', icon: Instagram, colorFrom: 'from-pink-500', colorTo: 'to-pink-600' },
                    { name: 'Facebook', icon: Facebook, colorFrom: 'from-blue-500', colorTo: 'to-blue-600' },
                    { name: 'Youtube', icon: Youtube, colorFrom: 'from-blue-400', colorTo: 'to-blue-500' },
                  ].map(({ name, icon: Icon, colorFrom, colorTo }) => (
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      key={name}
                      href="#"
                      className={`w-8 h-8 bg-gradient-to-r ${colorFrom} ${colorTo} rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                        hovered === name ? 'ring-2 ring-yellow-300' : ''
                      }`}
                      onMouseEnter={() => setHovered(name)}
                      onMouseLeave={() => setHovered('')}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">© 2025 MaayaMade. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 animate-bounce-slow shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
