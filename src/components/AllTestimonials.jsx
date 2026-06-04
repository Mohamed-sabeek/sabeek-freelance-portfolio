import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaArrowLeft } from 'react-icons/fa';

const allTestimonialsData = [
  {
    name: 'Haaris Cakes Client',
    role: 'Riswana Assan [Business Owner], Aranthangi - 614616 - Tamil Nadu - India',
    content: 'Mohamed built our cake business website professionally and on time. Very satisfied with the result!',
    stars: 5,
  },
  {
    name: 'Al Safi Beda Client',
    role: 'Naina Mohamed [Business Owner], Ayikudi, Tamil Nadu, India',
    content: 'Mohamed created a beautiful website for our homemade food business. The design perfectly represents our brand, and the WhatsApp ordering feature makes it easy for customers to contact us directly. The website is fast, responsive, and professionally built. We are very happy with the final result.',
    stars: 5,
  }
];

export default function AllTestimonials() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-brown-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Back Button & Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-brown-800/40 pb-8">
          <div className="space-y-4">
            <a
              href="#testimonials"
              className="inline-flex items-center space-x-2 text-accent-gold font-bold uppercase tracking-widest text-xs hover:text-white transition-colors duration-300 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Home</span>
            </a>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              All Reviews<span className="text-accent-gold">.</span>
            </h1>
            <p className="text-brown-400 text-sm max-w-2xl font-sans">
              Client testimonials and feedback from successful partnerships and projects.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {allTestimonialsData.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-brown p-10 rounded-3xl relative overflow-hidden flex flex-col h-full border border-brown-700/50 shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 text-accent-gold/10 text-6xl pointer-events-none">
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

              <div className="border-t border-brown-700/50 pt-6 mt-auto">
                <h4 className="text-lg font-display font-bold text-white mb-1">
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
