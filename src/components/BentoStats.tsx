import { ShieldCheck, Headphones, Globe, Clock } from 'lucide-react';
import { scrollToSection } from '../utils/navigation';
import { ArrowRight } from 'lucide-react';

const perks = [
  { icon: ShieldCheck, title: 'Secure Transactions' },
  { icon: Headphones, title: '24/7 Support' },
  { icon: Globe, title: 'China–Rwanda Network' },
  { icon: Clock, title: 'On-time Delivery' },
];

export default function BentoStats() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-14">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr_1fr] gap-8 items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-navy/40 mb-3">
              Smarter Supply Chain
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy tracking-tight leading-tight mb-3">
              Your Global Trade Partner
            </h2>
            <p className="text-brand-navy/55 text-sm mb-6">
              More than logistics — we build lasting partnerships from China to Rwanda.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded-full font-semibold text-sm inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-orange/20"
            >
              Start Sourcing
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {perks.map((perk) => (
              <div key={perk.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-brand-navy/10 flex items-center justify-center shrink-0">
                  <perk.icon className="w-4 h-4 text-brand-navy" />
                </div>
                <p className="text-sm font-semibold text-brand-navy">{perk.title}</p>
              </div>
            ))}
          </div>

          <div className="relative h-40 md:h-48 lg:h-56 rounded-2xl overflow-hidden">
            <img
              src="/cta-cargo-ship.jpg"
              alt="Cargo ship at sunset"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
