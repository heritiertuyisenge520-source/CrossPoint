import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Categories from '../components/Categories';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const sectionToPath: Record<string, string> = {
  home: '/',
  services: '/services',
  categories: '/destinations',
  contact: '/contact',
};

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = Object.keys(sectionToPath)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const path = sectionToPath[entry.target.id];
            if (path && window.location.pathname !== path) {
              history.replaceState(null, '', path);
              window.dispatchEvent(new Event('cps-url-change'));
            }
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <Contact />
      <Footer />
    </main>
  );
}
