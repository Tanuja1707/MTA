import React from 'react';
import laptopHero from '../assets/laptop_hero_mockup.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FDFDFD] dark:bg-slate-950 py-16 lg:py-24 transition-colors duration-300">
      {/* Background soft glowing blur elements */}
      <div className="absolute top-[-10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-violet-600/5 dark:bg-violet-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-10%] w-[550px] h-[550px] rounded-full bg-indigo-600/5 dark:bg-indigo-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFEBFF] dark:bg-indigo-950/50 border border-indigo-100/80 dark:border-indigo-900/30 text-xs font-semibold tracking-wider text-[#3B30E5] dark:text-indigo-300 uppercase mb-6">
              <span className="text-violet-600 dark:text-violet-400">✨</span>
              <span>THE FUTURE OF MARKETING IS HERE</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.12] sm:leading-[1.1] tracking-tight">
              Insights at the Intersection of{' '}
              <span className="text-[#3B30E5] dark:text-[#5F54FF] inline-block hover:scale-[1.02] transition-transform duration-200 cursor-default">
                Marketing
              </span>
              , Technology & AI
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-xl">
              Master the modern marketing landscape with expert analysis, actionable automation strategies, and deep dives into the AI tools shaping tomorrow's business growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="#blogs"
                className="w-full sm:w-auto px-8 py-3.5 text-center text-sm font-bold text-white bg-[#0B0A0F] hover:bg-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-xl transition-all shadow-md active:scale-95 duration-150"
              >
                Explore Blogs
              </a>
              <a
                href="#newsletter"
                className="w-full sm:w-auto px-8 py-3.5 text-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl shadow-sm transition-all active:scale-95 duration-150"
              >
                Join Newsletter
              </a>
            </div>
          </div>

          {/* Right Image/Graphic Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative gradient background frame mimicking design shadows */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-15 transition duration-1000 group-hover:duration-200" />
              
              {/* Container of the laptop mockup */}
              <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-[2rem] p-4 sm:p-6 shadow-2xl dark:shadow-slate-950/45 transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src={laptopHero}
                  alt="Marketing metrics displayed on modern laptop dashboard"
                  className="w-full h-auto object-cover rounded-[1.25rem]"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
