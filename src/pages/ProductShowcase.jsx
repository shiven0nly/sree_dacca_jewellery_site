import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ShoppingBag, Heart, Eye, ArrowRight, Gem } from 'lucide-react';

// Mock Data
const products = [
  {
    id: 1,
    name: "Imperial Diamond Choker",
    category: "Necklaces",
    price: "₹ 1,45,000",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Kundan Polki Studs",
    category: "Earrings",
    price: "₹ 45,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    tag: "New Arrival"
  },
  {
    id: 3,
    name: "Rose Gold Eternity Ring",
    category: "Rings",
    price: "₹ 32,500",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    tag: null
  },
  {
    id: 4,
    name: "Temple Gold Bangle",
    category: "Bangles",
    price: "₹ 88,900",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    tag: "Trending"
  },
  {
    id: 5,
    name: "Sapphire Drop Pendant",
    category: "Necklaces",
    price: "₹ 55,000",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    tag: null
  },
  {
    id: 6,
    name: "Solitaire Engagement Ring",
    category: "Rings",
    price: "₹ 1,10,000",
    image: "https://images.unsplash.com/photo-1603561591411-cdb5b95f4c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    tag: "New Arrival"
  }
];

const categories = ["All", "Necklaces", "Earrings", "Rings", "Bangles"];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(item => item.category === activeCategory);

  return (
    <section className="bg-gradient-to-b from-[#FDF8F2] via-[#FCF9F5] to-white py-28 md:py-36 px-6 lg:px-12 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
        <span className="inline-block text-[#8B2F2F] text-[11px] md:text-xs font-medium tracking-[0.35em] uppercase mb-5 opacity-80">
          Curated Treasures
        </span>

        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#0F0F0F] tracking-tight leading-none mb-8">
          Eternal Elegance
        </h2>

        <div className="flex items-center justify-center gap-6 opacity-70 mb-10">
          <div className="w-16 md:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <Gem size={18} className="text-[#D4AF37] opacity-80" />
          <div className="w-16 md:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        <LayoutGroup>
          <div className="flex flex-wrap justify-center gap-x-10 md:gap-x-12 gap-y-6">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative pb-3 text-xs md:text-sm font-medium tracking-[0.25em] uppercase transition-colors duration-500 cursor-pointer ${
                  activeCategory === cat ? "text-[#8B2F2F]" : "text-[#8A8A8A] hover:text-[#333] cursor-pointer"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="elegant-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#8B2F2F] origin-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </LayoutGroup>

        
        <div className="mt-6 text-sm text-gray-500">
          Active category: <span className="font-bold text-[#8B2F2F]">{activeCategory}</span> | 
          Showing: <span className="font-bold">{filteredProducts.length}</span> products
        </div>
      </div>

      {/* Product Grid */}
      <motion.div 
        layout 
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-16 md:gap-y-20"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-24 md:mt-32">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-10 py-5 border-2 border-[#0F0F0F] text-[#0F0F0F] text-xs md:text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-500 hover:bg-[#0F0F0F] hover:text-white rounded-full overflow-hidden shadow-sm hover:shadow-md"
        >
          <span className="relative z-10 flex items-center gap-3 justify-center cursor-pointer">
            Explore Full Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="absolute inset-0 bg-[#0F0F0F] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 cursor-pointer" />
        </motion.button>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const [isActive, setIsActive] = useState(false);

  const isTouchDevice = typeof window !== 'undefined' && (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );

  const toggleActive = () => {
    if (isTouchDevice) {
      setIsActive(prev => !prev);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col items-center touch-manipulation"
    >
      <motion.div
        className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-white/40 to-transparent shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-700"
        whileHover={!isTouchDevice ? { scale: 1.02 } : {}}
        whileTap={{ scale: 0.98 }}
        onClick={toggleActive}
      >
        {product.tag && (
          <div className="absolute top-4 left-4 z-30">
            <span className="bg-white/90 backdrop-blur-lg text-[#8B2F2F] text-[10px] md:text-xs font-semibold uppercase px-4 py-1.5 tracking-widest border border-[#8B2F2F]/20 shadow-sm rounded-md">
              {product.tag}
            </span>
          </div>
        )}

        <AnimatePresence>
          {(!isTouchDevice || isActive) && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="absolute top-4 right-4 z-30 flex flex-col gap-4"
            >
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} className="w-12 h-12 flex items-center justify-center bg-white/95 backdrop-blur-xl text-[#222] hover:bg-[#8B2F2F] hover:text-white rounded-full shadow-xl transition-colors cursor-pointer">
                <Heart size={20} strokeWidth={1.6} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} className="w-12 h-12 flex items-center justify-center bg-white/95 backdrop-blur-xl text-[#222] hover:bg-[#8B2F2F] hover:text-white rounded-full shadow-xl transition-colors cursor-pointer">
                <Eye size={20} strokeWidth={1.6} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        <AnimatePresence>
          {(!isTouchDevice || isActive) && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 right-0"
            >
              <button className="w-full bg-white/90 backdrop-blur-2xl text-[#0F0F0F] h-14 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#8B2F2F] hover:text-white transition-colors shadow-[0_-6px_25px_rgba(0,0,0,0.12)] cursor-pointer">
                <ShoppingBag size={18} strokeWidth={1.5} />
                Add to Cart
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="text-center mt-8 px-4">
        <p className="text-xs text-[#777] uppercase tracking-[0.2em] font-light mb-3">
          {product.category}
        </p>
        <h3 className="font-serif text-xl md:text-2xl text-[#111] group-hover:text-[#8B2F2F] transition-colors duration-500 mb-3 leading-tight">
          {product.name}
        </h3>
        <p className="font-serif text-[#8B2F2F] text-xl md:text-2xl font-medium tracking-tight">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductShowcase;