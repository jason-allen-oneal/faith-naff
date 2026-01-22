import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CAMPAIGN_NAME, OFFICE, FOOTER_PAID_FOR_BY } from '../constants';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDonateClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: '#donate' });
      return;
    }
    const target = document.querySelector('#donate');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '#donate');
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl text-white font-bold serif tracking-tight mb-2 uppercase">{CAMPAIGN_NAME}</h2>
            <p className="text-sm font-light uppercase tracking-[0.3em]">{OFFICE}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a
              href="/#donate"
              onClick={handleDonateClick}
              className="hover:text-white transition-colors text-emerald-500"
            >
              Donate
            </a>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="border border-stone-700 p-2 text-[10px] uppercase tracking-widest text-center px-4 inline-block">
            {FOOTER_PAID_FOR_BY}
          </div>
          
          <div className="text-xs">
            <a href="https://bluedot.it.com">Designed and Donated by BlueDot IT</a>
            <br />
            &copy; {new Date().getFullYear()} {CAMPAIGN_NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
