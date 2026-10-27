import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Destinations', to: '/destinations' },
  { name: 'Track Shipment', to: '/track' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const sync = () => setActivePath(window.location.pathname);
    window.addEventListener('cps-url-change', sync);
    return () => window.removeEventListener('cps-url-change', sync);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const handleHomeClick = (e: MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      history.replaceState(null, '', '/');
      setActivePath('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-brand-navy/95 backdrop-blur-xl py-3 shadow-xl shadow-black/20 border-b border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-6">
        <div className="hidden lg:flex items-center gap-7 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={link.to === '/' ? handleHomeClick : undefined}
              className={`text-[13px] font-medium transition-colors ${
                activePath === link.to
                  ? 'text-brand-orange'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden text-white cursor-pointer ml-auto"
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
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={(e) => {
                    if (link.to === '/') handleHomeClick(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg font-medium transition-colors ${
                    activePath === link.to
                      ? 'text-brand-orange'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
