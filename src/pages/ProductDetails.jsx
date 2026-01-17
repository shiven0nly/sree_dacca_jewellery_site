import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Heart, ArrowLeft, Star, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="h-screen flex items-center justify-center">Product not found</div>;
    }

    return (
        <div className="pt-24 pb-20 min-h-screen bg-[#FCF9F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-[#8B2F2F] transition-colors"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to collection
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                            />
                        </div>
                        {product.tag && (
                            <div className="absolute top-8 left-8">
                                <span className="bg-[#8B2F2F] text-white text-xs font-bold uppercase px-6 py-2 tracking-widest shadow-lg">
                                    {product.tag}
                                </span>
                            </div>
                        )}
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-[#8B2F2F] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                            {product.category}
                        </span>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0F0F0F] mb-6 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <p className="font-serif text-3xl md:text-4xl text-[#8B2F2F] font-medium">
                                {product.price}
                            </p>
                            <div className="w-[1px] h-8 bg-gray-300"></div>
                            <div className="flex text-[#D4AF37]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-sm text-gray-500">(24 Reviews)</span>
                        </div>

                        <p className="text-gray-600 leading-8 mb-10 text-lg font-light">
                            {product.description || "Experience the epitome of luxury with this handcrafted piece. Meticulously designed for the modern connoisseur, it blends tradition with contemporary elegance."}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 mb-12">
                            <button
                                onClick={() => addToCart(product)}
                                className="flex-1 bg-[#0F0F0F] text-white h-14 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#8B2F2F] transition-colors shadow-xl"
                            >
                                <ShoppingBag size={18} />
                                Add to Cart
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-3">
                                <Truck size={24} className="text-[#8B2F2F]" strokeWidth={1.5} />
                                <span className="text-xs uppercase font-medium tracking-wider">Free Rewards</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck size={24} className="text-[#8B2F2F]" strokeWidth={1.5} />
                                <span className="text-xs uppercase font-medium tracking-wider">Lifetime Warranty</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <RefreshCw size={24} className="text-[#8B2F2F]" strokeWidth={1.5} />
                                <span className="text-xs uppercase font-medium tracking-wider">Easy Returns</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
