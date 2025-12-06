import React from 'react';
import { COMPANY_NAME, LEGAL_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm border-t border-slate-200/50 dark:border-white/10 pt-16 pb-8 transition-colors duration-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 block flex items-center gap-2 transition-colors duration-500">
               <span className="text-transparent bg-clip-text bg-gradient-brand">{COMPANY_NAME}</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6 leading-relaxed transition-colors duration-500">
              Your Strategic Partner for Sustainable Growth. We help businesses align their vision with actionable goals through comprehensive financial and management consulting.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider transition-colors duration-500">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#approach" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors text-sm">Our Approach</a></li>
              <li><a href="#services" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#about" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors text-sm">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider transition-colors duration-500">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200/50 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 dark:text-slate-500 transition-colors duration-500">
          <p>&copy; {currentYear} {LEGAL_NAME}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
             {/* Social placeholders could be here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;