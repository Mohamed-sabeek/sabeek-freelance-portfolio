import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaArrowRight } from 'react-icons/fa';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';

const testimonials = [
  {
    name: 'Haaris Cakes Client',
    role: 'Riswana Assan [Business Owner], Aranthangi - 614616 - Tamil Nadu - India',
    content: 'Mohamed built our cake business website professionally and on time. Very satisfied with the result!',
    stars: 5,
    isPlaceholder: false,
  },
  {
    name: 'Al Safi Beda Client',
    role: 'Naina Mohamed [Business Owner], Ayikudi, Tamil Nadu, India',
    content: 'Mohamed created a beautiful website for our homemade food business. The design perfectly represents our brand, and the WhatsApp ordering feature makes it easy for customers to contact us directly. The website is fast, responsive, and professionally built. We are very happy with the final result.',
    stars: 5,
    isPlaceholder: false,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
       <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
             <div className="h-0.5 w-12 bg-accent-gold" />
             <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">Testimonials</span>
             <div className="h-0.5 w-12 bg-accent-gold" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold whitespace-pre-line">What My <span className="text-accent-gold">Clients Say</span> <HiChatBubbleLeftRight className="inline-block text-accent-gold" /></h2>
       </div>

       <div className="flex justify-center">
          <div className="w-full max-w-5xl">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {testimonials.map((testimonial, idx) => (
                   <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -5 }}
                      className={`glass-brown p-10 rounded-3xl relative overflow-hidden flex flex-col h-full border border-brown-700/50 shadow-2xl ${testimonial.isPlaceholder ? 'opacity-50 blur-[1px]' : ''} transition-transform duration-300`}
                   >
                      <div className="absolute top-0 right-0 p-8 text-accent-gold/20 text-6xl pointer-events-none">
                          <FaQuoteLeft />
                      </div>

                      <div className="flex mb-6 space-x-1">
                         {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < testimonial.stars ? "text-accent-gold" : "text-brown-700"} />
                         ))}
                      </div>

                      <p className="text-base text-brown-200 italic mb-8 flex-grow font-sans leading-relaxed tracking-wide">
                         "{testimonial.content}"
                      </p>

                      <div className="border-t border-brown-700/50 pt-8 mt-auto">
                         <h4 className="text-xl font-display font-bold text-white mb-1">
                            {testimonial.name}
                         </h4>
                         <p className="text-accent-gold font-medium text-xs uppercase tracking-widest">
                            {testimonial.role}
                         </p>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
       </div>

       {/* View All Reviews Button */}
       <div className="flex justify-center mt-16">
          <motion.a
            href="#all-reviews"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-3 px-8 py-4 border-2 border-accent-gold text-accent-gold font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 hover:bg-accent-gold/10 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] group"
          >
            <span>View All Reviews</span>
            <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
       </div>
    </section>
  );
}
