import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import heroImage from '../images/hero.jpg';
import venmo from '../images/venmo.jpg';

const DonationPage: React.FC = () => (
  <div className="min-h-screen bg-white">
    <Navigation />

    <header className="relative pt-32 pb-16 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.55) contrast(1.05)'
        }}
      ></div>
      <div className="absolute inset-0 bg-[#2d3e33]/70 z-0"></div>

      <div className="relative z-10 text-center px-4">
        <p className="text-stone-200 uppercase tracking-[0.3em] text-sm font-light mb-3">Faith Naff for Caldwell County</p>
        <h1 className="text-4xl md:text-5xl text-white font-bold serif tracking-tight">
          Donate
        </h1>
      </div>
    </header>

    <main className="mx-auto max-w-6xl px-6 pb-20 space-y-10">
      <section className="bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">Support the campaign</p>
            <h2 className="text-3xl md:text-4xl font-bold serif text-[#2d3e33] mb-4">Fuel a Caldwell County future</h2>
            <p className="text-base-content/80 leading-relaxed max-w-2xl">
              Your contribution helps Faith share the message across the county, organize volunteers, and connect with voters.
              Every gift makes a difference.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl px-6 py-4 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Fastest way to give</p>
            <p className="text-2xl font-semibold text-[#2d3e33] mt-2">@FaithNaffCampaign</p>
            <p className="text-sm text-stone-500 mt-1">Venmo handle</p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h3 className="text-2xl font-semibold text-secondary">Donate by Venmo</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="flex-shrink-0">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl shadow-sm">
                <img
                  src={venmo}
                  alt="Venmo QR code for @FaithNaffCampaign"
                  className="w-64 h-64 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 text-base-content/80">
              <p className="leading-relaxed">
                Open Venmo and scan the QR code to donate instantly. You can also search for the handle below.
              </p>
              <div className="bg-[#2d3e33] text-white rounded-xl px-2 py-4 inline-block">
                <p className="text-xs uppercase tracking-[0.25em] text-stone-200">Venmo</p>
                <p className="text-2xl font-semibold mt-1">@FaithNaffCampaign</p>
              </div>
              <p className="text-sm text-stone-500">Please include your occupation and employer in the note.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-secondary mb-6">Donate by Check</h3>
          <div className="space-y-6 text-base-content/80">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-2">Make payable to</p>
              <p className="text-lg font-semibold text-[#2d3e33]">Committee to Elect Faith Naff</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-2">Send to</p>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                <p>Attention: Committee to Elect Faith Naff</p>
                <p>P.O. Box 104</p>
                <p>Patterson, NC 28661</p>
              </div>
            </div>
            <p className="text-sm text-stone-500">
              If you need a receipt or have questions, please reach out before mailing your check.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2d3e33] text-white rounded-2xl p-8 md:p-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-200 mb-3">Campaign finance law</p>
            <h3 className="text-2xl md:text-3xl font-semibold serif mb-4">Required donor information</h3>
            <p className="text-stone-200 max-w-2xl">
              In accordance with Campaign Finance Law, please ensure all donations include the following details.
            </p>
          </div>
          <ul className="grid gap-3 text-stone-100 text-base">
            <li>Donor&rsquo;s full name (only one name per donation, no joint donations).</li>
            <li>Donor&rsquo;s address.</li>
            <li>Job title.</li>
            <li>Employer.</li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default DonationPage;
