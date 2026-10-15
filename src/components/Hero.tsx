import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/navigation';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleWords = "Sea, air & sourcing — on time, trusted".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-navy overflow-hidden py-24 px-6">
      {/* Cinematic Background with Deep Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=2000"
          alt="Global Logistics Aerial"
          className="w-full h-full object-cover opacity-30 scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/60 to-brand-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-transparent to-brand-navy opacity-80" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">


        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1] tracking-tighter">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.2em]"
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-16">
          {"Import from China to Rwanda—Simple, Safe, Affordable. We provide end-to-end sourcing, quality control, and logistics solutions tailored for the Rwandan market.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em] text-sm md:text-lg text-white/30 leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 + i * 0.02 }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            type="button"
            onClick={() => scrollToSection('categories')}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full font-extrabold transition-all shadow-xl shadow-brand-orange/20 flex items-center gap-3 group cursor-pointer"
          >
            Start Sourcing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('services')}
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-full font-extrabold transition-all backdrop-blur-sm cursor-pointer"
          >
            Our Services
          </button>
        </motion.div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">Explore Solutions</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-brand-orange/50 via-brand-orange/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
