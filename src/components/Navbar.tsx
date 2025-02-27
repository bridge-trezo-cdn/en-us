import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <Shield className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-primary">Trezor Bridge</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-800 hover:text-primary font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-800 hover:text-primary font-medium">How It Works</a>
            <a href="#security" className="text-gray-800 hover:text-primary font-medium">Security</a>
            <a href="#faq" className="text-gray-800 hover:text-primary font-medium">FAQ</a>
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-primary font-medium">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentation</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tutorials</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Download Trezor Bridge
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
              <a href="#features" className="block py-2 text-gray-800 hover:text-primary font-medium">Features</a>
              <a href="#how-it-works" className="block py-2 text-gray-800 hover:text-primary font-medium">How It Works</a>
              <a href="#security" className="block py-2 text-gray-800 hover:text-primary font-medium">Security</a>
              <a href="#faq" className="block py-2 text-gray-800 hover:text-primary font-medium">FAQ</a>
              <a href="#" className="block py-2 text-gray-800 hover:text-primary font-medium">Resources</a>
              <button className="w-full mt-4 btn btn-primary">
                Download Trezor Bridge
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;