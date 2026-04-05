import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-blur' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a 
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold text-white tracking-tighter"
          >
            SABEEK<span className="text-accent-gold">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-brown-200 hover:text-accent-gold transition-colors duration-200">
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-accent-gold text-brown-950 font-bold rounded-lg text-sm hover:scale-105 transition-transform duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-white">
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brown-900 border-b border-brown-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-brown-200 hover:text-accent-gold"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-brown-800">
                <a href="https://github.com/Mohamed-sabeek" className="text-2xl text-brown-300 hover:text-white"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mohamed-sabeek-1a272a327" className="text-2xl text-brown-300 hover:text-white"><FaLinkedinIn /></a>
                <a href="https://wa.me/916383028607" className="text-2xl text-brown-300 hover:text-white"><FaWhatsapp /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
