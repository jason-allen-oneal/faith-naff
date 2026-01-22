
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Issues from './components/Issues';
import AskFaith from './components/AskFaith';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        
        <CTA />

        <Issues />
        {/* <AskFaith /> */}
        
        {/* <Testimonial /> */}

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
