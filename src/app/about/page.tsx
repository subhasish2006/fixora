'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cpu, ArrowLeft, Sparkles, ShieldCheck, Heart, 
  Zap, MapPin, Recycle, CheckCircle2, ArrowRight 
} from 'lucide-react';

export default function AboutPage() {
  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  const stats = [
    { value: '98.4%', label: 'Diagnostic Vision Accuracy', icon: <Cpu className="w-5 h-5 text-teal-400" /> },
    { value: '50+', label: 'Verified Local Shops', icon: <MapPin className="w-5 h-5 text-teal-400" /> },
    { value: '< 30s', label: 'Instant Scan Speed', icon: <Zap className="w-5 h-5 text-teal-400" /> },
    { value: '100%', label: 'Transparent Pricing', icon: <ShieldCheck className="w-5 h-5 text-teal-400" /> }
  ];

  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-[#0D9488]" />,
      title: "AI Hardware Vision Engine",
      desc: "Our neural network analyzes surface cracks, corroded ports, and bloated batteries from raw photo uploads to isolate electronic fault categories in seconds."
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#0D9488]" />,
      title: "Hyper-Local Shop Matchmaker",
      desc: "We route diagnostic reports directly to Google Maps-verified local repair shops in Vijayawada, Guntur, and Amaravati, keeping repair revenue in local hands."
    },
    {
      icon: <Recycle className="w-6 h-6 text-[#0D9488]" />,
      title: "E-Waste Reduction First",
      desc: "By promoting component-level fixing over full device replacement, Fixora saves users up to 70% in repair costs while keeping harmful electronics out of landfills."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0D9488]" />,
      title: "Verified Quality Guarantee",
      desc: "Every listed partner shop undergoes manual verification to ensure genuine replacement parts, honest warranties, and transparent customer service."
    }
  ];

  return (
    <div className="min-h-screen circuit-grid bg-[#F8FAFC] text-[#1F2937] pb-20">
      {/* Navigation Header */}
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

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-16">
        {/* Animated Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[#0D9488] text-xs font-semibold shadow-xs">
            <Sparkles className="w-4 h-4 animate-pulse" /> AI Vision Meets Community Technicians
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] tracking-tight leading-tight">
            Bridging AI Precision with <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-[#0D9488] to-[#1E3A5F] bg-clip-text text-transparent">
              Local Repair Expertise
            </span>
          </h1>
          <p className="text-sm md:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Fixora eliminates repair uncertainty. We combine instant computer vision defect analysis with direct access to top-rated regional technicians.
          </p>
        </motion.div>

        {/* Animated Metrics Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#1E3A5F] text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden"
        >
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 text-center md:text-left z-10">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                {stat.icon}
                <span className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</span>
              </div>
              <p className="text-xs text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Core Pillars Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-[#1E3A5F]">The Fixora Ecosystem</h2>
            <p className="text-xs text-[#6B7280]">Four core values powering our diagnostic and repair network.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all space-y-3 group"
              >
                <div className="p-3 rounded-xl bg-teal-50 w-fit group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-[#1E3A5F]">{pillar.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Regional Impact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white via-slate-50 to-teal-50/40 p-8 md:p-10 rounded-3xl border border-teal-100 shadow-sm space-y-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0D9488] uppercase tracking-wider">
                <Heart className="w-4 h-4" /> Empowering Local Shops
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F]">Supporting Local Technicians</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Small electronics shops house expert component-level craftsmanship but often lack digital visibility. Fixora brings local technicians online, directly connecting users in Vijayawada, Guntur, and Amaravati with verified local experts.
              </p>
            </div>
            <div className="space-y-2.5 text-xs font-semibold text-[#1E3A5F] bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs w-full md:w-auto min-w-[220px]">
              <div className="flex items-center gap-2 text-teal-700">
                <CheckCircle2 className="w-4 h-4" /> Zero Diagnostic Fees
              </div>
              <div className="flex items-center gap-2 text-teal-700">
                <CheckCircle2 className="w-4 h-4" /> Direct Call/Map Access
              </div>
              <div className="flex items-center gap-2 text-teal-700">
                <CheckCircle2 className="w-4 h-4" /> Honest Price Estimates
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Call to Action Banner */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="bg-[#1E3A5F] text-white p-8 md:p-10 rounded-3xl text-center space-y-6 shadow-md relative overflow-hidden"
        >
          <div className="space-y-2 relative z-10">
            <h3 className="text-2xl font-bold">Try AI Electronics Diagnosis</h3>
            <p className="text-xs text-gray-300 max-w-md mx-auto">
              Upload photos of your broken phone, laptop, or gadget and receive an instant AI defect assessment in seconds.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Link 
              href="/diagnose" 
              className="px-6 py-3.5 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Start AI Scan <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all border border-white/20"
            >
              Contact Team
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}