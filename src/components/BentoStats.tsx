import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Headphones,
  Globe,
  Clock,
  ArrowRight,
  Target,
  Telescope,
  MapPin,
} from 'lucide-react';

const perks = [
  {
    icon: ShieldCheck,
    title: 'Secure Transactions',
    copy: 'Verified suppliers and protected payments at every step.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    copy: 'A dedicated coordinator on call from Kigali and Guangzhou.',
  },
  {
    icon: Globe,
    title: 'China–Rwanda Network',
    copy: 'Factory relationships across China, delivery everywhere in Rwanda.',
  },
  {
    icon: Clock,
    title: 'On-time Delivery',
    copy: 'Optimized sea and air routes to keep your business moving.',
  },
];

export default function BentoStats() {
  return (
    <section id="about" className="relative bg-brand-navy overflow-hidden">
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-brand-orange/10 blur-[140px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-brand-blue/15 blur-[140px] rounded-full -ml-64 -mb-64" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-32 md:pt-40 pb-16 md:pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-orange mb-4">
            About CrossPoint
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.05] mb-5">
            Bridging China
            <br />
            <span className="text-white/40">&amp; Rwanda.</span>
          </h2>
          <p className="text-white/55 text-sm md:text-base leading-relaxed">
            More than logistics — we build lasting partnerships. One team, two continents,
            and a single promise: importing made simple, safe, and affordable.
          </p>
        </motion.div>

        {/* Story + Image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              CrossPoint Solutions is a China–Rwanda trade partner headquartered in
              <span className="text-white font-semibold"> Kigali</span>, with a sourcing team
              on the ground in <span className="text-white font-semibold">Guangzhou</span>.
              We help businesses across Rwanda import better — factory-direct products,
              honest prices, and cargo that arrives safely and on time.
            </p>
            <p className="text-white/55 text-sm md:text-base leading-relaxed">
              From the first supplier quote to final delivery at your door, one dedicated
              coordinator manages sourcing, quality checks, freight, customs, and last-mile
              logistics. You get full visibility at every stage — we handle the complexity.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <span className="text-xs font-semibold text-white/70 border border-white/10 bg-white/[0.04] rounded-full px-4 py-2">
                Factory-direct sourcing
              </span>
              <span className="text-xs font-semibold text-white/70 border border-white/10 bg-white/[0.04] rounded-full px-4 py-2">
                Sea &amp; air freight
              </span>
              <span className="text-xs font-semibold text-white/70 border border-white/10 bg-white/[0.04] rounded-full px-4 py-2">
                Door delivery in Kigali
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/hero-ship-plane.jpg"
              alt="Container ship and freight aircraft representing the China–Rwanda trade corridor"
              className="w-full h-[320px] md:h-[420px] object-cover rounded-3xl border border-white/8"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-xs font-bold text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                Kigali HQ
              </span>
              <span className="flex items-center gap-2 text-xs font-bold text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                Guangzhou Sourcing Office
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/8 bg-white/[0.03] p-8"
          >
            <div className="w-11 h-11 rounded-2xl bg-brand-orange/15 flex items-center justify-center mb-5">
              <Target className="w-5 h-5 text-brand-orange" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Our Mission</h3>
            <p className="text-white/55 text-sm leading-relaxed">
              Make importing from China simple, safe, and affordable for every Rwandan
              business — with honest pricing, quality assurance, and no hidden fees.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-white/8 bg-white/[0.03] p-8"
          >
            <div className="w-11 h-11 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-5">
              <Telescope className="w-5 h-5 text-brand-blue" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Our Vision</h3>
            <p className="text-white/55 text-sm leading-relaxed">
              To become the most trusted trade corridor between China and East Africa —
              known for reliability, transparency, and personal service.
            </p>
          </motion.div>
        </div>

        {/* Why CrossPoint */}
        <div className="mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40 mb-6">
            Why CrossPoint
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 hover:border-brand-orange/30 hover:bg-white/[0.05] transition-all"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-4">
                  <perk.icon className="w-4.5 h-4.5 text-brand-orange" strokeWidth={1.75} />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1.5">{perk.title}</h4>
                <p className="text-white/45 text-xs leading-relaxed">{perk.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/8 bg-gradient-to-r from-white/[0.05] to-transparent p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-black text-xl md:text-2xl tracking-tight mb-1.5">
              Ready to import from China?
            </h3>
            <p className="text-white/50 text-sm">
              Tell us what you need — you'll have a detailed quote within 24 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-7 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 shrink-0 shadow-lg shadow-brand-orange/20"
          >
            Start Sourcing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
