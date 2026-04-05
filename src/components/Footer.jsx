import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brown-950 border-t border-brown-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <a href="#home" className="text-3xl font-display font-bold text-white tracking-tighter">
              SABEEK<span className="text-accent-gold">.</span>
            </a>
            <p className="text-brown-400 text-sm font-medium flex items-center justify-center md:justify-start gap-2">
              Designed & Built with <FaHeart className="text-accent-gold" /> by Mohamed Sabeek © {currentYear}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-brown-100">Quick Navigation</h4>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {['About', 'Skills', 'Projects', 'Contact'].map(link => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-bold text-brown-300 hover:text-accent-gold transition-colors duration-300 uppercase tracking-widest"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-brown-100">Let's Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: <FaGithub />, href: 'https://github.com/Mohamed-sabeek' },
                { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/mohamed-sabeek-1a272a327' },
                { icon: <FaWhatsapp />, href: 'https://wa.me/916383028607' }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-brown rounded-2xl flex items-center justify-center text-xl text-white hover:bg-accent-gold hover:text-brown-950 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-brown-800/30 flex justify-center">
            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-brown-500">Built using React • Tailwind • Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
