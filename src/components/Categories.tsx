import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: "electronics",
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1200",
    description: "Latest gadgets, components, and consumer electronics from top manufacturers.",
    count: "1,200+ Products"
  },
  {
    id: "clothing-footwear",
    title: "Clothing & Footwear",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200",
    description: "High-quality fashion, apparel, and footwear for all markets.",
    count: "3,500+ Products"
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200",
    description: "Premium beauty products, skincare, and personal care items.",
    count: "800+ Products"
  },
  {
    id: "automotive-parts",
    title: "Automotive Parts",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200",
    description: "Genuine spare parts and accessories for various vehicle models.",
    count: "2,100+ Products"
  },
  {
    id: "home-appliances",
    title: "Home Appliances",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    description: "Modern kitchenware, cleaning equipment, and smart home devices.",
    count: "1,500+ Products"
  },
  {
    id: "industrial-equipment",
    title: "Industrial Equipment",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    description: "Heavy machinery, tools, and industrial solutions for businesses.",
    count: "450+ Products"
  }
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
              Market Sectors
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tighter">
              Specialized Sourcing <br />
              <span className="text-brand-navy/30">Across All Major Categories</span>
            </h2>
          </div>
          <p className="text-brand-navy/50 text-sm max-w-xs leading-relaxed">
            We have established direct factory relationships across these key sectors to ensure the best pricing and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/category/${category.id}`} className="block">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6 bg-brand-navy/5">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center justify-between items-end">
                      <div>
                        <p className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-2">
                          {category.count}
                        </p>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center -mb-1 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <p className="text-brand-navy/60 text-sm leading-relaxed px-4">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
