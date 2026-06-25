import React from 'react';
import { featuredBlogs } from '../data/blogData';
import BlogCard from './BlogCard';

export default function FeaturedEditorial() {
  return (
    <section id="blogs" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Editorial
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
              Our highest-rated research and insights this month.
            </p>
          </div>
          <a
            href="#archive"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#3B30E5] dark:text-indigo-400 hover:text-indigo-750 dark:hover:text-indigo-300 transition-colors shrink-0"
          >
            <span>View Archive</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Blog Post Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
