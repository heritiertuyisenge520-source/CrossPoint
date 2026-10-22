import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleSectionClick } from '../utils/navigation';

const navLinks = [
  { name: 'Home', id: null },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Destinations', id: 'categories' },
  { name: 'Track Shipment', id: 'process' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-brand-navy/95 backdrop-blur-xl py-3 shadow-xl shadow-black/20 border-b border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo-with-text.jpg"
            alt="CrossPoint Solutions Logo"
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={(e) => handleSectionClick(e, link.id, location.pathname, navigate)}
              className="text-[13px] font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => handleSectionClick(e, 'contact', location.pathname, navigate)}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-orange/20"
          >
            Start Sourcing
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="absolute top-full left-0 right-0 bg-brand-navy/98 border-t border-white/10 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={(e) => {
                    handleSectionClick(e, link.id, location.pathname, navigate);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg font-medium text-white/70 hover:text-brand-orange text-left cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <button
                type="button"
                onClick={(e) => {
                  handleSectionClick(e, 'contact', location.pathname, navigate);
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 bg-brand-orange text-white font-semibold px-5 py-3 rounded-full cursor-pointer"
              >
                Start Sourcing
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
