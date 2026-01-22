import React from 'react';
import { TESTIMONIAL, TESTIMONIAL_AUTHOR } from '../constants';

const Testimonial: React.FC = () => {
    return (
        <section className="py-24 bg-stone-50 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2d3e33] to-transparent opacity-20"></div>
            <div className="max-w-3xl mx-auto px-4 text-center">
                <i className="fas fa-quote-left text-4xl text-emerald-800/20 mb-8"></i>
                <blockquote className="text-2xl md:text-3xl font-medium text-[#2d3e33] italic serif leading-snug mb-8">
                    "{TESTIMONIAL}"
                </blockquote>
                <p className="font-bold text-stone-900 uppercase tracking-widest text-sm">— {TESTIMONIAL_AUTHOR}</p>
            </div>
        </section>
    );
}

export default Testimonial;