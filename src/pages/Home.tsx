import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Categories from '../components/Categories';
import Process from '../components/Process';
import BentoStats from '../components/BentoStats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Categories />
      <BentoStats />
      <Contact />
      <Footer />
    </main>
  );
}
