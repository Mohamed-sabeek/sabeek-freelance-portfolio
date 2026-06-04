import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLock, FaArrowRight } from 'react-icons/fa';
import { HiPaintBrush, HiStar, HiRocketLaunch } from 'react-icons/hi2';
import ImageModal from './ImageModal';
import haarisCakesImg from '../assets/haaris-cakes.webp';
import alSafiBedaImg from '../assets/al-safi-beda.webp';

const projects = [
  {
    title: 'Haaris Cakes',
    image: haarisCakesImg,
    description: 'A fully responsive business website developed for a home-based bakery in Aranthangi, Tamil Nadu.\n\nBuilt using React and Tailwind CSS, the platform showcases products, integrates WhatsApp for direct customer orders, and includes a dedicated venue setup gallery with video previews.\n\nDesigned with a mobile-first approach, focusing on performance, user experience, and real-world business usability.',
    highlight: '✔ Integrated WhatsApp API for real-time customer interaction',
    tags: ['React', 'TailwindCSS', 'ResponsiveDesign', 'Vite', 'FrontendProject', 'ClientWork'],
    link: 'https://haariscakes.in',
    badge: 'Paid Client Project',
    badgeIcon: <HiStar />,
    number: '#1',
    isFirstClientProject: true,
    id: 1,
  },
  {
    title: 'Al Safi Beda',
    image: alSafiBedaImg,
    description: 'A premium responsive landing page developed for Al Safi Beda, a homemade food brand specializing in traditional beda varieties and snacks.\n\nBuilt using React.js, Vite, and Tailwind CSS, the platform showcases authentic products, features dynamic customer reviews, and integrates direct WhatsApp ordering.\n\nDesigned with a mobile-first approach, the website focuses on fast performance, smooth animations, and seamless user engagement across all devices.',
    highlight: '✔ DIRECT WHATSAPP ORDERING FOR REAL-TIME CUSTOMER COMMUNICATION',
    tags: ['React', 'Vite', 'TailwindCSS', 'FramerMotion', 'ResponsiveDesign', 'ClientWork', 'FoodBrand', 'FrontendProject'],
    link: 'https://al-safi-beda.vercel.app/',
    badge: 'Paid Client Project',
    badgeIcon: <HiStar />,
    number: '#2',
    id: 2,
  }
];

const ProjectCard = ({ project, index, onImageClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="glass-brown rounded-3xl overflow-hidden group shadow-2xl flex flex-col h-full border border-brown-700/50"
  >
    {/* Image Container / Placeholder */}
    <div className="relative h-64 overflow-hidden">
       {project.isComingSoon ? (
         <div className="absolute inset-0 bg-brown-900 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
            <FaLock className="text-6xl text-brown-700 group-hover:text-accent-gold transition-colors duration-500" />
            <div className="absolute inset-0 bg-brown-950/80 backdrop-blur-md flex items-center justify-center">
               <span className="text-accent-gold font-display font-bold text-xl uppercase tracking-widest">Coming Soon</span>
            </div>
         </div>
       ) : (
         <div 
           className="absolute inset-0 bg-gradient-to-br from-brown-800 to-brown-950 p-1 cursor-pointer group/img"
           onClick={() => onImageClick(project.image, project.title)}
         >
           <div className="w-full h-full bg-brown-900 flex items-center justify-center rounded-2xl overflow-hidden group-hover/img:scale-[1.02] transition-transform duration-700 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 scale-90 group-hover/img:scale-100 transition-all duration-300">View Full Image</span>
                </div>
           </div>
         </div>
       )}
       
       <div className="absolute top-4 left-4 z-10">
           <span className="px-4 py-1.5 bg-brown-950/95 text-accent-gold font-bold text-[10px] uppercase tracking-widest rounded-full border border-accent-gold/40 flex items-center gap-2 backdrop-blur-md shadow-lg">
             ✔ {project.badge}
           </span>
        </div>
    </div>

    {/* Content */}
    <div className="p-8 space-y-6 flex-grow flex flex-col">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-accent-gold font-display font-bold text-lg">{project.number}</span>
            <div className="h-4 w-[1px] bg-brown-700" />
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-gold transition-colors duration-300 tracking-tight">
              {project.title}
            </h3>
          </div>
           <p className="text-brown-300 font-sans leading-relaxed text-sm lg:text-base whitespace-pre-line">
            {project.description}
          </p>
          {project.highlight && (
            <p className="text-accent-gold font-bold text-xs uppercase tracking-widest mt-2">
              {project.highlight}
            </p>
          )}
       </div>

        <div className="flex flex-wrap gap-2">
           {project.isFirstClientProject && (
             <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold py-1 px-3 border border-accent-gold/20 rounded-lg bg-accent-gold/5">
               First Client Project
             </span>
           )}
           {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-brown-400 py-1 px-3 border border-brown-700/50 rounded-lg group-hover:border-accent-gold/20 group-hover:text-brown-200 transition-all duration-300">
              #{tag}
            </span>
          ))}
       </div>

        <div className="pt-6 mt-auto border-t border-brown-700/50 flex items-center justify-between">
           <a 
             href={project.link} 
             target="_blank" 
             rel="noopener noreferrer"
             className={`flex items-center space-x-3 px-5 py-2.5 rounded-xl border border-accent-gold/30 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group/btn ${project.isComingSoon ? 'text-brown-600 border-brown-800 pointer-events-none' : 'text-accent-gold hover:bg-accent-gold hover:text-brown-950 hover:border-accent-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0'}`}
           >
              <span>Live Demo</span>
              <FaExternalLinkAlt className="text-[10px] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
           </a>
        </div>
    </div>
  </motion.div>
);

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image, title) => {
    setSelectedImage({ image, title });
  };

  return (
    <section id="projects" className="py-20">
       <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 space-y-6 md:space-y-0 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start w-full md:w-auto">
             <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="h-0.5 w-12 bg-accent-gold" />
                <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">Gallery</span>
                <div className="h-0.5 w-12 bg-accent-gold md:hidden" />
             </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight w-full">My <span className="text-accent-gold">Work</span> <HiPaintBrush className="inline-block text-accent-gold" /></h2>
          </div>
          <p className="text-brown-400 font-sans max-w-sm mx-auto md:mx-0">A collection of projects showcasing my full-stack expertise and design sense.</p>
       </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
           {projects.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={idx} 
                onImageClick={handleImageClick}
              />
           ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-16">
          <motion.a
            href="#all-projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-3 px-8 py-4 border-2 border-accent-gold text-accent-gold font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 hover:bg-accent-gold/10 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] group"
          >
            <span>View All Projects</span>
            <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>

        <ImageModal
          isOpen={!!selectedImage}
          imageSrc={selectedImage?.image}
          onClose={() => setSelectedImage(null)}
          altText={selectedImage?.title}
        />
    </section>
  );
}
