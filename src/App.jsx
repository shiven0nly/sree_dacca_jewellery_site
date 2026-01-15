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

const HomePage = () => (
  <>
    <HeroSection />
    <ProductShowcase />
    <Assurance />
  </>
);

const App = () => {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/collection" element={<AllProducts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;