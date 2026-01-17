import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './pages/Hero-section';
import ProductShowcase from './pages/ProductShowcase';
import Assurance from './pages/Assurance';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import AllProducts from './pages/AllProducts';
import Footer from './components/Footer';
import StoreLocator from './pages/StoreLocator';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Toast from './components/Toast';
import { useCart } from './context/CartContext';

const HomePage = () => (
  <>
    <HeroSection />
    <ProductShowcase />
    <Assurance />
  </>
);

const App = () => {
  const { notification, closeNotification } = useCart();

  return (
    <div className="App flex flex-col min-h-screen">
      <Toast
        message={notification.message}
        isVisible={notification.show}
        type={notification.type}
        onClose={closeNotification}
      />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/collection" element={<AllProducts />} />
          <Route path="/locate-us" element={<StoreLocator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;