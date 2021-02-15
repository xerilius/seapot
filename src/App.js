import React from 'react';
import FooterNav from './components/footer/FooterNav';
import Gallery from './components/gallery/Gallery';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import './App.css';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Gallery />
      <Menu />
      <FooterNav />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
