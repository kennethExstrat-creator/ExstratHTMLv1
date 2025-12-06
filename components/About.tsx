import React, { useState, useEffect, useRef } from 'react';

// Custom hook for count-up animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run animation only once
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function: Ease Out Cubic
      const ease = 1 - Math.pow(1 - percentage, 3);
      
      setCount(Math.floor(end * ease));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, end, duration]);

  return { count, elementRef };
};

const StatItem = ({ end, suffix, label }: { end: number, suffix: string, label: string }) => {
  const { count, elementRef } = useCountUp(end);
  
  return (
    <div ref={elementRef}>
      <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-brand mb-1 tabular-nums">
        {count}{suffix}
      </h4>
      <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden transition-colors duration-700">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/5 dark:bg-brand-secondary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 dark:bg-brand-primary/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative">
                <img 
                    src="https://picsum.photos/id/60/800/600?grayscale" 
                    alt="Team meeting" 
                    className="rounded-2xl shadow-2xl border-4 border-white/50 dark:border-white/10 relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-gradient-brand rounded-2xl opacity-10 -z-0"></div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-primary dark:text-brand-secondary font-bold uppercase tracking-widest text-sm mb-2 transition-colors duration-500">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white font-bold mb-6 transition-colors duration-500">Exstrat Ventures</h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-lg transition-colors duration-500">
              <p>
                At Exstrat Ventures, we bridge the critical gap between high-level strategy and on-the-ground execution. 
                We understand that a vision without a roadmap is just a dream, which is why we specialize in creating 
                sustainable frameworks for growth.
              </p>
              <p>
                Our team acts as an extension of your management, providing the financial discipline, investor relations expertise, 
                and operational workflows necessary to scale efficiently in today's competitive landscape.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                 <StatItem end={50} suffix="+" label="Projects Completed" />
                 <StatItem end={3} suffix="+" label="Years Experience" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;