import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiRocketLaunch, HiCommandLine } from 'react-icons/hi2';
import profileImg from '../assets/profile.png';
import ImageModal from './ImageModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-gold/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brown-600/30 rounded-full blur-[150px] animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold font-semibold text-sm mb-6 tracking-wide uppercase border border-accent-gold/20"
            >
              Available for hire
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6">
              Hi, I'm <span className="text-accent-gold">Mohamed Sabeek</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-display font-medium text-brown-200 mb-8 h-[1.2em]">
              I'm a{' '}
              <span className="text-white border-b-4 border-accent-gold/30">
                <Typewriter
                  words={['Full Stack Developer', 'React Developer', 'Node.js Engineer', 'Problem Solver']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-brown-300 max-w-lg mb-10 leading-relaxed font-sans">
              I build fast, scalable, and beautiful web apps for businesses and startups using modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Hire Me</a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 items-center">
              <span className="text-sm font-bold text-brown-400 uppercase tracking-widest">Connect:</span>
              <div className="flex space-x-4">
                <a href="https://github.com/Mohamed-sabeek" className="p-3 glass-brown rounded-full text-white hover:bg-accent-gold hover:text-brown-950 transition-all duration-300"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mohamed-sabeek-1a272a327" className="p-3 glass-brown rounded-full text-white hover:bg-accent-gold hover:text-brown-950 transition-all duration-300"><FaLinkedinIn /></a>
                <a href="https://wa.me/916383028607" className="p-3 glass-brown rounded-full text-white hover:bg-accent-gold hover:text-brown-950 transition-all duration-300"><FaWhatsapp /></a>
              </div>
            </div>
          </motion.div>

          {/* Right Illustration/Avatar Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-[3px] border-accent-gold/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-4 border border-brown-600/30 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              
              <div 
                className="absolute inset-4 glass rounded-full overflow-hidden flex items-center justify-center cursor-pointer group/profile"
                onClick={() => setIsModalOpen(true)}
              >
                <img 
                  src={profileImg} 
                  alt="Mohamed Sabeek" 
                  className="w-full h-full object-cover group-hover/profile:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/profile:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">View</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-4 p-4 glass-brown rounded-2xl shadow-xl">
                 <div className="w-8 h-8 rounded-lg bg-accent-gold/20 flex items-center justify-center text-accent-gold text-2xl"><HiRocketLaunch /></div>
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-4 -left-4 p-4 glass-brown rounded-2xl shadow-xl">
                 <div className="w-8 h-8 rounded-lg bg-accent-gold/20 flex items-center justify-center text-accent-gold text-2xl"><HiCommandLine /></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-brown-700 flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
        </div>
      </motion.div>

      <ImageModal 
        isOpen={isModalOpen} 
        imageSrc={profileImg} 
        onClose={() => setIsModalOpen(false)} 
        altText="Mohamed Sabeek"
      />
    </section>
  );
}
