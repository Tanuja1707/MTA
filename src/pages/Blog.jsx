import React, { useState } from 'react';
import { featuredBlogs } from '../data/blogData';
import { BlogCard } from '../components';

const categories = ["All", "AI & ML Ops", "SEO Strategy", "Automation", "Performance", "Growth", "Privacy"];

const trendingList = [
  { id: "01", category: "AI & INNOVATION", title: "How ChatGPT-5 will revolutionize content marketing workflows." },
  { id: "02", category: "DATA PRIVACY", title: "The death of third-party cookies: What you must do today." },
  { id: "03", category: "E-COMMERCE", title: "Social commerce trends to watch in the next 12 months." },
  { id: "04", category: "SEO", title: "Voice search optimization: Is it still relevant for B2B?" },
  { id: "05", category: "ANALYTICS", title: "Predictive analytics: Turning big data into big revenue." }
];

export default function Blog({ onNavigate }) {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter logic
  const filtered = featuredBlogs.filter(post => {
    const matchesCat = selectedCat === "All" || post.category === selectedCat;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = featuredBlogs[0]; // First post as hero

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="bg-[#FDFDFD] dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            MarTech Insights & Industry Trends
          </h1>
          
          {/* Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for articles, trends, or tools..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#3B30E5] focus:border-[#3B30E5] text-sm transition-all"
            />
            <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          {/* Trending keywords */}
          <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
            <span className="font-bold tracking-wider uppercase mr-2 text-slate-500 dark:text-slate-400 text-[10px]">Trending:</span> 
            AI Agents, SEO 2025, Hyper-Personalization
          </p>
        </div>

        {/* 2. Large Featured Post (If no search query active) */}
        {!searchQuery && selectedCat === "All" && (
          <div className="mb-16 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-850 bg-slate-900 text-white relative aspect-[21/9] sm:min-h-[400px] flex items-end group shadow-xl">
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-900/10 z-10" />
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
            
            {/* Metadata Info */}
            <div className="relative z-25 p-8 sm:p-12 max-w-3xl">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border bg-orange-50/10 text-orange-400 border-orange-500/25">
                FEATURED · {featuredPost.category}
              </span>
              <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {featuredPost.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-350 mt-4 font-medium">
                <span className="font-bold text-white">{featuredPost.author.name}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>{featuredPost.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>{featuredPost.readTime}</span>
              </div>
              <div className="mt-6">
                <a
                  href={`#blog-detail/${featuredPost.id}`}
                  onClick={() => onNavigate(`#blog-detail/${featuredPost.id}`)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-all"
                >
                  Read Full Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 3. Filter Category Badges Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 border-b border-slate-200/60 dark:border-slate-900 pb-6 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                  selectedCat === cat
                    ? "bg-[#3B30E5] text-white border-[#3B30E5]"
                    : "bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-655 dark:text-slate-400 border-slate-200 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Sorting */}
          <div className="text-xs font-bold text-slate-550 dark:text-slate-400 flex items-center gap-2">
            <span>Sort by:</span>
            <select className="bg-transparent border-0 outline-none text-indigo-600 dark:text-indigo-400 cursor-pointer">
              <option>Newest First</option>
              <option>Most Read</option>
            </select>
          </div>
        </div>

        {/* 4. Main Two-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Grid of matching Blog posts */}
          <div className="lg:col-span-8 flex flex-col">
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-8">
                {filtered.map((post) => (
                  <div key={post.id} onClick={() => onNavigate(`#blog-detail/${post.id}`)} className="cursor-pointer">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/20 border border-slate-150 dark:border-slate-850 rounded-3xl">
                <p className="text-slate-500 dark:text-slate-400 text-sm">No articles match your criteria.</p>
              </div>
            )}

            {/* Pagination Controls */}
            {filtered.length > 0 && (
              <div className="mt-16 flex justify-center items-center gap-1">
                <button aria-label="Previous page" className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900">
                  ‹
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#3B30E5] text-white text-xs font-bold">1</button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-slate-650 hover:bg-slate-50 dark:hover:bg-slate-900">2</button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-slate-650 hover:bg-slate-50 dark:hover:bg-slate-900">3</button>
                <span className="px-2 text-slate-400 text-xs">...</span>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-slate-650 hover:bg-slate-50 dark:hover:bg-slate-900">10</button>
                <button aria-label="Next page" className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900">
                  ›
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* Widget: Trending Now */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-850">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-850 pb-4 mb-6">
                🔥 Trending Now
              </h3>
              <div className="space-y-6">
                {trendingList.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start group cursor-pointer">
                    <span className="text-lg font-extrabold text-slate-300 dark:text-slate-700 leading-none">{item.id}</span>
                    <div>
                      <span className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-750 dark:text-slate-200 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget: Mini Newsletter */}
            <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-900 relative overflow-hidden">
              <div className="absolute top-[-30%] right-[-30%] w-36 h-36 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />
              <h3 className="text-base font-extrabold text-white">Expert Analysis in Your Inbox</h3>
              <p className="mt-2 text-xs text-slate-450 leading-relaxed">
                Join 45,000+ marketing leaders receiving our weekly insights.
              </p>
              <form onSubmit={handleSubscribe} className="mt-6 space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-650 focus:outline-none focus:ring-1 focus:ring-indigo-550 text-xs"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#3B30E5] hover:bg-indigo-700 font-bold text-white text-xs transition-all active:scale-95 duration-150"
                >
                  Sign Up Free
                </button>
              </form>
              {subscribed && (
                <p className="mt-3 text-xs font-semibold text-emerald-400">✓ Done! Check your inbox.</p>
              )}
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}
