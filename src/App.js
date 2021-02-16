import React from 'react';
import About from './components/about/About';
import FooterNav from './components/footer/FooterNav';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import Locations from './components/locations/Locations';
import './App.css';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Gallery />
      <About />
      <Menu />
      <Locations />
      <FooterNav />
      <Footer />
    </div>
  );
}

export default App;
