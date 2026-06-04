import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AllProjects from './components/AllProjects.jsx';
import AllTestimonials from './components/AllTestimonials.jsx';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#all-projects') {
        setCurrentView('projects');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (window.location.hash === '#all-reviews') {
        setCurrentView('reviews');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange(); // Run initial check

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll back to section when returning from sub-pages
  useEffect(() => {
    if (
      currentView === 'home' &&
      window.location.hash &&
      window.location.hash !== '#all-projects' &&
      window.location.hash !== '#all-reviews'
    ) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [currentView]);

   return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-brown-950 text-brown-100 selection:bg-accent-gold selection:text-brown-950"
    >
      {/* Background Gradient Effect */}
      <div id="gradient-overlay" />
      
      {/* Navigation */}
      <Navbar scrolled={scrolled} />

      <main>
        {currentView === 'projects' ? (
          <AllProjects />
        ) : currentView === 'reviews' ? (
          <AllTestimonials />
        ) : (
          <>
            {/* Hero Section */}
            <Hero />
            
            {/* Sections Wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-16 md:py-32">
              <About />
              <Skills />
              <Projects />
              <Services />
              <Pricing />
              <Testimonials />
              <Contact />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

export default App;
