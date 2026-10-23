import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1200',
    count: '1,200+ Products',
  },
  {
    id: 'clothing-footwear',
    title: 'Clothing & Footwear',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200',
    count: '3,500+ Products',
  },
  {
    id: 'cosmetics',
    title: 'Cosmetics',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200',
    count: '800+ Products',
  },
  {
    id: 'automotive-parts',
    title: 'Automotive Parts',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
    count: '2,100+ Products',
  },
  {
    id: 'home-appliances',
    title: 'Home Appliances',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    count: '1,500+ Products',
  },
  {
    id: 'industrial-equipment',
    title: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    count: '450+ Products',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="relative bg-brand-navy py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-6">
          <div className="relative rounded-3xl overflow-hidden min-h-[420px] group">
            <img
              src="/destinations-port.jpg"
              alt="Stacked shipping containers at port"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-brand-navy/20" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 mb-3">
                Our Destinations
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                Sourcing Without
                <br />
                Borders
              </h2>
              <p className="text-white/65 text-sm leading-relaxed max-w-sm mb-6">
                We ship to Rwanda across all major product categories, connecting your
                business to verified factories in China.
              </p>
              <Link
                to="/destinations"
                className="text-white hover:text-brand-blue text-sm font-semibold inline-flex items-center gap-2 cursor-pointer transition-colors self-start"
              >
                View All Categories
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Link to={`/category/${category.id}`} className="block h-full">
                  <div className="relative overflow-hidden rounded-2xl h-full min-h-[200px] lg:min-h-[250px] group">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-white/55 text-[11px] mt-1">{category.count}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
