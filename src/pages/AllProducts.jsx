import React, { useEffect } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AllProducts = () => {
    const { addToCart } = useCart();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-28 pb-20 min-h-screen bg-[#FCF9F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="text-[#8B2F2F] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                        Complete Collection
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0F0F0F]">
                        Our Entire Catalogue
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100 group"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Image */}
                                <div className="md:w-1/3 lg:w-1/4 h-64 md:h-auto relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {product.tag && (
                                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#8B2F2F] text-[10px] font-bold uppercase px-3 py-1 tracking-widest rounded-sm">
                                            {product.tag}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="md:w-2/3 lg:w-3/4 p-8 flex flex-col justify-center">
                                    <div className="mb-2">
                                        <span className="text-xs text-gray-400 uppercase tracking-widest">{product.category}</span>
                                    </div>

                                    <div className="flex justify-between items-start mb-4">
                                        <Link to={`/product/${product.id}`} className="group-hover:text-[#8B2F2F] transition-colors">
                                            <h2 className="font-serif text-2xl md:text-3xl text-[#0F0F0F]">{product.name}</h2>
                                        </Link>
                                        <span className="font-serif text-xl text-[#8B2F2F] font-medium whitespace-nowrap">{product.price}</span>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl line-clamp-2 md:line-clamp-3">
                                        {product.description || "An exquisite piece of jewellery designed to bring out your inner radiance. Crafted with precision and care."}
                                    </p>

                                    <div className="flex flex-wrap gap-4 mt-auto">
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-[#0F0F0F] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#8B2F2F] transition-colors flex items-center gap-2 rounded-sm"
                                        >
                                            <ShoppingBag size={16} />
                                            Add to Cart
                                        </button>

                                        <Link
                                            to={`/product/${product.id}`}
                                            className="px-8 py-3 border border-gray-200 text-[#0F0F0F] text-xs font-bold uppercase tracking-widest hover:border-[#8B2F2F] hover:text-[#8B2F2F] transition-colors flex items-center gap-2 rounded-sm"
                                        >
                                            View Details
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
