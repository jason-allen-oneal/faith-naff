import React from 'react';
import { CTA_DONATE_TEXT, CTA_TEXT } from '@/constants';

const CTA: React.FC = () => {
  return (
    <div id="donate" className="bg-[#2d3e33] py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="text-2xl md:text-4xl text-white serif italic">{CTA_TEXT}</h3>
            <div className="flex gap-4">
                {/*
                <a href="#volunteer" className="bg-stone-100 text-[#2d3e33] px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all">
                    Volunteer
                </a>
                */}
                <a href="/donate" className="border-2 border-stone-100 text-white px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-stone-100 hover:text-[#2d3e33] transition-all">
                    {CTA_DONATE_TEXT}
                </a>
            </div>
        </div>
    </div>
  );
}

export default CTA;
