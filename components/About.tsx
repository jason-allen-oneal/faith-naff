
import { ABOUT_DESCRIPTION_1, ABOUT_DESCRIPTION_2, ABOUT_DESCRIPTION_3, ABOUT_TITLE, ABOUT_QUOTE, ABOUT_BLURB_DESC_1, ABOUT_BLURB_TITLE_1, ABOUT_BLURB_TITLE_2, ABOUT_BLURB_DESC_2 } from '@/constants';
import React from 'react';
import faithImage from '../images/faith2.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#2d3e33] z-0"></div>
            <img 
              src={faithImage} 
              alt="Faith Naff, candidate for Caldwell County Commissioner" 
              className="relative z-10 w-full grayscale-[0.2] shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-stone-100 p-8 z-20 shadow-xl hidden md:block">
              <p className="serif italic text-2xl text-[#2d3e33]">&ldquo;{ABOUT_QUOTE}&rdquo;</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d3e33] serif">{ABOUT_TITLE}</h2>
            <div className="w-20 h-1 bg-[#2d3e33]"></div>
            
            <p className="text-lg text-stone-700 leading-relaxed">{ABOUT_DESCRIPTION_1}</p>
            
            <p className="text-lg text-stone-700 leading-relaxed">{ABOUT_DESCRIPTION_2}</p>
            
            <p className="text-lg text-stone-700 leading-relaxed font-semibold">{ABOUT_DESCRIPTION_3}</p>

            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-stone-100">
                <div>
                    <h4 className="font-bold text-[#2d3e33] uppercase text-xs tracking-widest mb-2">{ABOUT_BLURB_TITLE_1}</h4>
                    <p className="text-stone-600 text-sm">{ABOUT_BLURB_DESC_1}</p>
                </div>
                <div>
                    <h4 className="font-bold text-[#2d3e33] uppercase text-xs tracking-widest mb-2">{ABOUT_BLURB_TITLE_2}</h4>
                    <p className="text-stone-600 text-sm">{ABOUT_BLURB_DESC_2}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
