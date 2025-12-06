import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../constants';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0].id);

  // Helper to extract a cleaner label for the tabs (removing "Category A: ")
  const getTabLabel = (title: string) => {
    return title.split(': ')[1] || title;
  };

  const activeCategory = SERVICE_CATEGORIES.find(c => c.id === activeTab) || SERVICE_CATEGORIES[0];

  return (
    <section id="services" className="py-24 relative overflow-hidden transition-colors duration-700">
      {/* Local decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 dark:bg-brand-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 dark:bg-brand-secondary/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary dark:text-brand-secondary font-bold uppercase tracking-widest text-sm mb-2 transition-colors duration-500">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white font-bold mb-4 transition-colors duration-500">Comprehensive Solutions</h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
            We offer a wide range of specialized services designed to handle the complexities of financial management and strategic planning.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Left Side: Vertical Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`group w-full text-left px-6 py-5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-4 border ${
                  activeTab === category.id
                    ? 'bg-gradient-brand text-white border-transparent shadow-lg shadow-blue-500/30 transform scale-[1.02] ring-2 ring-offset-2 ring-brand-primary/20 z-10'
                    : 'bg-white/60 dark:bg-white/5 backdrop-blur-sm text-slate-600 dark:text-slate-300 border-white/50 dark:border-white/10 hover:border-brand-primary/50 dark:hover:border-brand-secondary/50 hover:text-brand-primary dark:hover:text-white hover:shadow-md hover:bg-white/80 dark:hover:bg-white/10'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                    activeTab === category.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-blue-50 dark:group-hover:bg-slate-700 group-hover:text-brand-primary dark:group-hover:text-white'
                }`}>
                    <i className={`fa-solid ${category.icon} text-lg`}></i>
                </div>
                <span className="text-base truncate">{getTabLabel(category.title)}</span>
                
                {/* Arrow indicator for active state */}
                 {activeTab === category.id && (
                    <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-80"></i>
                 )}
              </button>
            ))}
          </div>

          {/* Right Side: Content Panel */}
          <div className="lg:w-2/3">
            <div 
              key={activeTab} // Changing key triggers the animation
              className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-white/50 dark:border-white/10 animate-fade-in-right relative overflow-hidden h-full transition-colors duration-500"
            >
              {/* Top decorative gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand"></div>

              <div className="flex flex-col gap-6 mb-8 border-b border-slate-100 dark:border-slate-700 pb-6 transition-colors duration-500">
                 <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3 transition-colors duration-500">
                        {activeCategory.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed transition-colors duration-500">
                      Detailed breakdown of services included in this category. We ensure every aspect is covered with precision.
                    </p>
                 </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {activeCategory.services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group p-5 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-indigo-500/30 hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start"
                  >
                     <div className="mt-1 w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center shrink-0 shadow-sm">
                        <i className="fa-solid fa-check text-white text-[10px]"></i>
                     </div>
                     <div>
                        <h5 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary transition-colors duration-300">
                            {service.title}
                        </h5>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                            {service.description}
                        </p>
                     </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-end">
                 <a 
                   href="https://calendly.com/kenneth-exstrat/30min"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-medium text-sm rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
                 >
                    Get Started <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;