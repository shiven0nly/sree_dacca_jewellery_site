import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ShoppingBag, Heart, Eye, ArrowRight, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ["All", "Necklaces", "Earrings", "Rings", "Bangles"];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(item => item.category === activeCategory);

  return (
    <section id="product-showcase" className="bg-gradient-to-b from-[#FDF8F2] via-[#FCF9F5] to-white py-28 md:py-36 px-6 lg:px-12 overflow-hidden">
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
                className={`relative pb-3 text-xs md:text-sm font-medium tracking-[0.25em] uppercase transition-colors duration-500 cursor-pointer ${activeCategory === cat ? "text-[#8B2F2F]" : "text-[#8A8A8A] hover:text-[#333] cursor-pointer"
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
        <Link to="/collection">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 border-2 border-[#0F0F0F] text-[#0F0F0F] text-xs md:text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-500 hover:bg-[#0F0F0F] hover:text-white rounded-full overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3 justify-center">
              Explore Full Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-[#0F0F0F] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col items-center"
    >
      <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[#8B2F2F]/20 to-[#8B2F2F]/5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-700 hover:shadow-2xl">
        <Link to={`/product/${product.id}`}>
          {product.tag && (
            <div className="absolute top-4 left-4 z-30">
              <span className="bg-white/90 backdrop-blur-lg text-[#8B2F2F] text-[10px] md:text-xs font-semibold uppercase px-4 py-1.5 tracking-widest border border-[#8B2F2F]/20 shadow-sm rounded-md">
                {product.tag}
              </span>
            </div>
          )}

          <div className="absolute top-4 right-4 z-30 flex flex-col gap-4">
            {/* Mobile: Always visible icons. Desktop: Hover only */}
            <div className="flex flex-col gap-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <button className="hidden md:flex w-12 h-12 items-center justify-center bg-white/95 backdrop-blur-xl text-[#222] hover:bg-[#8B2F2F] hover:text-white rounded-full shadow-xl transition-colors cursor-pointer">
                <Eye size={20} strokeWidth={1.6} />
              </button>
            </div>
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Combine Mobile (Always Visible) & Desktop (Hover) logic */}
        {/* On Mobile (block), it sits at bottom. On Desktop (hidden md:block), it slides up. */}

        <div className="hidden md:block absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white/90 backdrop-blur-2xl text-[#0F0F0F] h-14 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#8B2F2F] hover:text-white transition-colors shadow-[0_-6px_25px_rgba(0,0,0,0.12)] cursor-pointer"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Mobile Only: Permanent Add to Cart Button */}
        <div className="md:hidden absolute bottom-4 left-4 right-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white/95 backdrop-blur-md text-[#0F0F0F] py-3 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider shadow-lg border border-gray-100"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-center mt-8 px-4">
        <p className="text-xs text-[#777] uppercase tracking-[0.2em] font-light mb-3">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xl md:text-2xl text-[#111] group-hover:text-[#8B2F2F] transition-colors duration-500 mb-3 leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="font-serif text-[#8B2F2F] text-xl md:text-2xl font-medium tracking-tight">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductShowcase;
