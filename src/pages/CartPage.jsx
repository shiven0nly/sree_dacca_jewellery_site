import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#FCF9F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h1 className="font-serif text-4xl mb-12 text-center text-[#0F0F0F]">Your Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 mb-8 text-lg">Your cart is currently empty.</p>
                        <Link to="/" className="inline-block border-b-2 border-[#8B2F2F] text-[#8B2F2F] pb-1 uppercase tracking-widest font-semibold hover:text-[#0F0F0F] hover:border-[#0F0F0F] transition-colors">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Cart Items */}
                        <div className="flex-1">
                            <div className="space-y-8">
                                <AnimatePresence>
                                    {cart.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 items-center"
                                        >
                                            <div className="w-full sm:w-32 aspect-square rounded-lg overflow-hidden shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>

                                            <div className="flex-1 text-center sm:text-left">
                                                <h3 className="font-serif text-xl text-[#0F0F0F] mb-1">{item.name}</h3>
                                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{item.category}</p>
                                                <p className="text-[#8B2F2F] font-medium text-lg">{item.price}</p>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div className="flex items-center border border-gray-200 rounded-full h-10 px-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-[#8B2F2F]"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-[#8B2F2F]"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-600 transition-colors p-2"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Application Summary */}
                        <div className="lg:w-96 shrink-0">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F0F0F0] sticky top-32">
                                <h3 className="font-serif text-2xl mb-8">Details</h3>

                                <div className="space-y-4 mb-8 text-sm text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-[#0F0F0F]">₹ {getCartTotal().toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Come to Store</span>
                                        <span className="text-green-600 font-medium">For Free Rewards</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6 mb-8">
                                    <div className="flex justify-between text-lg font-serif">
                                        <span>Total</span>
                                        <span className="text-[#8B2F2F]">₹ {getCartTotal().toLocaleString('en-IN')}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-[#0F0F0F] text-white h-14 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#8B2F2F] transition-colors shadow-xl rounded-sm">
                                    Have a Good Day
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
