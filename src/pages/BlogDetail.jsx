import React, { useState } from 'react';
import { featuredBlogs } from '../data/blogData';
import { BlogCard } from '../components';

export default function BlogDetail({ postId, onNavigate }) {
  // Find current post, default to first if not found
  const post = featuredBlogs.find(p => p.id === parseInt(postId)) || featuredBlogs[0];
  
  const [likes, setLikes] = useState(42);
  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Marcus Thorne",
      role: "SEO Architect",
      date: "2 hours ago",
      text: "Incredibly insightful read. The point about shifting from keyword matching to entity relationships in semantic search is spot on.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 2,
      author: "Elena Rodriguez",
      role: "Tech Analyst",
      date: "3 hours ago",
      text: "We've already started mapping our 2026 data strategy based on zero-party schemas mentioned here. Excellent timing!",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
    }
  ]);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          author: "Anonymous Reader",
          role: "Verified Professional",
          date: "Just now",
          text: commentText,
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ]);
      setCommentText('');
    }
  };

  // Grab related posts (excluding current post)
  const related = featuredBlogs.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-[#FDFDFD] dark:bg-slate-950 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Breadcrumbs */}
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-4">
          <span className="cursor-pointer hover:text-[#3B30E5] dark:hover:text-indigo-400" onClick={() => onNavigate('#')}>Home</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-[#3B30E5] dark:hover:text-indigo-400" onClick={() => onNavigate('#blog')}>Blog</span>
          <span className="mx-2">/</span>
          <span className="text-slate-650 dark:text-slate-350">{post.category}</span>
        </div>

        {/* 2. Top Meta Header */}
        <div className="mb-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border bg-indigo-50 dark:bg-indigo-950/40 text-[#3B30E5] dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/30">
            {post.category}
          </span>
          <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 mt-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border border-slate-200"
            />
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-none">
                {post.author.name}
              </h4>
              <p className="text-xs text-slate-400 mt-1.5">
                {post.author.role} · Published on {post.date} · {post.readTime}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Cover Image */}
        <div className="rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-850 shadow-xl mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto max-h-[450px] object-cover"
          />
        </div>

        {/* 4. Two-Column Content Layout (Floating Share + Text) */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Share Sidebar (left) */}
          <div className="md:col-span-1 flex md:flex-col items-center justify-center gap-4 md:sticky md:top-24 z-10 py-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-150 dark:border-slate-850 rounded-2xl">
            <button
              onClick={handleLike}
              className={`p-2 rounded-full transition-all ${
                liked ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/40' : 'text-slate-400 hover:text-slate-900'
              }`}
              aria-label="Like post"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <span className="text-xs font-bold text-slate-500">{likes}</span>
            <span className="w-px md:w-8 h-8 md:h-px bg-slate-200 dark:bg-slate-850" />
            <button className="p-2 text-slate-400 hover:text-slate-900" aria-label="Comments">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <span className="text-xs font-bold text-slate-500">{comments.length}</span>
          </div>

          {/* Core Text Body (right) */}
          <div className="md:col-span-11 prose prose-slate dark:prose-invert max-w-none text-slate-650 dark:text-slate-350 text-sm leading-relaxed space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              1. The Shift to Strategic Platforms
            </h2>
            <p>
              In the modern business landscape, the convergence of generative artificial intelligence and marketing automation represents a fundamental paradigm shift. Rather than executing manual email batches or relying on basic triggers, startups are building integrated decision engines. These engines dynamically score, personalize, and route customer interactions in real time.
            </p>
            
            {/* Pull-quote */}
            <blockquote className="pl-6 border-l-4 border-[#3B30E5] my-8 italic text-slate-850 dark:text-slate-100 font-medium">
              "By 2027, the most successful CMOs will not be those who write the best copy, but those who build the most cohesive and automated data pipelines."
            </blockquote>
            
            <p>
              Data unity lies at the heart of this transformation. When CRM, product events, and marketing operations share a unified data layer, predictive analytics engines can profile and segment users without manual reporting. This enables true hyper-personalization at scale.
            </p>

            {/* Takeaways Card */}
            <div className="p-8 rounded-3xl bg-[#FAF9F6] dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-850 my-10">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-4">
                🔑 Key Takeaways for CMOs & Founders
              </h3>
              <ul className="space-y-3 list-disc pl-5 text-xs text-slate-550 dark:text-slate-400">
                <li>Prioritize unified data schemas across your tool stack to prevent information silos.</li>
                <li>Incorporate generative workflows to dynamically customize copywriting templates based on user interest data.</li>
                <li>Audit conversion tunnels frequently using scientific A/B testing instead of ad-hoc improvements.</li>
              </ul>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              2. Privacy & First-Party Data Operations
            </h2>
            <p>
              With third-party tracking deprecated across major browsers, zero-party data operations are no longer optional. Respecting user trust while asking for explicit preferences ensures clean opt-ins, high-quality subscriber lists, and highly compliant personalization logic.
            </p>
          </div>

        </div>

        {/* 5. Author Bio Box */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-850 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 rounded-full object-cover border border-slate-150"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{post.author.name}</h3>
            <p className="text-xs text-[#3B30E5] dark:text-indigo-400 mt-1 font-semibold">{post.author.role}</p>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-450">
              A marketing automation veteran with over a decade of hands-on experience designing stacks and customer journey maps for enterprise SaaS platforms and early-stage startups.
            </p>
          </div>
        </div>

        {/* 6. Discussion / Comments */}
        <section className="mt-16 border-t border-slate-200/60 dark:border-slate-850 pt-12">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
            Discussion ({comments.length})
          </h3>

          {/* Comment Form */}
          <form onSubmit={handlePostComment} className="mb-10">
            <textarea
              rows={4}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Join the discussion... Share your thoughts or ask a question."
              required
              className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#3B30E5] dark:text-white placeholder-slate-400"
            />
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 font-bold text-white bg-[#E25C30] hover:bg-[#d04e24] rounded-xl text-xs transition-all active:scale-95 duration-150 shadow-md"
              >
                Post Comment
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((c) => (
              <div key={c.id} className="flex gap-4 p-6 rounded-2xl bg-[#FAF9F6] dark:bg-slate-900/10 border border-slate-200/40 dark:border-slate-850/65">
                <img
                  src={c.avatar}
                  alt={c.author}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{c.author}</h4>
                    <span className="text-[10px] text-slate-400">{c.role}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-600">· {c.date}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-450">
                    {c.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Related Articles Section */}
        <section className="mt-24 border-t border-slate-200/60 dark:border-slate-850 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Continue Reading
            </h3>
            <span
              className="text-xs font-bold text-[#3B30E5] cursor-pointer hover:underline"
              onClick={() => onNavigate('#blog')}
            >
              View all blogs
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((post) => (
              <div key={post.id} onClick={() => onNavigate(`#blog-detail/${post.id}`)} className="cursor-pointer">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
