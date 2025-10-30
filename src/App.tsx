// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
// import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Process />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;