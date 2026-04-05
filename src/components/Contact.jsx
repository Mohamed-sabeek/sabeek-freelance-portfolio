import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub, FaWhatsapp, FaArrowRight, FaHandshake, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: <FaEnvelope />, label: 'Email', value: 'safeeofficial1730@gmail.com', href: 'mailto:safeeofficial1730@gmail.com' },
  { icon: <FaPhoneAlt />, label: 'WhatsApp', value: '+91 6383028607', href: 'tel:+916383028607' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', value: 'linkedin.com/in/mohamed-sabeek', href: 'https://www.linkedin.com/in/mohamed-sabeek-1a272a327' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/Mohamed-sabeek', href: 'https://github.com/Mohamed-sabeek' },
];

export default function Contact() {
  const form = useRef();
  const dropdownRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = [
    'Project Inquiry',
    'Website Development',
    'UI/UX Design',
    'Bug Fix / Maintenance',
    'Freelance Collaboration',
    'Other'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setStatus('success');
        setIsSending(false);
        form.current.reset();
        setTimeout(() => setStatus(null), 5000);
    }, (error) => {
        console.log(error.text);
        setStatus('error');
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="space-y-12"
          >
             <div className="space-y-6">
                <div className="flex items-center space-x-4">
                   <div className="h-0.5 w-12 bg-accent-gold" />
                   <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">Contact</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold">Let's Work <span className="text-accent-gold">Together</span> <FaHandshake className="inline-block text-accent-gold" /></h2>
                <p className="text-brown-300 font-sans leading-relaxed max-w-md text-lg">
                   Ready to bring your vision to life? Whether it's a small business site or a complex web app, I'm here to help.
                </p>
             </div>

             <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                   <motion.a
                      key={idx}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-6 p-6 glass-brown rounded-2xl group hover:border-accent-gold hover:translate-x-2 transition-all duration-300"
                   >
                      <div className="text-2xl text-accent-gold group-hover:scale-125 transition-transform duration-300">
                         {info.icon}
                      </div>
                      <div>
                         <h4 className="text-brown-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-1">{info.label}</h4>
                         <span className="text-white text-base md:text-lg font-medium group-hover:text-accent-gold transition-colors duration-300">{info.value}</span>
                      </div>
                   </motion.a>
                ))}
             </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="glass-brown rounded-3xl p-10 md:p-12 shadow-2xl border border-brown-700/50"
          >
             <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-brown-400 pl-2">Name</label>
                      <input 
                        type="text" 
                        name="from_name"
                        placeholder="Your Name"
                        required
                        className="w-full bg-brown-900/50 border border-brown-700/50 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold transition-all duration-300" 
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-brown-400 pl-2">Email</label>
                      <input 
                        type="email" 
                        name="from_email"
                        placeholder="you@email.com"
                        required
                        className="w-full bg-brown-900/50 border border-brown-700/50 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold transition-all duration-300" 
                      />
                   </div>
                </div>
                
                <div className="space-y-2 relative" ref={dropdownRef}>
                   <label className="text-xs uppercase tracking-widest font-bold text-brown-400 pl-2">Subject</label>
                   
                   {/* Hidden input for EmailJS */}
                   <input type="hidden" name="subject" value={selectedSubject} required />

                   {/* Custom Dropdown Trigger */}
                   <div 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full bg-brown-900/50 border ${isDropdownOpen ? 'border-accent-gold ring-2 ring-accent-gold/20' : 'border-brown-700/50'} rounded-xl px-6 py-4 text-white cursor-pointer transition-all duration-300 flex items-center justify-between group`}
                   >
                      <span className={selectedSubject ? 'text-white' : 'text-brown-400'}>
                         {selectedSubject || 'Select Subject'}
                      </span>
                      <motion.div
                         animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                         transition={{ duration: 0.3 }}
                         className="text-accent-gold"
                      >
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </motion.div>
                   </div>

                   {/* Options Menu */}
                   <AnimatePresence>
                      {isDropdownOpen && (
                         <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-[100] top-full left-0 w-full mt-2 bg-brown-900 border border-brown-700 rounded-2xl shadow-2xl p-2 backdrop-blur-xl overflow-hidden"
                         >
                            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                               {subjects.map((subj) => (
                                  <div
                                     key={subj}
                                     onClick={() => {
                                        setSelectedSubject(subj);
                                        setIsDropdownOpen(false);
                                     }}
                                     className={`px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer text-sm font-medium ${selectedSubject === subj ? 'bg-accent-gold text-brown-950 shadow-lg scale-[1.02]' : 'text-brown-300 hover:bg-white/5 hover:text-white'}`}
                                  >
                                     {subj}
                                  </div>
                               ))}
                            </div>
                         </motion.div>
                      )}
                   </AnimatePresence>
                </div>

                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest font-bold text-brown-400 pl-2">Message</label>
                   <textarea 
                      rows="5" 
                      name="message"
                      placeholder="How can I help you?"
                      required
                      className="w-full bg-brown-900/50 border border-brown-700/50 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold transition-all duration-300 resize-none" 
                   />
                </div>

                <button 
                   disabled={isSending}
                   className="w-full py-5 bg-accent-gold text-brown-950 font-bold uppercase tracking-widest rounded-xl hover:shadow-xl hover:shadow-accent-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                   <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                   {!isSending && <FaArrowRight />}
                </button>

                {status === 'success' && (
                   <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center space-x-2 text-green-500 font-bold text-sm uppercase tracking-widest mt-4"
                   >
                      <FaCheckCircle />
                      <span>Message sent successfully!</span>
                   </motion.div>
                )}

                {status === 'error' && (
                   <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center space-x-2 text-red-500 font-bold text-sm uppercase tracking-widest mt-4"
                   >
                      <FaExclamationCircle />
                      <span>Failed to send. Please try again.</span>
                   </motion.div>
                )}
             </form>

             {/* WhatsApp Button */}
             <div className="mt-8 pt-8 border-t border-brown-700/50 text-center">
                <p className="text-brown-400 text-sm mb-6 uppercase tracking-widest font-bold">Or reach out via</p>
                <a 
                   href="https://wa.me/916383028607" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-4 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 transform active:scale-95"
                >
                   <FaWhatsapp className="text-2xl" />
                   <span>Chat on WhatsApp</span>
                </a>
             </div>
          </motion.div>

       </div>
    </section>
  );
}
