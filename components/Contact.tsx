
import { CONTACT_DESCRIPTION, CONTACT_EMAIL, CONTACT_EMAIL_TITLE, CONTACT_FORM_BUTTON_TEXT, CONTACT_FORM_TITLE, CONTACT_HEADQUARTERS_ADDRESS, CONTACT_HEADQUARTERS_TITLE, CONTACT_TITLE } from '@/constants';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-[#2d3e33] serif mb-6">{CONTACT_TITLE}</h2>
            <p className="text-stone-600 text-lg mb-8">{CONTACT_DESCRIPTION}</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-emerald-800 mt-1"><i className="fas fa-envelope text-xl"></i></div>
                <div>
                  <h4 className="font-bold text-[#2d3e33]">{CONTACT_EMAIL_TITLE}</h4>
                  <p className="text-stone-600">{CONTACT_EMAIL}</p>
                </div>
              </div>
              {/*
              <div className="flex items-start gap-4">
                <div className="text-emerald-800 mt-1"><i className="fas fa-phone text-xl"></i></div>
                <div>
                  <h4 className="font-bold text-[#2d3e33]">{CONTACT_PHONE_TITLE}</h4>
                  <p className="text-stone-600">{CONTACT_PHONE}</p>
                </div>
              </div>
              */}
              <div className="flex items-start gap-4">
                <div className="text-emerald-800 mt-1"><i className="fas fa-location-dot text-xl"></i></div>
                <div>
                  <h4 className="font-bold text-[#2d3e33]">{CONTACT_HEADQUARTERS_TITLE}</h4>
                  <p className="text-stone-600">{CONTACT_HEADQUARTERS_ADDRESS}</p>
                </div>
              </div>
            </div>

            {/*
            <div className="mt-12 flex gap-4">
              {['facebook', 'twitter', 'instagram'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 bg-[#2d3e33] text-white flex items-center justify-center rounded-sm hover:bg-stone-800 transition-colors">
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
            */}
          </div>
          
          <div className="bg-sage p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#2d3e33] serif mb-8">{CONTACT_FORM_TITLE}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#2d3e33] mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-stone-200 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#2d3e33]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#2d3e33] mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border border-stone-200 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#2d3e33]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#2d3e33] mb-2">Email Address</label>
                <input type="email" className="w-full bg-white border border-stone-200 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#2d3e33]" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#2d3e33] mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white border border-stone-200 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#2d3e33]"></textarea>
              </div>
              <button className="w-full bg-[#2d3e33] text-white py-4 font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all">
                {CONTACT_FORM_BUTTON_TEXT}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
