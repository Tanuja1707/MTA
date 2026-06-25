import React from 'react';

const props = [
  {
    title: "Expert Insights",
    desc: "Content researched and written by practitioners with 10+ years of hands-on industry experience.",
    icon: (
      <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Actionable Strategies",
    desc: "No fluff. Just clear, systematic frameworks you can deploy in your stack today.",
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Industry Trends",
    desc: "Stay ahead of the curve with deep-dives into generative AI, automation, and cookies.",
    icon: (
      <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function ValueProp() {
  return (
    <section className="bg-[#0B0A0F] text-white py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
              Why the industry follows MarTechAdda.
            </h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
              We bridge the gap between technical complexity and business application.
            </p>
          </div>

          {/* Right Value Props Columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {props.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
