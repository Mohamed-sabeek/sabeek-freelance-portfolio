import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaArrowLeft, FaCode } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi2';
import haarisCakesImg from '../assets/haaris-cakes.webp';
import alSafiBedaImg from '../assets/al-safi-beda.webp';

const allProjectsData = [
  {
    id: 1,
    title: 'Haaris Cakes',
    category: 'Client Work',
    image: haarisCakesImg,
    description: 'A fully responsive business website developed for a home-based bakery in Aranthangi, Tamil Nadu.\n\nBuilt using React and Tailwind CSS, the platform showcases products, integrates WhatsApp for direct customer orders, and includes a dedicated venue setup gallery with video previews.',
    highlight: '✔ Integrated WhatsApp API for real-time customer interaction',
    tags: ['React', 'TailwindCSS', 'ResponsiveDesign', 'Vite', 'FrontendProject', 'ClientWork'],
    link: 'https://haariscakes.in',
    badge: 'Paid Client Project',
    badgeIcon: <HiStar />,
    number: '#1',
    isFirstClientProject: true,
  },
  {
    id: 2,
    title: 'Al Safi Beda',
    category: 'Client Work',
    image: alSafiBedaImg,
    description: 'A premium responsive landing page developed for Al Safi Beda, a homemade food brand specializing in traditional beda varieties and snacks.\n\nBuilt using React.js, Vite, and Tailwind CSS, the platform showcases authentic products, features dynamic customer reviews, and integrates direct WhatsApp ordering.',
    highlight: '✔ DIRECT WHATSAPP ORDERING FOR REAL-TIME CUSTOMER COMMUNICATION',
    tags: ['React', 'Vite', 'TailwindCSS', 'FramerMotion', 'ResponsiveDesign', 'ClientWork', 'FoodBrand', 'FrontendProject'],
    link: 'https://al-safi-beda.vercel.app/',
    badge: 'Paid Client Project',
    badgeIcon: <HiStar />,
    number: '#2',
  }
];

export default function AllProjects() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-brown-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Back Button & Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-brown-800/40 pb-8">
          <div className="space-y-4">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 text-accent-gold font-bold uppercase tracking-widest text-xs hover:text-white transition-colors duration-300 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Home</span>
            </a>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              All Projects<span className="text-accent-gold">.</span>
            </h1>
            <p className="text-brown-400 text-sm max-w-2xl font-sans">
              A detailed list of client work, full-stack applications, and design prototypes built with modern web technologies.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {allProjectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-brown rounded-3xl overflow-hidden group border border-brown-850 hover:border-brown-700/60 shadow-xl hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.05)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Media Section */}
              <div className="relative h-56 w-full bg-gradient-to-br from-brown-900 to-brown-950 overflow-hidden flex items-center justify-center p-1 border-b border-brown-850">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-3 p-6 text-center h-full w-full bg-brown-900/40 rounded-2xl">
                    <div className="w-16 h-16 rounded-2xl bg-brown-950 border border-brown-800 flex items-center justify-center shadow-lg group-hover:border-accent-gold/40 transition-colors duration-300">
                      <FaCode className="text-3xl text-accent-gold" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-brown-500 font-bold">Concept Show</span>
                  </div>
                )}

                {/* Badge Overlay */}
                {project.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 bg-brown-950/95 text-accent-gold font-bold text-[9px] uppercase tracking-widest rounded-full border border-accent-gold/30 flex items-center gap-1.5 backdrop-blur-md shadow-md">
                      {project.badgeIcon}
                      <span>{project.badge}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="p-6 space-y-5 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-gold font-display font-bold text-sm">{project.number}</span>
                    <span className="text-brown-700 text-xs">•</span>
                    <span className="text-brown-400 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-accent-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-brown-300 text-xs leading-relaxed font-sans whitespace-pre-line">
                    {project.description}
                  </p>
                  {project.highlight && (
                    <span className="inline-block text-accent-gold font-bold text-[10px] uppercase tracking-widest mt-1">
                      {project.highlight}
                    </span>
                  )}
                </div>

                <div className="space-y-4 pt-4 border-t border-brown-900/80 mt-auto">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-widest text-brown-400 py-1 px-2 border border-brown-800/80 rounded-lg group-hover:text-brown-200 transition-colors duration-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white hover:text-accent-gold transition-colors duration-300"
                    >
                      <span>Live Site</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
