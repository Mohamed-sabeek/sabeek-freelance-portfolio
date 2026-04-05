import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiDjango, SiPostman, SiFigma } from 'react-icons/si';
import { HiPaintBrush } from 'react-icons/hi2';

const frontendSkills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
];

const backendSkills = [
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Django', icon: <SiDjango />, color: '#092E20' },
  { name: 'REST API', icon: <FaDatabase />, color: '#A1887F' },
  { name: 'Git & GitHub', icon: <FaGithub />, color: '#ffffff' },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="glass-brown p-6 rounded-2xl flex flex-col items-center justify-center space-y-4 hover:shadow-2xl transition-all duration-300 relative group"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-accent-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="text-4xl transition-all duration-300 group-hover:scale-110" style={{ color: skill.color }}>
      {skill.icon}
    </div>
    <span className="text-sm font-bold uppercase tracking-widest text-brown-300 group-hover:text-white transition-colors duration-300">
      {skill.name}
    </span>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-4 mb-4">
           <div className="h-0.5 w-12 bg-accent-gold" />
           <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">Tech Stack</span>
           <div className="h-0.5 w-12 bg-accent-gold" />
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-bold">My <span className="text-accent-gold">Skills</span> <HiPaintBrush className="inline-block text-accent-gold" /></h2>
      </div>

      <div className="space-y-16">
         {/* Frontend */}
         <div className="space-y-8">
            <h3 className="text-2xl font-display font-bold text-brown-200 border-l-4 border-l-accent-gold pl-4">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
               {frontendSkills.map((skill, idx) => (
                 <SkillCard key={skill.name} skill={skill} index={idx} />
               ))}
            </div>
         </div>

         {/* Backend & Others */}
         <div className="space-y-8">
            <h3 className="text-2xl font-display font-bold text-brown-200 border-l-4 border-l-accent-gold pl-4">Backend & Others</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
               {backendSkills.map((skill, idx) => (
                 <SkillCard key={skill.name} skill={skill} index={idx} />
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}
