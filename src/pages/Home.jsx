import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Hero,
  KeyDomains,
  FeaturedEditorial,
  ValueProp,
  Testimonials,
  LatestFromLab
} from '../components';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#FDFDFD] dark:bg-slate-950 transition-colors">
      
      {/* Hero Section */}
      <Hero />

      {/* Key Domains Section */}
      <KeyDomains />

      {/* Featured Editorial Section */}
      <FeaturedEditorial />

      {/* Value Prop Section */}
      <ValueProp />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Reusable Newsletter Section */}
      <section id="newsletter" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#5E51FF] dark:bg-indigo-950/80 px-6 py-16 sm:px-12 sm:py-20 shadow-2xl border border-indigo-500/20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/25 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-indigo-100 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Get our weekly round-up of the most important MarTech news, tools, and tutorials delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              className="flex-grow px-5 py-3.5 rounded-2xl bg-white/10 dark:bg-slate-900/50 backdrop-blur-md border border-white/20 dark:border-slate-800 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white transition-all text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3.5 font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-2xl shadow-lg transition-all text-sm shrink-0 active:scale-95 duration-150"
            >
              Join 50k+ Readers
            </button>
          </form>
          
          {subscribed && (
            <div className="mt-4 text-sm font-semibold text-emerald-400 animate-fade-in">
              ✓ Awesome! Check your inbox to confirm your subscription.
            </div>
          )}
          
          <p className="mt-4 text-[10px] text-indigo-200">
            Join over 50,000 marketing professionals. No spam, just value.
          </p>
        </div>
      </section>

      {/* Latest From The Lab Section */}
      <LatestFromLab />

    </div>
  );
}
