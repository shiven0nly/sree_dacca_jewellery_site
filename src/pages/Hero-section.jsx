import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] via-[#FDF8F2] to-[#FAF5ED]">
      
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-radial from-[#D4AF37]/15 via-transparent to-transparent blur-[140px] opacity-70" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-gradient-radial from-[#832729]/12 via-transparent to-transparent blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image – FIRST on mobile for visual impact */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] lg:max-w-none h-[50vh] sm:h-[60vh] lg:h-[85vh] rounded-3xl lg:rounded-[6rem] overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl shadow-black/10">
              <img 
                src="https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?auto=format&fit=crop&q=80&w=800"
                alt="Elegant Indian model showcasing luxurious diamond and gold jewellery"
                className="w-full h-full object-cover object-top sm:object-center transition-transform duration-[1500ms] hover:scale-[1.03]"
              />
              
              {/* Floating badge – adjusted for mobile */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 bg-white/85 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-2xl border border-[#D4AF37]/40 max-w-[220px] sm:max-w-[240px]"
              >
                <p className="font-serif text-xl sm:text-2xl text-[#0F0F0F] mb-1">Royal Choker</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#666] mb-2 sm:mb-3">Heritage Collection</p>
                <span className="text-[#832729] font-serif text-xl sm:text-2xl font-bold">₹ 2,45,000</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content – SECOND on mobile */}
          <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mt-8 lg:mt-0">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block text-[#832729] uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 sm:mb-6 opacity-90"
            >
              Signature Collection
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#0F0F0F] leading-tight tracking-tight mb-6 sm:mb-8"
            >
              Timeless <br />
              <span className="italic text-[#D4AF37] relative">
                Opulence
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-[#555] text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed font-light"
            >
              Exquisite craftsmanship meets eternal elegance. Handcrafted pieces for the discerning soul.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5"
            >
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#832729] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full uppercase tracking-widest text-xs sm:text-sm font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-400 group cursor-pointer"
              >
                Shop Signature
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-[#D4AF37] text-[#0F0F0F] px-8 sm:px-10 py-4 sm:py-5 rounded-full uppercase tracking-widest text-xs sm:text-sm font-semibold hover:bg-[#D4AF37]/10 transition-all duration-400 cursor-pointer"
              >
                Discover Craft
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="mt-10 sm:mt-16 flex gap-10 sm:gap-16 justify-center lg:justify-start border-t border-[#D4AF37]/20 pt-8"
            >
              <div className="text-center lg:text-left">
                <span className="block font-serif text-3xl sm:text-4xl text-[#0F0F0F]">24K</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#666] mt-1">Hallmarked Gold</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-serif text-3xl sm:text-4xl text-[#0F0F0F]">BIS</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#666] mt-1">Certified</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;