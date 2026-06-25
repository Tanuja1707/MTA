import React from 'react';
import laptopHero from '../assets/laptop_hero_mockup.png';

const stats = [
  { value: "1000+", label: "Articles Published" },
  { value: "500k+", label: "Monthly Readers" },
  { value: "50+", label: "Industry Experts" },
  { value: "200+", label: "Marketing Resources" }
];

const values = [
  {
    title: "Innovation",
    desc: "Pushing the boundaries of what is possible in digital engagement.",
    icon: "💡"
  },
  {
    title: "Learning",
    desc: "Commitment to continuous education in a fast-paced market.",
    icon: "📖"
  },
  {
    title: "Community",
    desc: "Fostering connections between the brightest minds in tech.",
    icon: "🤝"
  },
  {
    title: "Transparency",
    desc: "Clear, honest insights without marketing jargon or fluff.",
    icon: "👁️"
  },
  {
    title: "Excellence",
    desc: "Uncompromising quality in every piece of content we produce.",
    icon: "🏆"
  }
];

const timeline = [
  { date: "Oct 2018", title: "The Launch", desc: "MarTechAdda starts as a niche blog for CMO enthusiasts." },
  { date: "Jan 2020", title: "100k Monthly", desc: "We hit our first major traffic milestone before the global shift." },
  { date: "Mar 2022", title: "AI Hub Launch", desc: "Dedicated section for Generative AI in Marketing launched." },
  { date: "Present Day", title: "Leading the Way", desc: "Global authority on MarTech stack audits with over 500k+ readers." }
];

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    name: "Marcus Thorne",
    role: "CTO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    name: "Alana Rodriguez",
    role: "Head of Content",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    name: "David Park",
    role: "Director of Growth",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80"
  }
];

export default function About() {
  return (
    <div className="bg-[#FDFDFD] dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. Page Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 text-[10px] font-bold tracking-wider text-indigo-600 dark:text-indigo-300 uppercase mb-6">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              About MarTech<span className="text-[#E25C30]">Adda</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-650 dark:text-slate-400 leading-relaxed max-w-xl">
              Bridging the gap between marketing ingenuity and technological power. We provide the insights, tools, and community necessary to thrive in this modern marketing ecosystem.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800/80 shadow-2xl p-4 bg-white dark:bg-slate-900">
              <img src={laptopHero} alt="MarTech Platform" className="w-full h-auto rounded-[1.25rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-[#0B0A0F] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-xs text-slate-500 font-semibold tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Platform Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              The Vision Behind the Platform
            </h2>
            <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              MarTechAdda was founded in 2018 with a simple realization: the tools of marketing were evolving faster than the strategies to use them. As AI, automation, and data analytics redefined the industry, professionals were left searching for a cohesive guide to this new frontier.
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              What started as a small blog dedicated to CRM reviews has blossomed into the world's premier destination for marketing technology insights. We don't just report on trends; we analyze their impact on the bottom line, the customer experience, and the future of work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-350">
                🚀 Innovative Approach
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-350">
                🌐 Global Community
              </span>
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-8 rounded-3xl bg-teal-600 text-white flex flex-col justify-end min-h-[160px] shadow-lg">
              <h3 className="text-xl font-bold">24/7</h3>
              <p className="text-xs text-teal-100 mt-1">Currently Support & Updates</p>
            </div>
            <div className="p-8 rounded-3xl bg-indigo-600 text-white flex flex-col justify-end min-h-[160px] shadow-lg">
              <h3 className="text-xl font-bold">6+ Years</h3>
              <p className="text-xs text-indigo-100 mt-1">Years of Trust & Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-[#FAF9F6] dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Our Core Values</h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
              The principles that guide every article, test, and community interaction on our platform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 shadow-sm">
                <span className="text-3xl" role="img" aria-label={v.title}>{v.icon}</span>
                <h3 className="mt-4 text-sm font-bold text-slate-800 dark:text-slate-200">{v.title}</h3>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Journey / Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">The Journey So Far</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">Below are our most significant milestones.</p>
        </div>
        <div className="relative border-l border-indigo-200 dark:border-indigo-900 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 md:gap-8 before:absolute before:top-1/2 before:left-0 before:right-0 before:h-0.5 before:bg-indigo-150 dark:before:bg-indigo-900 before:hidden md:before:block">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0 md:pt-8 mb-12 md:mb-0 group">
              {/* Timeline dot */}
              <div className="absolute top-1.5 left-[-6px] md:top-[-6px] md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform duration-300" />
              <div className="md:text-center">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{item.date}</span>
                <h3 className="mt-2 text-sm font-bold text-slate-800 dark:text-slate-200">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed md:max-w-[200px] md:mx-auto">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Team Section */}
      <section className="py-20 bg-[#FAF9F6] dark:bg-slate-900/30 border-t border-slate-200/50 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Meet the Visionaries</h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">The expert minds driving the MarTech revolution forward.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative inline-block overflow-hidden rounded-3xl aspect-square w-full max-w-[200px] border border-slate-250 dark:border-slate-800 shadow-md">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-800 dark:text-slate-200">{member.name}</h3>
                <p className="text-xs text-slate-450 dark:text-slate-550 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Action Card CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 px-6 py-16 sm:px-12 sm:py-20 shadow-2xl text-center border border-slate-850 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Ready to transform your marketing stack?
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm sm:text-base">
            Join 500,000+ professionals getting the latest MarTech insights delivered weekly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#blog" className="px-6 py-3 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all active:scale-95 duration-150">
              Start Reading for Free
            </a>
            <a href="#contact" className="px-6 py-3 text-xs font-bold text-white border border-slate-800 hover:border-slate-700 rounded-xl transition-all active:scale-95 duration-150">
              Contact Our Experts
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
