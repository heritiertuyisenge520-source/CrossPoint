import { ShieldCheck, Zap, Headphones } from 'lucide-react';

export default function BentoStats() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 inline-block">
            Key Benefits
          </span>
          <h2 className="text-4xl font-extrabold text-brand-navy tracking-tighter">
            Benefits of working with <br /> CrossPoint Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
            <Headphones className="w-10 h-10 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-brand-navy group-hover:text-white mb-2">24/7 Support</h3>
            <p className="text-sm text-brand-navy/40 group-hover:text-white/40">Always here to help you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
