import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Product Sourcing & Procurement",
    description: "We find the best manufacturers in China, negotiate prices, and ensure you get exactly what you need.",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1521331015254-842b4682c2ee?auto=format&fit=crop&q=80&w=1200"
    ],
    features: ["Direct Factory Access", "Price Negotiation", "Sample Consolidation", "Supplier Verification"],
    tag: "Sourcing"
  },
  {
    title: "Quality Control & Inspection",
    description: "Our team on the ground in China inspects every item before it leaves the factory to guarantee quality.",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1200"
    ],
    features: ["Pre-shipment Inspection", "Factory Audits", "Lab Testing", "Container Loading Supervision"],
    tag: "Quality"
  },
  {
    title: "Global Logistics & Shipping",
    description: "Fast and reliable air and sea freight from major Chinese ports directly to our warehouse in Kigali.",
    images: [
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1473445717015-844ed0af8a69?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200"
    ],
    features: ["Air & Sea Freight", "LCL/FCL Options", "Real-time Tracking", "Kigali Door Delivery"],
    tag: "Logistics"
  },
  {
    title: "Customs Clearance & Documentation",
    description: "We handle all the complex paperwork and customs procedures in both China and Rwanda.",
    images: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1423592707957-3b212afa6733?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
    ],
    features: ["Duty Calculation", "Import Permits", "Tax Optimization", "Hassle-free Clearing"],
    tag: "Customs"
  }
];

function ServiceImageSlider({ images, title, tag }: { images: string[], title: string, tag: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="lg:w-1/2 h-80 lg:h-auto relative bg-brand-navy/5 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - image ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </AnimatePresence>
      
      {/* Overlay Tag */}
      <div className="absolute top-6 left-6 z-10 bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
        {tag}
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tighter">
            Comprehensive Import Solutions
          </h2>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-[2rem] overflow-hidden shadow-sm border border-brand-navy/5`}
            >
              <ServiceImageSlider 
                images={service.images} 
                title={service.title} 
                tag={service.tag} 
              />
              
              <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold text-brand-navy mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-brand-navy/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm font-semibold text-brand-navy/80">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-4 transition-all group">
                  Learn more about {service.tag}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
