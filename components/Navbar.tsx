import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // High contrast active state
  const isActive = (path: string) => location.pathname === path ? 'text-white' : 'text-gray-500 hover:text-white';

  return (
    <nav className="fixed top-0 z-50 w-full bg-black border-b border-white/10">
      <div className="w-full">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section - Left Border */}
          <div className="flex-shrink-0 flex items-center h-full px-6 border-r border-white/10">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-black font-display font-bold text-lg">T</span>
              </div>
              <span className="text-lg font-display font-bold tracking-wider text-white uppercase">
                TKS EXIM
              </span>
            </Link>
          </div>
          
          {/* Desktop Links - Center */}
          <div className="hidden md:flex items-center h-full">
            <Link 
              to="/" 
              className={`h-full flex items-center px-8 text-xs font-bold uppercase tracking-[0.2em] transition-colors border-r border-white/10 ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`h-full flex items-center px-8 text-xs font-bold uppercase tracking-[0.2em] transition-colors border-r border-white/10 ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center h-full ml-auto">
             <Link 
                to="/contact"
                className="group relative h-full bg-primary-500 hover:bg-white text-black px-10 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <span>Get Quote</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden px-4">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 text-white hover:text-primary-500 transition-colors focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="flex flex-col">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block px-6 py-6 text-sm font-display font-bold uppercase tracking-widest text-white border-b border-white/10 hover:bg-white/5"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block px-6 py-6 text-sm font-display font-bold uppercase tracking-widest text-white border-b border-white/10 hover:bg-white/5"
            >
              Contact
            </Link>
             <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-6 text-sm font-display font-bold uppercase tracking-widest text-primary-500 hover:bg-white/5"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;