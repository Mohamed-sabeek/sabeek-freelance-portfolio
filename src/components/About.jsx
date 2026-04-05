import React from 'react';
import { motion } from 'framer-motion';
import { HiRocketLaunch, HiCommandLine, HiGlobeAlt } from 'react-icons/hi2';
import { FaBullseye } from 'react-icons/fa';

const stats = [
  { icon: <HiRocketLaunch />, label: 'Projects Delivered', value: '1+' },
  { icon: <HiCommandLine />, label: 'Experience', value: '1–2 Years' },
  { icon: <HiGlobeAlt />, label: 'Based in', value: 'Tamil Nadu' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-0.5 w-12 bg-accent-gold" />
            <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Turning Ideas into <span className="text-accent-gold">Real Products</span> <FaBullseye className="inline-block text-accent-gold" />
          </h2>
          
          <div className="space-y-6 text-brown-300 text-lg leading-relaxed font-sans">
            <p>
              I'm Mohamed Sabeek, a passionate Full Stack Developer from Tamil Nadu, India with 1–2 years of hands-on experience building modern web applications.
            </p>
            <p>
              I love turning ideas into real, functional products — from a clean frontend to a powerful backend. I've already delivered my first client project (Haaris Cakes) and I'm on a mission to help businesses grow through technology.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Stat Cards */}
        <div className="grid grid-cols-1 gap-6">
           {stats.map((stat, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               whileHover={{ y: -5, scale: 1.02 }}
               className="glass-brown p-8 rounded-2xl flex items-center space-x-6 group border-l-4 border-l-accent-gold shadow-xl"
             >
                <div className="text-4xl text-accent-gold group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
               <div>
                  <h4 className="text-3xl font-display font-bold text-white mb-1 tracking-tight">{stat.value}</h4>
                  <p className="text-brown-400 font-medium">{stat.label}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
