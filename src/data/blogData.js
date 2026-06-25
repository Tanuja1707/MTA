import aiMockup from '../assets/ai_mockup.png';
import automationMockup from '../assets/automation_mockup.png';
import metricsMockup from '../assets/metrics_mockup.png';
import securityMockup from '../assets/security_mockup.png';
import laptopHero from '../assets/laptop_hero_mockup.png';

export const featuredBlogs = [
  {
    id: 1,
    title: "Generative AI: The New Frontier of Marketing Operations",
    category: "AI & ML Ops",
    snippet: "How leading CMOs are integrating LLMs into their daily workflows to drive 40%+ operational efficiency.",
    date: "May 12, 2026",
    readTime: "5 min read",
    image: aiMockup,
    author: {
      name: "Jameson Blake",
      role: "Lead AI Strategist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
    },
    badgeColor: "bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-900/30"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Cross-Channel Automation in 2026",
    category: "Automation",
    snippet: "Breaking down the silos: Why unified data is the secret weapon for scaling automated campaigns.",
    date: "May 15, 2026",
    readTime: "12 min read",
    image: automationMockup,
    author: {
      name: "Sarah K.",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    badgeColor: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/30"
  },
  {
    id: 3,
    title: "Beyond Keywords: Semantic Search & The User Intent Era",
    category: "SEO Strategy",
    snippet: "Learn how to optimize for humans first and search engines second in an AI-driven, zero-click landscape.",
    date: "May 20, 2026",
    readTime: "8 min read",
    image: metricsMockup,
    author: {
      name: "Marcus Thorne",
      role: "SEO Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    },
    badgeColor: "bg-teal-50 text-teal-700 border-teal-100 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-900/30"
  },
  {
    id: 4,
    title: "2026 MarTech Landscape: A Roadmap for Enterprises",
    category: "Growth",
    snippet: "Navigating 15,000+ tools: how to build a stack that actually talks to each other.",
    date: "May 28, 2026",
    readTime: "10 min read",
    image: laptopHero,
    author: {
      name: "Elena Rodriguez",
      role: "Tech Analyst",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
    },
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900/30"
  },
  {
    id: 5,
    title: "Privacy-First Marketing: Surviving the Cookie-less Era",
    category: "Privacy",
    snippet: "Zero-party data strategies that respect user trust while driving personalized marketing campaigns.",
    date: "May 31, 2026",
    readTime: "6 min read",
    image: securityMockup,
    author: {
      name: "Aria Sterling",
      role: "Privacy Expert",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80"
    },
    badgeColor: "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-900/30"
  },
  {
    id: 6,
    title: "Measuring ROAS in an Attribution-Limited World",
    category: "Performance",
    snippet: "New models for measuring campaign success when traditional tracking fails.",
    date: "April 29, 2026",
    readTime: "8 min read",
    image: metricsMockup,
    author: {
      name: "Sarah K.",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/30"
  }
];

export const labBlogs = [
  {
    id: 1,
    title: "E-mail hooks for better lead scoring",
    category: "Automation",
    image: automationMockup,
    badgeColor: "bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400"
  },
  {
    id: 2,
    title: "Python for Marketers: A beginner's guide",
    category: "Tech",
    image: laptopHero,
    badgeColor: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/20 dark:text-indigo-400"
  },
  {
    id: 3,
    title: "Understanding Apple's new attribution models",
    category: "Analytics",
    image: metricsMockup,
    badgeColor: "bg-teal-50 text-teal-600 dark:bg-teal-950/20 dark:text-teal-400"
  },
  {
    id: 4,
    title: "How to scale from 1k to 10k MRR",
    category: "Growth",
    image: aiMockup,
    badgeColor: "bg-violet-50 text-violet-600 dark:bg-violet-950/20 dark:text-violet-400"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "\"MarTechAdda has become my daily morning read. The depth of their AI analysis is unparalleled in the marketing space. Essential for any forward-thinking leader.\"",
    author: {
      name: "Elena Rodriguez",
      role: "Director of Growth, FinTech Global",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: 2,
    quote: "\"The SEO frameworks shared here literally helped us reclaim 20% of our organic traffic loss in under two months. Practical, proven, and powerful.\"",
    author: {
      name: "David Chen",
      role: "Founder, ScaleOperations",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: 3,
    quote: "\"I've subscribed to dozens of newsletters, but this is the only one I read start-to-finish. The automation templates alone are worth the time.\"",
    author: {
      name: "Michael Vance",
      role: "CMO, TechFlow SaaS",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    }
  }
];
