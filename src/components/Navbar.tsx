import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleSectionClick } from '../utils/navigation';

const navLinks = [
  { name: 'Home', id: null },
  { name: 'Services', id: 'services' },
  { name: 'Categories', id: 'categories' },
  { name: 'Process', id: 'process' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? 'bg-brand-navy/90 backdrop-blur-lg py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-orange/20 rounded-xl blur-lg animate-pulse" />
            <img 
              src="/logo.jpg" 
              alt="CrossPoint Solutions Logo" 
              className="relative w-full h-full object-contain rounded-lg border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white leading-none">
              CrossPoint
            </span>
            <span className="text-[11px] font-black tracking-[0.3em] text-brand-orange">
              SOLUTIONS .LTD
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={(e) => handleSectionClick(e, link.id, location.pathname, navigate)}
              className="text-sm font-medium text-white/70 hover:text-brand-orange transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-navy border-t border-white/10 p-6 md:hidden"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
