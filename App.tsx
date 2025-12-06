import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle dark mode when Services section is substantially visible
        setIsDark(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Reduced threshold slightly to trigger earlier/more reliably
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      observer.observe(servicesElement);
    }

    return () => {
      if (servicesElement) {
        observer.unobserve(servicesElement);
      }
    };
  }, []);

  return (
    <div className={`min-h-screen relative transition-colors duration-700 ${isDark ? 'dark' : ''}`}>
      
      {/* Global Background Layers */}
      {/* Used z-0 for background and z-10 for content to ensure proper stacking without relying on negative z-index */}
      
      {/* Light Mode Background */}
      <div 
        className={`fixed inset-0 z-0 bg-slate-50 transition-opacity duration-1000 ease-in-out ${
          isDark ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-gemini-mesh opacity-50"></div>
      </div>

      {/* Dark Mode Background (Gemini Style - Rich Purple/Blue Gradient) */}
      <div 
        className={`fixed inset-0 z-0 bg-slate-950 transition-opacity duration-1000 ease-in-out ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Main Gradient: Deep Indigo to Purple */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] opacity-100"></div>
        
        {/* Overlay Mesh for depth */}
        <div className="absolute inset-0 bg-gemini-dark-mesh opacity-60 mix-blend-screen"></div>
        
        {/* Animated Orbs for Dark Mode */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse mix-blend-screen" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 transition-colors duration-700">
        <Navbar isDark={isDark} />
        <main>
          <Hero />
          <Approach />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;