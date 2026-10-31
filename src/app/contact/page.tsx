'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Cpu, ArrowLeft, Mail, Phone, MapPin, Send, 
  CheckCircle2, Sparkles, MessageSquare, Clock, 
  Building2, HelpCircle, ShieldCheck, Wrench
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('user');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4 } 
    }
  };

  const inquiryCategories = [
    { id: 'user', label: 'Diagnostic Help', icon: <HelpCircle className="w-4 h-4" />, subtitle: 'Questions on scans or estimates' },
    { id: 'shop', label: 'Partner Shop Signup', icon: <Building2 className="w-4 h-4" />, subtitle: 'List your repair shop' },
    { id: 'tech', label: 'Technical Bug', icon: <Wrench className="w-4 h-4" />, subtitle: 'Report platform issues' }
  ];

  return (
    <div className="min-h-screen circuit-grid bg-[#F8FAFC] text-[#1F2937] pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#0D9488] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-teal-400 shadow-sm">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-[#1E3A5F] tracking-tight">Fixora</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-12">
        {/* Animated Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[#0D9488] text-xs font-semibold shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]"></span>
            </span>
            Live Support • Response Time &lt; 15 Mins
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] tracking-tight">
            Let's Start a <span className="bg-gradient-to-r from-[#0D9488] to-[#1E3A5F] bg-clip-text text-transparent">Conversation</span>
          </h1>
          <p className="text-sm md:text-base text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            Whether you need assistance with AI scan reports or want to join as a verified repair partner, our team is ready.
          </p>
        </motion.div>

        {/* Contact Method Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:border-teal-300 transition-all space-y-3 relative overflow-hidden group"
          >
            <div className="p-3 rounded-xl bg-teal-50 text-[#0D9488] w-fit group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E3A5F]">Email Support</h3>
              <p className="text-xs text-[#6B7280]">Direct helpdesk inbox</p>
            </div>
            <p className="text-xs font-semibold text-[#0D9488]">support@fixora.in</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:border-teal-300 transition-all space-y-3 relative overflow-hidden group"
          >
            <div className="p-3 rounded-xl bg-teal-50 text-[#1E3A5F] w-fit group-hover:bg-[#1E3A5F] group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E3A5F]">Direct Helpline</h3>
              <p className="text-xs text-[#6B7280]">Mon-Sat • 9 AM to 7 PM</p>
            </div>
            <p className="text-xs font-semibold text-[#1E3A5F]">+91 090321 31410</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:border-teal-300 transition-all space-y-3 relative overflow-hidden group"
          >
            <div className="p-3 rounded-xl bg-teal-50 text-emerald-600 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E3A5F]">Regional Headquarters</h3>
              <p className="text-xs text-[#6B7280]">Technician Operations Hub</p>
            </div>
            <p className="text-xs font-semibold text-emerald-700">Vijayawada - Amaravati Region</p>
          </motion.div>
        </motion.div>

        {/* Interactive Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Selector Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-[#1E3A5F] text-white p-6 md:p-8 rounded-3xl shadow-md space-y-6 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-2 relative z-10">
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">Select Inquiry Topic</span>
                <h2 className="text-2xl font-bold">How can we assist you today?</h2>
                <p className="text-xs text-gray-300">Choose a category so we can route your message to the right engineering or operations team.</p>
              </div>

              <div className="space-y-3 relative z-10">
                {inquiryCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setInquiryType(cat.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between text-xs font-semibold ${
                      inquiryType === cat.id
                        ? 'bg-[#0D9488] text-white shadow-md border border-teal-400/40'
                        : 'bg-white/10 hover:bg-white/20 text-gray-200 border border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${inquiryType === cat.id ? 'bg-white/20' : 'bg-white/10'}`}>
                        {cat.icon}
                      </div>
                      <div>
                        <div className="font-bold text-sm">{cat.label}</div>
                        <div className="text-[11px] opacity-80 font-normal">{cat.subtitle}</div>
                      </div>
                    </div>
                    {inquiryType === cat.id && (
                      <motion.div layoutId="activeTab" className="w-2 h-2 rounded-full bg-teal-300" />
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-gray-300 relative z-10">
                <ShieldCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>Your contact details are encrypted and never shared with unverified 3rd party shops.</span>
              </div>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-200/80 shadow-sm"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4 py-12"
              >
                <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0D9488] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E3A5F]">Message Dispatch Received!</h3>
                <p className="text-xs text-[#6B7280] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A Fixora technical specialist will review your inquiry and get back to you via email within 15 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-teal-50 hover:bg-teal-100 text-[#0D9488] text-xs font-bold rounded-xl transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#1E3A5F] flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#0D9488]" /> Send Direct Message
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    Inquiring about: <span className="font-semibold text-[#0D9488]">{inquiryCategories.find(c => c.id === inquiryType)?.label}</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#1F2937] block mb-1.5">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g., Subhasish Dash" 
                      className="w-full p-3.5 rounded-xl border border-gray-200 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#0D9488] transition-all" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#1F2937] block mb-1.5">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="name@example.com" 
                      className="w-full p-3.5 rounded-xl border border-gray-200 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#0D9488] transition-all" 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1F2937] block mb-1.5">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    placeholder="+91 90321 31410" 
                    className="w-full p-3.5 rounded-xl border border-gray-200 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#0D9488] transition-all" 
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1F2937] block mb-1.5">Message / Details</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="Provide context regarding your device, error code, or shop location..." 
                    className="w-full p-3.5 rounded-xl border border-gray-200 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#0D9488] transition-all resize-none" 
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-4 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" /> Transmit Message
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </main>
    </div>
  );
}