import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar({ currentHash = '', onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href) => {
    if (href === '#' && (currentHash === '' || currentHash === '#')) return true;
    return currentHash.startsWith(href) && href !== '#';
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/50 dark:border-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <span 
              onClick={(e) => handleLinkClick(e, '#')}
              className="text-xl font-extrabold text-slate-900 dark:text-white cursor-pointer tracking-tight"
            >
              MarTech<span className="text-[#E25C30]">Adda</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-semibold transition-all py-1.5 border-b-2 ${
                  isActive(link.href)
                    ? "text-[#3B30E5] border-[#3B30E5] dark:text-indigo-400 dark:border-indigo-400"
                    : "text-slate-600 dark:text-slate-300 border-transparent hover:text-[#3B30E5] dark:hover:text-indigo-400"
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Search Icon */}
            <button 
              onClick={(e) => handleLinkClick(e, '#blog')}
              aria-label="Search" 
              className="p-2 text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Subscribe Button */}
            <button 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-5 py-2 text-xs font-bold text-white bg-[#E25C30] hover:bg-[#d04e24] active:bg-[#b03f19] rounded-xl shadow-lg shadow-[#E25C30]/20 hover:shadow-[#E25C30]/30 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={(e) => handleLinkClick(e, '#blog')}
              aria-label="Search" 
              className="p-2 text-slate-500 dark:text-slate-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-900 bg-white/95 dark:bg-slate-950/95 px-4 pt-2 pb-4 space-y-2">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${
                isActive(link.href)
                  ? "text-[#3B30E5] bg-indigo-50/50 dark:text-indigo-400 dark:bg-indigo-950/30"
                  : "text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 px-3">
            <button 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full px-4 py-2.5 text-sm font-bold text-white bg-[#E25C30] hover:bg-[#d04e24] rounded-xl shadow-lg transition-all text-center"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
