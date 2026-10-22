import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleSectionClick } from '../utils/navigation';

const footerLinks = [
  { name: 'Home', id: null },
  { name: 'Services', id: 'services' },
  { name: 'Categories', id: 'categories' },
  { name: 'Process', id: 'process' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="bg-brand-navy pt-16 pb-8 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 max-w-sm">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative h-12 flex items-center justify-center">
                <img
                  src="/logo-with-text.jpg"
                  alt="CrossPoint Solutions Logo"
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
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

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-6">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={(e) => handleSectionClick(e, link.id, location.pathname, navigate)}
                    className="text-sm font-medium text-white/60 hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-orange" />
                </div>
                <a href="mailto:micomyiza.dieudonne@crosspointsolution.rw" className="text-sm text-white/60 hover:text-brand-orange transition-colors">
                  micomyiza.dieudonne@crosspointsolution.rw
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-brand-orange" />
                </div>
                <a href="https://wa.me/250793107029" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-brand-orange transition-colors">
                  0793107029
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                </div>
                <p className="text-sm text-white/60">Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} CrossPoint Solutions .LTD. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            China → Rwanda · Sourcing & Logistics
          </p>
        </div>
      </div>
    </footer>
  );
}
