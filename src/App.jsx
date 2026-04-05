import React, { useState, useEffect } from 'react';
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

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brown-950 text-brown-100 selection:bg-accent-gold selection:text-brown-950">
      {/* Background Gradient Effect */}
      <div id="gradient-overlay" />
      
      {/* Navigation */}
      <Navbar scrolled={scrolled} />

      <main>
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
