import { motion } from 'motion/react';
import { ShieldCheck, Zap, TrendingUp, Headphones } from 'lucide-react';

export default function BentoStats() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 inline-block">
            Key Benefits
          </span>
          <h2 className="text-4xl font-extrabold text-brand-navy tracking-tighter">
            Benefits of our ocean <br /> freight services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-[#F8F9FA] p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-brand-navy transition-all duration-500">
            <ShieldCheck className="w-10 h-10 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-brand-navy group-hover:text-white mb-2">Safety & top quality</h3>
            <p className="text-sm text-brand-navy/40 group-hover:text-white/40">Rigorous inspection at every stage.</p>
          </div>
          <div className="bg-brand-orange p-8 rounded-3xl flex flex-col items-center text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <Zap className="w-10 h-10 text-white mb-6" />
            <h3 className="text-lg font-bold mb-2">On time delivery</h3>
            <p className="text-sm text-white/70">Fastest routes from China to Kigali.</p>
          </div>
          <div className="bg-[#F8F9FA] p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-brand-navy transition-all duration-500">
            <TrendingUp className="w-10 h-10 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-brand-navy group-hover:text-white mb-2">Insurance coverage</h3>
            <p className="text-sm text-brand-navy/40 group-hover:text-white/40">Full protection for your cargo.</p>
          </div>
          <div className="bg-[#F8F9FA] p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-brand-navy transition-all duration-500">
            <Headphones className="w-10 h-10 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-brand-navy group-hover:text-white mb-2">24/7 Support</h3>
            <p className="text-sm text-brand-navy/40 group-hover:text-white/40">Always here to help you.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-navy p-10 rounded-3xl text-white flex flex-col justify-between"
          >
            <div>
              <h4 className="text-4xl font-black mb-2 tracking-tighter">16k+</h4>
              <p className="text-white/40 font-bold uppercase text-[10px] tracking-widest">Verified Suppliers</p>
            </div>
            <p className="text-sm text-white/60 mt-8 leading-relaxed">
              We've built a network of thousands of trusted manufacturers across China to ensure you get the best quality and price.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#F8F9FA] p-10 rounded-3xl flex flex-col justify-between border border-brand-navy/5"
          >
            <div>
              <h4 className="text-4xl font-black text-brand-navy mb-2 tracking-tighter">89%</h4>
              <p className="text-brand-navy/40 font-bold uppercase text-[10px] tracking-widest">Faster Delivery</p>
            </div>
            <p className="text-sm text-brand-navy/60 mt-8 leading-relaxed">
              Our optimized logistics routes and efficient customs clearance mean your goods arrive in Rwanda faster than ever.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#00FF84] p-10 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h4 className="text-4xl font-black text-brand-navy mb-2 tracking-tighter">+250%</h4>
              <p className="text-brand-navy/40 font-bold uppercase text-[10px] tracking-widest">Growth for Clients</p>
            </div>
            <p className="text-sm text-brand-navy/80 mt-8 leading-relaxed">
              Our sourcing and logistics solutions have helped our clients scale their businesses and increase profitability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
