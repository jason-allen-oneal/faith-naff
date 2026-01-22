
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import App from './App';
import LegalPage from './components/LegalPage';
import ScrollToHash from './components/ScrollToHash';
import DonationPage from './components/Donate';

const RootLayout = () => (
  <>
    <ScrollToHash />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/legal', element: <LegalPage /> },
      { path: '/privacy', element: <LegalPage section="privacy" /> },
      { path: '/terms', element: <LegalPage section="terms" /> },
      { path: '/donate', element: <DonationPage />}
    ],
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>);
