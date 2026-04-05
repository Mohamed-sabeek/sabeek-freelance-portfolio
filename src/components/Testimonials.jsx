import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';

const testimonials = [
  {
    name: 'Haaris Cakes Client',
    role: 'Riswana Assan [Business Owner], Aranthangi - 614616',
    content: 'Mohamed built our cake business website professionally and on time. Very satisfied with the result!',
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
          <div className="w-full max-w-2xl">
             {testimonials.map((testimonial, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass-brown p-10 rounded-3xl relative overflow-hidden flex flex-col h-full border border-brown-700/50 shadow-2xl ${testimonial.isPlaceholder ? 'opacity-50 blur-[1px]' : ''}`}
             >
                <div className="absolute top-0 right-0 p-8 text-accent-gold/20 text-6xl">
                    <FaQuoteLeft />
                </div>

                <div className="flex mb-6 space-x-1">
                   {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < testimonial.stars ? "text-accent-gold" : "text-brown-700"} />
                   ))}
                </div>

                <p className="text-lg text-brown-200 italic mb-8 flex-grow font-sans leading-relaxed tracking-wide">
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
    </section>
  );
}
