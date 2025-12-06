import React, { useState, useEffect } from 'react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';

interface NavbarProps {
  isDark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDark = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  // Dynamic classes based on theme and scroll state
  const navBgClass = isScrolled
    ? isDark 
      ? 'bg-[#0f172a]/80 backdrop-blur-md shadow-lg border-b border-white/10' // Darker, slightly tinted background for dark mode
      : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200'
    : 'bg-transparent';

  const linkColorClass = isScrolled
    ? isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-brand-primary'
    : isDark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-brand-primary';

  const logoColorClass = isDark ? 'text-white' : 'text-slate-900';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 py-3 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className={`text-2xl font-serif font-bold tracking-wider flex items-center gap-2 group transition-colors duration-500 ${logoColorClass}`}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
                 <i className="fa-solid fa-chess-knight text-sm"></i>
              </div>
              <span>Exstrat.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 ${linkColorClass}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/kenneth-exstrat/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-brand text-white hover:opacity-90 transition-all duration-300 rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors duration-300 focus:outline-none ${isDark ? 'text-white' : 'text-slate-800'}`}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${isDark ? 'bg-slate-900 border-t border-slate-800' : 'bg-white border-t border-slate-100'} shadow-xl`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-medium block text-center transition-colors ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-brand-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/kenneth-exstrat/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 bg-gradient-brand text-white font-bold rounded-full shadow-lg"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;