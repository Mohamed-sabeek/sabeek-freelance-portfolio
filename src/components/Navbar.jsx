import React, { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'pricing', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-blur' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a 
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-bold text-white tracking-tighter group flex items-center"
          >
            <span className="group-hover:text-accent-gold transition-colors duration-300">SABEEK</span>
            <span className="text-accent-gold group-hover:scale-150 transition-transform duration-300 ml-0.5">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a 
                   key={link.name} 
                   href={link.href} 
                   className={`relative text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 py-2 group ${activeSection === link.href.slice(1) ? 'text-accent-gold' : 'text-brown-300 hover:text-white'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold transform origin-left transition-transform duration-300 ${activeSection === link.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`} />
                </a>
              ))}
            </div>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212,175,55,0.3)' }}
              whileActive={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-accent-gold text-brown-950 font-bold rounded-xl text-xs uppercase tracking-widest shadow-lg transition-all duration-300"
            >
              Hire Me
            </motion.a>
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
