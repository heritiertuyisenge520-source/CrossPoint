import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Filter, Search, ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DEFAULT_TITLE = 'CrossPoint SOLUTIONS .LTD | China to Rwanda Logistics';

const categoryData: Record<string, any> = {
  "electronics": {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=2000",
    description: "Sourcing the latest in consumer electronics, industrial components, and smart technology directly from China's leading manufacturing hubs.",
    items: [
      { name: "Smart Home Hubs", price: "Factory Direct", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" },
      { name: "Wireless Audio Pro", price: "Bulk Pricing", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" },
      { name: "Industrial Sensors", price: "Custom Order", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
      { name: "OLED Display Panels", price: "Wholesale", img: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=800" },
      { name: "Power Management ICs", price: "Direct Sourcing", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800" },
      { name: "Smart Wearables", price: "OEM Available", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" },
    ]
  },
  "clothing-footwear": {
    title: "Clothing & Footwear",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000",
    description: "Premium apparel and footwear sourcing. We connect you with verified textile factories and shoe manufacturers in Guangzhou and Fujian.",
    items: [
      { name: "Performance Activewear", price: "Custom Fabric", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" },
      { name: "Sustainable Denim", price: "Eco-Certified", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800" },
      { name: "Luxury Leather Goods", price: "Handcrafted", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800" },
      { name: "Urban Streetwear", price: "Trend-Ready", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800" },
      { name: "Athletic Footwear", price: "Bulk Sourcing", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" },
      { name: "Formal Apparel", price: "Tailored Quality", img: "https://images.unsplash.com/photo-1594932224828-b4b059b6f684?auto=format&fit=crop&q=80&w=800" },
    ]
  },
  "cosmetics": {
    title: "Cosmetics",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000",
    description: "Safe and compliant beauty sourcing. We handle quality control and ingredient verification for all cosmetic imports.",
    items: [
      { name: "Organic Skincare Line", price: "Lab Tested", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800" },
      { name: "Professional Makeup Kits", price: "Artist Grade", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800" },
      { name: "Hair Care Solutions", price: "Salon Quality", img: "https://images.unsplash.com/photo-1527799822340-304cf303a0da?auto=format&fit=crop&q=80&w=800" },
      { name: "Fragrance Collection", price: "Premium Oils", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800" },
      { name: "Eco-Friendly Packaging", price: "Sustainable", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800" },
      { name: "Beauty Accessories", price: "Bulk Supply", img: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800" },
    ]
  },
  "automotive-parts": {
    title: "Automotive Parts",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000",
    description: "Reliable automotive supply chain. Sourcing everything from engine components to aftermarket accessories.",
    items: [
      { name: "Precision Engine Parts", price: "OEM Spec", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800" },
      { name: "Braking Systems", price: "Safety Certified", img: "https://images.unsplash.com/photo-1486006396193-471d6158ff17?auto=format&fit=crop&q=80&w=800" },
      { name: "LED Lighting Systems", price: "Energy Efficient", img: "https://images.unsplash.com/photo-1547038577-da80abbc4f19?auto=format&fit=crop&q=80&w=800" },
      { name: "Suspension Kits", price: "Heavy Duty", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" },
      { name: "Interior Accessories", price: "Custom Fit", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" },
      { name: "Tires & Rims", price: "All Terrain", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" },
    ]
  },
  "home-appliances": {
    title: "Home Appliances",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000",
    description: "Modernizing Rwandan homes with efficient, high-quality appliances sourced directly from top Chinese factories.",
    items: [
      { name: "Smart Refrigerators", price: "Energy Star", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { name: "Kitchen Tech Pro", price: "Multi-Function", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" },
      { name: "Air Purification", price: "HEPA Filter", img: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=800" },
      { name: "Laundry Solutions", price: "Silent Tech", img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800" },
      { name: "Smart Lighting Hubs", price: "Home Auto", img: "https://images.unsplash.com/photo-1550524514-9636edba3118?auto=format&fit=crop&q=80&w=800" },
      { name: "Small Appliances", price: "Daily Essentials", img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800" },
    ]
  },
  "industrial-equipment": {
    title: "Industrial Equipment",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    description: "Powering Rwandan industry with heavy-duty machinery, precision tools, and scalable manufacturing solutions.",
    items: [
      { name: "CNC Machining Centers", price: "High Precision", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
      { name: "Solar Power Systems", price: "Industrial Scale", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800" },
      { name: "Construction Machinery", price: "Heavy Duty", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" },
      { name: "Packaging Automation", price: "High Speed", img: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800" },
      { name: "Agricultural Equipment", price: "Modern Farming", img: "https://images.unsplash.com/photo-1530268577195-83027178be3d?auto=format&fit=crop&q=80&w=800" },
      { name: "Power Generators", price: "Backup Ready", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
    ]
  }
};

export default function CategoryPage() {
  const { id } = useParams();
  const category = categoryData[id || ""];

  useEffect(() => {
    document.title = category
      ? `${category.title} | CrossPoint SOLUTIONS .LTD`
      : 'Page Not Found | CrossPoint SOLUTIONS .LTD';
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [category]);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-navy text-white p-6">
        <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        <Link to="/" className="text-brand-blue hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Category Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
              {category.title}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 border-b border-brand-navy/5 pb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-navy/5 rounded-xl">
                <ShoppingBag className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-navy">Available for Sourcing</h2>
                <p className="text-brand-navy/40 text-xs font-medium">Direct Factory Connections</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-3 rounded-xl border border-brand-navy/10 hover:bg-brand-navy/5 transition-colors">
                <Filter className="w-5 h-5 text-brand-navy/60" />
              </button>
              <button className="p-3 rounded-xl border border-brand-navy/10 hover:bg-brand-navy/5 transition-colors">
                <Search className="w-5 h-5 text-brand-navy/60" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {category.items.map((item: any, index: number) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 bg-brand-navy/5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full bg-white text-brand-navy py-4 rounded-2xl font-bold text-sm shadow-lg hover:bg-brand-orange hover:text-white transition-colors">
                      Inquire Sourcing
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-brand-navy text-lg group-hover:text-brand-blue transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-brand-navy/40 text-sm font-bold uppercase tracking-widest">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
