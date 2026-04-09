import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-navy py-8 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="space-y-4 max-w-sm">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="CrossPoint Solutions Logo" 
                  className="w-full h-full object-contain rounded-lg border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white leading-none">
                  CrossPoint
                </span>
                <span className="text-[10px] font-black tracking-[0.3em] text-brand-orange">
                  SOLUTIONS .LTD
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed">
              Your premier partner for sourcing and logistics from China to Rwanda. Simple, safe, and affordable.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all group">
                  <Icon className="w-3.5 h-3.5 text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full lg:w-auto">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-brand-orange" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-0.5">Email</p>
                <a href="mailto:micodieudonne001@gmail.com" className="text-xs hover:text-brand-orange transition-colors">
                  micodieudonne001@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-brand-orange" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-0.5">Phone</p>
                <a href="tel:0793107029" className="text-xs hover:text-brand-orange transition-colors">
                  0793107029
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-brand-orange" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-0.5">Location</p>
                <p className="text-xs">Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
