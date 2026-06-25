import React from 'react';
import { testimonials } from '../data/blogData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#FAF9F6] dark:bg-slate-900/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Voices from the Community
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
            Read how professionals and startup leaders utilize our weekly insights to scale their automation workflows.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 p-8 rounded-3xl shadow-sm dark:shadow-slate-950/10 hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Mark */}
              <span className="text-4xl font-serif text-indigo-500/20 leading-none pointer-events-none select-none">“</span>
              
              {/* Quote text */}
              <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed italic -mt-2 mb-6 flex-grow">
                {t.quote.replace(/"/g, '')}
              </p>

              {/* Profile Details */}
              <div className="flex items-center gap-3">
                <img
                  src={t.author.avatar}
                  alt={t.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-100 dark:border-slate-800"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-none">
                    {t.author.name}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                    {t.author.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
