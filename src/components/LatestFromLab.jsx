import React from 'react';
import { labBlogs } from '../data/blogData';

export default function LatestFromLab() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row with Carousel Buttons */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Latest From The Lab
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
              Quick insights, experiments, and references.
            </p>
          </div>
          
          {/* Carousel Arrows */}
          <div className="flex gap-2">
            <button
              aria-label="Previous items"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 active:scale-95 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Next items"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 active:scale-95 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Lab Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {labBlogs.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[4/3] rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800/50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Info Frame */}
              <div className="mt-4">
                <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                  {post.category}
                </span>
                <h3 className="mt-2 text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
