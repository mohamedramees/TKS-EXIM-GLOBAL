import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Ship, 
  Award,
  ArrowRight,
  Thermometer,
  Package,
  Clock,
  CheckCircle2,
  Snowflake
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-black text-white pt-20">
      
      {/* 1. HERO SECTION - Massive Typography */}
      <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-white/10 bg-grid">
        <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-16 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-primary-500 font-mono text-xs uppercase tracking-widest">
                Export / Logistics / Global
              </span>
            </div>
            <p className="text-gray-400 max-w-md text-sm md:text-base font-medium leading-relaxed text-right hidden md:block">
              Premium White Shell Table Eggs. <br/>
              Sourced, packed, and shipped from India to the World.
            </p>
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] leading-[0.85] font-display font-black text-white tracking-tighter mb-12 select-none cursor-default">
            GLOBAL <br/>
            <span className="inline-block transition-all duration-300 hover:text-primary-500 hover:-translate-y-2 hover:scale-105 origin-left">EGG</span> <span className="inline-block text-transparent transition-all duration-500 hover:text-primary-500" style={{WebkitTextStroke: '3px #EAB308'}}>SUPPLY</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-0 border-t border-l border-white/10 w-fit">
            <a 
              href="https://wa.me/917736690830"
              className="group bg-white text-black text-lg md:text-xl font-display font-bold py-6 px-12 uppercase tracking-wide transition-all hover:bg-primary-500 flex items-center gap-4"
            >
              WhatsApp Now
              <ArrowRight className="transition-transform group-hover:-rotate-45" size={24} />
            </a>
            <Link 
              to="/contact"
              className="group bg-black border-r border-b border-white/10 text-white text-lg md:text-xl font-display font-bold py-6 px-12 uppercase tracking-wide transition-all hover:bg-white hover:text-black"
            >
              Get Price Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TICKER / MARQUEE (Animated) */}
      <div className="w-full overflow-hidden border-b border-white/10 bg-primary-500 py-3">
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          {/* First set of content */}
          <div className="flex whitespace-nowrap gap-12 pr-12 text-black font-display font-bold text-sm uppercase tracking-widest">
            <span>Shipment Capacity: 150+ Containers/Month</span>
            <span>•</span>
            <span>Reefer Logistics</span>
            <span>•</span>
            <span>472,320 Eggs Per Container</span>
            <span>•</span>
            <span>Global Export Standards</span>
            <span>•</span>
            <span>Shipment Capacity: 150+ Containers/Month</span>
            <span>•</span>
            <span>Reefer Logistics</span>
            <span>•</span>
            <span>472,320 Eggs Per Container</span>
            <span>•</span>
            <span>Global Export Standards</span>
            <span>•</span>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex whitespace-nowrap gap-12 pr-12 text-black font-display font-bold text-sm uppercase tracking-widest">
            <span>Shipment Capacity: 150+ Containers/Month</span>
            <span>•</span>
            <span>Reefer Logistics</span>
            <span>•</span>
            <span>472,320 Eggs Per Container</span>
            <span>•</span>
            <span>Global Export Standards</span>
            <span>•</span>
            <span>Shipment Capacity: 150+ Containers/Month</span>
            <span>•</span>
            <span>Reefer Logistics</span>
            <span>•</span>
            <span>472,320 Eggs Per Container</span>
            <span>•</span>
            <span>Global Export Standards</span>
            <span>•</span>
          </div>
        </div>
      </div>

      {/* 3. METRICS - Bento Grid Style */}
      <section className="border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="group p-12 lg:p-16 flex flex-col justify-between min-h-[300px] hover:bg-white/5 transition-colors overflow-hidden">
            <Ship className="w-12 h-12 text-gray-500 mb-8 group-hover:text-primary-500 transition-colors" />
            <div>
              <h3 className="text-6xl font-display font-bold text-white mb-2">150+</h3>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-6">Monthly Containers</p>
              
              {/* Animated Capacity Bar */}
              <div className="w-full h-1 bg-white/10 overflow-hidden relative">
                 <div className="absolute inset-y-0 left-0 w-1/2 bg-primary-500 animate-slide-bar group-hover:[animation-play-state:paused]"></div>
              </div>
            </div>
          </div>

          <div className="p-12 lg:p-16 flex flex-col justify-between min-h-[300px] hover:bg-white/5 transition-colors">
            <Globe className="w-12 h-12 text-gray-500 mb-8" />
            <div>
              <h3 className="text-6xl font-display font-bold text-white mb-2">100+</h3>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Global Destinations</p>
            </div>
          </div>

          <div className="p-12 lg:p-16 flex flex-col justify-between min-h-[300px] hover:bg-white/5 transition-colors">
            <Award className="w-12 h-12 text-gray-500 mb-8" />
            <div>
              <h3 className="text-6xl font-display font-bold text-white mb-2">100%</h3>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Quality Guaranteed</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SHIPMENT SPECIFICATIONS - New Section */}
      <section className="bg-zinc-900 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Left: Description & Temperature */}
          <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <Package className="w-10 h-10 text-primary-500" />
                  <h2 className="text-3xl font-display font-bold uppercase">Logistics</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                  40FT HIGH CUBE <span className="text-primary-500">REEFER</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  We ship in 40 Feet High Cube reefer containers maintaining a constant temperature of <span className="text-white font-bold">+2°C</span>, creating the ideal environment for preserving egg freshness during global transit.
                </p>
            </div>
            <div className="relative z-10 flex items-center gap-4 text-primary-500">
              <Snowflake size={32} />
              <span className="font-mono text-2xl font-bold">+2° Celsius Controlled</span>
            </div>
          </div>

          {/* Right: The Math */}
          <div className="lg:col-span-7 bg-black p-12 lg:p-16 flex flex-col justify-center">
              <h4 className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-10">Standard Loading Configuration (12 Tray Box)</h4>
              
              <div className="space-y-8">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 group hover:border-primary-500 transition-colors">
                  <span className="text-2xl font-display font-bold text-white group-hover:text-primary-500 transition-colors">Cartons Per Container</span>
                  <span className="text-4xl md:text-5xl font-mono font-bold text-white">1,312</span>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 group hover:border-primary-500 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-white group-hover:text-primary-500 transition-colors">Eggs Per Carton</span>
                    <span className="text-gray-500 font-mono text-sm mt-1">12 Trays × 30 Eggs</span>
                  </div>
                  <span className="text-4xl md:text-5xl font-mono font-bold text-white">360</span>
                </div>

                {/* Total */}
                <div className="pt-4">
                  <div className="bg-white/5 p-8 rounded-none border-l-4 border-primary-500 flex flex-col md:flex-row items-baseline justify-between gap-4">
                    <span className="text-xl font-bold uppercase tracking-widest text-gray-400">Total Capacity</span>
                    <span className="text-4xl md:text-6xl font-mono font-bold text-primary-500">472,320</span>
                  </div>
                  <p className="text-right text-gray-500 text-xs font-mono mt-2 uppercase">Eggs per 40ft Container</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT / MISSION - Split Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10">
        <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
          <span className="text-primary-500 font-mono text-xs uppercase tracking-widest mb-6 block">Our Mission</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
            POWERING THE GLOBAL FOOD CHAIN.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            TKS Exim Global is a trusted poultry export company from Kerala. We don't just ship eggs; we engineer a reliable supply chain for wholesalers, hypermarkets, and food services worldwide.
          </p>
        </div>
        <div className="grid grid-rows-2 divide-y divide-white/10">
          <div className="p-12 flex flex-col justify-center hover:bg-white/5 transition-colors">
             <h3 className="text-2xl font-display font-bold text-white mb-4">Strategic Partnership</h3>
             <p className="text-gray-400">Backed by India’s No.1 egg exporter, ensuring unmatched scale and consistency.</p>
          </div>
          <div className="p-12 flex flex-col justify-center hover:bg-white/5 transition-colors">
             <h3 className="text-2xl font-display font-bold text-white mb-4">Logistics Excellence</h3>
             <p className="text-gray-400">Advanced reefer container technology maintaining +2°C for optimal freshness.</p>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US - Grid */}
      <section className="bg-black">
        <div className="border-b border-white/10 p-12 lg:p-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
            Why Choose Us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-white/10 divide-white/10">
          {[
            { title: "Top Tier Sourcing", desc: "Sourced from ISO certified farms.", icon: Award },
            { title: "GCC Specialists", desc: "Trusted across Dubai, Oman, Qatar.", icon: Globe },
            { title: "Cold Chain", desc: "Strict temp control at +2°C.", icon: Thermometer },
            { title: "Secure Packing", desc: "360 eggs/carton, damage-proof.", icon: Package },
            { title: "Daily Exports", desc: "Regular shipping schedules.", icon: Ship },
            { title: "24/7 Support", desc: "Always available for buyers.", icon: Clock }
          ].map((item, index) => (
            <div key={index} className="group p-10 min-h-[240px] flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-300">
              <div className="flex justify-between items-start">
                <item.icon className="w-8 h-8 text-primary-500 group-hover:text-black transition-colors" />
                <span className="font-mono text-xs text-gray-500 group-hover:text-black/50">0{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-black/70 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-32 px-4 text-center bg-grid border-b border-white/10">
         <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-12 text-white">
           Ready to Order?
         </h2>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
           <a 
              href="https://wa.me/917736690830"
              className="bg-primary-500 text-black text-lg font-bold py-5 px-10 uppercase hover:bg-white transition-colors"
           >
             Start WhatsApp Chat
           </a>
           <Link 
              to="/contact"
              className="border border-white/20 text-white text-lg font-bold py-5 px-10 uppercase hover:bg-white hover:text-black transition-colors"
           >
             Contact Sales
           </Link>
         </div>
      </section>

    </div>
  );
};

export default Home;