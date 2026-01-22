
import React from 'react';
import { OFFICE } from '../constants';
import heroImage from '../images/hero.jpg';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Using the visual style of the provided banner */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.6) contrast(1.1)'
        }}
      ></div>
      
      {/* Drab Green Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-[#2d3e33] opacity-30 z-0"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block border-y border-stone-200 py-2 px-8">
            <p className="text-stone-100 uppercase tracking-[0.3em] text-sm md:text-base font-light">Faith Naff for</p>
        </div>
        
        <div className="bg-stone-100/90 text-[#2d3e33] py-3 px-8 inline-block shadow-2xl mb-12">
           <p className="text-xl md:text-3xl font-semibold serif tracking-tight">
            {OFFICE}
           </p>
        </div>

        <h1 className="text-5xl md:text-8xl text-white font-bold italic mb-6 serif leading-tight">
          grow together
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="bg-[#2d3e33] text-white px-10 py-6 font-bold hover:bg-stone-800 transition-all shadow-xl uppercase tracking-widest text-sm">
                Learn Her Story
            </a>
            {/*
            <a href="#volunteer" className="bg-stone-100 text-[#2d3e33] px-10 py-4 font-bold hover:bg-white transition-all shadow-xl uppercase tracking-widest text-sm border-2 border-transparent">
                Join the Team
            </a>
            */}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 text-2xl hidden md:block">
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Hero;
