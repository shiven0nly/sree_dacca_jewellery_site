import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const storedCart = localStorage.getItem('jewelleryCart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error("Failed to load cart", error);
            return [];
        }
    });
    const { currentUser } = useAuth();
    const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        localStorage.setItem('jewelleryCart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        if (!currentUser) {
            showNotification("Please Login to add items in cart", "error");
            return;
        }
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
            return [...prevCart, { ...product, quantity: 1 }];
        });
        showNotification(`Added ${product.name} to cart`, "success");
    };

    const showNotification = (message, type = 'success') => {
        setNotification({ show: true, message, type });
    };

    const closeNotification = () => {
        setNotification({ ...notification, show: false });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
        }))
    }

    const clearCart = () => {
        setCart([]);
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Helper to parse price string "₹ 1,45,000" -> 145000
    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^\d]/g, ''));
            return total + (price * item.quantity);
        }, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, getCartTotal, notification, closeNotification }}>
            {children}
        </CartContext.Provider>
    );
};
