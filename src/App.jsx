import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Herosection from './pages/Hero-section';
import ProductShowcase from './pages/ProductShowcase';
import Assurance from './pages/Assurance';

const App = () => {
  return (
    <div className="App">
       <Header />
       <main>
          <Herosection />
          <ProductShowcase />
          <Assurance />
       </main>
    </div>
  );
}

export default App;