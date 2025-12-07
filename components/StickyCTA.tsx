import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <a
      href="https://wa.me/917736690830"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-full shadow-lg shadow-black/50 transition-all transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" className="text-white" />
      <span className="font-bold text-sm hidden sm:inline">WhatsApp Now</span>
    </a>
  );
};

export default StickyCTA;