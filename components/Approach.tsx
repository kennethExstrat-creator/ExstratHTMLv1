import React from 'react';
import { APPROACH_STAGES } from '../constants';

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 relative transition-colors duration-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary dark:text-brand-secondary font-bold uppercase tracking-widest text-sm mb-2 transition-colors duration-500">Our Methodology</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white font-bold transition-colors duration-500">From Vision to Reality</h3>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mt-6 rounded-full opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {APPROACH_STAGES.map((stage) => (
            <div 
              key={stage.id}
              className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-md border border-white/50 dark:border-white/5 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-slate-800/60 hover:border-brand-primary/20 dark:hover:border-brand-secondary/30 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white dark:bg-slate-700 shadow-md border border-slate-100 dark:border-slate-600 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa-solid ${stage.icon} text-2xl text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-brand-secondary`}></i>
                </div>
                <span className="text-5xl font-serif font-bold text-slate-200 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-slate-200 group-hover:to-slate-100 dark:group-hover:from-white dark:group-hover:to-slate-200 transition-colors select-none">
                  0{stage.id}
                </span>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{stage.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 min-h-[48px] leading-relaxed transition-colors duration-300">{stage.description}</p>
              
              <ul className="space-y-3">
                {stage.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 text-[10px]"></i>
                    </div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Approach;