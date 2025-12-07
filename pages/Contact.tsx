import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    product: 'Table Eggs',
    quantity: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Inquiry:%0A Name: ${formData.name}%0A Company: ${formData.company}%0A Product: ${formData.product}%0A Msg: ${formData.message}`;
    window.open(`https://wa.me/917736690830?text=${text}`, '_blank');
  };

  return (
    <div className="bg-black min-h-screen pt-20 flex flex-col">
      
      {/* Header */}
      <div className="border-b border-white/10 bg-grid py-20 px-6 lg:px-12">
        <h1 className="text-6xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-mono">
          Global inquiries. Response within 24 hours.
        </p>
      </div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-b border-white/10">
        
        {/* Left: Info */}
        <div className="p-12 lg:p-20 bg-zinc-950/30">
          <div className="space-y-16">
            
            <div className="group">
              <span className="text-primary-500 font-mono text-xs uppercase tracking-widest block mb-2">Call / WhatsApp</span>
              <a href="https://wa.me/917736690830" className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-primary-500 transition-colors">
                +91 77366 90830
              </a>
            </div>

            <div className="group">
              <span className="text-primary-500 font-mono text-xs uppercase tracking-widest block mb-2">Email</span>
              <a href="mailto:contact@tkseximglobal.com" className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-primary-500 transition-colors">
                contact@tkseximglobal.com
              </a>
            </div>

            <div className="group">
              <span className="text-primary-500 font-mono text-xs uppercase tracking-widest block mb-2">Headquarters</span>
              <p className="text-3xl md:text-4xl font-display font-bold text-white">
                Kerala, India
              </p>
            </div>

          </div>
        </div>

        {/* Right: Form */}
        <div className="p-12 lg:p-20 bg-black">
          <form onSubmit={handleSubmit} className="space-y-0">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <input 
                type="text" 
                name="name" 
                placeholder="FULL NAME"
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-r border-white/20 p-6 text-white placeholder-gray-600 focus:bg-white/5 focus:border-primary-500 outline-none uppercase font-bold tracking-wider"
              />
               <input 
                type="text" 
                name="company" 
                placeholder="COMPANY"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 p-6 text-white placeholder-gray-600 focus:bg-white/5 focus:border-primary-500 outline-none uppercase font-bold tracking-wider"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
               <input 
                type="email" 
                name="email" 
                placeholder="EMAIL ADDRESS"
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-r border-white/20 p-6 text-white placeholder-gray-600 focus:bg-white/5 focus:border-primary-500 outline-none uppercase font-bold tracking-wider"
              />
               <input 
                type="tel" 
                name="phone" 
                placeholder="PHONE NUMBER"
                required 
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 p-6 text-white placeholder-gray-600 focus:bg-white/5 focus:border-primary-500 outline-none uppercase font-bold tracking-wider"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
               <div className="w-full bg-transparent border-b border-r border-white/20 p-6">
                  <select 
                    name="product" 
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white focus:outline-none uppercase font-bold tracking-wider appearance-none"
                  >
                    <option value="Table Eggs" className="bg-black text-gray-400">Table Eggs</option>
                  </select>
               </div>
               <input 
                type="text" 
                name="country" 
                placeholder="COUNTRY"
                required 
                value={formData.country}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 p-6 text-white placeholder-gray-600 focus:bg-white/5 focus:border-primary-500 outline-none uppercase font-bold tracking-wider"
              />
            </div>

            <textarea 
              name="message" 
              rows={4} 
              required 
              value={formData.message}
              onChange={handleChange}
              placeholder="YOUR REQUIREMENT..."
              className="w-full bg-transparent border-b border-white/20 p-6 text-white placeholder-gray-600 focus:bg-white/5 focus:border-primary-500 outline-none uppercase font-bold tracking-wider"
            ></textarea>

            <button 
              type="submit" 
              className="w-full bg-primary-500 hover:bg-white text-black font-display font-bold py-8 uppercase tracking-widest transition-colors flex items-center justify-between px-6"
            >
              <span>Submit Inquiry</span>
              <ArrowRight size={24} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;