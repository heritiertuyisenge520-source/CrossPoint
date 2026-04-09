import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Info } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface ProductGalleryProps {
  category: string;
  onBack: () => void;
}

const mockProducts: Record<string, Product[]> = {
  "Electronics": [
    { id: "e1", name: "Premium Wireless Headphones", price: "$129.00", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600", description: "Noise-cancelling over-ear headphones with 40h battery life." },
    { id: "e2", name: "Smart Watch Series X", price: "$249.00", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600", description: "Advanced fitness tracking and seamless connectivity." },
    { id: "e3", name: "Ultra-Slim Laptop", price: "$899.00", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=600", description: "Powerful performance in a lightweight aluminum chassis." },
    { id: "e4", name: "4K Professional Monitor", price: "$450.00", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600", description: "Color-accurate display for creative professionals." },
  ],
  "Clothing & Footwear": [
    { id: "c1", name: "Classic Leather Boots", price: "$180.00", image: "https://images.unsplash.com/photo-1520639889313-7272175b1c39?auto=format&fit=crop&q=80&w=600", description: "Handcrafted durable leather boots for all seasons." },
    { id: "c2", name: "Minimalist Linen Shirt", price: "$65.00", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600", description: "Breathable organic linen for maximum comfort." },
    { id: "c3", name: "Performance Running Shoes", price: "$120.00", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600", description: "Engineered for speed and long-distance comfort." },
    { id: "c4", name: "Tailored Wool Coat", price: "$299.00", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600", description: "Elegant winter essential made from premium wool." },
  ],
  "Cosmetics": [
    { id: "co1", name: "Organic Face Serum", price: "$45.00", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600", description: "Hydrating serum with vitamin C and hyaluronic acid." },
    { id: "co2", name: "Matte Lipstick Set", price: "$35.00", image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=600", description: "Long-lasting vibrant colors with a smooth finish." },
    { id: "co3", name: "Luxury Perfume", price: "$110.00", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600", description: "Signature scent with floral and woody notes." },
  ],
  "Automotive Parts": [
    { id: "a1", name: "High-Performance Brake Pads", price: "$85.00", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600", description: "Ceramic pads for superior stopping power and low dust." },
    { id: "a2", name: "LED Headlight Kit", price: "$120.00", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600", description: "Ultra-bright LED conversion for better night visibility." },
  ],
  "Home Appliances": [
    { id: "h1", name: "Smart Espresso Machine", price: "$599.00", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=600", description: "Barista-quality coffee at the touch of a button." },
    { id: "h2", name: "Robotic Vacuum Cleaner", price: "$350.00", image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=600", description: "Autonomous cleaning with smart mapping technology." },
  ],
  "Industrial Equipment": [
    { id: "i1", name: "Precision Laser Cutter", price: "$2,500.00", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", description: "Industrial grade cutting for various materials." },
    { id: "i2", name: "Heavy Duty Air Compressor", price: "$850.00", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600", description: "Reliable power for pneumatic tools and machinery." },
  ]
};

export default function ProductGallery({ category, onBack }: ProductGalleryProps) {
  const products = mockProducts[category] || [];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-navy/60 hover:text-brand-orange transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Categories</span>
        </button>

        <div className="mb-16">
          <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
            Sourcing Catalog
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-brand-navy tracking-tighter mb-4">
            {category}
          </h2>
          <p className="text-brand-navy/50 text-lg max-w-2xl leading-relaxed">
            Explore our curated selection of high-quality products sourced directly from verified manufacturers in China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-brand-navy/5 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="w-12 h-12 rounded-full bg-white text-brand-navy flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-xl">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-brand-navy flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-xl">
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <span className="text-brand-orange font-black text-sm">{product.price}</span>
                </div>
                <p className="text-brand-navy/40 text-xs leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-24 bg-brand-navy/5 rounded-[3rem]">
            <p className="text-brand-navy/40 font-medium italic">No products found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
