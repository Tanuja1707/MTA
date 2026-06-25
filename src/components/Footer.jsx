import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#0B0A0F] text-slate-400 border-t border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Logo & Bio Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <span className="text-xl font-extrabold text-white cursor-pointer tracking-tight">
              MarTech<span className="text-[#E25C30]">Adda</span>
            </span>
            <p className="mt-4 text-xs leading-relaxed max-w-sm text-slate-500">
              Decoding the marketing automation landscape. We write deep-dives, strategy guides, and reviews covering AI, SaaS, and startups.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Twitter" className="text-slate-650 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 10.742l1.642 1.642m0 0l-1.642 1.642m1.642-1.642H3m14 12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v17" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="text-slate-650 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Resources</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automation Tips</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Newsletter</h3>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Get the latest digital insights straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-grow px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-650 focus:outline-none focus:ring-1 focus:ring-[#E25C30] focus:border-[#E25C30] text-xs"
              />
              <button
                type="submit"
                className="px-4 py-2.5 font-bold text-white bg-[#E25C30] hover:bg-[#d04e24] active:bg-[#b03f19] rounded-xl text-xs shrink-0 transition-all"
              >
                Go
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs font-semibold text-emerald-400">
                ✓ Subscribed successfully!
              </p>
            )}
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-4">
          <p>© {new Date().getFullYear()} MarTechAdda. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
