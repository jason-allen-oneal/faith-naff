
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS, CAMPAIGN_NAME } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateScrollState = () => {
      const shouldBeScrolled = location.pathname !== '/' || window.scrollY > 50;
      setIsScrolled(shouldBeScrolled);
    };
    updateScrollState();
    window.addEventListener('scroll', updateScrollState);
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [location.pathname]);

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) {
      setMobileMenuOpen(false);
      return;
    }

    event.preventDefault();
    setMobileMenuOpen(false);

    // On non-home routes, send users back to the homepage with the hash intact.
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: href });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    }
  };

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#2d3e33] py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="/"
              onClick={handleHomeClick}
              className="text-white font-bold text-2xl tracking-tighter serif"
            >
              {CAMPAIGN_NAME.toUpperCase()}
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-100 hover:text-emerald-300 transition-colors text-sm font-medium uppercase tracking-widest"
                onClick={handleNavClick(link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#donate" 
              className="bg-stone-100 text-[#2d3e33] px-6 py-2 rounded-sm font-bold hover:bg-emerald-100 transition-colors uppercase text-sm tracking-widest"
              onClick={handleNavClick('#donate')}
            >
              Donate
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2d3e33] border-t border-emerald-800 absolute top-full left-0 w-full animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-stone-100 text-lg font-medium py-2"
                onClick={handleNavClick(link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#donate" 
              className="block w-full text-center bg-stone-100 text-[#2d3e33] px-6 py-3 rounded-sm font-bold"
              onClick={handleNavClick('#donate')}
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
