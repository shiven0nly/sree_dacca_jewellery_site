import React, { useState, useEffect } from 'react';
import {
  Search,
  MapPin,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search for");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  // Search State
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/collection?search=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
      setSearchQuery(""); // Optional: clear after search
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Search Animation Data
  const searchTerms = [
    "Gold Necklace",
    "Diamond Rings",
    "Engagement Rings",
    "Bangles",
    "Pendants"
  ];

  // Search text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchTerms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key (good UX)
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/20 backdrop-blur-2xl transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'
          }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* LEFT: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger – now functional */}
            <button
              className="lg:hidden p-2 text-[#832729] focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            <Link to="/" className="flex-shrink-0">
              <img className="h-16 md:h-20" src="/logo.png" alt="Brand Logo" />
            </Link> 
            
          </div>

          {/* CENTER: Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative group">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full h-10 pl-4 pr-24 bg-[#F8F8F8] border border-[#e8e8e8] rounded-md focus:outline-none focus:border-[#832729] focus:bg-white transition-colors text-sm text-gray-700 placeholder-transparent"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {!searchQuery && (
                <div className="absolute left-4 top-0 h-10 flex items-center pointer-events-none overflow-hidden">
                  <span className="text-gray-400 text-sm whitespace-pre">
                    Search for{" "}
                    <span className="text-[#832729] font-medium transition-all duration-500 animate-slide-up inline-block">
                      {searchTerms[placeholderIndex]}
                    </span>
                  </span>
                </div>
              )}
              <div className="absolute right-0 top-0 h-10 flex items-center pr-2 gap-2">
                <button
                  onClick={handleSearch}
                  className="bg-[#832729] hover:bg-[#6a1f21] text-white p-1.5 rounded-md transition"
                >
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Icons */}
          <div className="flex items-center gap-5 md:gap-6">
            <button
              className="lg:hidden text-[#832729]"
              onClick={() => setIsMobileMenuOpen(true)} // Open menu to search or could add mobile search bar toggle
            >
              <Link to="/Login" className="flex items-center justify-between text-[#832729] hover:text-[#6a1f21] transition">
              </Link>
              <Search size={22} />
            </button>

            <Link to="/locate-us" className="hidden lg:flex flex-col items-center group text-[#832729]">
              <MapPin size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] uppercase font-semibold mt-1 tracking-wide opacity-0 group-hover:opacity-100 absolute translate-y-6 transition-opacity">Stores</span>
            </Link>
            <Link to="/Login" className="hidden lg:flex flex-col items-center group text-[#832729]">
              <User size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] uppercase font-semibold mt-1 tracking-wide opacity-0 group-hover:opacity-100 absolute translate-y-6 transition-opacity">Account</span>
            </Link>
            <Link to="/cart" className="flex flex-col items-center group text-[#832729] relative">
              <div className="relative">
                <ShoppingBag size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-2 bg-[#832729] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              </div>
              <span className="hidden lg:block text-[10px] uppercase font-semibold mt-1 tracking-wide opacity-0 group-hover:opacity-100 absolute translate-y-6 transition-opacity">Cart</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <img className="h-16" src="/logo.png" alt="Logo" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#832729]"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="space-y-6 text-lg">
              <Link href="/" className="flex items-center justify-between text-[#832729] hover:text-[#6a1f21] transition">
                Home <ChevronRight size={20} />
              </Link>
              <Link to="/locate-us" className="flex items-center justify-between text-[#832729] hover:text-[#6a1f21] transition">
                Stores (Location) <ChevronRight size={20} />
              </Link>
              <Link to="/cart" className="flex items-center justify-between text-[#832729] hover:text-[#6a1f21] transition">
                Cart <ChevronRight size={20} />
              </Link>
              <Link to="/Login" className="flex items-center text-[#832729] hover:text-[#6a1f21] transition justify-between">
                Account <ChevronRight size={20} />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;