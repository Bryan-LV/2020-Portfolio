import React from 'react';
import Hero from './components/layout/Hero';
import Nav from './components/layout/Nav';
import Info from './components/layout/Info';
import Work from './components/layout/Work';
import Footer from './components/layout/Footer';
import './styles/normalize.css';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Info/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
