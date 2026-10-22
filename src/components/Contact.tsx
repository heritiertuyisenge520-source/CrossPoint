import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const offices = [
  {
    country: 'Rwanda',
    city: 'Kigali',
    description: 'Our headquarters — coordinating deliveries, customs, and client support across Rwanda.',
    address: 'Kigali, Rwanda',
    phones: [
      { display: '+250 784 008 103', href: 'https://wa.me/250784008103' },
      { display: '+250 793 107 029', href: 'https://wa.me/250793107029' },
    ],
    email: 'info@crosspointsolution.rw',
    hours: 'Mon – Sat: 8:00 – 18:00',
    highlight: true,
  },
  {
    country: 'China',
    city: 'Guangzhou',
    description: 'Our sourcing team on the ground — factory visits, negotiations, and quality follow-up.',
    address: 'Guangzhou, China',
    phones: [{ display: '+86 132 6807 8948', href: 'tel:+8613268078948' }],
    email: 'micodieudonne001@gmail.com',
    hours: 'Mon – Sat: 9:00 – 18:00 (GMT+8)',
    highlight: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#061018]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45 mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-white/50 max-w-xl leading-relaxed text-sm md:text-base">
            Two offices, one team. Reach us in Rwanda or China — we respond fast and speak your language.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offices.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 md:p-10 border ${
                office.highlight
                  ? 'bg-white/[0.04] border-brand-orange/30'
                  : 'bg-white/[0.03] border-white/8'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-brand-orange">
                    {office.country} Office
                  </p>
                  <h3 className="text-3xl font-extrabold tracking-tight text-white">{office.city}</h3>
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10">
                  <MapPin className="w-7 h-7 text-brand-orange" />
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-10 text-white/50">{office.description}</p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-white/5">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                  </div>
                  <p className="text-sm font-medium text-white/80">{office.address}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-white/5">
                    <Phone className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {office.phones.map((phone) => (
                      <a
                        key={phone.display}
                        href={phone.href}
                        target={phone.href.startsWith('http') ? '_blank' : undefined}
                        rel={phone.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-white/80 hover:text-brand-orange transition-colors"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-white/5">
                    <Mail className="w-4 h-4 text-brand-orange" />
                  </div>
                  <a
                    href={`mailto:${office.email}`}
                    className="text-sm font-medium text-white/80 hover:text-brand-orange transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-white/5">
                    <Clock className="w-4 h-4 text-brand-orange" />
                  </div>
                  <p className="text-sm font-medium text-white/80">{office.hours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
