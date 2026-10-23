import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Destinations', to: '/destinations' },
  { name: 'Track Shipment', to: '/track' },
  { name: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo-with-text.jpg"
              alt="CrossPoint Solutions Logo"
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="text-sm text-white/55 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all group"
                aria-label="Social link"
              >
                <Icon className="w-3.5 h-3.5 text-white/60 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-white/30 mt-6">
          © {new Date().getFullYear()} CrossPoint Solutions .LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
