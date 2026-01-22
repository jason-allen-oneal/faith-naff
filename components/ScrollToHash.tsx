import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Centralized hash scrolling so navigation works across all routes.
const ScrollToHash = () => {
  const location = useLocation();
  const lastPath = useRef(location.pathname);

  useEffect(() => {
    // If there's a hash, try to scroll to it (retry once to catch late renders).
    if (location.hash) {
      const scrollToTarget = () => {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      const foundImmediately = scrollToTarget();
      if (!foundImmediately) {
        const timeout = setTimeout(scrollToTarget, 50);
        return () => clearTimeout(timeout);
      }
      return;
    }

    // Otherwise, on path changes, reset to top.
    if (location.pathname !== lastPath.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      lastPath.current = location.pathname;
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
