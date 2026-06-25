import React, { useState } from 'react';

const inquiries = [
  {
    title: "Advertising",
    desc: "Reach over 50k marketing tech decision-makers weekly.",
    action: "Media Kit →",
    icon: "📢"
  },
  {
    title: "Partnerships",
    desc: "Integrate your tech or co-author industry-leading whitepapers.",
    action: "Apply Now →",
    icon: "🤝"
  },
  {
    title: "Guest Posts",
    desc: "Share your expertise with a global audience of MarTech pros.",
    action: "Guidelines →",
    icon: "📝"
  },
  {
    title: "Consulting",
    desc: "Bespoke AI and stack optimization for scaling enterprises.",
    action: "Book Session →",
    icon: "📊"
  }
];

const faqs = [
  {
    q: "How long does it take to get a response?",
    a: "Our team typically responds to all inquiries within 24-48 business hours. For urgent partnership requests, please highlight that in the subject line."
  },
  {
    q: "Do you offer sponsored content packages?",
    a: "Yes, we offer several tiers of sponsored content, including newsletter features, dedicated articles, and custom whitepapers. Get in touch to request a media kit."
  },
  {
    q: "Can I book a private consulting session?",
    a: "Absolutely. Our experts provide custom 1-on-1 sessions on MarTech stack audits, AI integrations, data compliance, and pipeline configuration. Use the Consulting link below."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: 'General Inquiry', message: '' });
  const [sent, setSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', company: '', subject: 'General Inquiry', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const toggleFaq = (idx) => {
    if (activeFaq === idx) {
      setActiveFaq(null);
    } else {
      setActiveFaq(idx);
    }
  };

  return (
    <div className="bg-[#FDFDFD] dark:bg-slate-950 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Let's Connect</h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
            Whether you're looking for expert consulting, strategic partnerships, or just want to share a breakthrough, we're here to amplify your MarTech journey.
          </p>
        </div>

        {/* 2. Main Form & Info Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Left Dark Card Info */}
          <div className="lg:col-span-5 rounded-[2.5rem] bg-[#0B0A0F] text-slate-450 p-8 sm:p-12 border border-slate-900 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6 text-xs leading-relaxed">
                <div className="flex gap-4 items-start">
                  <span className="text-lg">📧</span>
                  <div>
                    <h3 className="font-bold text-white">EMAIL US</h3>
                    <p className="mt-1">hello@martechadda.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-lg">📞</span>
                  <div>
                    <h3 className="font-bold text-white">CALL US</h3>
                    <p className="mt-1">+1 (888) MAR-TECH</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-lg">📍</span>
                  <div>
                    <h3 className="font-bold text-white">VISIT US</h3>
                    <p className="mt-1">121 Innovation Way, Tech District, San Francisco, CA 94105</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-lg">🕒</span>
                  <div>
                    <h3 className="font-bold text-white">BUSINESS HOURS</h3>
                    <p className="mt-1">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-12 border-t border-slate-900 pt-6 flex gap-4">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mr-2">Follow:</span>
              <a href="#" className="text-slate-650 hover:text-white text-xs font-semibold">Twitter</a>
              <a href="#" className="text-slate-650 hover:text-white text-xs font-semibold">LinkedIn</a>
              <a href="#" className="text-slate-650 hover:text-white text-xs font-semibold">GitHub</a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 rounded-[2.5rem] bg-white dark:bg-slate-900 p-8 sm:p-12 border border-slate-200/50 dark:border-slate-800/80 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#3B30E5] focus:border-[#3B30E5] dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email-input" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#3B30E5] focus:border-[#3B30E5] dark:text-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company-input" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Company</label>
                  <input
                    id="company-input"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="MarTech Corp"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#3B30E5] focus:border-[#3B30E5] dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject-select" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Subject</label>
                  <select
                    id="subject-select"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-955 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#3B30E5] focus:border-[#3B30E5] text-slate-650 dark:text-slate-350"
                  >
                    <option>General Inquiry</option>
                    <option>Advertising / Sponsorship</option>
                    <option>Consulting Request</option>
                    <option>Partnerships / Affiliates</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message-textarea" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message-textarea"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#3B30E5] focus:border-[#3B30E5] dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#3B30E5] hover:bg-indigo-700 font-bold text-white text-xs rounded-xl shadow-lg hover:shadow-[#3B30E5]/20 active:scale-95 transition-all duration-150"
              >
                Send Message
              </button>

              {sent && (
                <p className="mt-4 text-xs font-semibold text-emerald-500 text-center animate-pulse">
                  ✓ Message sent successfully! We'll reply within 24-48 business hours.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* 3. Specialized Inquiries Grid */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Specialized Inquiries</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 text-xs">Direct routes for specific collaborative needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inquiries.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow text-center">
                <span className="text-3xl" role="img" aria-label={item.title}>{item.icon}</span>
                <h3 className="mt-4 text-sm font-bold text-slate-800 dark:text-slate-200">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-455 leading-relaxed">{item.desc}</p>
                <a href="#" className="mt-4 inline-block text-xs font-bold text-[#3B30E5] hover:underline">{item.action}</a>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FAQs Accordions Section */}
        <section className="max-w-3xl mx-auto border-t border-slate-200/60 dark:border-slate-850 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 text-xs">Quick answers to common queries.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-slate-200/60 dark:border-slate-850 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <svg
                      className={`w-4 h-4 text-slate-450 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-white dark:bg-slate-900 animate-slide-down">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
