import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Heart, 
  User, 
  ShoppingBag, 
  Menu, 
  Camera, 
  Mic 
} from 'lucide-react';

const Header = () => {
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search for");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Search Animation Data
  const searchTerms = [
    "Gold Necklace",
    "Diamond Rings",
    "Engagement Rings",
    "Bangles",
    "Pendants"
  ];

  // --- 1. Search Text Animation Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchTerms.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // --- 2. Scroll Shadow Logic ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white/20 backdrop-blur-2xl transition-all duration-300 justify-center items-center ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* === LEFT: Mobile Menu & Logo === */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <button className="lg:hidden p-2 text-[#832729]">
            <Menu size={24} />
          </button>

          {/* BRAND LOGO (Extracted from your HTML) */}
          <a href="/" className="flex-shrink-2">
          <img className='h-20' src='/logo.png' />
          </a>
        </div>

        {/* === CENTER: Search Bar (Desktop) === */}
        <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative group">
          <div className="relative w-full">
            <input 
              type="text" 
              className="w-full h-10 pl-4 pr-24 bg-[#F8F8F8] border border-[#e8e8e8] rounded-md focus:outline-none focus:border-[#832729] focus:bg-white transition-colors text-sm text-gray-700 placeholder-transparent"
              placeholder="Search"
            />
            
            {/* Animated Placeholder Text */}
            <div className="absolute left-4 top-0 h-10 flex items-center pointer-events-none overflow-hidden">
               <span className="text-gray-400 text-sm whitespace-pre">
                 Search for{" "}
                 <span className="text-[#832729] font-medium transition-all duration-500 animate-slide-up inline-block">
                    {searchTerms[placeholderIndex]}
                 </span>
               </span>
            </div>

            {/* Right Side Icons (Camera, Voice, Search) */}
            <div className="absolute right-0 top-0 h-10 flex items-center pr-2 gap-2">
              <button className="bg-[#832729] hover:bg-[#6a1f21] text-white p-1.5 rounded-md transition">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* === RIGHT: Icons & Menu === */}
        <div className="flex items-center gap-6">
          
          {/* Mobile Search Icon */}
          <button className="lg:hidden text-[#832729]">
             <Search size={22} />
          </button>

          {/* Diamond Icon (Education) */}
          <a href="#" className="hidden lg:block group">
             <div className="flex flex-col items-center">
                <img  
                src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4f3843a4/diamond-icon.svg"
                  alt="Diamond" 
                  className="h-6 w-auto opacity-80 group-hover:opacity-100 transition" 
                />
             </div>
          </a>

          {/* Stores */}
          <a href="#" className="hidden lg:flex flex-col items-center group text-[#832729]">
            <MapPin size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] uppercase font-semibold mt-1 tracking-wide opacity-0 group-hover:opacity-100 absolute translate-y-6 transition-opacity">Stores</span>
          </a>

          {/* Wishlist */}
          <a href="#" className="hidden lg:flex flex-col items-center group text-[#832729]">
            <Heart size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] uppercase font-semibold mt-1 tracking-wide opacity-0 group-hover:opacity-100 absolute translate-y-6 transition-opacity">Wishlist</span>
          </a>

          {/* Account */}
          <a href="#" className="hidden lg:flex flex-col items-center group text-[#832729]">
            <User size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] uppercase font-semibold mt-1 tracking-wide opacity-0 group-hover:opacity-100 absolute translate-y-6 transition-opacity">Account</span>
          </a>

          {/* Cart */}
          <a href="#" className="flex flex-col items-center group text-[#832729] relative">
            <div className="relative">
              <ShoppingBag size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-2 bg-[#832729] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                0
              </span>
            </div>
            <span className="hidden lg:block text-[10px] uppercase font-semibold mt-1 tracking-wide opacity-0 group-hover:opacity-100 absolute translate-y-6 transition-opacity">Cart</span>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;