import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
