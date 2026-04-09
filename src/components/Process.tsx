import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Request",
    description: "Tell us what you need. We'll find the best suppliers and provide a detailed quote.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    number: "02",
    title: "Negotiate",
    description: "We handle price negotiations and contract terms to ensure the best value for you.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
  },
  {
    number: "03",
    title: "Inspect",
    description: "Our quality control team inspects goods at the factory to ensure they meet standards.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200"
  },
  {
    number: "04",
    title: "Deliver",
    description: "We manage the entire logistics chain and deliver your cargo safely to Kigali.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            How it works
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter max-w-2xl">
            How we move your cargo across the skies and oceans
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-white/5">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-black px-3 py-1 rounded-lg">
                  Step {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
