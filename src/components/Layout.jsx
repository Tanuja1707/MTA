import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, currentHash, onNavigate }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar currentHash={currentHash} onNavigate={onNavigate} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
