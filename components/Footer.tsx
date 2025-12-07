import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
        
        {/* Brand Column */}
        <div className="p-10 md:col-span-1">
          <span className="text-2xl font-display font-bold tracking-tighter text-white uppercase block mb-6">
            TKS <span className="text-primary-500">EXIM</span>
          </span>
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            Premium table egg exports. Reliability tailored for the global market.
          </p>
        </div>

        {/* Links */}
        <div className="p-10">
          <h3 className="font-mono text-xs text-primary-500 uppercase tracking-widest mb-6">Sitemap</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-sm font-bold text-white hover:text-primary-500 transition uppercase">Home</Link></li>
            <li><Link to="/contact" className="text-sm font-bold text-white hover:text-primary-500 transition uppercase">Contact</Link></li>
            <li><Link to="/contact" className="text-sm font-bold text-white hover:text-primary-500 transition uppercase">Get Quote</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="p-10 md:col-span-2">
          <h3 className="font-mono text-xs text-primary-500 uppercase tracking-widest mb-6">Contact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-white" />
              <span className="text-gray-400 text-sm">+91 77366 90830</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-white" />
              <span className="text-gray-400 text-sm">contact@tkseximglobal.com</span>
            </div>
            <div className="flex items-center gap-4 sm:col-span-2">
              <MapPin size={20} className="text-white" />
              <span className="text-gray-400 text-sm">Kerala, India</span>
            </div>
          </div>
        </div>

      </div>

      <div className="p-6 flex flex-col md:flex-row justify-between items-center bg-zinc-950">
        <p className="text-xs text-gray-600 font-mono uppercase">
          &copy; {new Date().getFullYear()} TKS Exim Global.
        </p>
        <p className="text-xs text-gray-600 font-mono uppercase mt-2 md:mt-0">
          tkseximglobal.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;