import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { HiArrowTrendingUp, HiStar } from 'react-icons/hi2';

const plans = [
  {
    name: 'Starter',
    price: '₹3,000–₹5,000',
    features: [
      'Landing page',
      '1-page site',
      'Basic contact form',
      'Mobile responsive',
      'Delivered in 5–7 days',
    ],
    buttonText: 'Get Started',
    isPopular: false,
  },
  {
    name: 'Standard',
    price: '₹7,000–₹12,000',
    features: [
      'Multi-page business website',
      'Custom design',
      'Contact form',
      'Basic SEO',
      'Delivered in 10-15 days',
    ],
    buttonText: 'Most Popular',
    isPopular: true,
  },
  {
    name: 'Premium',
    price: '₹15,000+',
    features: [
      'Full stack web app',
      'REST API',
      'Database',
      'Admin panel',
      'Custom features',
      'Delivered in 25–30 days',
    ],
    buttonText: 'Contact Me',
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
       <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
             <div className="h-0.5 w-12 bg-accent-gold" />
             <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">Pricing</span>
             <div className="h-0.5 w-12 bg-accent-gold" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Invest in your <span className="text-accent-gold">Growth</span> <HiArrowTrendingUp className="inline-block text-accent-gold" /></h2>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col p-10 rounded-3xl border-2 transition-all duration-300 transform ${plan.isPopular ? 'border-accent-gold glass-brown shadow-accent-gold/10 scale-105 z-10' : 'border-brown-700/50 glass-brown'}`}
             >
                {plan.isPopular && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-brown-950 font-bold px-6 py-1.5 rounded-full text-xs uppercase tracking-widest flex items-center gap-2">
                      Most Popular <HiStar />
                   </div>
                )}
                
                <div className="mb-8 text-center">
                   <h3 className="text-xl font-display font-bold text-brown-300 uppercase tracking-widest mb-4">
                      {plan.name}
                   </h3>
                   <div className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                      {plan.price}
                   </div>
                </div>

                <ul className="space-y-6 mb-10 flex-grow">
                   {plan.features.map(feature => (
                      <li key={feature} className="flex items-center space-x-3 text-brown-300 text-sm font-medium">
                         <FaCheckCircle className="text-accent-gold text-lg flex-shrink-0" />
                         <span>{feature}</span>
                      </li>
                   ))}
                </ul>

                <a 
                   href={`https://wa.me/916383028607?text=${encodeURIComponent(`Hi Mohamed! I'm interested in the ${plan.name} plan (${plan.price}). Can we discuss this project?`)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-center transition-all duration-300 ${plan.isPopular ? 'bg-accent-gold text-brown-950 hover:bg-white hover:text-brown-950' : 'border border-accent-gold text-accent-gold hover:bg-accent-gold/10'}`}
                >
                   {plan.buttonText}
                </a>
             </motion.div>
          ))}
       </div>
    </section>
  );
}
