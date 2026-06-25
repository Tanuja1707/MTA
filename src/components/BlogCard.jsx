import React from 'react';

export default function BlogCard({ post }) {
  const { title, category, snippet, date, readTime, image, author, badgeColor } = post;

  return (
    <article className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-slate-950/20 hover:-translate-y-1 transition-all duration-300 group">
      
      {/* Article Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Category Tag on top of image */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border ${badgeColor}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-7">
        
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-3">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{readTime}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#3B30E5] dark:group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2 cursor-pointer">
          {title}
        </h3>

        {/* Snippet */}
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
          {snippet}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-slate-100 dark:border-slate-800/80" />

        {/* Author Details */}
        <div className="flex items-center gap-3 mt-auto">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover border border-slate-100 dark:border-slate-800"
            loading="lazy"
          />
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-none">
              {author.name}
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              {author.role}
            </p>
          </div>
        </div>

      </div>
    </article>
  );
}
