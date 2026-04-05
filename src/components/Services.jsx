import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaReact, FaServer, FaPaintBrush, FaMobileAlt, FaCloudUploadAlt } from 'react-icons/fa';
import { HiWrenchScrewdriver } from 'react-icons/hi2';

const services = [
  {
    title: 'Business Website Design',
    desc: 'Clean, fast, mobile-friendly websites for your brand',
    icon: <FaLaptopCode />,
  },
  {
    title: 'React Web Apps',
    desc: 'Dynamic single-page applications built with React & Tailwind',
    icon: <FaReact />,
  },
  {
    title: 'Backend Development',
    desc: 'REST APIs and server-side logic with Node.js, Express & Python',
    icon: <FaServer />,
  },
  {
    title: 'UI/UX Implementation',
    desc: 'Bringing Figma and design mockups to pixel-perfect life',
    icon: <FaPaintBrush />,
  },
  {
    title: 'Responsive Design',
    desc: 'Websites that look great on every device, every screen size',
    icon: <FaMobileAlt />,
  },
  {
    title: 'Website Deployment',
    desc: 'Hosting setup on Vercel, Netlify, or custom domains',
    icon: <FaCloudUploadAlt />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-brown-950 px-8 rounded-3xl border border-brown-700/30">
       <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-4">
             <div className="h-0.5 w-12 bg-accent-gold" />
             <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">Services</span>
             <div className="h-0.5 w-12 bg-accent-gold" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">What I <span className="text-accent-gold">Offer</span> <HiWrenchScrewdriver className="inline-block text-accent-gold" /></h2>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-brown p-10 rounded-2xl border-l-4 border-l-accent-gold group flex flex-col items-center text-center space-y-6 shadow-xl"
             >
                <div className="text-5xl text-accent-gold group-hover:scale-110 transition-transform duration-300">
                   {service.icon}
                </div>
                <div className="space-y-4">
                   <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-gold transition-colors duration-300">
                      {service.title}
                   </h3>
                   <p className="text-brown-300 font-sans leading-relaxed tracking-wide">
                      {service.desc}
                   </p>
                </div>
             </motion.div>
          ))}
       </div>
    </section>
  );
}
