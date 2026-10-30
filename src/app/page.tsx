'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import SpotlightCard from './SpotlightCard';
import { 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  Upload, 
  Search, 
  CheckCircle2 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen circuit-grid relative overflow-hidden bg-[#F8FAFC]">
      {/* Interactive Antigravity Particle Scatter Canvas */}
      <ParticleBackground />

      {/* Silver to Light Green Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] silver-green-glow blur-3xl pointer-events-none z-0" />

      {/* Navigation Bar */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center text-teal-400 shadow-md">
            <Cpu className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#1E3A5F]">
            Fix<span className="text-[#0D9488]">ora</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#how-it-works" className="hover:text-[#1E3A5F] transition-colors">How It Works</a>
          <a href="#benefits" className="hover:text-[#1E3A5F] transition-colors">Why Fixora</a>
          <a href="#impact" className="hover:text-[#1E3A5F] transition-colors">Impact</a>
          <Link href="/dashboard" className="hover:text-[#0D9488] font-semibold transition-colors">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-semibold text-[#1E3A5F] hover:text-[#0D9488] transition-colors px-3 py-2"
          >
            Sign In
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/diagnose"
              className="text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#152a45] px-5 py-2.5 rounded-xl shadow-lg transition-all duration-200 block"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Hero Content Section */}
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-16 text-center relative z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-[#0D9488] text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#10B981]" />
          <span>AI-Powered Device Diagnostics</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight mb-6"
        >
          Don&apos;t Replace It. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A5F] via-[#0D9488] to-[#10B981]">
            Diagnose & Repair
          </span> in Minutes.
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Fixora uses AI to diagnose electronic device issues instantly from photos or symptoms, providing upfront cost estimates and matching you with verified local technicians.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
        >
          <motion.div 
            whileHover={{ scale: 1.06 }} 
            whileTap={{ scale: 0.96 }}
            className="animate-pulse-button w-full sm:w-auto rounded-xl"
          >
            <Link
              href="/diagnose"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0D9488] to-[#10B981] hover:from-[#0b7a70] hover:to-[#0d9e6e] text-white font-semibold text-base rounded-xl shadow-xl transition-all duration-200"
            >
              <span>Start Free Diagnosis</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 glass-card hover:bg-white text-[#1E3A5F] font-semibold text-base rounded-xl border border-slate-200 transition-all duration-200 shadow-sm"
            >
              <span>See How It Works</span>
            </a>
          </motion.div>
        </motion.div>

        {/* How It Works Section */}
        <section id="how-it-works" className="pt-12 pb-20 text-left border-t border-gray-200/60">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-3">How Fixora Works</h2>
            <p className="text-sm text-[#6B7280]">Three simple steps to bring your device back to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard 
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 rounded-2xl relative shadow-sm cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center font-bold text-lg mb-4">
                <Upload className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] block mb-1">Step 01</span>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2">Upload or Describe</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Take a photo of your damaged smartphone or laptop, or describe the malfunction in simple words.
              </p>
            </SpotlightCard>

            <SpotlightCard 
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl relative shadow-sm cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#1E3A5F] flex items-center justify-center font-bold text-lg mb-4">
                <Search className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A5F] block mb-1">Step 02</span>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2">Instant AI Diagnosis</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Our AI scans hardware fault patterns to generate a repairability score and transparent cost estimation.
              </p>
            </SpotlightCard>

            <SpotlightCard 
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl relative shadow-sm cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">Step 03</span>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2">Matched Technician</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Connect directly with verified local repair professionals near you to execute the fix.
              </p>
            </SpotlightCard>
          </div>
        </section>

        {/* Environmental & Financial Impact Section (With Floating Loop & Pause on Hover) */}
        <section id="impact" className="py-12 border-t border-gray-200/60">
          <SpotlightCard className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 shadow-sm border border-emerald-500/20 pause-on-hover">
            <div className="animate-float-slow">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4">
                Measurable Environmental Impact
              </h2>
              <p className="text-sm text-[#6B7280] max-w-xl mx-auto mb-10">
                Fixing devices reduces premature e-waste and saves thousands compared to buying new.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 animate-float-slow">
                <div className="text-3xl md:text-4xl font-extrabold text-[#1E3A5F] mb-1">12,400+</div>
                <div className="text-xs font-medium text-[#6B7280]">Devices Diagnosed</div>
              </div>

              <div className="p-4 animate-float-reverse">
                <div className="text-3xl md:text-4xl font-extrabold text-[#0D9488] mb-1">4.8 Tons</div>
                <div className="text-xs font-medium text-[#6B7280]">E-Waste Avoided</div>
              </div>

              <div className="p-4 animate-float-slow">
                <div className="text-3xl md:text-4xl font-extrabold text-[#1E3A5F] mb-1">88%</div>
                <div className="text-xs font-medium text-[#6B7280]">Avg. Repair Score</div>
              </div>

              <div className="p-4 animate-float-reverse">
                <div className="text-3xl md:text-4xl font-extrabold text-[#10B981] mb-1">₹1,800</div>
                <div className="text-xs font-medium text-[#6B7280]">Avg. User Savings</div>
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* Final CTA Banner */}
        <section className="mt-16 text-center bg-[#1E3A5F] text-white rounded-3xl p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to fix your device?</h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">
              Get an instant AI diagnosis and cost estimate in less than 2 minutes.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                href="/diagnose"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D9488] hover:bg-[#10B981] text-white font-semibold text-base rounded-xl transition-all duration-200 shadow-lg"
              >
                <span>Diagnose Device Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-xs text-[#6B7280] border-t border-gray-200/60">
        © Fixora. AI-Powered Electronics Diagnosis + Verified Local Repair Platform.
      </footer>
    </div>
  );
}