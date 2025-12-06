import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -mr-40 pointer-events-none mix-blend-multiply dark:mix-blend-normal dark:bg-brand-primary/20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -ml-40 pointer-events-none mix-blend-multiply dark:mix-blend-normal dark:bg-brand-secondary/20"></div>

      <div className="container mx-auto px-4 z-10 text-center relative">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 shadow-sm animate-fade-in-down transition-colors duration-500">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-bold tracking-widest uppercase">
            Exstrat Ventures
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight max-w-5xl mx-auto transition-colors duration-500">
          Your Strategic Partner for <br />
          <span className="text-gradient">Sustainable Growth</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto font-normal leading-relaxed transition-colors duration-500">
          Providing comprehensive financial and management consulting to bridge the gap between <span className="font-semibold text-slate-900 dark:text-white">strategy</span> and <span className="font-semibold text-slate-900 dark:text-white">execution</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://calendly.com/kenneth-exstrat/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-brand text-white font-bold text-lg rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
          >
            Schedule a Consultation
            <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </a>
          
          <a 
            href="#approach" 
            onClick={(e) => handleScrollTo(e, '#approach')}
            className="px-8 py-4 text-slate-700 dark:text-slate-200 bg-white/60 dark:bg-white/10 backdrop-blur-md border border-slate-200/60 dark:border-white/10 hover:border-brand-primary dark:hover:border-brand-secondary hover:text-brand-primary dark:hover:text-white rounded-full transition-all duration-300 font-medium shadow-sm hover:shadow-md"
          >
            Learn Our Approach
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a 
          href="#services" 
          onClick={(e) => handleScrollTo(e, '#services')}
          className="text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors"
        >
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;