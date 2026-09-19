import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';

export const RootLayout = () => {
  return (
    <div className="app-root-wrapper">
      <ScrollToTop />
      <Navbar />
      <main className="app-main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
