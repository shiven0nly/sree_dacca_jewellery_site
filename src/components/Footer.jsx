import React from 'react';
import { testimonials } from '../data/testimonials';
import TestimonialSection from './TestimonialSection';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0F0F0F] text-white pt-20 pb-10 px-6 sm:px-12 mt-auto">
            <div className="max-w-7xl mx-auto">

                {/* Testimonials Section */}
                <TestimonialSection />

                <div className="w-full h-[1px] bg-white/10 mb-16"></div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h2 className="font-serif text-2xl mb-6">SREE DACCA</h2>
                        <p className="text-gray-400 text-sm leading-7 mb-6">
                            Crafting eternal elegance. Our jewellery is a celebration of art, culture, and timeless beauty.
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <a href="https://www.facebook.com/sreedaccajewellers/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/sreedaccajewellers/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="/collections" className="hover:text-white transition">All Jewellery</a></li>
                            <li><a href="/collections" className="hover:text-white transition">New Arrivals</a></li>
                            <li><a href="/collections" className="hover:text-white transition">Best Sellers</a></li>
                            <li><a href="/collections" className="hover:text-white transition">Bridal Collection</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="/stores" className="hover:text-white transition">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-1" />
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-white text-xs font-semibold">Raiganj (Opp. Cinema Hall)</p>
                                        <p className="text-xs">Opposite Gitanjali Cinema Hall</p>
                                        <p className="text-xs text-[#999]">Mob: 9531581380</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-semibold">Raiganj (Bidhan Nagar)</p>
                                        <p className="text-xs">Near Bidhan Nagar More</p>
                                        <p className="text-xs text-[#999]">Mob: 9434143004</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-semibold">Itahar</p>
                                        <p className="text-xs">Opposite Electricity Office, Patiraj Road</p>
                                        <p className="text-xs text-[#999]">Mob: 9593190437</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-semibold">Gangarampur</p>
                                        <p className="text-xs">BaraBazar (Near Bandhan Bank)</p>
                                        <p className="text-xs text-[#999]">Mob: 8001068586</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex gap-3 mt-2">
                                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                                <span>hello@sreedacca.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2026 Sree Dacca Jewellery. All rights reserved.</p>
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
