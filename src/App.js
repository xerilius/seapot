import React from 'react';
import FooterNav from './components/FooterNav';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar /> 
      <Gallery />
      <FooterNav />
    </div>
  );
}

export default App;
