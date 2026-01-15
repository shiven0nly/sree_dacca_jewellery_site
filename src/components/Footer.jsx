import React from 'react';
import { testimonials } from '../data/testimonials';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0F0F0F] text-white pt-20 pb-10 px-6 sm:px-12 mt-auto">
            <div className="max-w-7xl mx-auto">

                {/* Testimonials Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-[#D4AF37] text-xs font-medium tracking-[0.3em] uppercase">Testimonials</span>
                        <h3 className="font-serif text-3xl md:text-4xl mt-3">Words from our Patrons</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 relative">
                                <div className="text-[#D4AF37] text-4xl font-serif absolute top-4 left-6 opacity-30">"</div>
                                <p className="text-gray-300 italic mb-6 relative z-10 leading-relaxed">
                                    {t.text}
                                </p>
                                <div>
                                    <h4 className="font-serif text-lg text-white">{t.name}</h4>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">{t.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white/10 mb-16"></div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h2 className="font-serif text-2xl mb-6">SREE DACCA</h2>
                        <p className="text-gray-400 text-sm leading-7 mb-6">
                            Crafting eternal elegance since___. Our jewellery is a celebration of art, culture, and timeless beauty.
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <a href="#" className="hover:text-[#D4AF37] transition"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-[#D4AF37] transition"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-[#D4AF37] transition"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition">All Jewellery</a></li>
                            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-white transition">Bridal Collection</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-white transition">Care Guide</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-[#D4AF37] shrink-0" />
                                <span>123 Jewellery Lane, Kolkata , India</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                                <span>hello@sreedacca.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2024 Sree Dacca Jewellery. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
