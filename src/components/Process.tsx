import { motion } from 'motion/react';
import { ArrowRight, Search, ShieldCheck, Clock, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const timeline = [
  {
    title: 'Request Received',
    location: 'Kigali, Rwanda',
    detail: 'Tell us what you need — we source and quote.',
    status: 'done',
  },
  {
    title: 'Factory Confirmed',
    location: 'Guangzhou, China',
    detail: 'Price negotiation and supplier verification.',
    status: 'done',
  },
  {
    title: 'Quality Inspected',
    location: 'Origin factory',
    detail: 'Goods checked before they leave China.',
    status: 'current',
  },
  {
    title: 'Delivered to Kigali',
    location: 'Kigali, Rwanda',
    detail: 'Ocean or air freight, customs, door delivery.',
    status: 'upcoming',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-[#061018] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8 md:p-10 flex flex-col justify-between min-h-[360px]">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                Follow Every Shipment.
                <br />
                Total Transparency.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                Monitor your cargo at every stage — sourcing, inspection, freight, and
                customs — with a dedicated CrossPoint coordinator from China to Kigali.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <Stat icon={ShieldCheck} title="Factory QC" copy="Inspection before shipping" />
                <Stat icon={Clock} title="On-time delivery" copy="Fastest China–Kigali routes" />
                <Stat icon={Headphones} title="24/7 support" copy="Always a coordinator on call" />
              </div>
            </div>
            <Link
              to="/track"
              className="mt-8 text-brand-blue hover:text-white text-sm font-semibold inline-flex items-center gap-2 cursor-pointer transition-colors self-start"
            >
              Track Shipment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/8 bg-[#0B1826] p-6 md:p-7"
          >
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 mb-6">
              <Search className="w-4 h-4 text-white/40" />
              <span className="text-sm text-white/80 font-medium tracking-wide">CPS-RW-01482</span>
            </div>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
              <div className="relative pl-5">
                <div className="absolute left-[7px] top-2 bottom-3 w-px bg-white/10" />
                {timeline.map((step) => (
                  <div key={step.title} className="relative pb-6 last:pb-0">
                    <span
                      className={`absolute -left-5 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                        step.status === 'upcoming'
                          ? 'border-white/20 bg-transparent'
                          : 'border-brand-orange bg-brand-orange'
                      }`}
                    />
                    <p className="text-sm font-semibold text-white">{step.title}</p>
                    <p className="text-xs text-white/45 mt-0.5">{step.location}</p>
                    <p className="text-[11px] text-white/30 mt-1">{step.detail}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/8 bg-black/20">
                <img
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800"
                  alt="Container shipment in transit"
                  className="w-full h-28 object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-4 space-y-2.5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/35">
                    Shipment details
                  </p>
                  <DetailRow label="Corridor" value="China → Rwanda" />
                  <DetailRow label="Mode" value="Sea / Air" />
                  <DetailRow label="Status" value="In transit" />
                  <DetailRow label="Origin" value="Guangzhou, CN" />
                  <DetailRow label="Destination" value="Kigali, RW" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-xs">
      <span className="text-white/40">{label}</span>
      <span className="text-white/85 font-medium">{value}</span>
    </div>
  );
}

function Stat({
  icon: Icon,
  title,
  copy,
}: {
  icon: typeof ShieldCheck;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-white/40">{copy}</p>
      </div>
    </div>
  );
}
