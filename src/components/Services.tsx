import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Ship,
  Plane,
  Search,
  FileCheck,
  Warehouse,
  PlaneTakeoff,
  ArrowRight,
} from 'lucide-react';
import { scrollToSection } from '../utils/navigation';
import ServiceGlobe from './ServiceGlobe';
import { globeScenes, type ServiceSceneId } from '../data/globeScenes';

const services: {
  id: ServiceSceneId;
  icon: typeof Search;
  title: string;
  subtitle: string;
}[] = [
  { id: 'sourcing', icon: Search, title: 'Product Sourcing', subtitle: 'Factory Direct' },
  { id: 'ocean', icon: Ship, title: 'Ocean Freight', subtitle: 'FCL / LCL' },
  { id: 'air', icon: Plane, title: 'Air Freight', subtitle: 'Fast & Reliable' },
  { id: 'customs', icon: FileCheck, title: 'Customs Clearance', subtitle: 'China & Rwanda' },
  { id: 'warehouse', icon: Warehouse, title: 'Warehousing', subtitle: 'Safe in Kigali' },
  { id: 'ticketing', icon: PlaneTakeoff, title: 'Air Ticketing', subtitle: 'Tickets, Hotels, Visas' },
];

export default function Services() {
  const [active, setActive] = useState<ServiceSceneId>('ticketing');
  const scene = globeScenes[active];

  return (
    <section id="services" className="relative bg-brand-navy py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45 mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5">
              End-to-End Logistics
              <br />
              for Global Trade
            </h2>
            <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-md mb-6">
              From ocean freight to air cargo, sourcing, and last-mile delivery in Kigali,
              we offer flexible, secure, and cost-effective solutions to keep your business moving.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="text-brand-orange hover:text-white text-sm font-semibold inline-flex items-center gap-2 mb-10 cursor-pointer transition-colors"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map((service, index) => {
                const selected = service.id === active;
                return (
                  <motion.button
                    key={service.id}
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setActive(service.id)}
                    aria-pressed={selected}
                    className={`text-left rounded-2xl border p-5 transition-all cursor-pointer group ${
                      selected
                        ? 'border-brand-orange bg-brand-orange/10 shadow-[0_0_24px_rgba(255,107,26,0.15)]'
                        : 'border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15'
                    }`}
                  >
                    <service.icon
                      className={`w-6 h-6 mb-4 transition-colors ${
                        selected ? 'text-brand-orange' : 'text-white/80 group-hover:text-brand-orange'
                      }`}
                      strokeWidth={1.5}
                    />
                    <h3 className="text-white font-semibold text-sm mb-1">{service.title}</h3>
                    <p className="text-white/40 text-xs">{service.subtitle}</p>
                  </motion.button>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-white/35">Click a service to fly the globe.</p>
          </div>

          <div className="relative">
            <div className="flex items-start justify-between gap-4 mb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45 pt-1">
                {scene.kicker}
              </p>
              <div className="flex gap-6 text-right">
                {scene.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-white leading-none">{stat.value}</p>
                    <p className="text-[11px] text-white/40 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-globe className="relative h-[460px] lg:h-[560px]">
              <ServiceGlobe sceneId={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
