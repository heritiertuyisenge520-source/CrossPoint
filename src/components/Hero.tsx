import { motion } from 'motion/react';
import { ArrowRight, Play, Globe, Ship, Package, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Globe, value: 'China → Rwanda', label: 'Trade Corridor' },
  { icon: Ship, value: 'Sea & Air', label: 'Freight Options' },
  { icon: Package, value: '6+', label: 'Sourcing Categories' },
  { icon: Truck, value: '24/7', label: 'Client Support' },
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-brand-navy overflow-hidden">
      <div className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[64%]">
          <img
            src="/hero-ship-plane.jpg"
            alt="Cargo ship, freight plane and rail at a global port"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/70 to-transparent lg:from-brand-navy lg:via-brand-navy/25 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-navy" />

          {/* Faint logo watermark blended into the photo */}
          <img
            src="/logo.jpg"
            alt=""
            aria-hidden="true"
            draggable={false}
            referrerPolicy="no-referrer"
            className="pointer-events-none select-none absolute right-[4%] md:right-auto md:left-[8%] top-1/2 -translate-y-1/2 w-[240px] md:w-[320px] xl:w-[440px] opacity-[0.11] md:opacity-[0.13] mix-blend-screen [filter:invert(1)]"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55 mb-5"
            >
              International Trade &amp; Logistics Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
            >
              SEA, AIR &amp;
              <br />
              SOURCING.
              <br />
              <span className="text-brand-blue">CHINA TO RWANDA.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/65 text-sm md:text-base leading-relaxed max-w-md mb-9"
            >
              Import from China to Rwanda — simple, safe, affordable. End-to-end sourcing,
              quality control, and logistics tailored for the Rwandan market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-7 py-3.5 rounded-full font-semibold transition-all shadow-xl shadow-brand-orange/25 flex items-center gap-2"
              >
                Start Sourcing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="text-white/80 hover:text-white px-2 py-3.5 font-medium transition-colors flex items-center gap-3"
              >
                <span className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center bg-white/5">
                  <Play className="w-3.5 h-3.5 fill-white" />
                </span>
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-8 -mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm px-4 py-6 lg:px-2 lg:py-7">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 px-4 lg:px-8 ${
                index !== 0 ? 'lg:border-l border-white/8' : ''
              }`}
            >
              <stat.icon className="w-7 h-7 text-white/80 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-white font-bold text-sm md:text-base leading-tight">{stat.value}</p>
                <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
