import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted', formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
    setFormState({ name: '', email: '', service: 'General Inquiry', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/50">
          
          {/* Contact Info Sidebar - Gradient Background */}
          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-10 md:w-2/5 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Let's Connect</h3>
              <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                Ready to transform your business strategy into actionable results? Schedule a consultation today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4 backdrop-blur-sm">
                    <i className="fa-solid fa-envelope text-white text-sm"></i>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-blue-200 font-bold mb-1">Email</span>
                    <a href="mailto:contact@exstrat.com" className="text-white hover:text-blue-100 transition-colors">contact@exstrat.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4 backdrop-blur-sm">
                    <i className="fa-solid fa-location-dot text-white text-sm"></i>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-blue-200 font-bold mb-1">Office</span>
                    <span className="text-white">Kuala Lumpur, Malaysia</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-all duration-300">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-all duration-300">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 md:w-3/5">
             {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                        <i className="fa-solid fa-check text-green-500 text-3xl"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">Message Sent</h4>
                    <p className="text-slate-500">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                    <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder-slate-400"
                        placeholder="John Doe"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder-slate-400"
                        placeholder="john@company.com"
                    />
                    </div>
                    <div>
                    <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Interest</label>
                    <div className="relative">
                        <select
                            id="service"
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all appearance-none"
                        >
                            <option>General Inquiry</option>
                            <option>Investment Management</option>
                            <option>Investment Relations</option>
                            <option>Internal Management</option>
                            <option>Customized Solutions</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <i className="fa-solid fa-chevron-down text-xs"></i>
                        </div>
                    </div>
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder-slate-400"
                        placeholder="Tell us about your project or goals..."
                    ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-brand hover:opacity-90 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/30"
                >
                    Send Message
                </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;